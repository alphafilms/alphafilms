// ========== ALPHA FILMS DATA ==========
// Edit this file to update website content

const AppData = {
  // Company Information
  company: {
    name: "Alpha Films",
    tagline: "Frame by frame. Feeling by feeling.",
    description: "Alpha Films is a one-stop film and video production company offering end-to-end production solutions.",
    contact: {
      phone: "+91 85870 90302",
      email: "alphafilmsofficial@gmail.com",
      address: "Delhi, India",
      whatsapp: "https://wa.me/918587090302?text=Hi%20Alpha%20Films%2C%20I%20want%20to%20book%20your%20studio%2Fvideo%20production%20services.%20What's%20next%3F",
      instagram: "https://instagram.com/alphafilmsofficial",
      linkedin: "https://www.linkedin.com/company/alphafilms"
    }
  },
  
// ===== TRACK RECORD STATS - WITH LOGO PATH =====
stats: {
  // Left side - Big text
  leftTitle: "OUR",
  leftSubtitle: "PERFORMANCE",
  
  // Logo under the text (NEW)
  logo: "images/logo.png", // Path to your logo
  
  // Right side - Headline
  rightHeadline: "OUR TRACK RECORD REFLECTS OUR DEDICATION TO EXCELLENCE AND DELIVERING VALUE TO OUR CLIENTS.",
  
  // Middle numbers - Easy to edit
  numbers: [
    {
      value: "30",
      suffix: "+",
      label: "SUCCESSFUL PROJECTS"
    },
    {
      value: "200K",
      suffix: "+",
      label: "OUR CONTENT HAVE REACHED TO VIEWS"
    },
    {
      value: "300K",
      suffix: "+",
      label: "ENGAGEMENT OVER SOCIAL MEDIA"
    }
  ],
  
  // "BY THE NUMBERS" text
  byTheNumbers: "BY THE NUMBERS:",
  
  // Hashtag (made editable)
  hashtag: "#beingALPHA"
},

  // Services
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

  // Featured Projects - MAKE SURE THIS ARRAY EXISTS AND HAS DATA
  projects: [
    {
      title: "Night Shift",
      tag: "Short Film",
      category: "films", // Add this
      image: "images/nightshift.jpg",
      url: "https://www.youtube.com/watch?v=kwVuPcAiNjY",
      description: "A gripping cinematic thriller exploring the dark corners of night shift work."
    },
    {
      title: "Into the Sea",
      tag: "Short Film",
      category: "films", // Add this
      image: "images/intothesea.jpg",
      url: "https://www.youtube.com/watch?v=vQYMIPsxp4c",
      description: "An emotional journey of self-discovery set against breathtaking ocean vistas."
    },
    {
      title: "Goan Classic 350",
      tag: "Youtube Video",
      category: "social", // Add this
      image: "images/goan.jpg",
      url: "https://www.youtube.com/watch?v=VB-Ql4tNCZI",
      description: "A visual love letter to the iconic Royal Enfield Classic 350 on Goan roads."
    },
    {
      title: "Broken Reflections",
      tag: "Short Film",
      category: "films", // Add this
      image: "images/broken.jpg",
      url: "https://www.youtube.com/watch?v=AhzQTAfnsCs",
      description: "A poignant exploration of identity and self-perception in modern society."
    },
    {
      title: "BND Motorsport Event - Delhi",
      tag: "Events",
      category: "events", // Add this
      image: "images/bnd.jpg",
      url: "https://www.instagram.com/alphafilmsofficial/p/DRO-CBfE5no/?hl=en",
      description: "Have a look at our shots from the day on our instagram."
    },
    {
      title: "Sui Dhaga",
      tag: "Apparel Brand",
      category: "brands", // Add this
      image: "images/sui.jpg",
      url: "https://www.instagram.com/chandniwalia_/reel/DMsVAlxPctz/",
      description: "Managing brands social media, website, product photoshoots and content creation."
    },
    {
      title: "USS DIN",
      tag: "Short Film",
      category: "films", // Add this
      image: "images/ussdin.jpg",
      url: "https://www.instagram.com/alphafilmsofficial/p/Cp-a69mBrHF/?hl=en",
      description: "Team Uss Din wins big in Indo French International Film Festival!"
    },
    {
      title: "Bull-ing",
      tag: "Short Film",
      category: "films", // Add this
      image: "images/bulling.png",
      url: "https://www.instagram.com/p/C1w393xheBx/",
      description: "Our team is very proud to announce “BULL-ING”. We had a great time shooting for this film and waiting for you to watch this business drama."
    },
    {
      title: "NueGo Commercial",
      tag: "Commercial",
      category: "commercials", // Add this
      image: "images/nuego.png",
      url: "https://www.instagram.com/alphafilmsofficial/reel/Cq2V7NVp1uX/?hl=en",
      description: "NueGo: Ab Ye Humara Safar Hai"
    },
    {
      title: "Autodaily_Satyam",
      tag: "Social Media",
      category: "social", // Add this
      image: "images/autosatyam.jpg",
      url: "https://www.instagram.com/reel/DNCpNDvyPkn/",
      description: "Creating and editing reels and long form video for youtube and instagram."
    },
    {
      title: "MOIRA",
      tag: "Short Film",
      category: "films", // Add this
      image: "images/moira.png",
      url: "https://www.youtube.com/watch?v=tyzMLpcjivQ",
      description: "Fate is decided and karma plays its part well in everyones life."
    },
    {
      title: "Armaan Malik",
      tag: "Concert",
      category: "events", // Add this
      image: "images/armaan.jpg",
      url: "portfolio.html",
      description: "Armaan Malik concert covered by Alpha Films."
    },
    {
      title: "Social Nation - Mumbai",
      tag: "Youtube Event",
      category: "events", // Add this
      image: "images/socialnation.jpg",
      url: "portfolio.html",
      description: "Social Nation event in Mumbai covered by Alpha Films in collaboration with Sejal Kumar, Gaurav Taneja and many more..."
    },
    {
      title: "KK",
      tag: "Concert",
      category: "events", // Add this
      image: "images/kk.jpg",
      url: "portfolio.html",
      description: "One of the best concert's of KK covered by Alpha Films."
    },
    {
      title: "The Local Train",
      tag: "Concert",
      category: "events", // Add this
      image: "images/localtrain.jpg",
      url: "portfolio.html",
      description: "Outstanding performance by The Local Train covered by Alpha Films."
    },
    {
      title: "Silver Peaks",
      tag: "Commercial",
      category: "commercials", // Add this
      image: "images/silverpeaks.jpg",
      url: "https://www.youtube.com/watch?v=HwyHW82-QPY&t=51s",
      description: "Silver Peaks | A Piece of Paradise is a beautiful property in Ranikhet."
    },
    {
      title: "POSHAAK",
      tag: "Short Film",
      category: "films", // Add this
      image: "images/poshaak.png",
      url: "https://www.youtube.com/watch?v=wPeLDbV9i4Q&t=4s",
      description: "Their is always a bit of bad in good and a bit of good in bad, its on you to how crack your life."
    },
    {
      title: "KING | Moment Hai",
      tag: "Event",
      category: "events", // Add this
      image: "images/king.png",
      url: "https://www.youtube.com/watch?v=mfAF9jSLpwA",
      description: "Show Reel of King's another showdown at Kingdom Of Dream, Gurgaon."
    }
  ],

  // Team Members
  team: [
    {
      name: "Deepanshu Sehgal",
      role: "Founder & Creative Director",
      bio: "Visionary filmmaker with 5+ years experience. First AD at 21, Best Student Short Film Producer award. Masters in Film Making - Specialization in Production from Whistling Woods International, Mumbai.",
      image: "team_images/deep.png",
      linkedin: "https://www.linkedin.com/in/deepsehgal"
    },
    {
      name: "Daksh Mehta",
      role: "Content Director",
      bio: "Expert in content strategy and digital marketing with a focus on cinematic storytelling. Specializes in creating engaging video content for social media platforms.",
      image: "team_images/daksh.jpg"
    },
    {
      name: "Shivani Damle",
      role: "Creative Lead",
      bio: "With 3+ years in content strategy, Shivani turns ideas into engaging brand experiences across radio advertising and experiential branding platforms. An MBA in Media & Entertainment, she brings sharp storytelling and strategic thinking to every campaign.",
      image: "team_images/shivani.jpeg"
    },
    {
      name: "Parth Sehgal",
      role: "Operations Manager",
      bio: "Ensures smooth operations and team coordination. Manages client relationships and project timelines with precision and care.",
      image: "team_images/parth.JPG"
    }
  ],

  // News & Updates
  news: [
    {
      id: 1,
      title: "Alpha Films Studio Grand Opening",
      category: "studio",
      date: "2026-02-03",
      excerpt: "Our new 8-hour professional shooting space is now LIVE in Delhi NCR. Fully equipped with AC, power backup, lighting rigs, and production support."
    },
    {
      id: 2,
      title: "Speaking at Digital Media Summit",
      category: "events",
      date: "2026-01-15",
      excerpt: "Sharing insights on cinematic storytelling and building production studio brands in India's competitive market."
    },
    {
      id: 3,
      title: "Major D2C Commercial Production",
      category: "projects",
      date: "2025-12-20",
      excerpt: "End-to-end TVC production completed in 10 days for emerging D2C brand. Delivered concept-to-master with motion graphics."
    }
  ],
};

console.log("Alpha Films Data Loaded Successfully - Projects:", AppData.projects.length);
