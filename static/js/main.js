// ============================================================
// Garçom Digital — Scripts Principais
// ============================================================

// Animação de entrada dos cards ao rolar a página

document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll(
    '.benefit-card, .step-card, .plan-card'
  );

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });

  }, {
    threshold: 0.15
  });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    card.style.transition = '.6s ease';
    observer.observe(card);
  });

});
