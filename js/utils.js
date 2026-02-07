// Utility functions that don't need editing
const Utils = {
  formatDate: (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short',
      day: 'numeric'
    });
  },

  scrollToSection: (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },

  toggleMobileMenu: () => {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
  },

  isMobile: () => window.innerWidth <= 768,

  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};
