// ============================================================
// main.js — Esperança Da Serra Landing Page
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------------
  // 1. Build photo slides dynamically (optimized WebP assets)
  // ----------------------------------------------------------
  const photoCount = 31;
  const mainWrapper  = document.querySelector('.mainSwiper .swiper-wrapper');
  const thumbsWrapper = document.getElementById('thumbs-wrapper');
  const lightboxItems = [];

  for (let i = 1; i <= photoCount; i++) {
    const gallerySrc = `Assets/Photos/gallery/photo-${i}.webp`;
    const thumbSrc   = `Assets/Photos/thumbs/photo-${i}.webp`;

    // Main slide — native lazy loading (Swiper v11 removed data-src lazy)
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${gallerySrc}" alt="Esperança Da Serra — View ${i}"
      loading="${i <= 2 ? 'eager' : 'lazy'}" decoding="async">`;
    mainWrapper.appendChild(slide);

    // Thumb slide — small files (12–22 KB), safe to eager-load all for instant strip
    const thumb = document.createElement('div');
    thumb.className = 'swiper-slide';
    thumb.innerHTML = `<img src="${thumbSrc}" alt="View ${i}" loading="lazy" decoding="async">`;
    thumbsWrapper.appendChild(thumb);

    // Lightbox uses gallery-res images
    lightboxItems.push({ href: gallerySrc, type: 'image', alt: `Esperança Da Serra — View ${i}` });
  }

  // ----------------------------------------------------------
  // 2. Swiper — Thumbs
  // ----------------------------------------------------------
  const thumbsSwiper = new Swiper('.thumbsSwiper', {
    spaceBetween: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0:    { slidesPerView: 5 },
      480:  { slidesPerView: 7 },
      768:  { slidesPerView: 9 },
      1024: { slidesPerView: 11 },
    },
  });

  // ----------------------------------------------------------
  // 3. Swiper — Main carousel with built-in lazy loading
  // ----------------------------------------------------------
  const mainSwiper = new Swiper('.mainSwiper', {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 0,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: { swiper: thumbsSwiper },
    keyboard: { enabled: true },
    a11y: { enabled: true },
  });

  // ----------------------------------------------------------
  // 4. GLightbox — Gallery
  // ----------------------------------------------------------
  const galleryLightbox = GLightbox({
    elements: lightboxItems,
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
  });

  document.querySelectorAll('.mainSwiper .swiper-slide img').forEach((img, idx) => {
    img.addEventListener('click', () => galleryLightbox.openAt(idx));
  });

  // Award photos lightbox
  GLightbox({ selector: '.glightbox-award', touchNavigation: true, loop: true });

  // ----------------------------------------------------------
  // 5. Video player
  // ----------------------------------------------------------
  const video  = document.getElementById('emerald-video');
  const playBtn = document.getElementById('video-play-btn');

  if (video && playBtn) {
    const showOverlay = () => playBtn.classList.remove('hidden');
    const hideOverlay = () => playBtn.classList.add('hidden');

    playBtn.addEventListener('click', () => video.play());
    video.addEventListener('click',   () => video.paused ? video.play() : video.pause());
    video.addEventListener('playing', hideOverlay);
    video.addEventListener('pause',   showOverlay);
    video.addEventListener('ended',   showOverlay);
  }

  // ----------------------------------------------------------
  // 6. GSAP — Register ScrollTrigger
  // ----------------------------------------------------------
  gsap.registerPlugin(ScrollTrigger);

  // ----------------------------------------------------------
  // 7. Hero entrance
  // ----------------------------------------------------------
  gsap.fromTo(
    '#hero-content > *',
    { opacity: 0, y: 28 },
    { opacity: 1, y: 0, duration: 1.3, stagger: 0.18, ease: 'power2.out', delay: 0.2 }
  );

  // Hero parallax — scrub: 0.8 smooths updates, far fewer per-frame calls than scrub: true
  gsap.to('#hero-bg', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
    },
  });

  // ----------------------------------------------------------
  // 8. Scroll reveal — promote GPU layers before animating
  // ----------------------------------------------------------
  gsap.utils.toArray('.reveal').forEach((el) => {
    // Tell the browser to promote this element to its own compositor layer
    el.style.willChange = 'transform, opacity';

    gsap.fromTo(el,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        // Free the GPU layer once animation is done
        onComplete: () => { el.style.willChange = 'auto'; },
      }
    );
  });

  // ----------------------------------------------------------
  // 9. Counter animation
  // ----------------------------------------------------------
  document.querySelectorAll('.counter').forEach((el) => {
    const target   = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals ?? '0');

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = obj.val.toFixed(decimals); },
        });
      },
    });
  });

  // ----------------------------------------------------------
  // 10. Sticky nav
  // ----------------------------------------------------------
  const nav = document.getElementById('site-nav');
  if (nav) {
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'bottom top',
      onEnter:     () => nav.classList.add('nav-visible'),
      onLeaveBack: () => nav.classList.remove('nav-visible'),
    });
  }

});
