// Main application initialization
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing Alpha Films...');
  
  // First, make sure data is loaded
  if (typeof AppData === 'undefined') {
    console.error('AppData is not defined! Check data.js is loaded first.');
    return;
  }
  
  if (typeof Components === 'undefined') {
    console.error('Components is not defined! Check components.js is loaded.');
    return;
  }
  
  if (typeof Utils === 'undefined') {
    console.error('Utils is not defined! Check utils.js is loaded.');
    return;
  }
  
  // First render components (if using data-component system)
  renderComponents();
  
  // Then initialize features
  initFeaturedWork();
  initTeamCarousel();
  initMobileMenu();
  initSmoothScroll();
  
  // Add event listeners
  window.addEventListener('resize', handleResize);
  
  console.log('Alpha Films initialized successfully!');
});

function renderComponents() {
  // Only render if using data-component system
  const components = document.querySelectorAll('[data-component]');
  if (components.length === 0) {
    console.log('No data-component elements found, skipping component rendering.');
    return;
  }
  
  console.log(`Found ${components.length} components to render`);
  
  components.forEach(component => {
    const componentName = component.getAttribute('data-component');
    const renderFunctionName = `render${componentName.charAt(0).toUpperCase() + componentName.slice(1)}`;
    
    if (typeof Components[renderFunctionName] === 'function') {
      console.log(`Rendering component: ${componentName}`);
      component.innerHTML = Components[renderFunctionName]();
    } else {
      console.warn(`No render function found for component: ${componentName}`);
    }
  });
}

// Initialize Featured Work
function initFeaturedWork() {
  console.log('Initializing featured work...');
  
  // Check if data exists
  if (!AppData.projects || AppData.projects.length === 0) {
    console.warn('No projects found in AppData');
    return;
  }
  
  // Try desktop horizontal scroll first
  const horizontalContainer = document.getElementById('horizontal-scroll');
  const mobileContainer = document.querySelector('.featured-work-mobile');
  
  if (horizontalContainer && !isMobile()) {
    console.log('Rendering desktop horizontal scroll');
    renderHorizontalProjects(horizontalContainer, AppData.projects);
    initHorizontalScrollAnimation();
  } 
  // Fallback to mobile grid
  else if (mobileContainer) {
    console.log('Rendering mobile grid');
    renderMobileProjects(mobileContainer, AppData.projects);
  } else {
    console.error('No featured work containers found');
    // Create emergency fallback
    createEmergencyFeaturedWork();
  }
  
  console.log(`Featured work loaded: ${AppData.projects.length} projects`);
}

function renderHorizontalProjects(container, projects) {
  container.innerHTML = '';
  
  projects.forEach((project, index) => {
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
    
    // Add click event
    projectItem.addEventListener('click', (e) => {
      if (!e.target.closest('a')) {
        window.open(project.url, '_blank');
      }
    });
    
    container.appendChild(projectItem);
  });
}

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

function initHorizontalScrollAnimation() {
  const horizontalContainer = document.getElementById('horizontal-scroll');
  if (!horizontalContainer || isMobile()) return;
  
  // Wait for images to load
  setTimeout(() => {
    const items = horizontalContainer.children;
    if (items.length === 0) return;
    
    let totalWidth = 0;
    for (let i = 0; i < items.length; i++) {
      totalWidth += items[i].offsetWidth + 64;
    }
    
    horizontalContainer.style.width = `${totalWidth}px`;
    
    let ticking = false;
    
    function updateHorizontalScroll() {
      const section = document.getElementById('featured-work');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 
          -rect.top / (rect.height - windowHeight)
        ));
        
        const maxScroll = horizontalContainer.scrollWidth - window.innerWidth;
        const translateX = -progress * maxScroll;
        
        horizontalContainer.style.transform = `translateX(${translateX}px)`;
      }
      
      ticking = false;
    }
    
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateHorizontalScroll);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', onScroll);
    updateHorizontalScroll();
    
    // Handle resize
    window.addEventListener('resize', () => {
      let newTotalWidth = 0;
      for (let i = 0; i < items.length; i++) {
        newTotalWidth += items[i].offsetWidth + 64;
      }
      horizontalContainer.style.width = `${newTotalWidth}px`;
      updateHorizontalScroll();
    });
  }, 100);
}

// Initialize Team Carousel
function initTeamCarousel() {
  console.log('Initializing team carousel...');
  
  const teamCarousel = document.getElementById('team-carousel');
  if (!teamCarousel) {
    console.warn('Team carousel container not found');
    return;
  }
  
  if (!AppData.team || AppData.team.length === 0) {
    console.warn('No team members found in AppData');
    return;
  }
  
  teamCarousel.innerHTML = '';
  
  AppData.team.forEach(member => {
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    teamCard.innerHTML = `
      <div class="team-avatar">
        <img src="${member.image}" alt="${member.name}" loading="lazy" 
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNzAiIGN5PSI3MCIgcj0iNzAiIGZpbGw9IiMyMjIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZiIgZm9udC1mYW1pbHk9IkZ1dHVyYSIgZm9udC1zaXplPSI0MCI+JEk8L3RleHQ+PC9zdmc+'">
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
  
  console.log(`Team carousel loaded: ${AppData.team.length} members`);
  
  // Initialize carousel navigation
  const teamPrev = document.getElementById('team-prev');
  const teamNext = document.getElementById('team-next');
  
  if (teamPrev && teamNext) {
    let currentIndex = 0;
    const cardWidth = 350;
    
    teamNext.addEventListener('click', () => {
      if (currentIndex < AppData.team.length - 1) {
        currentIndex++;
        teamCarousel.scrollTo({
          left: currentIndex * (cardWidth + 32),
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
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

function handleResize() {
  // Simple debounce
  clearTimeout(window.resizeTimer);
  window.resizeTimer = setTimeout(() => {
    if (isMobile()) {
      // Reset horizontal scroll on mobile
      const horizontalContainer = document.getElementById('horizontal-scroll');
      if (horizontalContainer) {
        horizontalContainer.style.transform = 'none';
        horizontalContainer.style.width = 'auto';
      }
    } else {
      // Reinitialize horizontal scroll on desktop
      const horizontalContainer = document.getElementById('horizontal-scroll');
      if (horizontalContainer && horizontalContainer.children.length > 0) {
        initHorizontalScrollAnimation();
      }
    }
  }, 250);
}

// Helper function
function isMobile() {
  return window.innerWidth <= 768;
}

// Emergency fallback function
function createEmergencyFeaturedWork() {
  console.log('Creating emergency featured work fallback');
  
  const featuredWorkSection = document.getElementById('featured-work');
  if (!featuredWorkSection) return;
  
  // Create a simple grid
  const emergencyGrid = document.createElement('div');
  emergencyGrid.className = 'featured-work-mobile grid grid-2';
  emergencyGrid.innerHTML = `
    <a href="https://www.youtube.com/watch?v=kwVuPcAiNjY" target="_blank" class="work-item">
      <div class="work-thumb">
        <img src="images/nightshift.jpg" alt="Night Shift" onerror="this.style.backgroundColor='#222'">
        <div class="work-overlay">
          <span class="work-tag">Short Film</span>
          <span class="work-title">Night Shift</span>
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=vQYMIPsxp4c" target="_blank" class="work-item">
      <div class="work-thumb">
        <img src="images/intothesea.jpg" alt="Into the Sea" onerror="this.style.backgroundColor='#222'">
        <div class="work-overlay">
          <span class="work-tag">Cinematic Short</span>
          <span class="work-title">Into the Sea</span>
        </div>
      </div>
    </a>
  `;
  
  featuredWorkSection.appendChild(emergencyGrid);
}

// Make functions available globally for debugging
window.AlphaFilms = {
  initFeaturedWork,
  initTeamCarousel,
  initHorizontalScrollAnimation,
  initMobileMenu,
  isMobile
};
