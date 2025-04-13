// Simple fade in animation effect for nav links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach((link, i) => {
      link.style.opacity = 0;
      setTimeout(() => {
        link.style.transition = 'opacity 1s';
        link.style.opacity = 1;
      }, i * 200);
    });
  });
  