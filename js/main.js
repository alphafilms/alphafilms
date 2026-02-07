// Main application initialization
document.addEventListener('DOMContentLoaded', () => {
  // Render all components
  renderComponents();
  
  // Initialize features
  initHorizontalScroll();
  initTeamCarousel();
  initMobileMenu();
  initSmoothScroll();
  
  // Add event listeners
  window.addEventListener('resize', Utils.debounce(handleResize, 250));
  
  // Initialize featured work (NEW - ensures it loads)
  initFeaturedWork();
});

function renderComponents() {
  // Get all data-component elements and render them
  const components = document.querySelectorAll('[data-component]');
  
  components.forEach(component => {
    const componentName = component.getAttribute('data-component');
    
    if (Components[`render${componentName.charAt(0).toUpperCase() + componentName.slice(1)}`]) {
      component.innerHTML = Components[`render${componentName.charAt(0).toUpperCase() + componentName.slice(1)}`]();
    }
  });
}

// NEW FUNCTION: Initialize Featured Work
function initFeaturedWork() {
  const horizontalContainer = document.getElementById('horizontal-scroll');
  const mobileContainer = document.querySelector('.featured-work-mobile');
  
  if (!horizontalContainer && !mobileContainer) {
    console.error('Featured work containers not found');
    return;
  }
  
  // Load projects from data.js
  const projects = AppData.projects || [];
  
  if (projects.length === 0) {
    console.error('No projects found in AppData');
    return;
  }
  
  // Render desktop horizontal scroll
  if (horizontalContainer && !Utils.isMobile()) {
    renderHorizontalProjects(horizontalContainer, projects);
  }
  
  // Render mobile grid
  if (mobileContainer) {
    renderMobileProjects(mobileContainer, projects);
  }
  
  console.log(`Loaded ${projects.length} featured projects`);
}

// NEW FUNCTION: Render horizontal projects
function renderHorizontalProjects(container, projects) {
  container.innerHTML = '';
  
  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.className = 'featured-work-item';
    projectItem.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="featured-work-overlay">
        <span class="featured-work-tag">${project.tag}</span>
        <span class="featured-work-item-title">${project.title}</span>
        <p class="featured-work-item-desc">${project.description}</p>
        <a href="${project.url}" target="_blank" class="featured-work-cta" rel="noopener noreferrer">
          Watch Now <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    
    // Add click event to the entire item
    projectItem.addEventListener('click', (e) => {
      if (!e.target.closest('a')) { // Only if not clicking the link directly
        window.open(project.url, '_blank');
      }
    });
    
    container.appendChild(projectItem);
  });
  
  // After rendering, initialize horizontal scroll
  initHorizontalScrollAnimation();
}

// NEW FUNCTION: Render mobile projects
function renderMobileProjects(container, projects) {
  container.innerHTML = '';
  
  projects.forEach(project => {
    const projectLink = document.createElement('a');
    projectLink.href = project.url;
    projectLink.target = '_blank';
    projectLink.rel = 'noopener noreferrer';
    projectLink.className = 'work-item';
    projectLink.innerHTML = `
      <div class="work-thumb">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="work-overlay">
          <span class="work-tag">${project.tag}</span>
          <span class="work-title">${project.title}</span>
          <span class="work-cta">View ↗</span>
        </div>
      </div>
    `;
    container.appendChild(projectLink);
  });
}

// UPDATED FUNCTION: Horizontal Scroll Animation
function initHorizontalScroll() {
  const horizontalContainer = document.getElementById('horizontal-scroll');
  if (!horizontalContainer || Utils.isMobile()) return;
  
  // Implementation will be called after projects are rendered
}

function initHorizontalScrollAnimation() {
  const horizontalContainer = document.getElementById('horizontal-scroll');
  const stickyContainer = document.querySelector('.featured-work-sticky');
  
  if (!horizontalContainer || !stickyContainer || Utils.isMobile()) return;
  
  // Calculate total width of all items
  const items = horizontalContainer.children;
  let totalWidth = 0;
  for (let i = 0; i < items.length; i++) {
    totalWidth += items[i].offsetWidth + 64; // 64px is gap (4rem)
  }
  
  // Set container width to fit all items
  horizontalContainer.style.width = `${totalWidth}px`;
  
  // Scroll animation
  let scrollProgress = 0;
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  function updateHorizontalScroll() {
    if (!horizontalContainer || !stickyContainer) return;
    
    const section = document.getElementById('featured-work');
    if (!section) return;
    
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate scroll progress through the section
    if (rect.top < windowHeight && rect.bottom > 0) {
      const sectionScrollTop = rect.top;
      const sectionHeight = rect.height;
      
      // Calculate progress from 0 to 1
      scrollProgress = Math.max(0, Math.min(1, -sectionScrollTop / (sectionHeight - windowHeight)));
      
      // Calculate horizontal translation
      const maxScroll = horizontalContainer.scrollWidth - window.innerWidth;
      const translateX = -scrollProgress * maxScroll;
      
      horizontalContainer.style.transform = `translateX(${translateX}px)`;
    }
    
    ticking = false;
  }
  
  function onScroll() {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      requestAnimationFrame(updateHorizontalScroll);
      ticking = true;
    }
  }
  
  // Add scroll listener
  window.addEventListener('scroll', onScroll);
  
  // Initial calculation
  updateHorizontalScroll();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    // Recalculate total width on resize
    let newTotalWidth = 0;
    for (let i = 0; i < items.length; i++) {
      newTotalWidth += items[i].offsetWidth + 64;
    }
    horizontalContainer.style.width = `${newTotalWidth}px`;
    
    updateHorizontalScroll();
  });
}

// UPDATED FUNCTION: Team Carousel
function initTeamCarousel() {
  const teamCarousel = document.getElementById('team-carousel');
  const teamPrev = document.getElementById('team-prev');
  const teamNext = document.getElementById('team-next');
  
  if (!teamCarousel) {
    console.error('Team carousel container not found');
    return;
  }
  
  // Load team members from data.js
  const teamMembers = AppData.team || [];
  
  if (teamMembers.length === 0) {
    console.error('No team members found in AppData');
    return;
  }
  
  // Clear and render team members
  teamCarousel.innerHTML = '';
  
  teamMembers.forEach(member => {
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    teamCard.innerHTML = `
      <div class="team-avatar">
        <img src="${member.image}" alt="${member.name}" loading="lazy">
      </div>
      <h3 class="team-name">${member.name}</h3>
      <p class="team-role">${member.role}</p>
      <p class="team-bio">${member.bio}</p>
      ${member.linkedin ? `
        <a href="${member.linkedin}" target="_blank" class="team-social" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
      ` : ''}
    `;
    teamCarousel.appendChild(teamCard);
  });
  
  console.log(`Loaded ${teamMembers.length} team members`);
  
  // Initialize carousel navigation if buttons exist
  if (teamPrev && teamNext) {
    let currentIndex = 0;
    const cardWidth = 350; // Match your CSS team-card width + gap
    const totalCards = teamMembers.length;
    
    teamNext.addEventListener('click', () => {
      if (currentIndex < totalCards - 1) {
        currentIndex++;
        teamCarousel.scrollTo({
          left: currentIndex * (cardWidth + 32), // 32px is gap (2rem)
          behavior: 'smooth'
        });
      }
    });
    
    teamPrev.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        teamCarousel.scrollTo({
          left: currentIndex * (cardWidth + 32),
          behavior: 'smooth'
        });
      }
    });
    
    // Touch/swipe support
    let startX = 0;
    teamCarousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    
    teamCarousel.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0 && currentIndex < totalCards - 1) {
          // Swipe left - next
          teamNext.click();
        } else if (diff < 0 && currentIndex > 0) {
          // Swipe right - previous
          teamPrev.click();
        }
      }
    });
  }
}

function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!mobileMenuToggle || !mobileMenu) return;
  
  mobileMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenu.classList.remove('active');
    }
  });
  
  // Close menu when clicking a link
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

function initSmoothScroll() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
}

function handleResize() {
  // Handle resize events
  if (Utils.isMobile()) {
    // Adjust for mobile
    const horizontalContainer = document.getElementById('horizontal-scroll');
    if (horizontalContainer) {
      horizontalContainer.style.transform = 'none';
    }
  } else {
    // Adjust for desktop - reinitialize horizontal scroll
    setTimeout(initHorizontalScrollAnimation, 100);
  }
}

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initFeaturedWork,
    initTeamCarousel,
    initHorizontalScrollAnimation
  };
}
