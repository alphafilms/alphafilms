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
  loadTrackRecord(); // ← ADDED THIS LINE
  // Initialize team carousel
  initTeamCarousel();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
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

// ===== FEATURED WORK - CINEMA BELT =====
function loadFeaturedWork() {
  loadCinemaBelt();
}

function loadCinemaBelt() {
  const cinemaBelt = document.getElementById('cinema-belt');
  if (!cinemaBelt || !AppData.projects || AppData.projects.length === 0) {
    console.log('No cinema belt or projects found');
    return;
  }
  
  console.log('Loading cinema belt with', AppData.projects.length, 'projects');
  
  cinemaBelt.innerHTML = '';
  
  // Create multiple sets of projects for seamless looping
  // We need enough to fill the screen and create continuous effect
  const projects = [...AppData.projects, ...AppData.projects, ...AppData.projects, ...AppData.projects];
  
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
  
  console.log('Cinema belt loaded with', projects.length, 'project cards');
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

// ===== TRACK RECORD STATS - REDESIGNED SECTION =====
function loadTrackRecord() {
  const trackRecordSection = document.getElementById('track-record');
  if (!trackRecordSection || !AppData.stats) {
    console.log('Track record section or data not found');
    return;
  }
  
  const stats = AppData.stats;
  
  // Build the numbers list with dots and lines
  let numbersListHTML = '';
  stats.numbers.forEach((stat, index) => {
    numbersListHTML += `
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
          <span style="color: var(--color-red); font-size: 1.5rem;">●</span>
          <span style="font-size: 1.25rem; font-weight: 500; letter-spacing: 0.02em;">
            ${stat.value}${stat.suffix} ${stat.label}
          </span>
        </div>
        ${index < stats.numbers.length - 1 ? '<hr style="border: none; border-top: 1px solid var(--color-border); margin: 1rem 0;">' : ''}
      </div>
    `;
  });
  
  // Full HTML for the redesigned section
  trackRecordSection.innerHTML = `
    <div class="container">
      <!-- Three-column layout -->
      <div style="display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 2rem; align-items: center;">
        
        <!-- LEFT COLUMN: OUR PERFORMANCE (BIG) -->
        <div style="text-align: left;">
          <div style="font-size: 4rem; font-weight: 700; line-height: 0.9; color: var(--color-red); text-transform: uppercase; letter-spacing: -0.02em;">
            ${stats.leftTitle}
          </div>
          <div style="font-size: 4rem; font-weight: 700; line-height: 0.9; color: var(--color-text); text-transform: uppercase; letter-spacing: -0.02em; margin-top: 0.25rem;">
            ${stats.leftSubtitle}
          </div>
          <div style="margin-top: 1rem; font-size: 1rem; color: var(--color-text-muted); font-style: italic;">
            #beingALPHA
          </div>
        </div>
        
        <!-- MIDDLE COLUMN: Numbers with dots and lines -->
        <div style="text-align: left; padding: 2rem; background: var(--color-bg-soft); border-radius: 16px; border: 1px solid var(--color-border);">
          
          <!-- Headline -->
          <div style="margin-bottom: 2rem; font-size: 1rem; line-height: 1.6; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.02em;">
            ${stats.rightHeadline}
          </div>
          
          <!-- BY THE NUMBERS -->
          <div style="margin-bottom: 2rem; font-size: 1.25rem; font-weight: 600; color: var(--color-red); letter-spacing: 0.05em;">
            ${stats.byTheNumbers}
          </div>
          
          <!-- Numbers list with dots and lines -->
          ${numbersListHTML}
          
        </div>
        
        <!-- RIGHT COLUMN: Logo -->
        <div style="text-align: right;">
          <img src="${stats.logo}" alt="Alpha Films Logo" style="max-width: 120px; height: auto; filter: brightness(0.8);">
        </div>
        
      </div>
    </div>
  `;
  
  console.log('Redesigned track record section loaded successfully');
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
    // Reinitialize cinema belt when screen size changes
    if (document.getElementById('cinema-belt')) {
      loadCinemaBelt();
    }
  }, 250);
});

// Image error handling
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxMTEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZiIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjIwIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
      this.alt = 'Image not available';
    });
  });
});

// Make AppData available globally for debugging
window.AppData = AppData;
console.log('Alpha Films JavaScript Initialized');
