const MOTION = {
  wordStagger: 0.04,
  listStagger: 0.06,
  blur: 14,
  y: 70,
  scale: 0.9,
  scrub: 1,
  start: "top 85%"
};

function splitWords(el) {
  if (el.dataset.wordsReady) return;

  const words = el.textContent.trim().split(" ");

  el.innerHTML = words
    .map(w => `<span class="word">${w}</span>`)
    .join(" ");

  el.dataset.wordsReady = "true";
}

function animateWords(el) {
  const words = el.querySelectorAll(".word");

  gsap.fromTo(
    words,
    {
      opacity: 0,
      y: MOTION.y,
      scale: MOTION.scale,
      filter: `blur(${MOTION.blur}px)`
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      stagger: MOTION.wordStagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: MOTION.start,
        scrub: MOTION.scrub
      }
    }
  );
}

function animateListItem(el) {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 30,
      filter: "blur(10px)"
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: el,
        start: "top 90%"
      }
    }
  );
}

function initMotionSystem() {
  const textBlocks = document.querySelectorAll(
    ".scroll-motion-text, .scroll-motion-paragraph"
  );

  textBlocks.forEach(el => {
    splitWords(el);
    animateWords(el);
  });

  document.querySelectorAll("li").forEach(animateListItem);
}

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

function initProjectPopIn() {
  document.querySelectorAll(".project-item").forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";

    setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 80);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMotionSystem();
  initHoverEffects();
  initProjectPopIn();
});