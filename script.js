// Reveal on scroll
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Sticky nav — show after scrolling past hero (or immediately on non-hero pages)
const siteNav = document.getElementById('siteNav');
const heroSection = document.getElementById('hero');
if (siteNav && heroSection) {
  const navObs = new IntersectionObserver(([e]) => {
    siteNav.classList.toggle('visible', !e.isIntersecting);
  }, { threshold: 0 });
  navObs.observe(heroSection);
} else if (siteNav) {
  siteNav.classList.add('visible');
}
