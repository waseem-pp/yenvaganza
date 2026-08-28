const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- depth parallax ---------- */
const layers = [...document.querySelectorAll('.layer')];
let ticking = false;

function park(){
  const y = window.scrollY;
  layers.forEach(l => {
    const s = parseFloat(l.dataset.speed) || 0;
    l.style.transform = `translate3d(0, ${-(y * s)}px, 0)`;
  });
  ticking = false;
}

/* ---------- the title rolling through the figure ---------- */
const roll = document.getElementById('roll');
let offset = 0;          // continuous drift
let last = performance.now();

function rollTitle(now){
  const dt = (now - last) / 1000;
  last = now;
  // constant drift + extra push from scroll position
  offset += dt * 34;
  const push = window.scrollY * 0.55;
  const unit = roll.firstElementChild.offsetWidth || 1;
  const x = -((offset + push) % unit);
  roll.style.transform = `translate(${x}px, 18%)`;
  requestAnimationFrame(rollTitle);
}

if(!reduce){
  addEventListener('scroll', () => {
    if(!ticking){ requestAnimationFrame(park); ticking = true; }
  }, {passive:true});
  requestAnimationFrame(rollTitle);
}

/* ---------- reveal event cards ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, {threshold:0.15});

document.querySelectorAll('.card').forEach((c,i) => {
  c.style.transitionDelay = `${(i % 3) * 70}ms`;
  io.observe(c);
});
