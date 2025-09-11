const navbar = document.querySelector('.navbar');
const heroImage = document.querySelector('.hero-image'); // Portrait 2/3
const restText = document.querySelector('.hero-title .rest');

// Logo grün + Fade-in Text beim Scrollen
const logoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add('scrolled');  // Logo grün
        restText.style.opacity = '1';      // Text einblenden
      } else {
        navbar.classList.remove('scrolled'); // Logo weiß
        restText.style.opacity = '0';        // Text ausblenden
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "-33% 0px 0px 0px"
  }
);

logoObserver.observe(heroImage);
