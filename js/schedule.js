// Student Performance Running Order Data

const PERFORMANCES_DATA = [

  // =====================================================
  // ROUND 1 — 1ST YEAR PERFORMANCES
  // =====================================================

  { no: 1, round: "round-1", roundName: "Round 1", time: "9:45 – 9:48 AM", name: "Marwan", type: "Dance", duration: "3 min" },

  { no: 2, round: "round-1", roundName: "Round 1", time: "9:50 – 9:55 AM", name: "Rana Fathima", type: "Dance", duration: "5 min" },

  { no: 3, round: "round-1", roundName: "Round 1", time: "9:57 – 10:02 AM", name: "Jasmeen Nadaf", type: "Dance", duration: "5 min" },

  { no: 4, round: "round-1", roundName: "Round 1", time: "10:04 – 10:09 AM", name: "Limitha M", type: "Dance", duration: "5 min" },

  { no: 5, round: "round-1", roundName: "Round 1", time: "10:11 – 10:16 AM", name: "Muhammed Fahim", type: "Dance", duration: "5 min" },

  { no: 6, round: "round-1", roundName: "Round 1", time: "10:18 – 10:23 AM", name: "Somyo Ranjan", type: "Dance", duration: "5 min" },

  { no: 7, round: "round-1", roundName: "Round 1", time: "10:25 – 10:30 AM", name: "Henyashree", type: "Dance", duration: "5 min" },

  { no: 8, round: "round-1", roundName: "Round 1", time: "10:32 – 10:35 AM", name: "Nithin Kumar", type: "Dance", duration: "3 min" },

  { no: 9, round: "round-1", roundName: "Round 1", time: "10:37 – 10:42 AM", name: "Amira Shahla", type: "Singing", duration: "5 min" },

  { no: 10, round: "round-1", roundName: "Round 1", time: "10:44 – 10:47 AM", name: "Mohammed Raheesh Basheer", type: "Dance", duration: "3 min" },

  { no: 11, round: "round-1", roundName: "Round 1", time: "10:49 – 10:54 AM", name: "Salma Simra", type: "Dance", duration: "5 min" },

  { no: 12, round: "round-1", roundName: "Round 1", time: "10:56 – 11:01 AM", name: "Sudharshan", type: "Instrumental / Music", duration: "5 min" },

  { no: 13, round: "round-1", roundName: "Round 1", time: "11:03 – 11:08 AM", name: "Ashmi Vinod", type: "Dance", duration: "5 min" },

  { no: 14, round: "round-1", roundName: "Round 1", time: "11:10 – 11:15 AM", name: "Riya Richard Gowder", type: "Dance", duration: "5 min" },

  { no: 15, round: "round-1", roundName: "Round 1", time: "11:17 – 11:20 AM", name: "Swamy", type: "Dance", duration: "3 min" },

  { no: 16, round: "round-1", roundName: "Round 1", time: "11:22 – 11:27 AM", name: "Aboobakkar Siddiq", type: "Singing", duration: "5 min" },

  { no: 17, round: "round-1", roundName: "Round 1", time: "11:29 – 11:34 AM", name: "Dayanand Sagar", type: "Singing", duration: "5 min" },


  // =====================================================
  // ROUND 2 — 2ND / 3RD YEAR PERFORMANCES
  // =====================================================

  { no: 18, round: "round-2", roundName: "Round 2", time: "11:36 – 11:41 AM", name: "Aysha Souhan", type: "Dance", duration: "5 min" },

  { no: 19, round: "round-2", roundName: "Round 2", time: "11:43 – 11:46 AM", name: "Ayisha Reema", type: "Dance", duration: "3 min" },

  { no: 20, round: "round-2", roundName: "Round 2", time: "11:48 – 11:50 AM", name: "Mukund M", type: "Beatbox", duration: "2 min" },

  { no: 21, round: "round-2", roundName: "Round 2", time: "11:52 – 11:57 AM", name: "Mohammed Gulshan", type: "Singing", duration: "5 min" },

  { no: 22, round: "round-2", roundName: "Round 2", time: "11:59 AM – 12:04 PM", name: "Sakshi Shettigara", type: "Dance", duration: "5 min" },

  { no: 23, round: "round-2", roundName: "Round 2", time: "12:06 – 12:11 PM", name: "Mohammed Reehan", type: "Dance", duration: "5 min" },

  { no: 24, round: "round-2", roundName: "Round 2", time: "12:13 – 12:16 PM", name: "BINDU SAGAR M", type: "Singing", duration: "3 min" },

  { no: 25, round: "round-2", roundName: "Round 2", time: "12:18 – 12:23 PM", name: "Gayathri L", type: "Dance", duration: "5 min" },

  { no: 26, round: "round-2", roundName: "Round 2", time: "12:25 – 12:30 PM", name: "Fathimath Roza", type: "Dance", duration: "5 min" },

  { no: 27, round: "round-2", roundName: "Round 2", time: "12:32 – 12:37 PM", name: "Afra Ahmed", type: "Dance", duration: "5 min" },


  // =====================================================
  // ROUND 3 — MENTOR / FACULTY PERFORMANCES
  // =====================================================

  { no: 28, round: "round-3", roundName: "Round 3", time: "2:15 – 2:20 PM", name: "Yashwin Sir", type: "Mentor Performance", duration: "5 min" },

  { no: 29, round: "round-3", roundName: "Round 3", time: "2:20 – 2:40 PM", name: "Faculty Group", type: "Group Performance by Faculty", duration: "20 min" },

  { no: 30, round: "round-3", roundName: "Round 3", time: "2:40 – 2:45 PM", name: "Faculty Group", type: "Group Performance by Faculty", duration: "5 min" }

];

function getOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function renderSchedule() {
  const gridR1 = document.getElementById("grid-round-1");
  const gridR2 = document.getElementById("grid-round-2");
  const gridR3 = document.getElementById("grid-round-3");

  gridR1.innerHTML = PERFORMANCES_DATA.filter(p => p.round === "round-1").map(createPerformerCardHTML).join("");
  gridR2.innerHTML = PERFORMANCES_DATA.filter(p => p.round === "round-2").map(createPerformerCardHTML).join("");
  gridR3.innerHTML = PERFORMANCES_DATA.filter(p => p.round === "round-3").map(createPerformerCardHTML).join("");
}

function createPerformerCardHTML(p) {
  // return `
  //   <article class="performer-card" id="performer-${p.no}" data-no="${p.no}">
  //     <div class="card-head">
  //       <span class="card-no">#${p.no}</span>
  //       <span class="card-type-tag">${p.type}</span>
  //     </div>
  //     <h3 class="card-name" id="name-heading-${p.no}">${p.name}</h3>
  //     <div class="card-foot">
  //       <span class="card-dur">${p.duration}</span>
  //     </div>
  //   </article>
  // `;
  return `
    <article class="performer-card" id="performer-${p.no}" data-no="${p.no}">
      <div class="card-head">
        <span class="card-no">#${p.no}</span>
        <span class="card-type-tag">${p.type}</span>
      </div>
      <h3 class="card-name" id="name-heading-${p.no}">${p.name}</h3>
    </article>
  `;
}

let currentFilter = "all";
let currentQuery = "";

function filterPerformances() {
  const searchInput = document.getElementById("performer-search");
  const clearBtn = document.getElementById("clear-search");
  const resultCount = document.getElementById("result-count");
  const spotlightWrap = document.getElementById("spotlight-wrapper");
  const spotlight = document.getElementById("search-spotlight");
  const noResults = document.getElementById("no-results");
  const queryTextSpan = document.getElementById("search-query-text");

  currentQuery = searchInput.value.trim();
  const lowerQuery = currentQuery.toLowerCase();
  const cleanNoQuery = lowerQuery.replace('#', '');

  clearBtn.style.display = currentQuery.length > 0 ? "flex" : "none";

  let matchedCount = 0;
  let firstMatch = null;

  PERFORMANCES_DATA.forEach(p => {
    const card = document.getElementById(`performer-${p.no}`);
    const heading = document.getElementById(`name-heading-${p.no}`);
    if (!card) return;

    const matchesName = p.name.toLowerCase().includes(lowerQuery);
    const matchesNo = p.no.toString() === cleanNoQuery || getOrdinal(p.no).toLowerCase().includes(cleanNoQuery);
    const matchesType = p.type.toLowerCase().includes(lowerQuery);

    const matchesQuery = !currentQuery || matchesName || matchesNo || matchesType;

    let matchesCategory = true;
    if (currentFilter === "round-1") matchesCategory = p.round === "round-1";
    else if (currentFilter === "round-2") matchesCategory = p.round === "round-2";
    else if (currentFilter === "round-3") matchesCategory = p.round === "round-3";

    const isVisible = matchesQuery && matchesCategory;
    card.style.display = isVisible ? "flex" : "none";

    if (heading) {
      if (lowerQuery && matchesName) {
        const regex = new RegExp(`(${escapeRegExp(currentQuery)})`, 'gi');
        heading.innerHTML = p.name.replace(regex, '<mark class="highlight-mark">$1</mark>');
      } else {
        heading.textContent = p.name;
      }
    }

    if (isVisible) {
      matchedCount++;
      if (!firstMatch) firstMatch = p;
      if (currentQuery.length > 0) {
        card.classList.add("card-match");
      } else {
        card.classList.remove("card-match");
      }
    } else {
      card.classList.remove("card-match");
    }
  });

  // Toggle Section Headers
  ["round-1", "round-2", "round-3"].forEach(r => {
    const block = document.getElementById(`block-${r}`);
    const visibleCards = block.querySelectorAll(`.performer-card[style*="display: flex"]`);
    if (currentFilter !== "all" && currentFilter !== r) {
      block.style.display = "none";
    } else {
      block.style.display = visibleCards.length > 0 ? "block" : "none";
    }
  });

  // Result Counter Text
  if (currentQuery.length > 0) {
    resultCount.innerHTML = `Found <strong>${matchedCount}</strong> result${matchedCount !== 1 ? 's' : ''} for "${currentQuery}"`;
  } else if (currentFilter !== "all") {
    resultCount.innerHTML = `Showing <strong>${matchedCount}</strong> performance${matchedCount !== 1 ? 's' : ''} in selected round`;
  } else {
    resultCount.innerHTML = `Showing all <strong>${PERFORMANCES_DATA.length}</strong> student performances`;
  }

  // Spotlight Ticket Pass Render
  if (currentQuery.length >= 2 && firstMatch && matchedCount > 0) {
    const ord = getOrdinal(firstMatch.no);
    spotlightWrap.style.display = "block";
    spotlight.innerHTML = `
      <div class="ticket-header">
        <span class="ticket-badge">&starf; MATCHED STAGE PASS</span>
        <span class="ticket-round">${firstMatch.roundName}</span>
      </div>
      <div class="ticket-body">
        <div class="ticket-main">
          <div class="ticket-order">PROGRAMME #${firstMatch.no} (${ord})</div>
          <h2 class="ticket-name">${firstMatch.name}</h2>
          <span class="ticket-type">${firstMatch.type}</span>
        </div>
        <div class="ticket-meta">
          <div class="meta-block">
            <span class="meta-lbl">DURATION</span>
            <span class="meta-val">${firstMatch.duration}</span>
          </div>
        </div>
      </div>
    `;
  } else {
    spotlightWrap.style.display = "none";
  }

  // No Results State
  if (matchedCount === 0) {
    noResults.style.display = "block";
    queryTextSpan.textContent = currentQuery;
  } else {
    noResults.style.display = "none";
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

document.addEventListener("DOMContentLoaded", () => {
  renderSchedule();

  const searchInput = document.getElementById("performer-search");
  const clearBtn = document.getElementById("clear-search");
  const filterPills = document.querySelectorAll("#filter-pills .tab-btn");
  const resetBtn = document.getElementById("reset-search-btn");

  searchInput.addEventListener("input", filterPerformances);

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterPerformances();
    searchInput.focus();
  });

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter");
      filterPerformances();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentFilter = "all";
      filterPills.forEach(p => p.classList.remove("active"));
      document.querySelector('[data-filter="all"]').classList.add("active");
      filterPerformances();
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get('q');
  if (q) {
    searchInput.value = q;
    filterPerformances();
  }
});
