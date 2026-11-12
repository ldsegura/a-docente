const revealItems = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
  revealItems.forEach((item) => {
    item.classList.add('will-reveal');
    observer.observe(item);
  });
}

const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const demoDialog = document.getElementById('demo-dialog');
const demoFrame = document.getElementById('demo-frame');
const demoClose = demoDialog.querySelector('[data-demo-close]');
demoDialog.dataset.ready = 'true';
let demoTrigger = null;

function openDemo(pushHistory = true) {
  if (demoDialog.open) return;
  if (!demoFrame.src) demoFrame.src = demoFrame.dataset.src;
  demoDialog.showModal();
  document.body.classList.add('demo-open');
  demoClose.focus();
  if (pushHistory) history.pushState({ luminaDemo: true }, '', location.href);
}

function closeDemo(fromHistory = false) {
  if (!demoDialog.open) return;
  demoDialog.close();
  document.body.classList.remove('demo-open');
  if (demoTrigger) demoTrigger.focus();
  if (!fromHistory && history.state?.luminaDemo) history.back();
}

document.querySelectorAll('[data-demo-open]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    demoTrigger = link;
    openDemo();
  });
});
demoClose.addEventListener('click', () => closeDemo());
demoDialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeDemo();
});
demoDialog.addEventListener('click', (event) => {
  if (event.target === demoDialog) closeDemo();
});
window.addEventListener('popstate', (event) => {
  if (event.state?.luminaDemo) openDemo(false);
  else closeDemo(true);
});
