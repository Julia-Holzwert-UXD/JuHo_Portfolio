function initProjectScrollIndicator() {
  const isProjectPage = document.body.dataset.projectSlug;

  if (!isProjectPage) return;

  let indicator = document.querySelector(".project-scroll-indicator");

  if (!indicator) {
    indicator = document.createElement("div");
    indicator.className = "project-scroll-indicator";
    indicator.setAttribute("aria-hidden", "true");

    indicator.innerHTML = `
      <div class="project-scroll-fill"></div>
      <span class="project-scroll-percent">0%</span>
    `;

    document.body.appendChild(indicator);
  }

  const percentEl = indicator.querySelector(".project-scroll-percent");

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getNavbarHeight() {
    const navbar = document.querySelector(".navbar");
    return navbar ? navbar.offsetHeight : 0;
  }

  function getEndPoint() {
    const moreProjects = document.querySelector(".other-projects-section");

    if (moreProjects) {
      return moreProjects.offsetTop - getNavbarHeight();
    }

    return document.documentElement.scrollHeight - window.innerHeight;
  }

  function updateProjectScrollIndicator() {
    const navbarHeight = getNavbarHeight();

    indicator.style.setProperty(
      "--project-scroll-top",
      `${navbarHeight}px`
    );

    const start = 0;
    const end = getEndPoint();

    const progress = end > start
      ? clamp((window.scrollY - start) / (end - start), 0, 1)
      : 0;

    const percent = Math.round(progress * 100);

    indicator.style.setProperty("--project-scroll-progress", progress);

    if (percentEl) {
      percentEl.textContent = `${percent}%`;
    }
  }

  updateProjectScrollIndicator();

  window.addEventListener("scroll", updateProjectScrollIndicator, {
    passive: true
  });

  window.addEventListener("resize", updateProjectScrollIndicator);

  requestAnimationFrame(updateProjectScrollIndicator);
}

document.addEventListener("DOMContentLoaded", () => {
    initProjectScrollIndicator();
});