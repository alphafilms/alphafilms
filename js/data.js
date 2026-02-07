// ALL EDITABLE CONTENT GOES HERE
// Non-technical users only need to edit this file

const AppData = {
  // Company Info
  company: {
    name: "Alpha Films",
    tagline: "Frame by frame. Feeling by feeling.",
    description: "Alpha Films is a one-stop film and video production company offering end-to-end production solutions.",
    contact: {
      phone: "+91 85870 90302",
      email: "alphafilmsofficial@gmail.com",
      address: "Delhi, India",
      whatsapp: "https://wa.me/918587090302?text=Hi%20Alpha%20Films%2C%0AI%20want%20to%20book%20your%20studio%2Fvideo%20production%20services.%0AWhat's%20next%3F",
      instagram: "https://instagram.com/alphafilmsofficial",
      linkedin: "https://www.linkedin.com/company/alphafilms"
    }
  },

  // Services (Add/Remove services here)
  services: [
    {
      icon: "🎬",
      title: "Video Production",
      description: "End-to-end production from concept to final cinematic edit. Commercials, films, corporate videos."
    },
    {
      icon: "📸",
      title: "Studio Rental",
      description: "8-hour professional shooting space in Delhi with AC, power backup, and full equipment."
    },
    {
      icon: "⚡",
      title: "Studio + Gear",
      description: "Complete package: studio, lights, cameras, audio, and production support."
    },
    {
      icon: "✂️",
      title: "Post Production",
      description: "High-impact editing for reels, ads, courses, and social media content."
    },
    {
      icon: "📱",
      title: "Social Content",
      description: "Instagram Reels, YouTube Shorts, TikTok videos optimized for maximum engagement."
    },
    {
      icon: "🎓",
      title: "Course Packages",
      description: "Bulk production for online courses, educational content, and brand series."
    }
  ],

  // Featured Projects (Add new projects here)
  projects: [
    {
      title: "Night Shift",
      tag: "Short Film",
      image: "images/nightshift.jpg",
      url: "https://www.youtube.com/watch?v=kwVuPcAiNjY",
      description: "A gripping cinematic thriller exploring the dark corners of night shift work."
    },
    {
      title: "Into the Sea",
      tag: "Cinematic Short",
      image: "images/intothesea.jpg",
      url: "https://www.youtube.com/watch?v=vQYMIPsxp4c",
      description: "An emotional journey of self-discovery set against breathtaking ocean vistas."
    },
    // Add more projects here...
  ],

  // Team Members (Add/Edit team here)
  team: [
    {
      name: "Deepanshu Sehgal",
      role: "Founder & Creative Director",
      bio: "Visionary filmmaker with 5+ years experience. First AD at 21, Best Student Short Film Producer award.",
      image: "team_images/deep.png",
      linkedin: "https://www.linkedin.com/in/deepsehgal"
    },
    // Add more team members here...
  ],

  // News & Updates (Add new posts here)
  news: [
    {
      id: 1,
      title: "Alpha Films Studio Grand Opening",
      category: "studio",
      date: "2026-02-03",
      excerpt: "Our new 8-hour professional shooting space is now LIVE in Delhi NCR."
    },
    // Add more news here...
  ],

  // Action Belt Text (Edit scrolling text)
  actionBelt: [
    "*LIGHTS | CAMERA | ACTION*",
    "*PREMIUM QUALITY | CINEMATIC RESULTS*",
    "*CREATIVE STORYTELLING | PROFESSIONAL EXECUTION*"
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppData;
}
