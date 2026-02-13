const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

window.onload = function() {
    ScrollTrigger.refresh();

    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl.from("header", { y: -50, opacity: 0, duration: 1, delay: 0.2 })
        .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-title", { y: 50, opacity: 0, duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }, "-=0.6")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-btn", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".vertical-text", { x: 100, opacity: 0, duration: 1.5 }, "-=1");

    gsap.from(".stat-item", { scrollTrigger: { trigger: ".stats-bar", start: "top 85%" }, y: 50, autoAlpha: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" });

    const benefitsTl = gsap.timeline({ scrollTrigger: { trigger: ".benefits", start: "top 75%" } });
    benefitsTl.from(".benefits .section-title", { y: 30, autoAlpha: 0, duration: 0.8 })
              .from(".benefits-image", { x: -50, autoAlpha: 0, duration: 1 }, "-=0.5")
              .from(".benefit-item", { x: 50, autoAlpha: 0, duration: 0.8, stagger: 0.15 }, "-=0.8");

    const circle = document.querySelector('.chart-progress-circle');
    if(circle) {
        gsap.to(circle, { strokeDashoffset: 66, duration: 2, ease: "power2.out", scrollTrigger: { trigger: ".charts-grid", start: "top 80%" } });
        const valObj = { val: 0 }, valEl = document.querySelector('.chart-value');
        if(valEl) gsap.to(valObj, { val: 48, duration: 2, scrollTrigger: { trigger: ".charts-grid", start: "top 80%" }, onUpdate: () => { valEl.textContent = '+' + Math.floor(valObj.val) + '%'; } });
    }
    const path = document.querySelector('.chart-path');
    if(path) gsap.fromTo(path, { attr: { d: "M0,100 C50,100 50,100 100,100 C150,100 150,100 200,100 L200,100 L0,100 Z" } }, { attr: { d: "M0,100 C30,80 70,30 100,60 C140,90 170,10 200,40 L200,100 L0,100 Z" }, duration: 2, ease: "power2.inOut", scrollTrigger: { trigger: ".charts-grid", start: "top 80%" } });

    const bars = document.querySelectorAll('.chart-bar');
    bars.forEach(bar => { const h = bar.getAttribute('data-height'); gsap.to(bar, { height: h, duration: 1.5, ease: "back.out(1.7)", scrollTrigger: { trigger: ".charts-grid", start: "top 80%" }, stagger: 0.2 }); });

    gsap.from(".product-item", { scrollTrigger: { trigger: ".products-grid", start: "top 85%" }, scale: 0.5, y: 50, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" });
    gsap.from(".cta-center", { scrollTrigger: { trigger: ".cta-center", start: "top 95%" }, y: 20, autoAlpha: 0, duration: 0.5, delay: 0.5 });
    gsap.from(".limited-img", { scrollTrigger: { trigger: ".limited-edition", start: "top 75%" }, y: 50, opacity: 0, duration: 1, stagger: 0.3 });
    gsap.from(".ritual-step", { scrollTrigger: { trigger: ".ritual", start: "top 85%" }, y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.3 });

    const aboutTl = gsap.timeline({ scrollTrigger: { trigger: ".about", start: "top 75%" } });
    aboutTl.from(".about-content", { x: -50, autoAlpha: 0, duration: 1 }).from(".about-image", { x: 50, autoAlpha: 0, duration: 1 }, "-=0.8");
    gsap.from(".journal-card", { scrollTrigger: { trigger: ".journal", start: "top 85%" }, y: 50, autoAlpha: 0, duration: 0.8, stagger: 0.2 });

    const track = document.querySelector('.testimonial-track');
    if(track) {
        const items = document.querySelectorAll('.testimonial-card');
        items.forEach(item => track.appendChild(item.cloneNode(true)));
        const sliderAnim = gsap.to(track, { xPercent: -50, ease: "none", duration: 40, repeat: -1 });
        const sliderWrapper = document.querySelector('.testimonial-slider-wrapper');
        if(sliderWrapper) { sliderWrapper.addEventListener("mouseenter", () => sliderAnim.pause()); sliderWrapper.addEventListener("mouseleave", () => sliderAnim.play()); }
    }
    gsap.from(".testimonials", { scrollTrigger: { trigger: ".testimonials", start: "top 80%" }, autoAlpha: 0, y: 50, duration: 1 });

    const bgSections = document.querySelectorAll('[data-bg]');
    bgSections.forEach(section => {
        const color = section.getAttribute('data-bg');
        ScrollTrigger.create({ trigger: section, start: "top 65%", end: "bottom 65%", onEnter: () => gsap.to("#page-wrapper", { backgroundColor: color, duration: 1.5, overwrite: 'auto' }), onEnterBack: () => gsap.to("#page-wrapper", { backgroundColor: color, duration: 1.5, overwrite: 'auto' }) });
    });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId !== '#') lenis.scrollTo(targetId, { offset: -50 });
    });
});