const STAGGER = 200; 
const INITIAL_DELAY = 100;

  document.addEventListener('DOMContentLoaded', () => {
    const items = Array.from(document.querySelectorAll('.faqs-item'));

    items.forEach((item, i) => {
      const delay = INITIAL_DELAY + i * STAGGER;
      setTimeout(() => item.classList.add('visible'), delay);
    });

    items.forEach(item => {
      const trigger = item.querySelector('.faqs-question');
      const answer = item.querySelector('.faqs-answer');

      function toggle(openFromUser = true){
        const isOpen = item.classList.toggle('open');
        trigger.setAttribute('aria-expanded', String(isOpen));
      }

      trigger.addEventListener('click', () => toggle());
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  });