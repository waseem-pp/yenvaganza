const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let isMobile = matchMedia('(max-width: 768px)').matches;

addEventListener('resize', () => {
  isMobile = matchMedia('(max-width: 768px)').matches;
}, { passive: true });

/* ---------- depth parallax with smooth lerp ---------- */
const layers = [...document.querySelectorAll('.layer')];
let targetY = 0;
let currentY = 0;
let rafId = null;

function updateParallax() {
  targetY = window.scrollY;
  // Smooth linear interpolation to eliminate scroll stutter
  currentY += (targetY - currentY) * 0.12;

  if (Math.abs(targetY - currentY) < 0.05) {
    currentY = targetY;
  }

  const speedFactor = isMobile ? 0.25 : 1;

  layers.forEach(l => {
    // Disable heavy figure displacement on mobile touch devices
    if (isMobile && l.classList.contains('figure-wrap')) {
      l.style.transform = 'translate3d(0, 0, 0)';
    } else {
      const s = (parseFloat(l.dataset.speed) || 0) * speedFactor;
      l.style.transform = `translate3d(0, ${-(currentY * s)}px, 0)`;
    }
  });

  if (Math.abs(targetY - currentY) >= 0.05) {
    rafId = requestAnimationFrame(updateParallax);
  } else {
    rafId = null;
  }
}

function onScroll() {
  if (!rafId && !reduce) {
    rafId = requestAnimationFrame(updateParallax);
  }
}

/* ---------- the title rolling through the figure ---------- */
const roll = document.getElementById('roll');
let offset = 0;
let last = performance.now();

function rollTitle(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  offset += dt * 34;
  const push = window.scrollY * (isMobile ? 0.2 : 0.55);
  const unit = (roll && roll.firstElementChild) ? (roll.firstElementChild.offsetWidth || 1) : 1;
  const x = -((offset + push) % unit);
  if (roll) {
    roll.style.transform = `translate(${x}px, 18%)`;
  }
  requestAnimationFrame(rollTitle);
}

if (!reduce) {
  addEventListener('scroll', onScroll, { passive: true });
  requestAnimationFrame(rollTitle);
}

/* ---------- reveal event cards ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card').forEach((c, i) => {
  c.style.transitionDelay = `${(i % 3) * 70}ms`;
  io.observe(c);
});
