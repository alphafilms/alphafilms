// All component rendering functions
const Components = {
  renderNavigation: () => {
    return `
      <nav class="nav">
        <div class="container nav-container">
          <div class="logo" onclick="window.location.href='index.html'">
            <img src="images/logo.png" alt="${AppData.company.name} Logo">
            <span>${AppData.company.name.toUpperCase()}</span>
          </div>

          <div class="desktop-menu">
            <a href="#hero" class="nav-link">Home</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#featured-work" class="nav-link">Featured Work</a>
            <a href="#team" class="nav-link">Team</a>
            <a href="news.html" class="nav-link">News</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>

          <button class="mobile-menu-toggle" onclick="Utils.toggleMobileMenu()">
            <i class="fas fa-bars"></i>
          </button>

          <div class="mobile-menu" id="mobileMenu">
            <a href="#hero" class="mobile-nav-link" onclick="Utils.toggleMobileMenu()">Home</a>
            <a href="#services" class="mobile-nav-link" onclick="Utils.toggleMobileMenu()">Services</a>
            <a href="#featured-work" class="mobile-nav-link" onclick="Utils.toggleMobileMenu()">Featured Work</a>
            <a href="#team" class="mobile-nav-link" onclick="Utils.toggleMobileMenu()">Team</a>
            <a href="news.html" class="mobile-nav-link" onclick="Utils.toggleMobileMenu()">News & Updates</a>
            <a href="#contact" class="mobile-nav-link" onclick="Utils.toggleMobileMenu()">Contact</a>
          </div>
        </div>
      </nav>
    `;
  },

  renderHero: () => {
    return `
      <section id="hero" class="hero">
        <div class="hero-background"></div>
        
        <div class="action-belt">
          <div class="action-marquee">
            ${AppData.actionBelt.map(text => 
              `<div class="action-item">${text}</div>`
            ).join('')}
            ${AppData.actionBelt.map(text => 
              `<div class="action-item">${text}</div>`
            ).join('')}
          </div>
        </div>
        
        <div class="container">
          <div class="hero-content">
            <div class="hero-logo">
              <img src="images/logo.png" alt="${AppData.company.name} Logo">
            </div>
            <div class="hero-text">
              <h1 class="tagline">${AppData.company.tagline}</h1>
              <p class="hero-subtitle">${AppData.company.description}</p>
              <div class="hero-cta">
                <a href="#services" class="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderServices: () => {
    return `
      <section id="services" class="section">
        <div class="container">
          <h2 class="section-title">Our Services</h2>
          
          <div class="grid grid-3">
            ${AppData.services.map(service => `
              <div class="card">
                <h3>${service.icon} ${service.title}</h3>
                <p>${service.description}</p>
              </div>
            `).join('')}
          </div>
          
          <div class="text-center mt-4">
            <a href="#contact" class="btn btn-primary">Get a Quote</a>
          </div>
        </div>
      </section>
    `;
  },

  renderFeaturedWork: () => {
    return `
      <section id="featured-work" class="section">
        <div class="container">
          <h2 class="section-title">Featured Work</h2>
          
          <div class="featured-work-container">
            <div class="featured-work-sticky">
              <h2 class="featured-work-title">Featured<br>Work</h2>
              <div class="featured-work-horizontal" id="horizontal-scroll">
                ${AppData.projects.map(project => `
                  <div class="featured-work-item">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="featured-work-overlay">
                      <span class="featured-work-tag">${project.tag}</span>
                      <span class="featured-work-item-title">${project.title}</span>
                      <p class="featured-work-item-desc">${project.description}</p>
                      <a href="${project.url}" target="_blank" class="featured-work-cta">Watch Now</a>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="featured-work-scroll-hint">
                <span>Scroll horizontally</span>
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          
          <!-- Mobile Grid -->
          <div class="featured-work-mobile grid grid-2">
            ${AppData.projects.map(project => `
              <a href="${project.url}" target="_blank" class="work-item">
                <div class="work-thumb">
                  <img src="${project.image}" alt="${project.title}">
                  <div class="work-overlay">
                    <span class="work-tag">${project.tag}</span>
                    <span class="work-title">${project.title}</span>
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
          
          <div class="text-center mt-4">
            <a href="portfolio.html" class="btn btn-secondary">View All Projects</a>
          </div>
        </div>
      </section>
    `;
  },

  renderTeam: () => {
    return `
      <section id="team" class="section">
        <div class="container">
          <h2 class="section-title">Our Team</h2>
          
          <div class="team-carousel-container">
            <div class="team-carousel" id="team-carousel">
              ${AppData.team.map(member => `
                <div class="team-card">
                  <div class="team-avatar">
                    <img src="${member.image}" alt="${member.name}">
                  </div>
                  <h3 class="team-name">${member.name}</h3>
                  <p class="team-role">${member.role}</p>
                  <p class="team-bio">${member.bio}</p>
                  ${member.linkedin ? `
                    <a href="${member.linkedin}" target="_blank" class="team-social">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  ` : ''}
                </div>
              `).join('')}
            </div>
            
            <button class="team-nav prev" id="team-prev">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="team-nav next" id="team-next">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    `;
  },

  renderContact: () => {
    return `
      <footer id="contact" class="section">
        <div class="container">
          <div class="contact-content">
            <h2 class="section-title">Ready to Create?</h2>
            <p class="contact-info">
              <i class="fas fa-map-marker-alt"></i> ${AppData.company.contact.address}<br>
              <i class="fas fa-phone"></i> ${AppData.company.contact.phone}<br>
              <i class="fas fa-envelope"></i> ${AppData.company.contact.email}
            </p>
            
            <div class="social-links">
              <a href="${AppData.company.contact.instagram}" target="_blank" class="social-btn instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="${AppData.company.contact.linkedin}" target="_blank" class="social-btn linkedin">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="${AppData.company.contact.whatsapp}" target="_blank" class="social-btn whatsapp">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
            
            <p class="copyright">
              © ${new Date().getFullYear()} ${AppData.company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    `;
  }
};
