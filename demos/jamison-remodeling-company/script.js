const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  heroImage.addEventListener('error', () => {
    heroImage.hidden = true;
    document.querySelector('.hero')?.classList.add('image-fallback');
  }, { once: true });
}
