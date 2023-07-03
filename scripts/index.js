gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 1.3,
    smoothTouch: 0.1,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  const itemsLeft = gsap.utils.toArray(".gallery__left .gallery__item");
  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          scrub: true,
        },
      }
    );
  });

  const itemsRight = gsap.utils.toArray(".gallery__right .gallery__item");
  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          scrub: true,
        },
      }
    );
  });
}
