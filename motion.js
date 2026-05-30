/* ===================================================== */
/* SMOOTH SCROLL */
/* Lenis + GSAP ScrollTrigger */
/* ===================================================== */

let lenis = null;

function initSmoothScroll() {
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

/* ===================================================== */
/* SCROLL WORD REVEAL SYSTEM */
/* Dentsu-style word reveal */
/* ===================================================== */

gsap.registerPlugin(ScrollTrigger);

const SCROLL_REVEAL_DEFAULTS = {
  enableBlur: true,
  baseOpacity: 0.08,
  baseRotation: 3,
  blurStrength: 8,
  wordStagger: 0.035,

  rotationStart: "top bottom",
  rotationEnd: "bottom bottom",

  wordStart: "top bottom-=15%",
  wordEnd: "bottom bottom",

  scroller: window
};

/* ===================================================== */
/* SPLIT TEXT INTO WORDS */
/* ===================================================== */

function splitScrollRevealText(el) {
  if (el.dataset.scrollRevealReady) return;

  const originalText = el.textContent;
  const parts = originalText.split(/(\s+)/);

  el.innerHTML = parts
    .map(part => {
      if (/^\s+$/.test(part)) return part;
      return `<span class="word">${part}</span>`;
    })
    .join("");

  el.dataset.scrollRevealReady = "true";
}

/* ===================================================== */
/* CREATE WORD REVEAL */
/* ===================================================== */

function createScrollReveal(el, options = {}) {
  if (!el) return;

  const settings = {
    ...SCROLL_REVEAL_DEFAULTS,
    ...options
  };

  splitScrollRevealText(el);

  const words = el.querySelectorAll(".word");

  if (!words.length) return;

  const shouldRotate = !el.classList.contains("reveal-list-item");

  if (shouldRotate) {
    gsap.fromTo(
      el,
      {
        transformOrigin: "0% 50%",
        rotate: settings.baseRotation
      },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller: settings.scroller,
          start: settings.rotationStart,
          end: settings.rotationEnd,
          scrub: true
        }
      }
    );
  }

  gsap.fromTo(
    words,
    {
      opacity: settings.baseOpacity,
      filter: settings.enableBlur
        ? `blur(${settings.blurStrength}px)`
        : "blur(0px)"
    },
    {
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
    }
  );
}

/* ===================================================== */
/* INIT MOTION */
/* ===================================================== */

function initMotionSystem() {
  const revealElements = document.querySelectorAll(
    ".reveal-title, .reveal-text, .reveal-list-item"
  );

  revealElements.forEach(el => {
    createScrollReveal(el, {
      baseOpacity: 0.08,
      enableBlur: true,
      baseRotation: 3,
      blurStrength: 8,
      wordStagger: 0.035,
      wordStart: "top bottom-=15%",
      wordEnd: "bottom bottom"
    });
  });

  ScrollTrigger.refresh();
}

/* ===================================================== */
/* HOVER EFFECTS */
/* ===================================================== */

function initHoverEffects() {
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });
}

/* ===================================================== */
/* PROJECT POP IN */
/* ===================================================== */

function initProjectPopIn() {
  document.querySelectorAll(".project-item").forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";

    setTimeout(() => {
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 80);
  });
}

/* ===================================================== */
/* SCROLL TO TOP */
/* ===================================================== */

function initScrollToTop() {
  const button = document.querySelector("#toTop");

  if (!button) return;

  button.addEventListener("click", () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2
      });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ===================================================== */
/* INIT */
/* ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initMotionSystem();
  initHoverEffects();
  initProjectPopIn();
  initScrollToTop();
});