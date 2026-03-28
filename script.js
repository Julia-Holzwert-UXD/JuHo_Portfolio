
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
  console.log("loadGooeyParticles started");

  const container = document.getElementById("particle-container");
  console.log("particle container:", container);

  if (!container) return;

  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 100; i++) {
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
  console.log("particles inserted:", container.children.length);
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
          <a href="${base}projects.html">Projects</a>
          <a href="${base}about.html">About</a>
          <a href="${base}CV.html">CV</a>
        </nav>
        <div class="nav-center"></div>
        <nav class="nav-right">
          <a href="https://www.linkedin.com/in/julia-holzwert/" target="_blank">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank">Instagram</a>
          <a href="https://www.behance.net" target="_blank">Behance</a>
        </nav>
        <div class="burger" id="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>

    <div class="mobile-menu-full" id="mobileMenuFull">
      <div class="menu-close" id="menuClose">&times;</div>
      <div class="menu-block menu-top">
        <a href="${base}projects.html">Projects</a>
        <a href="${base}about.html">About</a>
        <a href="${base}CV.html">CV</a>
      </div>
      <div class="menu-separator"></div>
      <div class="menu-block menu-bottom">
        <a href="https://www.linkedin.com/in/julia-holzwert/" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com" target="_blank">Instagram</a>
        <a href="https://www.behance.net" target="_blank">Behance</a>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
}
function setActiveNav() {
  const current = window.location.pathname.split("/").pop() || "projects.html";
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
    `;
  }
  if (imagesEl) {
    imagesEl.innerHTML = (project.detail.images || []).map(row => {
      const media = row.items.map(item => {
        if (item.type === "video") {
          return `<video src="${item.src}" controls muted playsinline preload="metadata" style="width:100%;height:auto;"></video>`;
        }

        if (item.type === "compare") {
  const compareId = `compare-${Math.random().toString(36).slice(2, 9)}`;

  return `
    <div class="compare-tabs" data-compare-tabs id="${compareId}">
      
      <div class="compare-tabs-controls" role="tablist">
        <button class="compare-tab-btn active" data-target="after">After</button>
        <button class="compare-tab-btn" data-target="before">Before</button>
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

    if (totalCountEl) totalCountEl.textContent = total;
    if (visibleCountEl) visibleCountEl.textContent = visible;
    if (hiddenCountEl) hiddenCountEl.textContent = hidden;
  }

  function applyFilters() {
    projectItems.forEach(item => {
      const categories = item.dataset.category.split("|");

      const matchesActiveFilter =
        activeFilters.length > 0 &&
        activeFilters.some(filter => categories.includes(filter));

      item.classList.toggle("hide", !matchesActiveFilter);
    });

    updateStats();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");

      activeFilters = filterBtns
        .filter(b => b.classList.contains("active"))
        .map(b => b.dataset.filter);

      applyFilters();
    });
  });

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      activeFilters = filterBtns.map(btn => btn.dataset.filter);
      filterBtns.forEach(btn => btn.classList.add("active"));
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

  applyFilters();
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

function applyFilterFromURL() {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  if (!filter) return;

  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".project-item");

  buttons.forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  items.forEach(item => {
    const categories = item.dataset.category || "";

    if (categories.includes(filter)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });

  const totalCountEl = document.getElementById("totalCount");
  const visibleCountEl = document.getElementById("visibleCount");
  const hiddenCountEl = document.getElementById("hiddenCount");

  const total = items.length;
  const visible = Array.from(items).filter(item => !item.classList.contains("hide")).length;
  const hidden = total - visible;

  if (totalCountEl) totalCountEl.textContent = total;
  if (visibleCountEl) visibleCountEl.textContent = visible;
  if (hiddenCountEl) hiddenCountEl.textContent = hidden;

  const section = document.getElementById("filters");
  if (section) {
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
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

document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();
  setActiveNav();
  loadFooter();
  loadLiquidEffectSVG();
  loadGooeyParticles();

  const projectsLoaded = renderProjects();

  if (projectsLoaded) {
    initFilters();
    applyFilterFromURL();
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

