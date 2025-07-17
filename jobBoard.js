window.onload = function() {
    const jobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechNova",
        location: "Remote",
        category: "Frontend",
        description: "Work on user interfaces using React and Tailwind CSS."
      },
      {
        id: 2,
        title: "Backend Node.js Developer",
        company: "Cloudify",
        location: "Mumbai",
        category: "Backend",
        description: "Build REST APIs using Express and MongoDB."
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "PixelCraft",
        location: "Delhi",
        category: "Design",
        description: "Design seamless user experiences for web and mobile platforms."
      },
      {
        id: 4,
        title: "DevOps Engineer",
        company: "AppVerse",
        location: "Delhi",
        category: "Cloud",
        description: "Architect and deploy cloud solutions on AWS or Azure."
      },
      {
        id: 5,
        title: "Cybersecurity Analyst",
        company: "BlueOcean Tech",
        location: "Gurgaon",
        category: "Fullstack",
        description: "Develop both frontend and backend of web applications."
      },
      {
        id: 6,
        title: "Mobile App Developer",
        company: "Cloudify",
        location: "Chennai",
        category: "Design",
        description: "Design seamless user experiences for web and mobile platforms."
      },
      {
        id: 7,
        title: "Data Scientist",
        company: "NextGenCode",
        location: "Hyderabad",
        category: "Cloud",
        description: "Architect and deploy cloud solutions on AWS or Azure."
      },
      {
        id: 8,
        title: "Full Stack Engineer",
        company: "Cloudify",
        location: "Delhi",
        category: "Cloud",
        description: "Architect and deploy cloud solutions on AWS or Azure."
      },
      {
        id: 9,
        title: "AI/ML Engineer",
        company: "TechNova",
        location: "Remote",
        category: "AI/ML",
        description: "Develop machine learning models and AI solutions."
      },
      {
        id: 10,
        title: "Blockchain Developer",
        company: "CryptoSolutions",
        location: "Bangalore",
        category: "Blockchain",
        description: "Build decentralized applications using blockchain technology."
      },
      {
        id: 11,
        title: "Game Developer",
        company: "GameOn",
        location: "Pune",
        category: "Game Development",
        description: "Create engaging games for web and mobile platforms."
      },
      {
        id: 12,
        title: "Cloud Solutions Architect",
        company: "Cloudify",
        location: "Delhi",
        category: "Cloud",
        description: "Design and implement cloud solutions for enterprises."
      },
      {
        id: 13,
        title: "Data Analyst",
        company: "DataInsights",
        location: "Bangalore",
        category: "Data Science",
        description: "Analyze data to provide actionable insights for business decisions."
      },
      {
        id: 14,
        title: "IoT Developer",
        company: "SmartTech",
        location: "Remote",
        category: "IoT",
        description: "Develop IoT solutions for smart devices and applications."
      },
      {
        id: 15,
        title: "AR/VR Developer",
        company: "VirtualWorlds",
        location: "Delhi",
        category: "AR/VR",
        description: "Create immersive augmented and virtual reality experiences."
      },
      {
        id: 16,
        title: "Cybersecurity Specialist",
        company: "SecureTech",
        location: "Gurgaon",
        category: "Cybersecurity",
        description: "Protect systems and networks from cyber threats."
      },
      {
        id: 17,
        title: "SEO Specialist",
        company: "WebRank",
        location: "Remote",
        category: "Digital Marketing",
        description: "Optimize websites for search engines to improve visibility."
      },
      {
        id: 18,
        title: "Content Writer",
        company: "ContentCreators",
        location: "Delhi",
        category: "Content Writing",
        description: "Create engaging content for blogs, websites, and social media."
      },
      {
        id: 19,
        title: "Social Media Manager",
        company: "SocialBuzz",
        location: "Mumbai",
        category: "Digital Marketing",
        description: "Manage social media accounts and create marketing campaigns."
      },
      {
        id: 20,
        title: "Product Manager",
        company: "InnovateTech",
        location: "Bangalore",
        category: "Product Management",
        description: "Oversee product development and manage product lifecycle."
      },
      {
        id: 21,
        title: "Technical Writer",
        company: "TechDocs",
        location: "Remote",
        category: "Content Writing",
        description: "Create technical documentation for software products."
      },
      {
        id: 22,
        title: "Network Engineer",
        company: "NetSolutions",
        location: "Delhi",
        category: "Networking",
        description: "Design and maintain network infrastructure for organizations."
      },
      {
        id: 23,
        title: "Database Administrator",
        company: "DataMasters",
        location: "Gurgaon",
        category: "Database Management",
        description: "Manage and optimize database systems for performance."
      },
      {
        id: 24,
        title: "System Administrator",
        company: "SysOps",
        location: "Chennai",
        category: "System Administration",
        description: "Maintain and support IT systems and networks."
      },
      {
        id: 25,
        title: "IT Support Specialist",
        company: "TechHelp",
        location: "Hyderabad",
        category: "IT Support",
        description: "Provide technical support and troubleshooting for users."
      },
      {
        id: 26,
        title: "Web Developer",
        company: "WebWorks",
        location: "Delhi",
        category: "Frontend",
        description: "Develop and maintain websites using HTML, CSS, and JavaScript."
      },
      {
        id: 27,
        title: "Software Tester",
        company: "TestMasters",
        location: "Bangalore",
        category: "Quality Assurance",
        description: "Test software applications to ensure quality and performance."
      },
      {
        id: 28,
        title: "Cloud Security Engineer",
        company: "SecureCloud",
        location: "Remote",
        category: "Cybersecurity",
        description: "Implement security measures for cloud-based systems."
      },
      {
        id: 29,
        title: "E-commerce Specialist",
        company: "ShopSmart",
        location: "Mumbai",
        category: "E-commerce",
        description: "Manage e-commerce platforms and optimize online sales."
      },
      {
        id: 30,
        title: "Digital Marketing Strategist",
        company: "MarketMinds",
        location: "Delhi",
        category: "Digital Marketing",
        description: "Develop and execute digital marketing strategies."
      },
      {
        id: 31,
        title: "Game Designer",
        company: "GameCreators",
        location: "Pune",
        category: "Game Development",
        description: "Design game mechanics and user experiences for games."
      },
      {
        id: 32,
        title: "AI Research Scientist",
        company: "AI Innovations",
        location: "Bangalore",
        category: "AI/ML",
        description: "Conduct research in artificial intelligence and machine learning."
      },
      {
        id: 33,
        title: "Robotics Engineer",
        company: "RoboTech",
        location: "Delhi",
        category: "Robotics",
        description: "Design and develop robotic systems and applications."
      },
      {
        id: 34,
        title: "Data Engineer",
        company: "DataFlow",
        location: "Hyderabad",
        category: "Data Science",
        description: "Build data pipelines and manage data infrastructure."
      },
      {
        id: 35,
        title: "Blockchain Architect",
        company: "CryptoTech",
        location: "Remote",
        category: "Blockchain",
        description: "Design blockchain architectures and solutions."
      },
      {
        id: 36,
        title: "Cloud DevOps Engineer",
        company: "CloudOps",
        location: "Delhi",
        category: "DevOps",
        description: "Implement DevOps practices in cloud environments."
      },
      {
        id: 37,
        title: "Mobile Game Developer",
        company: "GameOn",
        location: "Karnataka",
        category: "Game Development",
        description: "Develop mobile games for iOS and Android platforms."
      },
      {
        id: 38,
        title: "Augmented Reality Developer",
        company: "ARTech",
        location: "Bihar",
        category: "AR/VR",
        description: "Create augmented reality applications and experiences."
      },
      {
        id: 39,
        title: "Virtual Reality Developer",
        company: "VRWorlds",
        location: "Haryana",
        category: "AR/VR",
        description: "Develop virtual reality applications and experiences."
      },
      {
        id: 40,
        title: "Cybersecurity Consultant",
        company: "SecureConsulting",
        location: "Punjab",
        category: "Cybersecurity",
        description: "Provide cybersecurity consulting services to organizations."
      },
      {
        id: 41,
        title: "SEO Analyst",
        company: "WebRank",
        location: "Uttrakhand",
        category: "Digital Marketing",
        description: "Analyze and optimize websites for search engine performance."
      },
      {
        id: 42,
        title: "Content Marketing Specialist",
        company: "ContentCreators",
        location: "Uttar Pradesh",
        category: "Content Writing",
        description: "Create and manage content marketing strategies."
      },
      {
        id: 43,
        title: "Social Media Strategist",
        company: "SocialBuzz",
        location: "Bihar",
        category: "Digital Marketing",
        description: "Develop social media strategies to enhance brand presence."
      },
      {
        id: 44,
        title: "Product Owner",
        company: "InnovateTech",
        location: "Bihar",
        category: "Product Management",
        description: "Define product vision and manage product backlog."
      },
      {
        id: 45,
        title: "Technical Support Engineer",
        company: "TechHelp",
        location: "haryana",
        category: "IT Support",
        description: "Provide technical support and troubleshooting for software products."
      },
      {
        id: 46,
        title: "Network Security Engineer",
        company: "NetSolutions",
        location: "rajasthan",
        category: "Networking",
        description: "Implement security measures for network infrastructure."
      },
      {
        id: 47,
        title: "Database Developer",
        company: "DataMasters",
        location: "uttar Pradesh",
        category: "Database Management",
        description: "Develop and maintain database applications."
      },
      {
        id: 48,
        title: "System Analyst",
        company: "SysOps",
        location: "uttrakhand",
        category: "System Administration",
        description: "Analyze and improve IT systems and processes."
      },
      {
        id: 49,
        title: "IT Project Manager",
        company: "TechProjects",
        location: "West Bengal",
        category: "Project Management",
        description: "Manage IT projects from initiation to completion."
      },
      {
        id: 50,
        title: "Web Application Developer",
        company: "WebWorks",
        location: "Sikkim",
        category: "Frontend",
        description: "Develop web applications using modern frameworks."
      },
      {
        id: 51,
        title: "Software Quality Engineer",
        company: "TestMasters",
        location: "Tripura",
        category: "Quality Assurance",
        description: "Ensure software quality through testing and validation."
      },
      {
        id: 52,
        title: "Cloud Solutions Developer",
        company: "Cloudify",
        location: "Telangana",
        category: "Cloud",
        description: "Develop cloud-based applications and services."
      },
      {
        id: 53,
        title: "AI Software Engineer",
        company: "TechNova",
        location: "Tamil Nadu",
        category: "AI/ML",
        description: "Build AI-powered software solutions."
      },
      {
        id: 54,
        title: "Robotics Software Engineer",
        company: "RoboTech",
        location: "Uttar Pradesh",
        category: "Robotics",
        description: "Develop software for robotic systems."
      },
      {
        id: 55,
        title: "Data Visualization Specialist",
        company: "DataInsights",
        location: "Rajasthan",
        category: "Data Science",
        description: "Create visual representations of data for analysis."
      },
      {
        id: 56,
        title: "Blockchain Solutions Developer",
        company: "CryptoTech",
        location: "Punjab",
        category: "Blockchain",
        description: "Develop blockchain-based solutions and applications."
      },
      {
        id: 57,
        title: "DevOps Automation Engineer",
        company: "CloudOps",
        location: "Nagaland",
        category: "DevOps",
        description: "Automate DevOps processes and workflows."
      },
      {
        id: 58,
        title: "Mobile UI/UX Designer",
        company: "PixelCraft",
        location: "Odisha",
        category: "Design",
        description: "Design user interfaces for mobile applications."
      },
      {
        id: 59,
        title: "Game AI Developer",
        company: "GameCreators",
        location: "Mizoram",
        category: "Game Development",
        description: "Develop AI systems for games."
      },
      {
        id: 60,
        title: "Augmented Reality Designer",
        company: "ARTech",
        location: "Delhi",
        category: "AR/VR",
        description: "Design augmented reality experiences and applications."
      },
      {
        id: 61,
        title: "Virtual Reality Designer",
        company: "VRWorlds",
        location: "Meghalaya",
        category: "AR/VR",
        description: "Design virtual reality experiences and applications."
      },
      {
        id: 62,
        title: "Cybersecurity Analyst",
        company: "SecureTech",
        location: "Manipur",
        category: "Cybersecurity",
        description: "Analyze and respond to cybersecurity threats."
      },
      {
        id: 63,
        title: "SEO Content Writer",
        company: "WebRank",
        location: "Kerala",
        category: "Digital Marketing",
        description: "Write SEO-optimized content for websites."
      },
      {
        id: 64,
        title: "Content Strategist",
        company: "ContentCreators",
        location: "Jharkhand",
        category: "Content Writing",
        description: "Develop content strategies to achieve business goals."
      },
      {
        id: 65,
        title: "Social Media Content Creator",
        company: "SocialBuzz",
        location: "Madhya Pradesh",
        category: "Digital Marketing",
        description: "Create engaging content for social media platforms."
      },
      {
        id: 66,
        title: "Product Marketing Manager",
        company: "InnovateTech",
        location: "Maharashtra",
        category: "Product Management",
        description: "Manage product marketing strategies and campaigns."
      },
      {
        id: 67,
        title: "Technical Account Manager",
        company: "TechHelp",
        location: "Kerala",
        category: "IT Support",
        description: "Manage technical accounts and provide support to clients."
      },
      {
        id: 68,
        title: "Network Architect",
        company: "NetSolutions",
        location: "Jharkhand",
        category: "Networking",
        description: "Design network architectures for organizations."
      },
      {
        id: 69,
        title: "Database Architect",
        company: "DataMasters",
        location: "Himachal Pradesh",
        category: "Database Management",
        description: "Design database architectures and systems."
      },
      {
        id: 70,
        title: "System Integration Specialist",
        company: "SysOps",
        location: "Haryana",
        category: "System Administration",
        description: "Integrate IT systems and ensure interoperability."
      },
      {
        id: 71,
        title: "IT Operations Manager",
        company: "TechProjects",
        location: "Hyderabad",
        category: "Project Management",
        description: "Manage IT operations and ensure service delivery."
      },
      {
        id: 72,
        title: "Web Application Architect",
        company: "WebWorks",
        location: "Gujarat",
        category: "Frontend",
        description: "Design web application architectures and frameworks."
      },
      {
        id: 73,
        title: "Software Development Engineer in Test (SDET)",
        company: "TestMasters",
        location: "Chhattisgarh",
        category: "Quality Assurance",
        description: "Develop automated tests and ensure software quality."
      },
      {
        id: 74,
        title: "Cloud Solutions Consultant",
        company: "Cloudify",
        location: "Goa",
        category: "Cloud",
        description: "Consult on cloud solutions and implementations."
      },
      {
        id: 75,
        title: "AI Software Architect",
        company: "TechNova",
        location: "Bihar",
        category: "AI/ML",
        description: "Design AI software architectures and systems."
      },
      {
        id: 76,
        title: "Robotics Systems Engineer",
        company: "RoboTech",
        location: "Assam",
        category: "Robotics",
        description: "Engineer robotic systems and applications."
      },
      {
        id: 77,
        title: "Data Science Consultant",
        company: "DataInsights",
        location: "Arunachal Pradesh",
        category: "Data Science",
        description: "Consult on data science projects and implementations."
      },
      {
        id: 78,
        title: "Blockchain Solutions Architect",
        company: "CryptoTech",
        location: "Andhra Predesh",
        category: "Blockchain",
        description: "Design blockchain solutions and architectures."
      },
      {
        id: 79,
        title: "DevOps Solutions Architect",
        company: "CloudOps",
        location: "Rajasthan",
        category: "DevOps",
        description: "Architect DevOps solutions and practices."
      },
      {
        id: 80,
        title: "Mobile Game Designer",
        company: "GameOn",
        location: "Pune",
        category: "Game Development",
        description: "Design mobile games and user experiences."
      }
    ];

    const jobList = document.getElementById("job-listings");
    const search = document.getElementById("search");

    // PAGINATION VARIABLES
    let currentPage = 1;
    const jobsPerPage = 16;
    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    // PAGINATION FUNCTION
    function showJobs(page, keyword = "", location = "", category = "") {
      let filteredJobs = jobs.filter(job => {
        const matchesKeyword = keyword === "" || job.title.toLowerCase().includes(keyword.toLowerCase());
        const matchesLocation = location === "" || job.location === location;
        const matchesCategory = category === "" || job.category === category;
        return matchesKeyword && matchesLocation && matchesCategory;
      });

      // Pagination logic
      const start = (page - 1) * jobsPerPage;
      const end = start + jobsPerPage;
      const jobsToShow = filteredJobs.slice(start, end);

      jobList.innerHTML = "";
      jobsToShow.forEach(job => {
        const div = document.createElement("div");
        div.className = "job";
        div.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Company:</strong> ${job.company}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          <button onclick='openModal(${JSON.stringify(job)})'>View Details</button>
        `;
        jobList.appendChild(div);
      });
    }

    // PAGE BUTTONS CLICK HANDLER
    document.querySelectorAll('.dropdown-content a').forEach((btn, idx, arr) => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        if (btn.textContent === 'Next') {
          if (currentPage < totalPages) currentPage++;
        } else {
          currentPage = parseInt(btn.textContent);
        }
        showJobs(currentPage, search.value);
      });
    });

    // SEARCH & FILTERS
    search.addEventListener("input", (e) => {
      currentPage = 1;
      showJobs(currentPage, e.target.value);
    });

    window.findJob = function() {
      const keyword = document.getElementById('search').value;
      const selects = document.querySelectorAll('.filters select');
      const location = selects[0].value;
      const category = selects[1].value;
      currentPage = 1;
      showJobs(currentPage, keyword, location, category);
    };

    // Modal & other code (same as before)
    window.openModal = function(job) {
      if (!job) {
        document.getElementById("job-title").textContent = "Job Title";
        document.getElementById("job-description").textContent = "Job Description";
      } else {
        document.getElementById("job-title").textContent = job.title;
        document.getElementById("job-description").textContent = job.description;
      }
      document.getElementById('job-modal').classList.add('active');
    };

    window.closeModal = function() {
      document.getElementById('job-modal').classList.remove('active');
    };

    window.submitApplication = function(e) {
      e.preventDefault();
      alert("Application submitted! 📩");
      window.closeModal();
    };

    // Dynamically fill location and category options
    const locationSelect = document.querySelector('.filters select[name="location"]');
    const categorySelect = document.querySelector('.filters select:nth-of-type(2)');

    if (locationSelect && categorySelect) {
      const locations = [...new Set(jobs.map(job => job.location))].sort();
      const categories = [...new Set(jobs.map(job => job.category))].sort();

      locationSelect.innerHTML = '<option value="">Location</option>';
      locations.forEach(loc => {
        locationSelect.innerHTML += `<option value="${loc}">${loc}</option>`;
      });

      categorySelect.innerHTML = '<option value="">Category</option>';
      categories.forEach(cat => {
        categorySelect.innerHTML += `<option value="${cat}">${cat}</option>`;
      });
    }

    // INITIAL LOAD
    showJobs(currentPage);
};