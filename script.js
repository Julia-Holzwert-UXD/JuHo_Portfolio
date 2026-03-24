document.addEventListener("DOMContentLoaded", () => {

  // Elements
  const burger = document.getElementById("burger");
  const mobileMenuFull = document.getElementById("mobileMenuFull");
  const menuClose = document.getElementById("menuClose");
  const navbar = document.querySelector(".navbar");
  const toTop = document.getElementById("toTop");
  const container = document.getElementById("particle-container");

  // Fade elements (optional)
  const introBlock = document.querySelector(".intro-block");
  const colorBlock = document.querySelector(".color-block");
  const introH2 = introBlock ? introBlock.querySelector("h2") : null;
  const introP = introBlock ? introBlock.querySelector("p") : null;

  // Mobile menu toggle
  if(burger && mobileMenuFull && menuClose){
    burger.addEventListener("click", () => mobileMenuFull.classList.add("open"));
    menuClose.addEventListener("click", () => mobileMenuFull.classList.remove("open"));
  }

  // Scroll fade + scroll-to-top
  if(navbar){
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if(scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");

      if(introH2 && introP && colorBlock){
        const colorTop = colorBlock.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        let opacity = scrollY <= 0 ? 1 : colorTop <= 0 ? 0 : colorTop / viewportHeight;
        opacity = Math.min(Math.max(opacity, 0), 1);
        introH2.style.opacity = opacity;
        introP.style.opacity = opacity;
      }

      if(toTop){
        if(scrollY > 300) toTop.classList.add("show");
        else toTop.classList.remove("show");
      }
    });

    if(toTop){
      toTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
    }
  }

  // Gooey footer particles
  if(container){
    const fragment = document.createDocumentFragment();
    for(let i=0; i<100; i++){
      const span = document.createElement("span");
      span.classList.add("particle");
      const size = 3 + Math.random()*6;
      const distance = 10 + Math.random()*15;
      const position = Math.random()*100;
      const time = 3 + Math.random()*3;
      const delay = -1 * Math.random()*10;
      span.style.setProperty("--dim",`${size}rem`);
      span.style.setProperty("--uplift",`${distance}rem`);
      span.style.setProperty("--pos-x",`${position}%`);
      span.style.setProperty("--dur",`${time}s`);
      span.style.setProperty("--delay",`${delay}s`);
      fragment.appendChild(span);
    }
    container.appendChild(fragment);
  }

// Projects filter
const projectsGrid = document.getElementById("projectsGrid");

if (projectsGrid) {
  const projectItems = Array.from(projectsGrid.querySelectorAll(".project-item"));
  const originalOrder = [...projectItems];

  const filterBtns = Array.from(document.querySelectorAll(".filter-btn"))
    .filter(btn => !btn.classList.contains("special-btn"));

  const clearAllBtn = document.getElementById("clearAllBtn");
  const showAllBtn = document.getElementById("showAllBtn");

  const totalCountEl = document.getElementById("totalCount");
  const visibleCountEl = document.getElementById("visibleCount");
  const hiddenCountEl = document.getElementById("hiddenCount");

  let activeFilters = filterBtns.map(btn => btn.dataset.filter);
  filterBtns.forEach(btn => btn.classList.add("active"));

  function updateStats() {
    const total = projectItems.length;
    const visible = projectItems.filter(item => !item.classList.contains("hide")).length;
    const hidden = total - visible;

    totalCountEl.textContent = total;
    visibleCountEl.textContent = visible;
    hiddenCountEl.textContent = hidden;
  }

  function restoreOriginalOrder() {
    originalOrder.forEach(item => projectsGrid.appendChild(item));
  }

  function applyFilters() {
    projectItems.forEach(item => {
      const categories = item.dataset.category.split("|");

      const match =
        activeFilters.length > 0 &&
        activeFilters.some(filter => categories.includes(filter));

      item.classList.toggle("hide", !match);
    });

    updateStats();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");

      activeFilters = filterBtns
        .filter(button => button.classList.contains("active"))
        .map(button => button.dataset.filter);

      applyFilters();
    });
  });

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      activeFilters = filterBtns.map(btn => btn.dataset.filter);
      filterBtns.forEach(btn => btn.classList.add("active"));

      restoreOriginalOrder();
      applyFilters();
    });
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener("click", () => {
      activeFilters = [];
      filterBtns.forEach(btn => btn.classList.remove("active"));
      applyFilters();
    });
  }

  restoreOriginalOrder();
  applyFilters();
}

});

