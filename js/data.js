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
      linkedin: "https://www.linkedin.com/company/alphafilms",
      youtube: "https://www.youtube.com/channel/UC_C0sBHVMw5ekRbutmJhEGg"
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
      value: "40",
      suffix: "+",
      label: "SUCCESSFUL PROJECTS"
    },
    {
      value: "1.5M",
      suffix: "+",
      label: "OUR CONTENT HAVE REACHED TO VIEWS"
    },
    {
      value: "350K",
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
    description: "End-to-end production from concept to final cinematic edit. Commercials, films, corporate videos.",
    link: "https://wa.me/918587090302?text=Hi%20Alpha%20Films%2C%20I%20want%20to%20book%20Video%20Production%20services.%20Can%20you%20share%20more%20details%3F"
  },
  {
    icon: "📸",
    title: "Studio Rental",
    description: "8-hour professional shooting space in Delhi with AC, power backup, and full equipment.",
    link: "studio.html"
  },
  {
    icon: "⚡",
    title: "Studio + Gear",
    description: "Complete package: studio, lights, cameras, audio, and production support.",
    link: "studio.html"
  },
  {
    icon: "✂️",
    title: "Post Production",
    description: "High-impact editing for reels, ads, courses, and social media content.",
    link: "https://wa.me/918587090302?text=Hi%20Alpha%20Films%2C%20I%20want%20to%20book%20Post%20Production%20services.%20Can%20you%20share%20more%20details%3F"
  },
  {
    icon: "📱",
    title: "Social Content",
    description: "Instagram Reels, YouTube Shorts, TikTok videos optimized for maximum engagement.",
    link: "https://wa.me/918587090302?text=Hi%20Alpha%20Films%2C%20I%20want%20to%20book%20Social%20Content%20creation%20services.%20Can%20you%20share%20more%20details%3F"
  },
  {
    icon: "🎓",
    title: "Course Packages",
    description: "Bulk production for online courses, educational content, and brand series.",
    link: "https://wa.me/918587090302?text=Hi%20Alpha%20Films%2C%20I%20want%20to%20inquire%20about%20Course%20Packages%2C%20Learning%20Production%2C%20or%20Internship%20opportunities.%20Is%20anything%20available%3F"
  }
],

  // Featured Projects - MAKE SURE THIS ARRAY EXISTS AND HAS DATA
  projects: [
    {
      title: "Nexxus New York",
      tag: "Brand Content",
      category: "brands",
      image: "images/logos/Nexxus.png",
      url: "https://www.instagram.com/p/DbXfhdQudG5/",
      description: "Content creation and campaign coverage for Nexxus New York, a global haircare brand.",
      thumbBg: "#ffffff"
    },
    {
      title: "FDCI",
      tag: "Fashion Council",
      category: "events",
      image: "images/logos/fdci.png",
      url: "https://www.instagram.com/p/DbbVKe-E45m/",
      description: "Event coverage and content creation for FDCI — Fashion Design Council of India.",
      thumbBg: "#ffffff"
    },
    {
      title: "Hashwear",
      tag: "Apparel Brand",
      category: "brands",
      image: "images/logos/hashwear.png",
      url: "https://www.hashwear.in",
      description: "Ongoing reels and campaign content production for Hashwear's apparel line.",
      thumbZoom: 2.9
    },
    {
      title: "Autodaily Satyam — Latest Campaign",
      tag: "Social Media",
      category: "social",
      image: "images/logos/AutoDailySatyam.jpg",
      url: "https://www.instagram.com/reel/Da2l0_7IZAn/",
      description: "Continued partnership with Autodaily Satyam — latest round of reels and long-form content."
    },
    {
      title: "PB 864 / AMIREE",
      tag: "Music Video",
      category: "music", // Add this
      image: "https://img.youtube.com/vi/oocpyKONMwI/maxresdefault.jpg",
      url: "https://youtu.be/oocpyKONMwI",
      description: "Full cinematic music video shot, directed and edited in-house by Alpha Films."
    },
    {
      title: "SAMSUNG S26 Ultra",
      tag: "TVC",
      category: "commercials", // Add this
      image: "images/samsung.jpg",
      url: "https://www.instagram.com/stories/highlights/18352000543230778/?hl=en",
      description: "Watch the BTS from our studio here."
    },
    {
      title: "Night Shift",
      tag: "Producer - Short Film",
      category: "films", // Add this
      image: "images/nightshift.jpg",
      url: "https://www.youtube.com/watch?v=kwVuPcAiNjY&t=1s",
      description: "Producer - Deepanshu Sehgal. A gripping cinematic thriller exploring the dark corners of night shift work."
    },
    {
      title: "Into the Sea",
      tag: "Producer - Short Film",
      category: "films", // Add this
      image: "images/intothesea.jpg",
      url: "https://www.youtube.com/watch?v=vQYMIPsxp4c&t=12s",
      description: "Producer - Deepanshu Sehgal. An emotional journey of self-discovery set against breathtaking ocean vistas."
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
      tag: "Producer - Short Film",
      category: "films", // Add this
      image: "images/broken.jpg",
      url: "https://www.youtube.com/watch?v=AhzQTAfnsCs",
      description: "Producer - Deepanshu Sehgal. A poignant exploration of identity and self-perception in modern society."
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
      url: "https://vimeo.com/811618824?fl=ip&fe=ec",
      description: "Producer - Deepanshu Sehgal. Team Uss Din wins big in Indo French International Film Festival!"
    },
    {
      title: "Bull-ing",
      tag: "Producer - Short Film",
      category: "films", // Add this
      image: "images/bulling.png",
      url: "https://www.youtube.com/watch?v=34VQejVzgbA&t=17s",
      description: "Producer - Deepanshu Sehgal. Our team is very proud to announce “BULL-ING”. We had a great time shooting for this film and waiting for you to watch this business drama."
    },
    {
      title: "Whispers of the Moonlight",
      tag: "Producer - Short Film",
      category: "films", // Add this
      image: "images/whispers.jpg",
      url: "https://www.youtube.com/watch?v=KBNVoWpBSj0",
      description: "Producer - Deepanshu Sehgal. A grieving father heals through dreams."
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
      title: "Sookha Patta",
      tag: "Assistant Producer - Short Film",
      category: "films", // Add this
      image: "images/sookha.jpg",
      url: "https://www.youtube.com/watch?v=1tfCTZRG3Ao",
      description: "Assistant Producer - Deepanshu Sehgal. A Vaastu-obsessed man strains family ties over beliefs."
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
      name: "Shuchi Sharma",
      role: "Creative Producer",
      bio: "with experience across film, advertising, and branded content. A BA Acting graduate from Whistling Woods International, she brings an all-round perspective to storytelling, from concept development to on-set production. She has collaborated with Amazon, Vadilal, Havells, Samsung, Calvin Klein and Movado and many more.",
      image: "team_images/shuchi.jpeg"
    },
    {
      name: "Daksh Mehta",
      role: "Content Director",
      bio: "Expert in content strategy and digital marketing with a focus on cinematic storytelling. Specializes in creating engaging video content for social media platforms.",
      image: "team_images/daksh.jpeg"
    },
    {
      name: "Parth Sehgal",
      role: "Business Operations Manager",
      bio: "Oversees day-to-day operations by streamlining workflows, managing the tech roadmap (Tech Lead), and auditing financial performance (Finance Manager)",
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

  // ===== COLLABORATOR LOGOS =====
  // HOW TO ADD A NEW LOGO:
  // 1. Drop the image into images/logos/ folder
  // 2. Copy any item below and paste it at the end of the array
  // 3. Update name and file
  // row: 1, 2, or 3 — controls which moving belt row it appears in
  collaborators: [
    // ROW 1
    { name: "Autodaily Satyam",         file: "AutoDailySatyam.jpg",        row: 1 },
    { name: "BNDM",           file: "BNDM.png",          row: 1 },
    { name: "Cavora World",    file: "CavoraWorld.png",    row: 1 },
    { name: "Decathlon",       file: "Decathlon.png",       row: 1 },
    { name: "GST",   file: "gst.jpg",   row: 1 },
    { name: "Chili",   file: "chili.png",   row: 1 },
    { name: "Galeries Lafayette",   file: "galeries_lafayette.png",   row: 1 },
    { name: "Metanestt",   file: "metanestt.jpeg",   row: 1 },
 
    // ROW 2
    { name: "KIA",    file: "KIA.png",         row: 2 },
    { name: "Kohler", file: "Kohler.jpg",     row: 2 },
    { name: "NHIT",              file: "NHIT.png",             row: 2 },
    { name: "PMFBY",     file: "PMFBY.png",     row: 2 },
    { name: "SANAM BAND",   file: "SANAM BAND.jpeg",   row: 2 },
    { name: "Government",   file: "ministry.png",   row: 2 },
    { name: "Nuego Logo",   file: "nuego_logo.jpeg",   row: 2 },
    { name: "Pizza Express",   file: "pizza-express-1.svg",   row: 2 },
 
    // ROW 3
    { name: "Samsung",       file: "Samsung.webp",      row: 3 },
    { name: "Social Nation",  file: "Social Nation.png",            row: 3 },
    { name: "YT FANFEST",            file: "YTFANFEST.jpg",           row: 3 },
    { name: "Zomato",   file: "Zomato.png",   row: 3 },
    { name: "Barca Academy",     file: "barcaacademy.png",           row: 3 },
    { name: "Royal Enfield",     file: "royal-enfield.png",           row: 3 },
    { name: "barcaacademy",     file: "barcaacademy.png",           row: 3 },
    { name: "Sui Dahghas",     file: "suidahghas.png",           row: 3 },
  ],
 

};

console.log("Alpha Films Data Loaded Successfully - Projects:", AppData.projects.length);
