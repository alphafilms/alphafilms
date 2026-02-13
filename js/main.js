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

// ===== TRACK RECORD - ANIMATED SECTION WITH COUNT-UP =====
function loadTrackRecord() {
  const trackLeft = document.getElementById('track-left');
  const trackRight = document.getElementById('track-right');
  const rightContent = document.getElementById('right-content');
  const trackLogo = document.getElementById('track-logo');
  const trackHashtag = document.getElementById('track-hashtag');
  
  if (!trackLeft || !trackRight || !rightContent || !AppData.stats) {
    console.log('Track record elements or data not found');
    return;
  }
  
  const stats = AppData.stats;
  
  // Update logo and hashtag from data.js
  if (trackLogo && stats.logo) {
    trackLogo.src = stats.logo;
  }
  
  if (trackHashtag && stats.hashtag) {
    trackHashtag.textContent = stats.hashtag;
  }
  
  // Build the right side content
  let numbersHTML = `
    <div class="right-headline">${stats.rightHeadline}</div>
    <div class="by-the-numbers">${stats.byTheNumbers}</div>
  `;
  
  stats.numbers.forEach((stat, index) => {
    // Store the target values as data attributes for the count-up animation
    numbersHTML += `
      <div class="stat-item" data-index="${index}">
        <div class="stat-line">
          <span class="stat-dot">●</span>
          <span class="stat-text">
            <span class="stat-number" id="stat-${index}" data-target="${stat.value}" data-suffix="${stat.suffix}">0</span>
            ${stat.suffix} ${stat.label}
          </span>
        </div>
        ${index < stats.numbers.length - 1 ? '<hr class="stat-divider">' : ''}
      </div>
    `;
  });
  
  rightContent.innerHTML = numbersHTML;
  
  console.log('Track record section ready for scroll animation');
  
  // Set up scroll observer
  setupScrollAnimation();
}

// Scroll animation observer
function setupScrollAnimation() {
  const trackLeft = document.getElementById('track-left');
  const trackRight = document.getElementById('track-right');
  
  if (!trackLeft || !trackRight) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger animations
        trackLeft.classList.add('visible');
        trackRight.classList.add('visible');
        
        // Start count-up animation
        startCountUp();
        
        // Stop observing after animation starts
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3, // Trigger when 30% of section is visible
    rootMargin: "0px"
  });
  
  observer.observe(document.getElementById('track-record'));
}

// Count-up animation
function startCountUp() {
  const statElements = document.querySelectorAll('[id^="stat-"]');
  
  statElements.forEach(el => {
    const targetValue = el.getAttribute('data-target');
    const suffix = el.getAttribute('data-suffix') || '';
    
    // Parse the target value (handle K suffix)
    let targetNumber;
    let displaySuffix = '';
    
    if (targetValue.includes('K')) {
      targetNumber = parseFloat(targetValue.replace('K', '')) * 1000;
      displaySuffix = 'K';
    } else {
      targetNumber = parseFloat(targetValue);
    }
    
    if (isNaN(targetNumber)) return;
    
    // Animation duration and steps
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      current += increment;
      
      if (step >= steps) {
        // Final value with proper formatting
        if (targetValue.includes('K')) {
          el.textContent = targetValue.replace('K', '');
        } else {
          el.textContent = targetNumber;
        }
        clearInterval(timer);
      } else {
        // Intermediate value
        if (targetValue.includes('K')) {
          el.textContent = Math.floor(current / 1000);
        } else {
          el.textContent = Math.floor(current);
        }
      }
    }, duration / steps);
  });
}

// Make sure to call loadTrackRecord() in DOMContentLoaded

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
