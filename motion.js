function initStampImages() {
  gsap.registerPlugin(ScrollTrigger)

  const section = document.querySelector("#transformativeCreativity")
  if (!section) return

  const frame = section.querySelector(".dc-content-frame")
  const layers = gsap.utils.toArray(section.querySelectorAll(".dc-image-layer"))
  const images = layers.map(layer => layer.querySelector("img"))

  if (!frame || layers.length < 2) return

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  ScrollTrigger.getAll().forEach(trigger => {
    if (
      trigger.vars.id === "stampImages" ||
      trigger.vars.id === "shutterImages"
    ) {
      trigger.kill()
    }
  })

  gsap.killTweensOf(layers)
  gsap.killTweensOf(images)

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
    imageScale: 1.04
  }

  gsap.set(layers, {
    autoAlpha: 0,
    xPercent: CONFIG.enterX,
    yPercent: CONFIG.enterY,
    scale: CONFIG.enterScale,
    transformOrigin: "0% 100%",
    force3D: true,
    zIndex: index => index + 1
  })

  gsap.set(layers[0], {
    autoAlpha: 1,
    xPercent: 0,
    yPercent: 0,
    scale: CONFIG.finalScale
  })

  gsap.set(images, {
    scale: CONFIG.imageScale,
    transformOrigin: "center center",
    force3D: true
  })

  if (prefersReducedMotion) return

  const tl = gsap.timeline({
    defaults: {
      ease: "none"
    },
    scrollTrigger: {
      id: "stampImages",
      trigger: section,
      start: "top top",
      end: () => "+=" + tl.duration() * CONFIG.scrollPerUnit,
      scrub: 1.15,
      pin: frame,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  })

  tl.addLabel("image-0")

  for (let index = 1; index < layers.length; index++) {
    const layer = layers[index]
    const image = images[index]

    tl.to({}, {
      duration: CONFIG.holdDuration
    })

    tl.set(layer, {
      autoAlpha: 1,
      xPercent: CONFIG.enterX,
      yPercent: CONFIG.enterY,
      scale: CONFIG.enterScale,
      zIndex: index + 1,
      transformOrigin: "0% 100%"
    })

    tl.fromTo(
      layer,
      {
        xPercent: CONFIG.enterX,
        yPercent: CONFIG.enterY,
        scale: CONFIG.enterScale
      },
      {
        xPercent: CONFIG.overshootX,
        yPercent: CONFIG.overshootY,
        scale: CONFIG.overshootScale,
        duration: CONFIG.stampDuration * 0.45,
        ease: "power2.out"
      }
    )

    tl.to(
      layer,
      {
        xPercent: 0,
        yPercent: 0,
        scale: CONFIG.finalScale,
        duration: CONFIG.stampDuration * 0.55,
        ease: "power3.out"
      }
    )

    tl.fromTo(
      image,
      {
        scale: 1.1
      },
      {
        scale: CONFIG.imageScale,
        duration: CONFIG.stampDuration,
        ease: "power2.out"
      },
      "<-" + CONFIG.stampDuration
    )

    tl.addLabel(`image-${index}`)
  }
}

window.addEventListener("load", () => {
  initStampImages()
  ScrollTrigger.refresh()
})