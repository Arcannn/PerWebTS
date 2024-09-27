function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Fade-in effect on scroll
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
  
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
    
    // Typing animation adjustment
    const typingText = document.querySelector('.typing-animation');
    if (typingText) {
      setTimeout(() => {
        typingText.style.width = 'auto'; // Adjust width to fit the text
        typingText.style.borderRight = 'none'; // Remove blinking caret
      }, 3500); // 3500ms = 3.5s, matches the animation duration
    }
    
    // Initialize canvas if needed
    const canvas = document.getElementById('backgroundCanvas');
    if (canvas) {
      const context = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.fillStyle = '#f0f0f0'; // Light grey background
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  });
  
  


