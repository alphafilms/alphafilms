// ========== ALPHA FILMS MAIN JAVASCRIPT ==========

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('Alpha Films Website Loading...');
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Load all content
  loadServices();
  loadFeaturedWork();
  loadTeam();
  loadNews();
  
  // Initialize team carousel
  initTeamCarousel();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Initialize touch scroll for mobile
  initTouchScroll();
  
  console.log('Alpha Films Website Loaded Successfully!');
});

// ===== MOBILE MENU =====
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!mobileMenuToggle || !mobileMenu) return;
  
  mobileMenuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenu.classList.remove('active');
    }
  });
  
  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
}

// ===== SERVICES =====
function loadServices() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid || !AppData.services) return;
  
  servicesGrid.innerHTML = '';
  
  // Make sure we have exactly 6 services for the 2×3 grid
  const services = AppData.services.slice(0, 6); // Take first 6 services
  
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
      <div class="service-icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
    servicesGrid.appendChild(serviceCard);
  });
  
  console.log(`Loaded ${services.length} services in 2×3 grid`);
}

// ===== FEATURED WORK =====
function loadFeaturedWork() {
  // Always load horizontal scroll (works on both desktop and mobile)
  loadHorizontalScroll();
  
  // Load mobile grid as fallback if needed
  loadMobileGrid();
}

function loadHorizontalScroll() {
  const track = document.getElementById('horizontal-scroll-track');
  if (!track || !AppData.projects || AppData.projects.length === 0) return;
  
  track.innerHTML = '';
  
  // Calculate item width based on screen size
  const isMobile = window.innerWidth <= 768;
  const itemWidth = isMobile ? window.innerWidth * 0.85 : 600;
  
  // Add extra items for seamless scrolling effect
  const projects = [...AppData.projects, ...AppData.projects];
  
  projects.forEach((project, index) => {
    const item = document.createElement('div');
    item.className = 'horizontal-scroll-item';
    item.style.flex = `0 0 ${itemWidth}px`;
    item.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="horizontal-scroll-overlay">
        <span class="scroll-tag">${project.tag}</span>
        <h3 class="scroll-title">${project.title}</h3>
        <p class="scroll-description">${project.description}</p>
        <a href="${project.url}" target="_blank" class="scroll-cta" rel="noopener noreferrer">
          Watch Now <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    
    // Add click event to the entire item
    item.addEventListener('click', (e) => {
      if (!e.target.closest('a')) {
        window.open(project.url, '_blank');
      }
    });
    
    track.appendChild(item);
  });
  
  // Initialize horizontal scroll animation
  initHorizontalScroll();
  console.log('Horizontal scroll loaded with', AppData.projects.length, 'projects');
}

function loadMobileGrid() {
  const mobileContainer = document.getElementById('featured-work-mobile');
  if (!mobileContainer || !AppData.projects) return;
  
  mobileContainer.innerHTML = '';
  
  AppData.projects.forEach(project => {
    const projectItem = document.createElement('a');
    projectItem.href = project.url;
    projectItem.target = '_blank';
    projectItem.rel = 'noopener noreferrer';
    projectItem.className = 'work-item';
    projectItem.innerHTML = `
      <div class="work-thumb">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="work-overlay">
          <span class="work-tag">${project.tag}</span>
          <span class="work-title">${project.title}</span>
          <span class="work-cta">View ↗</span>
        </div>
      </div>
    `;
    mobileContainer.appendChild(projectItem);
  });
}

// Horizontal scroll animation - FIXED VERSION
function initHorizontalScroll() {
  const track = document.getElementById('horizontal-scroll-track');
  if (!track) return;
  
  // Calculate total width
  const items = track.children;
  if (items.length === 0) return;
  
  // Get item width from computed style
  const firstItem = items[0];
  const itemWidth = firstItem.offsetWidth;
  const gap = 64; // 4rem = 64px on desktop, will adjust for mobile
  const totalWidth = items.length * (itemWidth + gap);
  track.style.width = `${totalWidth}px`;
  
  let scrollProgress = 0;
  let isSectionInView = false;
  let ticking = false;
  
  function updateHorizontalScroll() {
    const section = document.getElementById('featured-work');
    if (!section) return;
    
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;
    
    // Check if section is in viewport
    isSectionInView = rect.top < windowHeight && rect.bottom > 0;
    
    if (isSectionInView) {
      // Calculate progress only when section is in view
      // Start from 0 when top of section reaches middle of viewport
      const startPoint = windowHeight * 0.3; // 30% from top for smoother start
      const endPoint = -sectionHeight + windowHeight * 0.7; // 70% from bottom
      
      // Calculate progress from 0 to 1
      const rawProgress = (startPoint - rect.top) / (startPoint - endPoint);
      scrollProgress = Math.max(0, Math.min(1, rawProgress));
      
      // Calculate horizontal translation
      const maxScroll = totalWidth - window.innerWidth;
      const translateX = -scrollProgress * maxScroll * 0.7; // 0.7 for smoother effect
      
      track.style.transform = `translateX(${translateX}px)`;
    } else {
      // Reset position when not in view
      if (rect.top >= windowHeight) {
        // Section is below viewport
        track.style.transform = 'translateX(0px)';
      } else if (rect.bottom <= 0) {
        // Section is above viewport
        track.style.transform = `translateX(${-totalWidth + window.innerWidth}px)`;
      }
    }
    
    ticking = false;
  }
  
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateHorizontalScroll);
      ticking = true;
    }
  }
  
  // Add scroll listener
  window.addEventListener('scroll', onScroll, { passive: true });
  
  // Initial calculation
  updateHorizontalScroll();
  
  // Handle resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Recalculate dimensions
      const newItemWidth = items[0].offsetWidth;
      const newGap = 64;
      const newTotalWidth = items.length * (newItemWidth + newGap);
      track.style.width = `${newTotalWidth}px`;
      
      updateHorizontalScroll();
    }, 250);
  });
}

// Touch support for mobile horizontal scroll
function initTouchScroll() {
  const track = document.getElementById('horizontal-scroll-track');
  if (!track || window.innerWidth > 768) return;
  
  let isTouchScroll = false;
  let startX = 0;
  let scrollLeft = 0;
  
  track.addEventListener('touchstart', (e) => {
    isTouchScroll = true;
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.transition = 'none';
  }, { passive: true });
  
  track.addEventListener('touchmove', (e) => {
    if (!isTouchScroll) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  }, { passive: false });
  
  track.addEventListener('touchend', () => {
    isTouchScroll = false;
    track.style.transition = 'transform 0.1s linear';
  }, { passive: true });
}

// ===== TEAM =====
function loadTeam() {
  const teamCarousel = document.getElementById('team-carousel');
  if (!teamCarousel || !AppData.team) return;
  
  teamCarousel.innerHTML = '';
  
  AppData.team.forEach(member => {
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    teamCard.innerHTML = `
      <div class="team-avatar">
        <img src="${member.image}" alt="${member.name}" loading="lazy">
      </div>
      <div class="team-role">${member.role}</div>
      <div class="team-name">${member.name}</div>
      <div class="team-bio">${member.bio}</div>
      ${member.linkedin ? `
        <a href="${member.linkedin}" target="_blank" style="color: #0077B5; font-size: 1.1rem; margin-top: 1rem; display: inline-block;">
          <i class="fab fa-linkedin"></i>
        </a>
      ` : ''}
    `;
    teamCarousel.appendChild(teamCard);
  });
  
  console.log(`Loaded ${AppData.team.length} team members`);
}

function initTeamCarousel() {
  const teamCarousel = document.getElementById('team-carousel');
  const teamPrev = document.getElementById('team-prev');
  const teamNext = document.getElementById('team-next');
  
  if (!teamCarousel || !teamPrev || !teamNext) return;
  
  let currentIndex = 0;
  const cardWidth = 320;
  const gap = 24; // 1.5rem = 24px
  
  teamNext.addEventListener('click', function() {
    if (currentIndex < AppData.team.length - 1) {
      currentIndex++;
      teamCarousel.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  });
  
  teamPrev.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      teamCarousel.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  });
  
  // Touch support for mobile
  let startX = 0;
  teamCarousel.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });
  
  teamCarousel.addEventListener('touchend', function(e) {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < AppData.team.length - 1) {
        // Swipe left - next
        teamNext.click();
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right - previous
        teamPrev.click();
      }
    }
  });
}

// ===== NEWS =====
function loadNews() {
  const newsGrid = document.getElementById('news-grid');
  if (!newsGrid || !AppData.news) return;
  
  newsGrid.innerHTML = '';
  
  // Show only latest 3 news
  const latestNews = AppData.news.slice(0, 3);
  
  latestNews.forEach(newsItem => {
    const newsCard = document.createElement('div');
    newsCard.className = 'card';
    
    // Format date
    const date = new Date(newsItem.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short',
      day: 'numeric'
    });
    
    newsCard.innerHTML = `
      <div class="news-meta">${formattedDate} • ${newsItem.category}</div>
      <div class="news-title">${newsItem.title}</div>
      <p>${newsItem.excerpt}</p>
      <a href="news.html#news-${newsItem.id}" class="news-link">Read more →</a>
    `;
    newsGrid.appendChild(newsCard);
  });
  
  console.log(`Loaded ${latestNews.length} news items`);
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
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

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function() {
    // Reinitialize featured work when screen size changes
    if (document.getElementById('horizontal-scroll-track')) {
      loadHorizontalScroll();
    }
  }, 250);
});

// Image error handling
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxMTEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZiIgZm9udC1mYW1pbHk9IkZ1dHVyYSIgZm9udC1zaXplPSIyMCI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';
      this.alt = 'Image not available';
    });
  });
});

// Make AppData available globally for debugging
window.AppData = AppData;
console.log('Alpha Films JavaScript Initialized');
