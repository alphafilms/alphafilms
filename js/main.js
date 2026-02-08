// TEMPORARY FIX - Replace your main.js with this
document.addEventListener('DOMContentLoaded', function() {
  console.log('Alpha Films - Debug Mode');
  
  // Simple cinema belt with dummy data
  const cinemaBelt = document.getElementById('cinema-belt');
  
  if (cinemaBelt) {
    console.log('Found cinema belt, loading projects...');
    
    const dummyProjects = [
      {
        title: "Night Shift",
        tag: "Short Film",
        image: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Night+Shift",
        url: "#",
        description: "A gripping cinematic thriller"
      },
      {
        title: "Into the Sea",
        tag: "Cinematic Short",
        image: "https://via.placeholder.com/300x200/00FF00/FFFFFF?text=Into+The+Sea",
        url: "#",
        description: "Emotional journey of self-discovery"
      },
      {
        title: "Goan Classic 350",
        tag: "Motorcycle Film",
        image: "https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Goan+Classic",
        url: "#",
        description: "Visual love letter to Royal Enfield"
      },
      {
        title: "Broken Reflections",
        tag: "Drama",
        image: "https://via.placeholder.com/300x200/FF00FF/FFFFFF?text=Broken+Reflections",
        url: "#",
        description: "Exploration of identity and perception"
      }
    ];
    
    // Create belt content
    let beltHTML = '';
    for (let i = 0; i < 8; i++) { // Create 8 cards for testing
      const project = dummyProjects[i % dummyProjects.length];
      beltHTML += `
        <div class="project-card">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="project-info">
            <span class="project-tag">${project.tag}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.url}" class="project-cta">
              Watch Now <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      `;
    }
    
    cinemaBelt.innerHTML = beltHTML;
    console.log('Projects loaded successfully!');
  } else {
    console.error('ERROR: Cinema belt element not found!');
  }
});
