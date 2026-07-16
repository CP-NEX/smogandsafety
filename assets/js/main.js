document.addEventListener('DOMContentLoaded', () => {
  // Header scrolled state
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      
      // Toggle menu icons
      const burgerIcon = menuToggle.querySelector('.burger-icon');
      const closeIcon = menuToggle.querySelector('.close-icon');
      if (burgerIcon && closeIcon) {
        if (isOpen) {
          burgerIcon.style.display = 'none';
          closeIcon.style.display = 'block';
        } else {
          burgerIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      }
    });
  }

  // Mobile dropdown navigation toggle
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });

  // Accordion FAQs toggle
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all accordions
      document.querySelectorAll('.accordion-item').forEach(accItem => {
        accItem.classList.remove('active');
      });
      
      // Toggle the clicked one
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Form submission simulation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';
      
      setTimeout(() => {
        // Clear inputs
        contactForm.reset();
        
        // Show success visual feedback
        submitBtn.textContent = 'Message Sent Successfully!';
        submitBtn.style.backgroundColor = 'var(--accent-green)';
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
        }, 3000);
      }, 1500);
    });
  }
  // Initialize Animate On Scroll (AOS)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }
});
