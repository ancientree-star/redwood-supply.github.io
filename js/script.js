document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 30) {
    header.style.padding = '14px 0';
  } else {
    header.style.padding = '20px 0';
  }
});