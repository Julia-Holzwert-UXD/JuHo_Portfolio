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

      // Navbar background
      if(scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");

      // Fade intro text
      if(introH2 && introP && colorBlock){
        const colorTop = colorBlock.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        let opacity = scrollY <= 0 ? 1 : colorTop <= 0 ? 0 : colorTop / viewportHeight;
        opacity = Math.min(Math.max(opacity, 0), 1);
        introH2.style.opacity = opacity;
        introP.style.opacity = opacity;
      }

      // Scroll-to-top button
      if(toTop){
        if(scrollY > 300) toTop.classList.add("show");
        else toTop.classList.remove("show");
      }
    });

    // Scroll-to-top click
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

  // Projects filter (only if grid exists)
  const projectsGrid = document.getElementById("projectsGrid");
  if(projectsGrid){
    const projectItems = Array.from(projectsGrid.children);
    const filterBtns = Array.from(document.querySelectorAll(".filter-btn")).filter(b => !b.classList.contains("special-btn"));
    const showAllBtn = document.getElementById("showAllBtn");
    const clearAllBtn = document.getElementById("clearAllBtn");

    let activeFilters = filterBtns.map(b => b.dataset.filter);
    filterBtns.forEach(b => b.classList.add("active"));

    function updateStats(){
      const total = projectItems.length;
      const visible = projectItems.filter(item => !item.classList.contains("hide")).length;
      const hidden = total - visible;
      document.getElementById("totalCount").textContent = total;
      document.getElementById("visibleCount").textContent = visible;
      document.getElementById("hiddenCount").textContent = hidden;
    }

    function applyFilters(){
      projectItems.forEach(item => {
        const categories = item.dataset.category.split("|");
        const match = activeFilters.length === 0 ? false : activeFilters.some(f => categories.includes(f));
        item.classList.toggle("hide", !match);
      });
      projectItems.sort((a,b) => a.classList.contains("hide") - b.classList.contains("hide"))
                  .forEach(item => projectsGrid.appendChild(item));
      updateStats();
    }

    applyFilters();

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        activeFilters = filterBtns.filter(b => b.classList.contains("active")).map(b => b.dataset.filter);
        applyFilters();
      });
    });

    if(showAllBtn){
      showAllBtn.addEventListener("click", () => {
        activeFilters = filterBtns.map(b => b.dataset.filter);
        filterBtns.forEach(b => b.classList.add("active"));
        applyFilters();
      });
    }

    if(clearAllBtn){
      clearAllBtn.addEventListener("click", () => {
        activeFilters = [];
        filterBtns.forEach(b => b.classList.remove("active"));
        applyFilters();
      });
    }
  }

});