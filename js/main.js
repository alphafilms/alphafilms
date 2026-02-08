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
// ===== CINEMA BELT =====
function loadCinemaBelt() {
  const cinemaBelt = document.getElementById('cinema-belt');
  if (!cinemaBelt || !AppData.projects || AppData.projects.length === 0) return;
  
  cinemaBelt.innerHTML = '';
  
  // Create two sets of projects for seamless looping
  const projects = [...AppData.projects, ...AppData.projects];
  
  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-info">
        <span class="project-tag">${project.tag}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <a href="${project.url}" target="_blank" class="project-cta" rel="noopener noreferrer">
          Watch Now <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    
    // Add click event to the entire card
    projectCard.addEventListener('click', (e) => {
      if (!e.target.closest('a')) {
        window.open(project.url, '_blank');
      }
    });
    
    cinemaBelt.appendChild(projectCard);
  });
  
  console.log('Cinema belt loaded with', AppData.projects.length, 'projects');
}

// Update the loadFeaturedWork function:
function loadFeaturedWork() {
  loadCinemaBelt();
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
