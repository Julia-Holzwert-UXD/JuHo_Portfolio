function loadFooter() {
  console.log("loadFooter started");

  if (document.querySelector(".footer-section")) {
    console.log("footer already exists");
    return;
  }

  const footerHTML = `
    <footer class="footer-section">
      <div class="gooey-animations" id="particle-container"></div>
      <div class="footer-content">
        <p class="footer-text">
          2026 Copyright Julia Holzwert<br>
          Content is not to be used<br>
          for training generative AI technologies without explicit permission.
        </p>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
  console.log("footer inserted");
}
function loadLiquidEffectSVG() {
  console.log("loadLiquidEffectSVG started");

  if (document.getElementById("liquid-effect")) {
    console.log("svg already exists");
    return;
  }

  const svg = `
    <svg style="position:absolute;width:0;height:0;overflow:hidden;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="liquid-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 19 -9"
            result="liquid" />
        </filter>
      </defs>
    </svg>
  `;

  document.body.insertAdjacentHTML("beforeend", svg);
  console.log("svg inserted");
}
function loadGooeyParticles() {
  const container = document.getElementById("particle-container");
  if (!container) return;

  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  let particleCount = 100;
  if (window.innerWidth <= 640) {
    particleCount = 25;
  } else if (window.innerWidth <= 1100) {
    particleCount = 40;
  }

  for (let i = 0; i < particleCount; i++) {
    const span = document.createElement("span");
    span.classList.add("particle");

    const size = 3 + Math.random() * 6;
    const distance = 10 + Math.random() * 15;
    const position = Math.random() * 100;
    const time = 3 + Math.random() * 3;
    const delay = -1 * Math.random() * 10;

    span.style.setProperty("--dim", `${size}rem`);
    span.style.setProperty("--uplift", `${distance}rem`);
    span.style.setProperty("--pos-x", `${position}%`);
    span.style.setProperty("--dur", `${time}s`);
    span.style.setProperty("--delay", `${delay}s`);

    fragment.appendChild(span);

  }

  container.appendChild(fragment);
}
function getBasePath() {
  return window.location.pathname.includes("/projectSites/") ? "../" : "";
}
function loadNavbar() {
  if (document.querySelector(".navbar")) return;

  const base = getBasePath();

  const navbarHTML = `
  <header class="navbar">
    <div class="nav-wrapper">

      <nav class="nav-left">
        <a href="${base}index.html">About Me</a>
        <a href="${base}projects.html">Projects</a>
      </nav>

      <div class="nav-center"></div>

      <nav class="nav-right">
        <a href="https://www.linkedin.com/in/julia-holzwert/" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com" target="_blank">Instagram</a>

        <div class="theme-toggle"> <input type="checkbox" id="darkmode-toggle"/> <label for="darkmode-toggle" class="toggle-label">
        <!-- SUN (new SVG) -->
          <svg class="sun" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle cx="32.003" cy="32.005" r="16.001"/>
              <path d="M12.001 31.997c0-2.211-1.789-4-4-4H4c-2.211 0-4 1.789-4 4s1.789 4 4 4h4c2.212 0 4-1.789 4-4z"/>
              <path d="M12.204 46.139l-2.832 2.833c-1.563 1.562-1.563 4.094 0 5.656 1.562 1.562 4.094 1.562 5.657 0l2.833-2.832c1.562-1.562 1.562-4.095 0-5.657-1.563-1.563-4.094-1.563-5.657 0z"/>
              <path d="M32.003 51.999c-2.211 0-4 1.789-4 4V60c0 2.211 1.789 4 4 4s4-1.789 4-4v-4.001c0-2.211-1.793-4-4-4z"/>
              <path d="M51.798 46.143c-1.559-1.566-4.091-1.566-5.653-.004s-1.562 4.095 0 5.657l2.829 2.828c1.562 1.57 4.094 1.562 5.656 0s1.566-4.09 0-5.656l-2.832-2.825z"/>
              <path d="M60.006 27.997l-4.009.008c-2.203-.008-3.992 1.781-3.992 3.992-.008 2.211 1.789 4 3.992 4h4.001c2.219.008 4-1.789 4-4 0-2.208-1.785-4.001-3.992-4z"/>
              <path d="M51.798 17.859l2.828-2.829c1.574-1.566 1.562-4.094 0-5.657-1.559-1.567-4.09-1.567-5.652-.004l-2.829 2.836c-1.562 1.555-1.562 4.086 0 5.649 1.554 1.572 4.094 1.564 5.653.005z"/>
              <path d="M32.003 11.995c2.207.016 4-1.789 4-3.992v-4c0-2.219-1.789-4-4-4-2.211-.008-4 1.781-4 3.993l.008 4.008c-.008 2.204 1.781 3.993 3.992 3.993z"/>
              <path d="M12.212 17.855c1.555 1.562 4.079 1.562 5.646-.004 1.574-1.551 1.566-4.09.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657 0-1.575 1.559-1.575 4.09-.012 5.653l2.844 2.828z"/>
            </g>
          </svg>

        <!-- MOON (your existing) -->
          <svg class="moon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
          </svg>
        </label> 
        </div>
      </nav>

      <div class="burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  </header>
`;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
}
function setActiveNav() {
  let current = window.location.pathname.split("/").pop();

  if (!current || current === "/") {
    current = "index.html";
  }

  const links = document.querySelectorAll(".nav-left a, .menu-top a");

  links.forEach(link => {
    const href = link.getAttribute("href");
    const cleanHref = href.split("/").pop();

    if (cleanHref === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return false;

  const base = getBasePath();
  const data = projectsData;

  grid.innerHTML = "";

  data.projects.forEach(project => {
    const item = document.createElement("div");
    item.className = "project-item";
    item.dataset.category = project.categories.join("|");

    const href = project.href.replace("./", base);

    const imageStyle = project.coverImage
      ? `style="background-image:url('${project.coverImage.replace("./", base)}')"`
      : "";

    item.innerHTML = `
      <a href="${href}" class="project-link">
        <div class="project-card" ${imageStyle}>
          <div class="card-content">
            <h3>${project.title}</h3>
          </div>
        </div>
      </a>
    `;

    grid.appendChild(item);
  });

  return true;
}
function renderProjectDetail() {
  const slug = document.body.dataset.projectSlug;
  if (!slug) return;

  const project = projectsData.projects.find(p => p.slug === slug);
  if (!project || !project.detail) return;

  document.body.dataset.currentProject = project.title;
  document.body.dataset.currentFilters = project.categories.join("|");

  const titleEl = document.getElementById("projectTitle");
  const tagsEl = document.getElementById("projectTags");
  const metaEl = document.getElementById("projectMeta");
  const textEl = document.getElementById("projectText");
  const imagesEl = document.getElementById("projectImages");

  if (titleEl) titleEl.textContent = project.title;
  if (metaEl) metaEl.textContent = project.detail.meta || "";

  if (tagsEl) {
    const base = getBasePath();
    tagsEl.innerHTML = project.categories.map(category => {
      return `<a href="${base}projects.html?filter=${category}#filters">${category}</a>`;
    }).join(" | ");
  }

  if (textEl) {
    const s = project.detail.sections;

    textEl.innerHTML = `
      <h3>Summary</h3>
      <p>${s.summary || ""}</p>

      <h3>Challenge</h3>
      <p>${s.challenge || ""}</p>

      <h3>Approach</h3>
      <p>${s.approach || ""}</p>

      <h3>Result</h3>
      <ul>
        ${(s.result || []).map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h3>${s.takeawayTitle || "Takeaway"}</h3>
      <p>${s.takeaway || ""}</p>
          ${s.link ? `
      <div class="more-insights">
        <a href="${s.link}" target="_blank" class="more-insights-btn">More insights</a>
      </div>
    ` : ""}
    `;
  }
  if (imagesEl) {
    imagesEl.innerHTML = (project.detail.images || []).map(row => {
      const media = row.items.map(item => {
        if (item.type === "video") {
          return `<video src="${item.src}" controls muted playsinline preload="metadata" style="width:100%;height:auto;"></video>`;
        }

        if (item.type === "compare") {
          const projectSlug = document.body.dataset.projectSlug || "";
          const isDBProject = projectSlug.toLowerCase() === "dbnavigatorredesign";

          const beforeLabel = isDBProject ? "Darkmode" : "Before";
          const afterLabel = isDBProject ? "Lightmode" : "After";

          return `
    <div class="compare-tabs" data-compare-tabs>
      <div class="compare-tabs-controls" role="tablist">
        <button class="compare-tab-btn active" data-target="after" aria-selected="true">
          ${afterLabel}
        </button>
        <button class="compare-tab-btn" data-target="before" aria-selected="false">
          ${beforeLabel}
        </button>
      </div>

      <div class="compare-tabs-panels">
        <div class="compare-tab-panel active" data-panel="after">
          <div class="image-row one">
            <img src="${item.after}" alt="${item.altAfter || ''}">
          </div>
        </div>

        <div class="compare-tab-panel" data-panel="before" hidden>
          <div class="image-row one">
            <img src="${item.before}" alt="${item.altBefore || ''}">
          </div>
        </div>
      </div>
    </div>
  `;
        }

        return `<img src="${item.src}" alt="${item.alt || ''}" loading="lazy">`;
      }).join("");

      return `<div class="image-row ${row.layout}">${media}</div>`;
    }).join("");
  }
}
function initFilters() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const projectItems = Array.from(projectsGrid.querySelectorAll(".project-item"));
  const originalOrder = [...projectItems];

  const filterBtns = Array.from(document.querySelectorAll(".filter-btn"))
    .filter(btn => btn.dataset.filter);

  const showAllBtn = document.getElementById("showAllBtn");

  const totalCountEl = document.getElementById("totalCount");
  const visibleCountEl = document.getElementById("visibleCount");
  const hiddenCountEl = document.getElementById("hiddenCount");

  const params = new URLSearchParams(window.location.search);
  const urlFilter = params.get("filter");

  let activeFilter = urlFilter || null;

  function updateButtonStates() {
    filterBtns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.filter === activeFilter);
    });

    if (showAllBtn) {
      showAllBtn.classList.toggle("active", activeFilter === null);
    }
  }

  function updateStats() {
    const total = projectItems.length;
    const visible = projectItems.filter(item => !item.classList.contains("hide")).length;
    const hidden = total - visible;

    if (totalCountEl) totalCountEl.textContent = total;
    if (visibleCountEl) visibleCountEl.textContent = visible;
    if (hiddenCountEl) hiddenCountEl.textContent = hidden;
  }

  function restoreOriginalOrder() {
    originalOrder.forEach(item => projectsGrid.appendChild(item));
  }

  function applyFilters() {
    projectItems.forEach(item => {
      const categories = item.dataset.category.split("|");

      const match =
        activeFilter === null ||
        categories.includes(activeFilter);

      item.classList.toggle("hide", !match);
    });

    updateButtonStates();
    updateStats();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      activeFilter = null;
      restoreOriginalOrder();
      applyFilters();
    });
  }

  restoreOriginalOrder();
  applyFilters();

  if (urlFilter) {
    const section = document.getElementById("filters");
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }
}
function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}
function renderOtherProjects() {
  const grid = document.getElementById("otherProjectsGrid");
  if (!grid) return;

  const currentSlug = document.body.dataset.projectSlug;
  if (!currentSlug) return;

  const currentProject = projectsData.projects.find(project => project.slug === currentSlug);
  if (!currentProject) return;

  const currentCategories = currentProject.categories || [];
  const base = getBasePath();

  const unrelatedProjects = projectsData.projects.filter(project => {
    const isCurrentProject = project.slug === currentSlug;

    const sharesCategory = project.categories.some(category =>
      currentCategories.includes(category)
    );

    return !isCurrentProject && !sharesCategory;
  });

  const fallbackProjects = projectsData.projects.filter(project => {
    return project.slug !== currentSlug;
  });

  let selectedProjects = shuffleArray(unrelatedProjects).slice(0, 4);

  if (selectedProjects.length < 4) {
    const selectedSlugs = selectedProjects.map(project => project.slug);

    const extraProjects = shuffleArray(fallbackProjects).filter(project => {
      return !selectedSlugs.includes(project.slug);
    });

    selectedProjects = [...selectedProjects, ...extraProjects].slice(0, 4);
  }

  grid.innerHTML = "";

  selectedProjects.forEach(project => {
    const item = document.createElement("div");
    item.className = "project-item";

    const href = project.href.replace("./", base);

    const imageStyle = project.coverImage
      ? `style="background-image:url('${project.coverImage.replace("./", base)}')"`
      : "";

    item.innerHTML = `
      <a href="${href}" class="project-link">
        <div class="project-card" ${imageStyle}>
          <div class="card-content">
            <h3>${project.title}</h3>
          </div>
        </div>
      </a>
    `;

    grid.appendChild(item);
  });
}
function initCompareTabs() {
  const tabGroups = document.querySelectorAll("[data-compare-tabs]");

  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll(".compare-tab-btn");
    const panels = group.querySelectorAll(".compare-tab-panel");

    function activateTab(target) {
      buttons.forEach(button => {
        const isActive = button.dataset.target === target;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach(panel => {
        const isActive = panel.dataset.panel === target;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
      });
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        activateTab(button.dataset.target);
      });

      button.addEventListener("keydown", e => {
        const buttonsArray = Array.from(buttons);
        const currentIndex = buttonsArray.indexOf(button);

        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();

          const direction = e.key === "ArrowRight" ? 1 : -1;
          const nextIndex = (currentIndex + direction + buttonsArray.length) % buttonsArray.length;
          const nextButton = buttonsArray[nextIndex];

          nextButton.focus();
          activateTab(nextButton.dataset.target);
        }
      });
    });
  });
}
function splitToWords(el) {
  const text = el.textContent.trim();
  const lines = text.split("\n").filter(Boolean);

  el.innerHTML = lines.map(line => {
    const words = line.trim().split(" ");
    return `<span class="scroll-line">
      ${words.map(w => `<span class="scroll-word">${w}</span>`).join(" ")}
    </span>`;
  }).join("");
}
function initScrollReveal() {

  gsap.registerPlugin(ScrollTrigger);

  const elements = document.querySelectorAll(".scroll-reveal-text");

  elements.forEach(el => {

    // LIST HANDLING
    if (el.classList.contains("scroll-reveal-list-item")) {
      gsap.fromTo(el,
        {
          opacity: 0,
          filter: "blur(10px)",
          y: 30
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 70%",
            scrub: 1
          }
        }
      );
      return;
    }

    const text = el.textContent.trim();
    const words = text.split(" ");

    el.innerHTML = words
      .map(word => `<span class="word">${word}</span>`)
      .join(" ");

    const wordElements = el.querySelectorAll(".word");

    gsap.to(wordElements, {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      rotate: 0,
      scale: 1,

      stagger: 0.04,

      ease: "power2.out",

      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 60%",
        scrub: 1
      }
    });

  });

}
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  setActiveNav();
  loadFooter();
  loadLiquidEffectSVG();
  loadGooeyParticles();
  window.addEventListener("load", () => {
    initScrollReveal();
    ScrollTrigger.refresh();
  });
  const projectsLoaded = renderProjects();

  if (projectsLoaded) {
    initFilters();

  }

  renderProjectDetail();
  renderOtherProjects();
  initCompareTabs();

  const burger = document.getElementById("burger");
  const mobileMenuFull = document.getElementById("mobileMenuFull");
  const menuClose = document.getElementById("menuClose");
  const navbar = document.querySelector(".navbar");
  const toTop = document.getElementById("toTop");

  const introBlock = document.querySelector(".intro-block");
  const colorBlock = document.querySelector(".color-block");
  const introH2 = introBlock ? introBlock.querySelector("h2") : null;
  const introP = introBlock ? introBlock.querySelector("p") : null;
  const darkmodeToggle = document.getElementById("darkmode-toggle");

  if (darkmodeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("darkmode");
      darkmodeToggle.checked = true;
    }

    darkmodeToggle.addEventListener("change", () => {

      document.body.classList.toggle("darkmode");

      const isDark = document.body.classList.contains("darkmode");

      localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
      );

    });

  }
  if (burger && mobileMenuFull && menuClose) {
    burger.addEventListener("click", () => mobileMenuFull.classList.add("open"));
    menuClose.addEventListener("click", () => mobileMenuFull.classList.remove("open"));
  }

  if (navbar) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");

      if (introH2 && introP && colorBlock) {
        const colorTop = colorBlock.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        let opacity = scrollY <= 0 ? 1 : colorTop <= 0 ? 0 : colorTop / viewportHeight;
        opacity = Math.min(Math.max(opacity, 0), 1);
        introH2.style.opacity = opacity;
        introP.style.opacity = opacity;
      }

      if (toTop) {
        if (scrollY > 300) toTop.classList.add("show");
        else toTop.classList.remove("show");
      }
    });

    if (toTop) {
      toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  }
});

