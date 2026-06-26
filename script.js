/* GLOBAL SETTINGS */
const DEBUG = false;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenis = null;

function debugLog(...args) {
  if (DEBUG) console.log(...args);
}

function warnLog(...args) {
  console.warn(...args);
}

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function getBasePath() {
  return window.location.pathname.includes("/projectSites/") ? "../" : "";
}

function normalizePath(path, base = getBasePath()) {
  if (!path) return "";
  return String(path).startsWith("./") ? String(path).replace("./", base) : String(path);
}

function getProjectCategoryText(project) {
  return project.category || project.cardCategory || (project.categories || []).join(" · ");
}

function getProjectImageSrc(project, base = getBasePath()) {
  const image = project.image || project.coverImage || "";
  return normalizePath(image, base);
}

function getProjectCardBg(project) {
  return project.backgroundColor || project.cardBackgroundColor || project.coverBackgroundColor || "#F5F3FF";
}

function removeChildren(el) {
  if (!el) return;
  while (el.firstChild) el.removeChild(el.firstChild);
}

function setCssVar(el, name, value) {
  if (el && value !== undefined && value !== null) {
    el.style.setProperty(name, String(value));
  }
}

function safeText(value) {
  return value === undefined || value === null ? "" : String(value);
}

/* FOOTER */
function loadFooter() {
  if (qs(".footer-section")) return;

  const footer = document.createElement("footer");
  footer.className = "footer-section";

  const particles = document.createElement("div");
  particles.className = "gooey-animations";
  particles.id = "particle-container";

  const content = document.createElement("div");
  content.className = "footer-content";

  const text = document.createElement("p");
  text.className = "footer-text";
  text.innerHTML = "2026 Copyright Julia Holzwert<br>Content is not to be used<br>for training generative AI technologies without explicit permission.";

  content.appendChild(text);
  footer.appendChild(particles);
  footer.appendChild(content);
  document.body.appendChild(footer);
}

function loadLiquidEffectSVG() {
  if (document.getElementById("liquid-effect")) return;

  const template = document.createElement("template");
  template.innerHTML = `
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

  document.body.appendChild(template.content);
}

function loadGooeyParticles() {
  const container = document.getElementById("particle-container");
  if (!container) return;

  removeChildren(container);

  let particleCount = 100;
  if (window.innerWidth <= 640) particleCount = 25;
  else if (window.innerWidth <= 1100) particleCount = 40;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < particleCount; i++) {
    const span = document.createElement("span");
    span.className = "particle";

    setCssVar(span, "--dim", `${3 + Math.random() * 6}rem`);
    setCssVar(span, "--uplift", `${10 + Math.random() * 15}rem`);
    setCssVar(span, "--pos-x", `${Math.random() * 100}%`);
    setCssVar(span, "--dur", `${3 + Math.random() * 3}s`);
    setCssVar(span, "--delay", `${-1 * Math.random() * 10}s`);

    fragment.appendChild(span);
  }

  container.appendChild(fragment);
}

/* NAVBAR */
function loadNavbar() {
  if (qs(".navbar")) return;

  const base = getBasePath();
  const template = document.createElement("template");

  template.innerHTML = `
    <header class="navbar">
      <div class="nav-wrapper">
        <nav class="nav-left">
          <a href="${base}index.html">Home</a>
          <a href="${base}projects.html">Works</a>
          <a href="${base}about.html">About</a>
        </nav>

        <div class="nav-center"></div>

        <nav class="nav-right">
          <a href="https://www.linkedin.com/in/julia-holzwert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

          <div class="theme-toggle">
            <input type="checkbox" id="darkmode-toggle" />
            <label for="darkmode-toggle" class="toggle-label" aria-label="Toggle dark mode">
              <svg class="sun" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g>
                  <circle cx="32.003" cy="32.005" r="16.001" />
                  <path d="M12.001 31.997c0-2.211-1.789-4-4-4H4c-2.211 0-4 1.789-4 4s1.789 4 4 4h4c2.212 0 4-1.789 4-4z" />
                  <path d="M12.204 46.139l-2.832 2.833c-1.563 1.562-1.563 4.094 0 5.656 1.562 1.562 4.094 1.562 5.657 0l2.833-2.832c1.562-1.562 1.562-4.095 0-5.657-1.563-1.563-4.094-1.563-5.657 0z" />
                  <path d="M32.003 51.999c-2.211 0-4 1.789-4 4V60c0 2.211 1.789 4 4 4s4-1.789 4-4v-4.001c0-2.211-1.793-4-4-4z" />
                  <path d="M51.798 46.143c-1.559-1.566-4.091-1.566-5.653-.004s-1.562 4.095 0 5.657l2.829 2.828c1.562 1.57 4.094 1.562 5.656 0s1.566-4.09 0-5.656l-2.832-2.825z" />
                  <path d="M60.006 27.997l-4.009.008c-2.203-.008-3.992 1.781-3.992 3.992-.008 2.211 1.789 4 3.992 4h4.001c2.219.008 4-1.789 4-4 0-2.208-1.785-4.001-3.992-4z" />
                  <path d="M51.798 17.859l2.828-2.829c1.574-1.566 1.562-4.094 0-5.657-1.559-1.567-4.09-1.567-5.652-.004l-2.829 2.836c-1.562 1.555-1.562 4.086 0 5.649 1.554 1.572 4.094 1.564 5.653.005z" />
                  <path d="M32.003 11.995c2.207.016 4-1.789 4-3.992v-4c0-2.219-1.789-4-4-4-2.211-.008-4 1.781-4 3.993l.008 4.008c-.008 2.204 1.781 3.993 3.992 3.993z" />
                  <path d="M12.212 17.855c1.555 1.562 4.079 1.562 5.646-.004 1.574-1.551 1.566-4.09.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657 0-1.575 1.559-1.575 4.09-.012 5.653l2.844 2.828z" />
                </g>
              </svg>

              <svg class="moon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              </svg>
            </label>
          </div>
        </nav>

        <div class="burger" id="burger" aria-label="Open navigation" role="button" tabindex="0">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  `;

  document.body.insertBefore(template.content, document.body.firstChild);
}

function setActiveNav() {
  let current = window.location.pathname.split("/").pop();
  if (!current || current === "/") current = "index.html";

  qsa(".nav-left a, .menu-top a").forEach(link => {
    const href = link.getAttribute("href") || "";
    const cleanHref = href.split("/").pop();
    link.classList.toggle("active", cleanHref === current);
  });
}

function initThemeToggle() {
  const darkmodeToggle = document.getElementById("darkmode-toggle");
  if (!darkmodeToggle) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("darkmode");
    darkmodeToggle.checked = true;
  }

  darkmodeToggle.addEventListener("change", () => {
    const isDark = darkmodeToggle.checked;
    document.body.classList.toggle("darkmode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

function initNavbarScrollState() {
  const navbar = qs(".navbar");
  const toTop = qs("#toTop");
  if (!navbar && !toTop) return;

  function update() {
    const scrollY = window.scrollY;

    if (navbar) navbar.classList.toggle("scrolled", scrollY > 50);
    if (toTop) toTop.classList.toggle("show", scrollY > 300);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initMobileMenu() {
  const burger = document.getElementById("burger");
  const mobileMenuFull = document.getElementById("mobileMenuFull");
  const menuClose = document.getElementById("menuClose");

  if (!burger || !mobileMenuFull || !menuClose) return;

  function openMenu() {
    mobileMenuFull.classList.add("open");
  }

  function closeMenu() {
    mobileMenuFull.classList.remove("open");
  }

  burger.addEventListener("click", openMenu);
  burger.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openMenu();
    }
  });

  menuClose.addEventListener("click", closeMenu);
}

/* PROJECT CARDS */
function createProjectCard(project, base = getBasePath()) {
  const item = document.createElement("div");
  item.className = "project-item";
  item.dataset.category = (project.categories || []).join("|");

  const link = document.createElement("a");
  link.className = "project-link";
  link.href = normalizePath(project.href || "#", base);

  const card = document.createElement("article");
  card.className = "project-card";

  setCssVar(card, "--project-card-bg", getProjectCardBg(project));
  setCssVar(card, "--project-image-scale", project.imageScale || project.logoScale || 1);
  setCssVar(card, "--project-image-x", project.imageX || "0px");
  setCssVar(card, "--project-image-y", project.imageY || "0px");

  const media = document.createElement("div");
  media.className = "project-card-media";

  const imageSrc = getProjectImageSrc(project, base);
  if (imageSrc) {
    const img = document.createElement("img");
    img.className = "project-card-img";
    img.src = imageSrc;
    img.alt = `${safeText(project.title)} project preview`;
    img.loading = "lazy";
    media.appendChild(img);
  }

  const info = document.createElement("div");
  info.className = "project-card-info";

  const category = document.createElement("p");
  category.className = "project-card-category";
  category.textContent = getProjectCategoryText(project);

  const title = document.createElement("h3");
  title.className = "project-card-title";
  title.textContent = safeText(project.title);

  info.appendChild(category);
  info.appendChild(title);
  card.appendChild(media);
  card.appendChild(info);
  link.appendChild(card);
  item.appendChild(link);

  return item;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return false;

  if (typeof projectsData === "undefined" || !projectsData.projects) {
    warnLog("projectsData is not loaded");
    return false;
  }

  removeChildren(grid);
  const base = getBasePath();
  const fragment = document.createDocumentFragment();

  projectsData.projects.forEach(project => {
    fragment.appendChild(createProjectCard(project, base));
  });

  grid.appendChild(fragment);
  return true;
}

function renderOtherProjects() {
  const grid = document.getElementById("otherProjectsGrid");
  if (!grid) return;

  const currentSlug = document.body.dataset.projectSlug;
  if (!currentSlug) return;

  if (typeof projectsData === "undefined" || !projectsData.projects) {
    warnLog("projectsData is not loaded");
    return;
  }

  const currentProject = projectsData.projects.find(project => project.slug === currentSlug);
  if (!currentProject) return;

  const currentCategories = currentProject.categories || [];
  const base = getBasePath();

  const unrelatedProjects = projectsData.projects.filter(project => {
    const isCurrentProject = project.slug === currentSlug;
    const sharesCategory = (project.categories || []).some(category => currentCategories.includes(category));
    return !isCurrentProject && !sharesCategory;
  });

  const fallbackProjects = projectsData.projects.filter(project => project.slug !== currentSlug);
  let selectedProjects = shuffleArray(unrelatedProjects).slice(0, 4);

  if (selectedProjects.length < 4) {
    const selectedSlugs = selectedProjects.map(project => project.slug);
    const extraProjects = shuffleArray(fallbackProjects).filter(project => !selectedSlugs.includes(project.slug));
    selectedProjects = [...selectedProjects, ...extraProjects].slice(0, 4);
  }

  removeChildren(grid);
  const fragment = document.createDocumentFragment();

  selectedProjects.forEach(project => {
    fragment.appendChild(createProjectCard(project, base));
  });

  grid.appendChild(fragment);
}

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

/* PROJECT DETAIL */
function renderProjectDetail() {
  const slug = document.body.dataset.projectSlug;
  if (!slug) return;

  if (typeof projectsData === "undefined" || !projectsData.projects) {
    warnLog("projectsData is not loaded");
    return;
  }

  const project = projectsData.projects.find(p => p.slug === slug);
  if (!project || !project.detail) return;

  document.body.dataset.currentProject = safeText(project.title);
  document.body.dataset.currentFilters = (project.categories || []).join("|");

  renderProjectHeader(project);
  renderProjectCover(project);
  renderProjectText(project);
  renderProjectImages(project);
  renderProjectExtraSlider(project);
}

function renderProjectHeader(project) {
  const titleEl = document.getElementById("projectTitle");
  const tagsEl = document.getElementById("projectTags");
  const metaEl = document.getElementById("projectMeta");

  if (titleEl) titleEl.textContent = safeText(project.title);
  if (metaEl) metaEl.textContent = safeText(project.detail.meta);

  if (!tagsEl) return;

  removeChildren(tagsEl);
  const base = getBasePath();

  (project.categories || []).forEach((category, index) => {
    if (index > 0) tagsEl.appendChild(document.createTextNode(" | "));

    const link = document.createElement("a");
    link.href = `${base}projects.html?filter=${encodeURIComponent(category)}#filters`;
    link.textContent = category;
    tagsEl.appendChild(link);
  });
}

function renderProjectCover(project) {
  const introBlock = qs(".intro-block");
  let coverBannerEl = document.getElementById("projectCoverBanner");

  if (!coverBannerEl && introBlock) {
    coverBannerEl = document.createElement("section");
    coverBannerEl.id = "projectCoverBanner";
    introBlock.insertAdjacentElement("afterend", coverBannerEl);
  }

  if (!coverBannerEl) return;

  const base = getBasePath();
  const coverColor = project.coverBackgroundColor || "#9d00ff";
  const coverSrc = normalizePath(project.coverBannerImage || project.coverImage || "", base);
  const coverZoom = project.coverZoom ?? 0;
  const coverScale = 1 + coverZoom / 100;

  coverBannerEl.hidden = false;
  coverBannerEl.classList.add("project-cover-banner");
  setCssVar(coverBannerEl, "--project-cover-bg", coverColor);
  setCssVar(coverBannerEl, "--project-cover-color", coverColor);
  setCssVar(coverBannerEl, "--project-cover-image-scale", coverScale);

  removeChildren(coverBannerEl);

  const wrapper = document.createElement("div");
  wrapper.className = "project-cover-wrapper";

  const coverBg = document.createElement("div");
  coverBg.className = "project-cover-bg";
  coverBg.setAttribute("aria-hidden", "true");
  coverBg.style.background = coverColor;

  const coverImageFrame = document.createElement("div");
  coverImageFrame.className = "project-cover-image-frame";

  if (coverSrc) {
    const img = document.createElement("img");
    img.className = "project-cover-img";
    img.src = coverSrc;
    img.alt = `${safeText(project.title)} cover image`;
    img.style.setProperty("--project-cover-image-scale", String(coverScale));
    coverImageFrame.appendChild(img);
  }

  wrapper.appendChild(coverBg);
  wrapper.appendChild(coverImageFrame);
  coverBannerEl.appendChild(wrapper);

  initProjectCoverExpansion({
    coverBannerEl,
    coverBg,
    coverImageFrame,
    coverColor
  });
}

function renderProjectText(project) {
  const textEl = document.getElementById("projectText");
  if (!textEl) return;

  const s = project.detail.sections || {};
  removeChildren(textEl);

  const sections = [
    ["Summary", s.summary],
    ["Challenge", s.challenge],
    ["Approach", s.approach],
    ["Creative Direction", s.creativeDirection],
    ["Key Visual System", s.keyVisualSystem]
  ];

  sections.forEach(([heading, body]) => {
    appendHeadingAndParagraph(textEl, heading, body);
  });

  const resultHeading = document.createElement("h3");
  resultHeading.textContent = "Result";
  textEl.appendChild(resultHeading);

  const resultList = document.createElement("ul");
  (s.result || []).forEach(item => {
    const li = document.createElement("li");
    li.textContent = safeText(item);
    resultList.appendChild(li);
  });
  textEl.appendChild(resultList);

  appendHeadingAndParagraph(textEl, s.takeawayTitle || "Takeaway", s.takeaway);

  if (s.link) {
    const wrap = document.createElement("div");
    wrap.className = "more-insights";

    const link = document.createElement("a");
    link.className = "more-insights-btn";
    link.href = safeText(s.link);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "More insights";

    wrap.appendChild(link);
    textEl.appendChild(wrap);
  }
}

function appendHeadingAndParagraph(root, headingText, paragraphText) {
  const h3 = document.createElement("h3");
  h3.textContent = safeText(headingText);

  const p = document.createElement("p");
  p.textContent = safeText(paragraphText);

  root.appendChild(h3);
  root.appendChild(p);
}

function renderProjectImages(project) {
  const imagesEl = document.getElementById("projectImages");
  if (!imagesEl) return;

  removeChildren(imagesEl);
  const fragment = document.createDocumentFragment();

  (project.detail.images || []).forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = `image-row ${safeText(row.layout)}`.trim();

    (row.items || []).forEach(item => {
      rowEl.appendChild(createProjectMediaItem(item));
    });

    fragment.appendChild(rowEl);
  });

  imagesEl.appendChild(fragment);
}

function createProjectMediaItem(item) {
  if (item.type === "video") return createCustomVideoBlock(item);
  if (item.type === "compare") return createCompareBlock(item);

  const img = document.createElement("img");
  img.src = safeText(item.src);
  img.alt = safeText(item.alt);
  img.loading = "lazy";
  return img;
}

function createCustomVideoBlock(item) {
  const template = document.createElement("template");

  template.innerHTML = `
    <div class="custom-video" data-custom-video>
      <video
        class="custom-video-media"
        playsinline
        preload="metadata"
        disablepictureinpicture
        disableremoteplayback
        controlslist="nodownload noplaybackrate noremoteplayback"
      ></video>

      <button class="custom-video-play" type="button" aria-label="Play video">
        <span class="play-blob">
          <span class="play-icon"></span>
        </span>
      </button>

      <div class="custom-video-controls" hidden>
        <input class="video-progress" type="range" min="0" max="100" value="0" step="0.1" aria-label="Video progress">

        <div class="video-volume" data-volume-control>
          <button class="video-volume-btn" type="button" aria-label="Mute video" aria-pressed="false">
            <svg class="volume-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path class="volume-speaker" d="M4 9.5H8L13 5V19L8 14.5H4V9.5Z" />
              <path class="volume-wave volume-wave-one" d="M16 9C17 10 17 14 16 15" />
              <path class="volume-wave volume-wave-two" d="M18.5 6.5C21 9 21 15 18.5 17.5" />
              <path class="volume-muted-line" d="M5 5L19 19" />
            </svg>
          </button>

          <div class="volume-popover">
            <input class="volume-slider" type="range" min="0" max="1" step="0.01" value="1" aria-label="Volume">
          </div>
        </div>

        <span class="video-time">0:00</span>
      </div>
    </div>
  `;

  const block = template.content.firstElementChild;
  const video = qs("video", block);

  video.src = safeText(item.src);
  video.setAttribute("aria-label", safeText(item.alt || "Project video"));

  return block;
}

function createCompareBlock(item) {
  const projectSlug = document.body.dataset.projectSlug || "";
  const isDBProject = projectSlug.toLowerCase() === "dbnavigatorredesign";
  const beforeLabel = isDBProject ? "Darkmode" : "Before";
  const afterLabel = isDBProject ? "Lightmode" : "After";

  const group = document.createElement("div");
  group.className = "compare-tabs";
  group.dataset.compareTabs = "";

  const controls = document.createElement("div");
  controls.className = "compare-tabs-controls";
  controls.setAttribute("role", "tablist");

  const afterButton = createCompareButton("after", afterLabel, true);
  const beforeButton = createCompareButton("before", beforeLabel, false);
  controls.appendChild(afterButton);
  controls.appendChild(beforeButton);

  const panels = document.createElement("div");
  panels.className = "compare-tabs-panels";
  panels.appendChild(createComparePanel("after", item.after, item.altAfter, true));
  panels.appendChild(createComparePanel("before", item.before, item.altBefore, false));

  group.appendChild(controls);
  group.appendChild(panels);

  return group;
}

function createCompareButton(target, label, isActive) {
  const button = document.createElement("button");
  button.className = `compare-tab-btn${isActive ? " active" : ""}`;
  button.dataset.target = target;
  button.setAttribute("aria-selected", String(isActive));
  button.type = "button";
  button.textContent = label;
  return button;
}

function createComparePanel(name, src, alt, isActive) {
  const panel = document.createElement("div");
  panel.className = `compare-tab-panel${isActive ? " active" : ""}`;
  panel.dataset.panel = name;
  panel.hidden = !isActive;

  const row = document.createElement("div");
  row.className = "image-row one";

  const img = document.createElement("img");
  img.src = safeText(src);
  img.alt = safeText(alt);

  row.appendChild(img);
  panel.appendChild(row);
  return panel;
}

function renderProjectExtraSlider(project) {
  const projectDetailSection = qs(".project-detail-section");
  let extraRectEl = document.getElementById("projectExtraRect");

  if (!extraRectEl && projectDetailSection) {
    extraRectEl = document.createElement("section");
    extraRectEl.id = "projectExtraRect";
    projectDetailSection.insertAdjacentElement("afterend", extraRectEl);
  }

  if (!extraRectEl) return;

  const editorialArtDirectedCaseStudyImages = project.detail.editorialArtDirectedCaseStudyImages || [];

  if (!editorialArtDirectedCaseStudyImages.length) {
    extraRectEl.hidden = true;
    return;
  }

  extraRectEl.hidden = false;
  removeChildren(extraRectEl);

  const sliderWrap = document.createElement("div");
  sliderWrap.className = "project-extra-slider-wrap";

  const leftArrow = createExtraArrow("project-extra-arrow-left", "Previous image", "‹");
  const rightArrow = createExtraArrow("project-extra-arrow-right", "Next image", "›");

  const extraRect = document.createElement("div");
  extraRect.className = "project-extra-rect";

  const track = document.createElement("div");
  track.className = "project-extra-track";

  const base = getBasePath();

  editorialArtDirectedCaseStudyImages.forEach(image => {
    const item = document.createElement("figure");
    item.className = "project-extra-item";

    const img = document.createElement("img");
    img.className = "project-extra-img";
    img.src = normalizePath(image.src, base);
    img.alt = safeText(image.alt);
    img.draggable = false;

    item.appendChild(img);
    track.appendChild(item);
  });

  extraRect.appendChild(track);
  sliderWrap.appendChild(leftArrow);
  sliderWrap.appendChild(extraRect);
  sliderWrap.appendChild(rightArrow);
  extraRectEl.appendChild(sliderWrap);

  initeditorialArtDirectedCaseStudyImageslider(sliderWrap);
}

function createExtraArrow(className, label, text) {
  const button = document.createElement("button");
  button.className = `project-extra-arrow ${className}`;
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.textContent = text;
  return button;
}

/* EXTRA IMAGE SLIDER */
function initeditorialArtDirectedCaseStudyImageslider(sliderWrap) {
  if (!sliderWrap) return;

  if (sliderWrap._sliderCleanup) sliderWrap._sliderCleanup();

  const track = qs(".project-extra-track", sliderWrap);
  const items = qsa(".project-extra-item", sliderWrap);
  const leftArrow = qs(".project-extra-arrow-left", sliderWrap);
  const rightArrow = qs(".project-extra-arrow-right", sliderWrap);

  if (!track || !items.length || !leftArrow || !rightArrow) return;

  let currentIndex = 0;
  const controller = new AbortController();

  function updateArrows() {
    leftArrow.hidden = currentIndex === 0;
    rightArrow.hidden = currentIndex >= items.length - 1;
  }

  function scrollToImage(index, behavior = "smooth") {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    const item = items[currentIndex];

    const targetScroll = currentIndex === 0
      ? 0
      : item.offsetLeft + item.offsetWidth / 2 - track.clientWidth / 2;

    track.scrollTo({ left: targetScroll, behavior });
    updateArrows();
  }

  leftArrow.addEventListener("click", () => scrollToImage(currentIndex - 1), { signal: controller.signal });
  rightArrow.addEventListener("click", () => scrollToImage(currentIndex + 1), { signal: controller.signal });

  window.addEventListener("resize", () => scrollToImage(currentIndex, "auto"), { signal: controller.signal });

  items.forEach(item => {
    const img = qs("img", item);
    if (img && !img.complete) {
      img.addEventListener("load", () => scrollToImage(currentIndex, "auto"), {
        once: true,
        signal: controller.signal
      });
    }
  });

  sliderWrap._sliderCleanup = () => controller.abort();
  scrollToImage(0, "auto");
}

/* FILTERS */
function initFilters() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const projectItems = qsa(".project-item", projectsGrid);
  const originalOrder = [...projectItems];
  const filterBtns = qsa(".filter-btn").filter(btn => btn.dataset.filter);
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

    if (showAllBtn) showAllBtn.classList.toggle("active", activeFilter === null);
  }

  function updateStats() {
    const total = projectItems.length;
    const visible = projectItems.filter(item => !item.classList.contains("hide")).length;
    const hidden = total - visible;

    if (totalCountEl) totalCountEl.textContent = String(total);
    if (visibleCountEl) visibleCountEl.textContent = String(visible);
    if (hiddenCountEl) hiddenCountEl.textContent = String(hidden);
  }

  function restoreOriginalOrder() {
    originalOrder.forEach(item => projectsGrid.appendChild(item));
  }

  function applyFilters() {
    projectItems.forEach(item => {
      const categories = (item.dataset.category || "").split("|");
      const match = activeFilter === null || categories.includes(activeFilter);
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
      window.setTimeout(() => section.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }
}

/* COMPARE TABS */
function initCompareTabs() {
  qsa("[data-compare-tabs]").forEach(group => {
    const buttons = qsa(".compare-tab-btn", group);
    const panels = qsa(".compare-tab-panel", group);

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
      button.addEventListener("click", () => activateTab(button.dataset.target));

      button.addEventListener("keydown", event => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

        event.preventDefault();

        const currentIndex = buttons.indexOf(button);
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
        const nextButton = buttons[nextIndex];

        nextButton.focus();
        activateTab(nextButton.dataset.target);
      });
    });
  });
}

/* PROJECT COVER EXPANSION */
function initProjectCoverExpansion({ coverBannerEl, coverBg, coverImageFrame, coverColor }) {
  if (!coverBannerEl || !coverBg || !coverImageFrame || !window.gsap) return;

  if (coverBannerEl._coverExpansionCleanup) coverBannerEl._coverExpansionCleanup();

  gsap.killTweensOf([coverBg, coverImageFrame]);

  const root = document.documentElement;
  const controller = new AbortController();
  const EXPAND_AT = 24;
  const SHRINK_AT = 2;

  let isExpanded = false;
  let resizeTimeout = null;
  let scrollTicking = false;

  function getBannerPadding() {
    if (window.innerWidth <= 640) return 16;
    if (window.innerWidth <= 1000) return 18;
    return 20;
  }

  function getBannerRadius() {
    if (window.innerWidth <= 640) return 20;
    if (window.innerWidth <= 1000) return 24;
    return 32;
  }

  function getCollapsedWidth() {
    const padding = getBannerPadding();
    return Math.round(Math.min(window.innerWidth - padding * 2, 1400));
  }

  function getSideInset() {
    return Math.max((window.innerWidth - getCollapsedWidth()) / 2, 0);
  }

  function getClipPath(sideInset, radius) {
    return `inset(0px ${sideInset}px 0px ${sideInset}px round ${radius}px)`;
  }

  function setProjectBackground(background) {
    root.style.setProperty("--project-page-bg", background);
  }

  function setImageFrameCollapsed(radius) {
    gsap.set(coverImageFrame, {
      width: `${getCollapsedWidth()}px`,
      borderRadius: `${radius}px`
    });
  }

  function setCollapsedInstant() {
    const radius = getBannerRadius();
    const clipPath = getClipPath(getSideInset(), radius);

    gsap.set(coverBg, { clipPath, webkitClipPath: clipPath });
    setImageFrameCollapsed(radius);

    isExpanded = false;
    document.body.classList.remove("is-project-cover-expanded");
    setProjectBackground("var(--bg-main)");
  }

  function setExpandedInstant() {
    const clipPath = getClipPath(0, 0);

    gsap.set(coverBg, { clipPath, webkitClipPath: clipPath });
    setImageFrameCollapsed(0);

    isExpanded = true;
    document.body.classList.add("is-project-cover-expanded");
    setProjectBackground(coverColor);
  }

  function expandCover(animate = true) {
    if (isExpanded) return;

    isExpanded = true;
    document.body.classList.add("is-project-cover-expanded");
    setProjectBackground(coverColor);

    const clipPath = getClipPath(0, 0);

    gsap.to(coverBg, {
      clipPath,
      webkitClipPath: clipPath,
      duration: animate ? 0.7 : 0,
      ease: "power3.out",
      overwrite: true
    });

    gsap.to(coverImageFrame, {
      width: `${getCollapsedWidth()}px`,
      borderRadius: 0,
      duration: animate ? 0.7 : 0,
      ease: "power3.out",
      overwrite: true
    });
  }

  function shrinkCover(animate = true) {
    if (!isExpanded) return;

    isExpanded = false;
    document.body.classList.remove("is-project-cover-expanded");
    setProjectBackground("var(--bg-main)");

    const radius = getBannerRadius();
    const clipPath = getClipPath(getSideInset(), radius);

    gsap.to(coverBg, {
      clipPath,
      webkitClipPath: clipPath,
      duration: animate ? 0.7 : 0,
      ease: "power3.out",
      overwrite: true
    });

    gsap.to(coverImageFrame, {
      width: `${getCollapsedWidth()}px`,
      borderRadius: `${radius}px`,
      duration: animate ? 0.7 : 0,
      ease: "power3.out",
      overwrite: true
    });
  }

  function checkState() {
    if (window.scrollY >= EXPAND_AT) {
      expandCover(true);
      return;
    }

    if (window.scrollY <= SHRINK_AT) shrinkCover(true);
  }

  function onScroll() {
    if (scrollTicking) return;

    scrollTicking = true;

    requestAnimationFrame(() => {
      checkState();
      scrollTicking = false;
    });
  }

  function onResize() {
    clearTimeout(resizeTimeout);

    resizeTimeout = window.setTimeout(() => {
      if (isExpanded) setExpandedInstant();
      else setCollapsedInstant();

      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }, 120);
  }

  if (window.scrollY >= EXPAND_AT) setExpandedInstant();
  else setCollapsedInstant();

  window.addEventListener("scroll", onScroll, { passive: true, signal: controller.signal });
  window.addEventListener("resize", onResize, { signal: controller.signal });

  coverBannerEl._coverExpansionCleanup = () => {
    clearTimeout(resizeTimeout);
    controller.abort();
    gsap.killTweensOf([coverBg, coverImageFrame]);
  };
}

/* SMOOTH SCROLL */
function registerScrollTrigger() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}

function initSmoothScroll() {
  if (prefersReducedMotion || !window.Lenis || !window.gsap || !window.ScrollTrigger) return;

  lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add(time => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

function initScrollToTop() {
  const button = qs("#toTop");
  if (!button) return;

  button.addEventListener("click", () => {
    if (lenis && !prefersReducedMotion) {
      lenis.scrollTo(0, { duration: 1.2 });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  });
}

/* SCROLL REVEAL */
const SCROLL_REVEAL_DEFAULTS = {
  enableBlur: true,
  baseOpacity: 0.12,
  baseRotation: 2,
  blurStrength: 4,
  wordStagger: 0.018,
  rotationStart: "top bottom",
  rotationEnd: "center 70%",
  wordStart: "top 85%",
  wordEnd: "center 62%",
  scroller: window
};

function applyReducedMotionState() {
  qsa(".reveal-title, .reveal-text, .reveal-list-item").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  });

  qsa(".project-item").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.transition = "none";
  });
}

function splitScrollRevealText(el) {
  if (el.dataset.scrollRevealReady) return;

  const originalText = el.textContent;
  const parts = originalText.split(/(\s+)/);

  el.innerHTML = parts.map(part => {
    if (/^\s+$/.test(part)) return part;
    return `<span class="word">${part}</span>`;
  }).join("");

  el.dataset.scrollRevealReady = "true";
}

function createScrollReveal(el, options = {}) {
  if (!el || prefersReducedMotion || !window.gsap || !window.ScrollTrigger) return;

  const settings = { ...SCROLL_REVEAL_DEFAULTS, ...options };
  splitScrollRevealText(el);

  const words = qsa(".word", el);
  if (!words.length) return;

  const shouldRotate = !el.classList.contains("reveal-list-item");

  if (shouldRotate && settings.baseRotation !== 0) {
    gsap.fromTo(el, {
      transformOrigin: "0% 50%",
      rotate: settings.baseRotation
    }, {
      rotate: 0,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scroller: settings.scroller,
        start: settings.rotationStart,
        end: settings.rotationEnd,
        scrub: true
      }
    });
  }

  gsap.fromTo(words, {
    opacity: settings.baseOpacity,
    filter: settings.enableBlur ? `blur(${settings.blurStrength}px)` : "blur(0px)"
  }, {
    opacity: 1,
    filter: "blur(0px)",
    stagger: settings.wordStagger,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      scroller: settings.scroller,
      start: settings.wordStart,
      end: settings.wordEnd,
      scrub: true
    }
  });
}

function initMotionSystem() {
  if (prefersReducedMotion) {
    applyReducedMotionState();
    return;
  }

  if (!window.gsap || !window.ScrollTrigger) return;

  qsa(".reveal-title").forEach(el => {
    createScrollReveal(el, {
      baseOpacity: 0.06,
      baseRotation: 3,
      blurStrength: 8,
      wordStagger: 0.025,
      wordStart: "top 88%",
      wordEnd: "center 68%",
      rotationEnd: "center 70%"
    });
  });

  qsa(".reveal-text").forEach(el => {
    createScrollReveal(el, {
      baseOpacity: 0.14,
      baseRotation: 1.5,
      blurStrength: 4,
      wordStagger: 0.014,
      wordStart: "top 86%",
      wordEnd: "center 64%",
      rotationEnd: "center 72%"
    });
  });

  qsa(".reveal-list-item").forEach(el => {
    createScrollReveal(el, {
      baseOpacity: 0.12,
      baseRotation: 0,
      blurStrength: 3,
      wordStagger: 0.018,
      wordStart: "top 88%",
      wordEnd: "center 70%"
    });
  });

  ScrollTrigger.refresh();
}

/* HOVER AND POP IN */
function initHoverEffects() {
  if (prefersReducedMotion) return;

  qsa(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => card.classList.add("is-hovered"));
    card.addEventListener("mouseleave", () => card.classList.remove("is-hovered"));
  });
}

function initProjectPopIn() {
  const projectItems = qsa(".project-item");

  if (prefersReducedMotion) {
    projectItems.forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.transition = "none";
    });
    return;
  }

  projectItems.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";

    window.setTimeout(() => {
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, i * 80);
  });
}

/* STAMP IMAGES */
function initStampImages() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const section = qs("#transformativeCreativity");
  if (!section) return;

  const frame = qs(".dc-content-frame", section);
  const layers = gsap.utils.toArray(qsa(".dc-image-layer", section));
  const images = layers.map(layer => qs("img", layer)).filter(Boolean);
  const typeStage = qs(".dc-type-stage", section);

  if (!frame || layers.length < 2) return;

  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.id === "stampImages" || trigger.vars.id === "shutterImages") {
      trigger.kill();
    }
  });

  gsap.killTweensOf(layers);
  gsap.killTweensOf(images);

  const CONFIG = {
    holdDuration: 1.35,
    stampDuration: 1.15,
    scrollPerUnit: 420,
    enterX: -90,
    enterY: 90,
    enterScale: 1.18,
    overshootX: -10,
    overshootY: 10,
    overshootScale: 1.32,
    finalScale: 1,
    imageScale: 1.04,
    topTextMove: 260,
    bottomTextMove: -260
  };

  gsap.set(layers, {
    autoAlpha: 0,
    xPercent: CONFIG.enterX,
    yPercent: CONFIG.enterY,
    scale: CONFIG.enterScale,
    transformOrigin: "0% 100%",
    force3D: true,
    zIndex: index => index + 1
  });

  gsap.set(layers[0], {
    autoAlpha: 1,
    xPercent: 0,
    yPercent: 0,
    scale: CONFIG.finalScale
  });

  gsap.set(images, {
    scale: CONFIG.imageScale,
    transformOrigin: "center center",
    force3D: true
  });

  if (prefersReducedMotion) return;

  const tl = gsap.timeline({ defaults: { ease: "none" }, paused: true });
  tl.addLabel("image-0", 0);

  for (let index = 1; index < layers.length; index++) {
    const layer = layers[index];
    const image = qs("img", layer);

    tl.to({}, { duration: CONFIG.holdDuration });

    tl.set(layer, {
      autoAlpha: 1,
      xPercent: CONFIG.enterX,
      yPercent: CONFIG.enterY,
      scale: CONFIG.enterScale,
      zIndex: index + 1,
      transformOrigin: "0% 100%"
    });

    tl.fromTo(layer, {
      xPercent: CONFIG.enterX,
      yPercent: CONFIG.enterY,
      scale: CONFIG.enterScale
    }, {
      xPercent: CONFIG.overshootX,
      yPercent: CONFIG.overshootY,
      scale: CONFIG.overshootScale,
      duration: CONFIG.stampDuration * 0.45,
      ease: "power2.out"
    });

    tl.to(layer, {
      xPercent: 0,
      yPercent: 0,
      scale: CONFIG.finalScale,
      duration: CONFIG.stampDuration * 0.55,
      ease: "power3.out"
    });

    if (image) {
      tl.fromTo(image, { scale: 1.1 }, {
        scale: CONFIG.imageScale,
        duration: CONFIG.stampDuration,
        ease: "power2.out"
      }, "<-" + CONFIG.stampDuration);
    }

    tl.addLabel(`image-${index}`);
  }

  if (typeStage) {
    tl.to(typeStage, {
      "--word-top-scroll": `${CONFIG.topTextMove}px`,
      "--word-bottom-scroll": `${CONFIG.bottomTextMove}px`,
      duration: tl.duration(),
      ease: "none"
    }, 0);
  }

  ScrollTrigger.create({
    id: "stampImages",
    trigger: section,
    start: "top top",
    end: () => "+=" + tl.duration() * CONFIG.scrollPerUnit,
    scrub: 1.15,
    pin: frame,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    animation: tl
  });
}

/* CUSTOM VIDEOS */
function initCustomVideos() {
  qsa("[data-custom-video]").forEach(block => {
    const video = qs(".custom-video-media", block);
    const playButton = qs(".custom-video-play", block);
    const blob = qs(".play-blob", block);
    const progress = qs(".video-progress", block);
    const controls = qs(".custom-video-controls", block);
    const time = qs(".video-time", block);
    const volumeButton = qs(".video-volume-btn", block);
    const volumeSlider = qs(".volume-slider", block);

    if (!video || !playButton) return;

    if (!blob || !progress || !controls || !time || !volumeButton || !volumeSlider) {
      video.setAttribute("controls", "controls");
      return;
    }

    video.removeAttribute("controls");
    video.disablePictureInPicture = true;
    video.disableRemotePlayback = true;
    video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");

    video.addEventListener("contextmenu", event => event.preventDefault());

    let controlsTimeout = null;
    let blobReturnTween = null;
    let blobFollowTween = null;
    let fillExitTimeout = null;
    let fillResetTimeout = null;
    let previousVolume = 1;

    const FILL_EXIT_DURATION = 780;
    const FILL_RESET_DELAY = 180;
    const FILL_AFTER_BLOB_DELAY = 260;

    video.volume = 1;
    video.muted = false;
    volumeSlider.value = "1";

    function formatTime(seconds) {
      if (!Number.isFinite(seconds)) return "0:00";
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
      return `${minutes}:${remainingSeconds}`;
    }

    function showControls() {
      if (video.paused) return;

      controls.hidden = false;
      block.classList.add("is-controls-visible");
      clearTimeout(controlsTimeout);

      controlsTimeout = setTimeout(() => {
        block.classList.remove("is-controls-visible");
      }, 1600);
    }

    function hideControls() {
      block.classList.remove("is-controls-visible");

      window.setTimeout(() => {
        if (!block.classList.contains("is-controls-visible")) controls.hidden = true;
      }, 280);
    }

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function killBlobTweens() {
      if (blobReturnTween) blobReturnTween.kill();
      if (blobFollowTween) blobFollowTween.kill();
      blobReturnTween = null;
      blobFollowTween = null;
    }

    function setBlobAngle(angle) {
      const inverse = Number.isFinite(angle) ? angle * -1 : 0;
      return {
        "--blob-angle": `${angle || 0}rad`,
        "--blob-angle-inverse": `${inverse}rad`
      };
    }

    function startFillHover() {
      clearTimeout(fillExitTimeout);
      clearTimeout(fillResetTimeout);
      block.classList.remove("is-fill-exiting", "is-fill-resetting");
      block.classList.add("is-video-hovered");
    }

    function playFillExit() {
      clearTimeout(fillExitTimeout);
      clearTimeout(fillResetTimeout);
      block.classList.remove("is-fill-exiting", "is-fill-resetting");
      block.classList.add("is-video-hovered");
      void block.offsetWidth;
      block.classList.remove("is-video-hovered");
      block.classList.add("is-fill-exiting");

      fillExitTimeout = setTimeout(() => {
        block.classList.remove("is-fill-exiting");
        block.classList.add("is-fill-resetting");

        fillResetTimeout = setTimeout(() => {
          block.classList.remove("is-fill-resetting");
        }, FILL_RESET_DELAY);
      }, FILL_EXIT_DURATION);
    }

    function resetBlob(animate = true) {
      if (!block.classList.contains("is-fill-exiting")) block.classList.remove("is-near");
      killBlobTweens();

      blobFollowTween = gsap.to(blob, {
        duration: animate ? 0.2 : 0,
        "--pull-x": "0px",
        "--pull-y": "0px",
        "--blob-scale-x": 1,
        "--blob-scale-y": 1,
        ...setBlobAngle(0),
        ease: "power3.out",
        overwrite: "auto"
      });
    }

    function releaseBlobFromVideoEdge(event, onSettled = null) {
      const rect = block.getBoundingClientRect();
      const videoCenterX = rect.left + rect.width / 2;
      const videoCenterY = rect.top + rect.height / 2;
      const edgeX = clamp(event.clientX, rect.left, rect.right);
      const edgeY = clamp(event.clientY, rect.top, rect.bottom);
      const dx = edgeX - videoCenterX;
      const dy = edgeY - videoCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 1) {
        resetBlob(true);
        if (typeof onSettled === "function") onSettled();
        return;
      }

      const dirX = dx / distance;
      const dirY = dy / distance;
      const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
      const edgeStrength = Math.min(distance / maxDistance, 1);
      const startPull = 46 + edgeStrength * 20;
      const overshootPull = 6 + edgeStrength * 4;

      killBlobTweens();
      block.classList.add("is-near");

      gsap.set(blob, {
        "--pull-x": `${dirX * startPull}px`,
        "--pull-y": `${dirY * startPull}px`,
        "--blob-scale-x": 1.06,
        "--blob-scale-y": 1.06,
        ...setBlobAngle(0)
      });

      blobReturnTween = gsap.timeline({
        defaults: { overwrite: true },
        onComplete: () => {
          block.classList.remove("is-near");
          if (typeof onSettled === "function") onSettled();
        }
      });

      blobReturnTween
        .to(blob, {
          duration: 0.48,
          "--pull-x": `${dirX * -overshootPull}px`,
          "--pull-y": `${dirY * -overshootPull}px`,
          "--blob-scale-x": 0.98,
          "--blob-scale-y": 0.98,
          ...setBlobAngle(0),
          ease: "power3.out"
        })
        .to(blob, {
          duration: 0.82,
          "--pull-x": "0px",
          "--pull-y": "0px",
          "--blob-scale-x": 1,
          "--blob-scale-y": 1,
          ...setBlobAngle(0),
          ease: "power4.out"
        });
    }

    function updateVolumeUI(animateSlider = true) {
      const isMuted = video.muted || video.volume === 0;
      const visibleVolume = isMuted ? 0 : video.volume;

      block.classList.toggle("is-muted", isMuted);
      volumeButton.setAttribute("aria-pressed", String(isMuted));
      volumeButton.setAttribute("aria-label", isMuted ? "Unmute video" : "Mute video");

      if (animateSlider && window.gsap) {
        gsap.to(volumeSlider, { duration: 0.28, value: visibleVolume, ease: "power2.out" });
      } else {
        volumeSlider.value = String(visibleVolume);
      }
    }

    async function playVideo() {
      try {
        await video.play();
      } catch (error) {
        warnLog("Video could not play:", error);
      }
    }

    function toggleVideo() {
      if (video.paused) playVideo();
      else video.pause();
    }

    playButton.addEventListener("click", event => {
      event.preventDefault();
      toggleVideo();
    });

    block.addEventListener("click", event => {
      if (event.target.closest(".custom-video-play") || event.target.closest(".custom-video-controls")) return;
      toggleVideo();
    });

    volumeButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      if (video.muted || video.volume === 0) {
        video.muted = false;
        video.volume = previousVolume || 0.8;
      } else {
        previousVolume = video.volume > 0 ? video.volume : previousVolume;
        video.muted = true;
      }

      updateVolumeUI(true);
      showControls();
    });

    volumeSlider.addEventListener("input", event => {
      event.stopPropagation();
      const nextVolume = Number(volumeSlider.value);
      video.volume = nextVolume;
      video.muted = nextVolume === 0;
      if (nextVolume > 0) previousVolume = nextVolume;
      updateVolumeUI(false);
      showControls();
    });

    ["click", "pointerdown"].forEach(type => {
      volumeSlider.addEventListener(type, event => event.stopPropagation());
    });

    video.addEventListener("play", () => {
      clearTimeout(fillExitTimeout);
      clearTimeout(fillResetTimeout);
      block.classList.add("is-playing");
      block.classList.remove("is-near", "is-video-hovered", "is-fill-exiting", "is-fill-resetting");
      controls.hidden = false;
      showControls();
    });

    video.addEventListener("pause", () => {
      block.classList.remove("is-playing");
      hideControls();
      resetBlob();
    });

    video.addEventListener("ended", () => {
      block.classList.remove("is-playing");
      progress.value = 0;
      video.currentTime = 0;
      hideControls();
      resetBlob();
    });

    video.addEventListener("loadedmetadata", () => {
      time.textContent = "0:00";
    });

    video.addEventListener("timeupdate", () => {
      if (!video.duration) return;
      progress.value = (video.currentTime / video.duration) * 100;
      time.textContent = formatTime(video.currentTime);
    });

    progress.addEventListener("input", () => {
      if (!video.duration) return;
      video.currentTime = (progress.value / 100) * video.duration;
      showControls();
    });

    block.addEventListener("mouseenter", () => {
      if (!block.classList.contains("is-playing")) startFillHover();
      if (!video.paused) showControls();
    });

    block.addEventListener("mousemove", event => {
      showControls();
      if (block.classList.contains("is-playing")) return;

      const buttonRect = playButton.getBoundingClientRect();
      const centerX = buttonRect.left + buttonRect.width / 2;
      const centerY = buttonRect.top + buttonRect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const deadZone = 46;
      const influenceRadius = 260;

      if (distance < deadZone || distance > influenceRadius) {
        resetBlob(true);
        return;
      }

      if (blobReturnTween) {
        blobReturnTween.kill();
        blobReturnTween = null;
      }

      const rawStrength = (distance - deadZone) / (influenceRadius - deadZone);
      const strength = Math.pow(rawStrength, 0.85);
      const angle = Math.atan2(dy, dx);
      const pullX = dx * strength * 0.3;
      const pullY = dy * strength * 0.3;
      const scaleX = 1 + strength * 0.28;
      const scaleY = 1 - strength * 0.14;

      block.classList.add("is-near");

      blobFollowTween = gsap.to(blob, {
        duration: 0.24,
        "--pull-x": `${pullX}px`,
        "--pull-y": `${pullY}px`,
        "--blob-scale-x": scaleX,
        "--blob-scale-y": scaleY,
        ...setBlobAngle(angle),
        ease: "power3.out",
        overwrite: "auto"
      });
    });

    block.addEventListener("mouseleave", event => {
      if (!block.classList.contains("is-playing")) {
        releaseBlobFromVideoEdge(event, () => {
          window.setTimeout(() => {
            if (!block.matches(":hover") && !block.classList.contains("is-playing")) {
              playFillExit();
            }
          }, FILL_AFTER_BLOB_DELAY);
        });
      }

      if (!video.paused) hideControls();
    });

    updateVolumeUI(false);
  });
}

/* HERO */
function cloneHeroOutlineLayer() {
  const fillGrid = document.getElementById("heroGridFill");
  const outlineGrid = document.getElementById("heroGridOutline");

  if (!fillGrid || !outlineGrid || outlineGrid.dataset.ready) return;

  outlineGrid.innerHTML = fillGrid.innerHTML;
  outlineGrid.dataset.ready = "true";
}

function initHeroRollSync() {
  const section = qs(".hero-grid-section");
  if (!section || section.dataset.rollSyncReady) return;

  section.dataset.rollSyncReady = "true";

  if (prefersReducedMotion) {
    section.style.setProperty("--hero-roll-y", "0em");
    return;
  }

  const duration = 6200;
  const delay = 1150;
  const startTime = performance.now();

  let rafId = null;
  let isActive = true;

  function easeInOut(t) {
    return 0.5 - Math.cos(Math.PI * t) / 2;
  }

  function getRollValue(progress) {
    if (progress <= 0.36) return 0;

    if (progress <= 0.46) {
      const localProgress = (progress - 0.36) / 0.10;
      return -easeInOut(localProgress);
    }

    if (progress <= 0.82) return -1;

    if (progress <= 0.92) {
      const localProgress = (progress - 0.82) / 0.10;
      return -1 - easeInOut(localProgress);
    }

    return -2;
  }

  function update(now) {
    if (!isActive) return;

    const elapsed = now - startTime - delay;

    if (elapsed < 0) {
      section.style.setProperty("--hero-roll-y", "0em");
      rafId = requestAnimationFrame(update);
      return;
    }

    const progress = (elapsed % duration) / duration;
    const y = getRollValue(progress);
    section.style.setProperty("--hero-roll-y", `${y}em`);

    rafId = requestAnimationFrame(update);
  }

  function start() {
    if (isActive && rafId) return;
    isActive = true;
    rafId = requestAnimationFrame(update);
  }

  function stop() {
    isActive = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) start();
      else stop();
    }, { rootMargin: "300px 0px" });

    observer.observe(section);
  } else {
    start();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
}

function initHeroDecryptAnimation() {
  const nodes = qsa("[data-hero-decrypt]");
  if (!nodes.length) return;

  const groups = new Map();

  nodes.forEach(node => {
    const key = node.dataset.heroDecrypt;
    const text = node.dataset.heroText || node.textContent.trim();
    node.dataset.heroText = text;

    if (!groups.has(key)) groups.set(key, { text, nodes: [] });
    groups.get(key).nodes.push(node);
  });

  groups.forEach(group => {
    group.nodes.forEach(node => {
      node.textContent = group.text;
    });
  });

  if (prefersReducedMotion) return;

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()_+";

  function randomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  function scrambleText(text, revealedCount) {
    return text.split("").map((char, index) => {
      if (char === " ") return " ";
      if (index < revealedCount) return char;
      return randomChar();
    }).join("");
  }

  Array.from(groups.values()).forEach((group, groupIndex) => {
    const { text, nodes: groupNodes } = group;
    const stepSize = Math.max(1, Math.ceil(text.length / 12));
    const startDelay = 120 + groupIndex * 85;

    groupNodes.forEach(node => {
      node.textContent = scrambleText(text, 0);
    });

    window.setTimeout(() => {
      let revealedCount = 0;

      const interval = window.setInterval(() => {
        revealedCount = Math.min(text.length, revealedCount + stepSize);
        const nextText = revealedCount >= text.length ? text : scrambleText(text, revealedCount);

        groupNodes.forEach(node => {
          node.textContent = nextText;
        });

        if (revealedCount >= text.length) {
          window.clearInterval(interval);
          groupNodes.forEach(node => {
            node.textContent = text;
          });
        }
      }, 42);
    }, startDelay);
  });
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
  registerScrollTrigger();

  loadNavbar();
  setActiveNav();
  initThemeToggle();
  initMobileMenu();
  initNavbarScrollState();

  cloneHeroOutlineLayer();
  initHeroDecryptAnimation();
  initHeroRollSync();

  loadFooter();
  loadLiquidEffectSVG();
  loadGooeyParticles();

  const projectsLoaded = renderProjects();
  if (projectsLoaded) initFilters();

  renderProjectDetail();
  renderOtherProjects();
  initCompareTabs();
  initCustomVideos();

  initSmoothScroll();
  initStampImages();
  initMotionSystem();
  initHoverEffects();
  initProjectPopIn();
  initScrollToTop();

  requestAnimationFrame(() => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
});
