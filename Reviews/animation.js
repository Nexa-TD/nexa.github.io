const STAGGER = 160; // ms between question reveals (adjust)
  const INITIAL_DELAY = 140; // ms before first question appears

  document.addEventListener('DOMContentLoaded', () => {
    const items = Array.from(document.querySelectorAll('.faqs-item'));

    // Reveal items one-by-one
    items.forEach((item, i) => {
      const delay = INITIAL_DELAY + i * STAGGER;
      setTimeout(() => item.classList.add('visible'), delay);
    });

    // Add click + keyboard handlers for toggling answers
    items.forEach(item => {
      const trigger = item.querySelector('.faqs-question');
      const answer = item.querySelector('.faqs-answer');

      function toggle(openFromUser = true){
        const isOpen = item.classList.toggle('open');
        trigger.setAttribute('aria-expanded', String(isOpen));
        // If you want only one open at a time, uncomment the block below
        //if (isOpen) {
        //   items.forEach(other => {
        //     if (other !== item) {
        //       other.classList.remove('open');
        //       other.querySelector('.faqs-question').setAttribute('aria-expanded','false');
        //     }
        //   });
        // }
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