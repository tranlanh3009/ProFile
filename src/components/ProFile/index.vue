<template>
     <header>
        <nav class="container" >
            <!-- Logo Section -->
            <div class="logo-section" @click="scrollToTop()">
                <div class="logo">
                    <i class="fas fa-code"></i>
                    <span class="logo-text">Trần Lãnh</span>
                </div>
            </div>
            
            <!-- Navigation Links -->
            <ul class="nav-links">
                <li><a href="#home" class="nav-link active">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a></li>
                <li><a href="#about" class="nav-link">
                    <i class="fas fa-user"></i>
                    <span>About</span>
                </a></li>
                <li><a href="#skills" class="nav-link">
                    <i class="fas fa-cogs"></i>
                    <span>Skills</span>
                </a></li>
                <li><a href="#projects" class="nav-link">
                    <i class="fas fa-rocket"></i>
                    <span>Projects</span>
                </a></li>
                <li><a href="#contact" class="nav-link">
                    <i class="fas fa-envelope"></i>
                    <span>Contact</span>
                </a></li>
            </ul>

            <!-- Right Side Actions -->
            <div class="nav-right">
                <!-- Theme Toggle -->
                <button class="theme-toggle" @click="toggleTheme" title="Toggle Theme">
                    <i class="fas fa-moon"></i>
                </button>
                
                <!-- Search Button -->
                <button class="search-toggle ms-2" @click="toggleSearch" title="Search (Ctrl+K)">
                    <i class="fas fa-search"></i>
                </button>
                
                <!-- Search Input -->
                <div class="nav-search">
                    <input type="text" placeholder="Search..." />
                    <i class="fas fa-times close-search" @click="closeSearch"></i>
                </div>
                
                <!-- Download CV Button -->
                <a href="#" class="download-cv" title="Download CV">
                    <i class="fas fa-download"></i>
                    <span>CV</span>
                </a>
                
                <!-- CTA Button -->
                <div class="nav-cta">
                    <a href="#contact" class="nav-cta-btn">
                        <i class="fas fa-comments"></i>
                        <span>Let's Talk</span>
                    </a>
                </div>
                
                <!-- Mobile Menu Toggle -->
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="nav-progress"></div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-image">
                    <div class="profile-image">
                        <img src="../../assets/assets/img/hinh2.jpg" alt="Trần Lãnh - Big Data & Machine Learning Student">
                    </div>
                </div>
                <div class="hero-text">
                    <h1>Hi, I'm Trần Lãnh</h1>
                    <h2 class="typing-text">Big Data & Machine Learning Student</h2>
                    <p>Turn data into knowledge, turn knowledge into value.</p>
                    <a href="#projects" class="cta-button">
                        <span>Explore My Work</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p style="text-align: center; font-size: 1.2rem; color: #CBD5E1; max-width: 800px; margin: 0 auto; margin-bottom: 3rem;">I am Tran Lanh - a data technology enthusiast. I have experience in building Big Data processes, deploying AI models and developing scalable backend systems. What I am most interested in is applying machine learning to solve real-world problems, from data analysis to building useful web applications, to bring practical value to users and businesses.</p>
                    
                    <!-- Personal Info Cards -->
                    <div class="personal-info">
                        <div class="info-card">
                            <div class="info-icon">
                                <i class="fas fa-birthday-cake" style="color: #fbbf24;"></i>
                            </div>
                            <div class="info-content">
                                <h4>Age</h4>
                                <span>21 Years Old</span>
                            </div>
                        </div>
                        <div class="info-card">
                            <div class="info-icon">
                                <i class="fas fa-graduation-cap" style="color: #34d399;"></i>
                            </div>
                            <div class="info-content">
                                <h4>Education</h4>
                                <span>Duy Tan University</span>
                                <div class="gpa-info">
                                    <span class="gpa-label">GPA:</span>
                                    <span class="gpa-value">3.2/4.0</span>
                                </div>
                            </div>
                        </div>
                        <div class="info-card">
                            <div class="info-icon">
                                <i class="fas fa-map-marker-alt" style="color: #f87171;"></i>
                            </div>
                            <div class="info-content">
                                <h4>Hometown</h4>
                                <span>Da Nang, Vietnam</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-cards">
                    <div class="about-card">
                        <div class="about-card-icon">🎯</div>
                        <h3>Data Analytics</h3>
                        <p>Transforming raw data into meaningful insights using advanced statistical analysis and machine learning algorithms.</p>
                    </div>
                    <div class="about-card">
                        <div class="about-card-icon">🤖</div>
                        <h3>Machine Learning</h3>
                        <p>Building intelligent systems that learn from data to make predictions and automate decision-making processes.</p>
                    </div>
                    <div class="about-card">
                        <div class="about-card-icon">⚡</div>
                        <h3>Big Data Processing</h3>
                        <p>Designing scalable pipelines to handle massive datasets with technologies like Hadoop, Spark, and cloud platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
        <div class="container">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="90">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-python" style="color: #3776ab;"></i>
                            </div>
                            <div class="skill-name">Python</div>
                            <div class="skill-percentage">90%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="75">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-php" style="color: #777bb4;"></i>
                            </div>
                            <div class="skill-name">PHP</div>
                            <div class="skill-percentage">75%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="80">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-vuejs" style="color: #4fc08d;"></i>
                            </div>
                            <div class="skill-name">VueJS</div>
                            <div class="skill-percentage">80%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="85">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fas fa-database" style="color: #00758f;"></i>
                            </div>
                            <div class="skill-name">MySQL</div>
                            <div class="skill-percentage">85%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="82">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-react" style="color: #61dafb;"></i>
                            </div>
                            <div class="skill-name">React</div>
                            <div class="skill-percentage">82%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="78">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-node-js" style="color: #339933;"></i>
                            </div>
                            <div class="skill-name">Node.js</div>
                            <div class="skill-percentage">78%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="85">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-docker" style="color: #2496ed;"></i>
                            </div>
                            <div class="skill-name">Docker</div>
                            <div class="skill-percentage">85%</div>
                        </div>
                    </div>
                </div>
               
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="75">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fas fa-brain" style="color: #ff6b6b;"></i>
                            </div>
                            <div class="skill-name">Machine Learning</div>
                            <div class="skill-percentage">75%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="70">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fas fa-chart-line" style="color: #4ecdc4;"></i>
                            </div>
                            <div class="skill-name">Data Analytics</div>
                            <div class="skill-percentage">70%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="83">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-git-alt" style="color: #f05032;"></i>
                            </div>
                            <div class="skill-name">Git</div>
                            <div class="skill-percentage">83%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="88">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-bootstrap" style="color: #7952b3;"></i>
                            </div>
                            <div class="skill-name">Bootstrap</div>
                            <div class="skill-percentage">88%</div>
                        </div>
                    </div>
                </div>
                <div class="skill-item">
                    <div class="skill-circle" data-percentage="79">
                        <svg class="progress-ring" width="160" height="160">
                            <circle class="progress-ring-circle" cx="80" cy="80" r="70"></circle>
                        </svg>
                        <div class="skill-content">
                            <div class="skill-icon">
                                <i class="fab fa-laravel" style="color: #ff2d20;"></i>
                            </div>
                            <div class="skill-name">Laravel</div>
                            <div class="skill-percentage">79%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="secondary-skills">
                <h3 style="color: #F1F5F9; text-align: center; margin-bottom: 2rem; font-size: 1.5rem;">Additional Technologies</h3>
                <div class="secondary-skills-grid">
                    <div class="skill-badge">
                        <i class="fas fa-code" style="color: #ff6b6b;"></i>
                        <span>TensorFlow</span>
                    </div>
                    <div class="skill-badge">
                        <i class="fas fa-server" style="color: #4ecdc4;"></i>
                        <span>Hadoop</span>
                    </div>
                    <div class="skill-badge">
                        <i class="fas fa-fire" style="color: #ff9800;"></i>
                        <span>Apache Spark</span>
                    </div>
                    
                    <div class="skill-badge">
                        <i class="fas fa-cloud" style="color: #2196f3;"></i>
                        <span>Google Cloud</span>
                    </div>
                   
                    <div class="skill-badge">
                        <i class="fab fa-linux" style="color: #ffc107;"></i>
                        <span>Linux</span>
                    </div>
                   
                    <div class="skill-badge">
                        <i class="fas fa-robot" style="color: #ff5722;"></i>
                        <span>Scikit-learn</span>
                    </div>
                    <div class="skill-badge">
                        <i class="fas fa-calculator" style="color: #795548;"></i>
                        <span>NumPy</span>
                    </div>
                    <div class="skill-badge">
                        <i class="fas fa-table" style="color: #607d8b;"></i>
                        <span>Pandas</span>
                    </div>
                  

                   
                    
                    <div class="skill-badge">
                        <i class="fab fa-js-square" style="color: #f7df1e;"></i>
                        <span>JavaScript</span>
                    </div>
                    
                    <div class="skill-badge">
                        <i class="fab fa-css3-alt" style="color: #1572b6;"></i>
                        <span>CSS3</span>
                    </div>
                    <div class="skill-badge">
                        <i class="fas fa-code" style="color: #0769ad;"></i>
                        <span>jQuery</span>
                    </div>
                    <div class="skill-badge">
                        <i class="fab fa-node-js" style="color: #339933;"></i>
                        <span>Express.js</span>
                    </div>
                    <div class="skill-badge">
                        <i class="fas fa-cog" style="color: #61dafb;"></i>
                        <span>Webpack</span>
                    </div>
                   
                    <div class="skill-badge">
                        <i class="fas fa-bolt" style="color: #646cff;"></i>
                        <span>Vite</span>
                    </div>
                    <div class="skill-badge">
                        <i class="fab fa-gulp" style="color: #da4648;"></i>
                        <span>Gulp</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Soft Skills Section -->
    <section id="soft-skills" class="section soft-skills">
        <div class="container">
            <h2 class="section-title">Soft Skills</h2>
            <p class="section-subtitle">Essential interpersonal and professional competencies that drive success</p>
            
            <div class="soft-skills-grid">
                <!-- Teamwork -->
                <div class="soft-skill-card">
                    <div class="soft-skill-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="soft-skill-content">
                        <h3>Teamwork & Collaboration</h3>
                        <p>Excellent ability to work effectively in cross-functional teams, fostering collaboration and synergy to achieve common goals.</p>
                        <div class="skill-level">
                            <div class="skill-bars">
                                <div class="skill-bar-item">
                                    <span>Team Leadership</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-width="85%"></div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>Cross-team Communication</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-width="90%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Problem Solving -->
                <div class="soft-skill-card">
                    <div class="soft-skill-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <div class="soft-skill-content">
                        <h3>Problem Solving</h3>
                        <p>Strong analytical thinking and creative problem-solving abilities, capable of breaking down complex challenges into manageable solutions.</p>
                        <div class="skill-level">
                            <div class="skill-bars">
                                <div class="skill-bar-item">
                                    <span>Analytical Thinking</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-width="92%"></div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>Creative Solutions</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-width="88%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Communication -->
                <div class="soft-skill-card">
                    <div class="soft-skill-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <div class="soft-skill-content">
                        <h3>Communication</h3>
                        <p>Clear and effective communication across all levels, from technical documentation to client presentations and stakeholder meetings.</p>
                        <div class="skill-level">
                            <div class="skill-bars">
                                <div class="skill-bar-item">
                                    <span>Verbal Communication</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-width="87%"></div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>Technical Writing</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-width="84%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Self Learning -->
                <div class="soft-skill-card">
                    <div class="soft-skill-icon">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <div class="soft-skill-content">
                        <h3>Continuous Learning</h3>
                        <p>Passionate about staying current with technology trends, constantly learning new skills and adapting to emerging technologies.</p>
                        <div class="skill-level">
                            <div class="skill-bars">
                                <div class="skill-bar-item">
                                    <span>Self-Motivation</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-width="95%"></div>
                                    </div>
                                </div>
                                <div class="skill-bar-item">
                                    <span>Adaptability</span>
                                    <div class="progress-bar">
                                        <div class="progress-fill" data-width="91%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Soft Skills -->
            <div class="additional-soft-skills">
                <h3>Additional Competencies</h3>
                <div class="soft-skills-tags">
                    <div class="skill-tag">
                        <i class="fas fa-clock"></i>
                        <span>Time Management</span>
                    </div>
                    <div class="skill-tag">
                        <i class="fas fa-users-cog"></i>
                        <span>Project Management</span>
                    </div>
                    <div class="skill-tag">
                        <i class="fas fa-handshake"></i>
                        <span>Client Relations</span>
                    </div>
                    <div class="skill-tag">
                        <i class="fas fa-bullseye"></i>
                        <span>Goal-Oriented</span>
                    </div>
                    <div class="skill-tag">
                        <i class="fas fa-brain"></i>
                        <span>Critical Thinking</span>
                    </div>
                    <div class="skill-tag">
                        <i class="fas fa-heart"></i>
                        <span>Empathy</span>
                    </div>
                    <div class="skill-tag">
                        <i class="fas fa-balance-scale"></i>
                        <span>Work-Life Balance</span>
                    </div>
                    <div class="skill-tag">
                        <i class="fas fa-rocket"></i>
                        <span>Innovation</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
        <div class="container">
            <h2 class="section-title">My Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-chart-bar" style="font-size: 4rem; color: white;"></i>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">E-commerce Data Analytics</h3>
                        <p class="project-description">Built with Python & MySQL to analyze user behavior, sales patterns, and market trends. Implemented advanced statistical models for predictive analytics.</p>
                        <a href="#" class="project-button"><span>View More</span></a>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-cloud-sun" style="font-size: 4rem; color: white;"></i>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Weather Forecasting Web App</h3>
                        <p class="project-description">VueJS frontend with AI model backend for accurate weather predictions. Features real-time data visualization and interactive maps.</p>
                        <a href="#" class="project-button"><span>View More</span></a>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-database" style="font-size: 4rem; color: white;"></i>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Big Data Pipeline</h3>
                        <p class="project-description">Real-time data ingestion and processing using Hadoop ecosystem. Handles millions of records daily with fault-tolerant architecture.</p>
                        <a href="#" class="project-button"><span>View More</span></a>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                        <i class="fas fa-code" style="font-size: 4rem; color: white;"></i>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">Personal Portfolio Website</h3>
                        <p class="project-description">Responsive design built with modern web technologies. Features smooth animations, mobile optimization, and clean architecture.</p>
                        <a href="#" class="project-button"><span>View More</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="container">
            <div class="contact-content">
                <h2 class="section-title">Get In Touch</h2>
                <p>Interested in collaboration or just want to say hi? Let's connect!</p>
                
                <!-- Contact Information -->
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <a href="mailto:tranlanh3009@gmail.com">tranlanh3009@gmail.com</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div class="contact-details">
                            <h4>Phone</h4>
                            <a href="tel:+84899214697">0899 214 697</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                                                    <div class="contact-details">
                                <h4>Location</h4>
                                <span>Da Nang, Vietnam</span>
                            </div>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-github"></i>
                        <div class="contact-details">
                            <h4>GitHub</h4>
                            <a href="https://github.com/tranlanh3009" target="_blank">https://github.com/tranlanh3009</a>
                        </div>
                    </div>
                </div>
                <form class="contact-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="your.email@example.com" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                    </div>
                                            <button type="submit" class="submit-button"><span>Send Message</span></button>
                </form>
                <div class="social-icons">
                    <a href="https://github.com/tranlanh3009" class="social-icon" title="GitHub" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.facebook.com/tran.lanh.787303/?locale=vi_VN" class="social-icon" title="Facebook" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/_ti.eoo_/" class="social-icon" title="Instagram" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:tranlanh3009@gmail.com" class="social-icon" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="tel:+84899214697" class="social-icon" title="Phone">
                        <i class="fas fa-phone"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2025 Trần Lãnh | Powered by Big Data & Machine Learning</p>
                <div class="social-icons">
                    <a href="https://github.com/tranlanh3009" class="social-icon" title="GitHub" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.facebook.com/tran.lanh.787303/?locale=vi_VN" class="social-icon" title="Facebook" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/_ti.eoo_/" class="social-icon" title="Instagram" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:tranlanh3009@gmail.com" class="social-icon" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="tel:+84899214697" class="social-icon" title="Phone">
                        <i class="fas fa-phone"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            lastScrollY: 0,
            searchToggle: false,
            observer: null,
            observerOptions: {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            },
            isDarkTheme: false
        }
    },
    
    mounted() {
        this.initializeEventListeners();
        this.initializeIntersectionObserver();
        this.initializeAnimations();
    },
    
    beforeUnmount() {
        this.removeEventListeners();
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    
    methods: {
        initializeEventListeners() {
            // Hamburger menu click
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            if (hamburger) {
                hamburger.addEventListener('click', this.toggleMobileMenu);
            }
            
            // Anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', this.handleAnchorClick);
            });
            
            // Scroll events
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('scroll', this.handleParallaxEffect);
            window.addEventListener('scroll', this.handleHeaderScrollEffect);
            
            // Keyboard events
            document.addEventListener('keydown', this.handleKeydown);
            
            // Click outside to close menu
            document.addEventListener('click', this.handleClickOutside);
            
            // Window load
            window.addEventListener('load', this.handleWindowLoad);
            
            // Form submission
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', this.handleFormSubmit);
            }
            
            // Project cards hover effects
            document.querySelectorAll('.project-card').forEach((card, index) => {
                card.addEventListener('mouseenter', () => this.handleProjectCardHover(card, true));
                card.addEventListener('mouseleave', () => this.handleProjectCardHover(card, false));
            });
        },
        
        removeEventListeners() {
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.removeEventListener('click', this.toggleMobileMenu);
            }
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', this.handleAnchorClick);
            });
            
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('scroll', this.handleParallaxEffect);
            window.removeEventListener('scroll', this.handleHeaderScrollEffect);
            document.removeEventListener('keydown', this.handleKeydown);
            document.removeEventListener('click', this.handleClickOutside);
            window.removeEventListener('load', this.handleWindowLoad);
            
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.removeEventListener('submit', this.handleFormSubmit);
            }
        },
        
        toggleMobileMenu() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            if (hamburger && navLinks) {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            }
        },
        
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        
        handleAnchorClick(e) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                e.target.classList.add('active');
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            if (navLinks && hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        },
        
        handleScroll() {
            const currentScrollY = window.scrollY;
            const header = document.querySelector('header');
            const navProgress = document.querySelector('.nav-progress');
            
            if (header) {
                if (currentScrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                if (currentScrollY > this.lastScrollY && currentScrollY > 200) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            }
            
            if (navProgress) {
                const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollProgress = (currentScrollY / windowHeight) * 100;
                navProgress.style.width = Math.min(scrollProgress, 100) + '%';
            }
            
            this.lastScrollY = currentScrollY;
            this.updateActiveNavLink();
        },
        
        updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        },
        
        toggleSearch() {
            const navSearch = document.querySelector('.nav-search');
            this.searchToggle = !this.searchToggle;
            
            if (navSearch) {
                if (this.searchToggle) {
                    navSearch.classList.add('active');
                    const input = navSearch.querySelector('input');
                    if (input) input.focus();
                } else {
                    navSearch.classList.remove('active');
                }
            }
        },
        
        handleKeydown(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleSearch();
            }
            if (e.key === 'Escape') {
                const navLinks = document.querySelector('.nav-links');
                const hamburger = document.querySelector('.hamburger');
                const navSearch = document.querySelector('.nav-search');
                
                if (navLinks) navLinks.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                document.body.classList.remove('nav-open');
                if (navSearch) navSearch.classList.remove('active');
                this.searchToggle = false;
            }
        },
        
        handleClickOutside(e) {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            if (navLinks && hamburger && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        },
        
        handleParallaxEffect() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            const header = document.querySelector('header');
            
            if (header) {
                header.style.backgroundPosition = `center ${rate}px`;
            }
        },
        
        handleWindowLoad() {
            document.body.classList.add('loaded');
            
            const navItems = document.querySelectorAll('.nav-links li');
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.animation = `slideInDown 0.6s ease-out ${index * 0.1}s both`;
                }, 500);
            });
            
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.opacity = '1';
            }
        },
        
        initializeIntersectionObserver() {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                                            // Animate circular progress bars when skills section is visible
                    if (entry.target.id === 'skills') {
                        setTimeout(() => {
                            this.animateSkillCircles(entry.target);
                        }, 500);
                    }
                    
                    // Animate progress bars when soft skills section is visible
                    if (entry.target.id === 'soft-skills') {
                        setTimeout(() => {
                            this.animateSoftSkillBars(entry.target);
                        }, 300);
                    }
                    }
                });
            }, this.observerOptions);
            
            // Observe all sections
            document.querySelectorAll('.section').forEach(section => {
                this.observer.observe(section);
            });
        },
        
        animateSkillCircles(skillsSection) {
            const skillCircles = skillsSection.querySelectorAll('.skill-circle');
            skillCircles.forEach(skillCircle => {
                const percentage = skillCircle.getAttribute('data-percentage');
                const circle = skillCircle.querySelector('.progress-ring-circle');
                const circumference = 2 * Math.PI * 70; // 70 is the radius
                const strokeDashOffset = circumference - (percentage / 100) * circumference;
                
                if (circle) {
                    circle.style.strokeDashoffset = strokeDashOffset;
                    
                    // Add gradient stroke based on percentage
                    if (percentage >= 80) {
                        circle.style.stroke = '#10B981'; // Green
                    } else if (percentage >= 60) {
                        circle.style.stroke = '#F59E0B'; // Orange
                    } else {
                        circle.style.stroke = '#EF4444'; // Red
                    }
                }
            });
        },
        
        handleHeaderScrollEffect() {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            }
        },
        
        handleFormSubmit(e) {
            e.preventDefault();
            const submitBtn = e.target.querySelector('.submit-button');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.style.background = '#667eea';
                
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = 'white';
                        e.target.reset();
                    }, 2000);
                }, 1500);
            }
        },
        
        handleProjectCardHover(card, isHovering) {
            if (isHovering) {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            } else {
                card.style.transform = 'translateY(0) scale(1)';
            }
        },
        
        initializeAnimations() {
            // Initialize any additional animations here
            this.handleWindowLoad();
        },
        
        animateSoftSkillBars(softSkillsSection) {
            const progressFills = softSkillsSection.querySelectorAll('.progress-fill');
            progressFills.forEach((fill, index) => {
                setTimeout(() => {
                    const width = fill.getAttribute('data-width');
                    fill.style.width = width;
                }, index * 200);
            });
        },
        
        // New header methods
        toggleTheme() {
            this.isDarkTheme = !this.isDarkTheme;
            const themeIcon = document.querySelector('.theme-toggle i');
            
            if (this.isDarkTheme) {
                document.body.classList.add('dark-theme');
                themeIcon.className = 'fas fa-sun';
            } else {
                document.body.classList.remove('dark-theme');
                themeIcon.className = 'fas fa-moon';
            }
        },
        
        toggleSearch() {
            this.searchToggle = !this.searchToggle;
            const navSearch = document.querySelector('.nav-search');
            const searchInput = navSearch.querySelector('input');
            
            if (this.searchToggle) {
                navSearch.classList.add('active');
                setTimeout(() => searchInput.focus(), 300);
            } else {
                navSearch.classList.remove('active');
                searchInput.value = '';
            }
        },
        
        closeSearch() {
            this.searchToggle = false;
            const navSearch = document.querySelector('.nav-search');
            const searchInput = navSearch.querySelector('input');
            
            navSearch.classList.remove('active');
            searchInput.value = '';
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #E2E8F0;
    background: #0F172A;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Navigation */
header {
    position: fixed;
    top: 0;
    width: 100%;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.92) 50%, rgba(51, 65, 85, 0.90) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(71, 85, 105, 0.4);
    position: relative;
    overflow: hidden;
}

header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 25% 25%, rgba(100, 116, 139, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(71, 85, 105, 0.08) 0%, transparent 50%);
    animation: headerGlow 15s ease infinite;
    z-index: -1;
}

@keyframes headerGlow {
    0%, 100% { transform: translateX(0%) rotate(0deg); }
    50% { transform: translateX(3%) rotate(1deg); }
}

header.scrolled {
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(51, 65, 85, 0.93) 100%);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);
    transform: translateY(-1px);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
}

/* Logo Section */
.logo-section {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease;
}

.logo-section:hover {
    transform: scale(1.05);
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #64748B 0%, #94A3B8 50%, #CBD5E1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.logo i {
    font-size: 1.5rem;
    color: #94A3B8;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.logo-subtitle {
    font-size: 0.75rem;
    color: #94A3B8;
    opacity: 0.8;
    margin-left: 2rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.logo {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, #64748B 0%, #94A3B8 50%, #CBD5E1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.logo:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
}

.logo::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(135deg, #374151, #4B5563);
    border-radius: 8px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
    filter: blur(10px);
}

.logo:hover::before {
    opacity: 0.3;
}

/* Navigation Links */
.nav-links {
    display: flex;
    list-style: none;
    gap: 0.5rem;
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
    padding: 0.5rem;
    border-radius: 50px;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(100, 116, 139, 0.3);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-links li {
    position: relative;
}

.nav-links a {
    text-decoration: none;
    color: #E2E8F0;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    padding: 0.75rem 1.2rem;
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
}

.nav-links a i {
    font-size: 0.9rem;
    opacity: 0.8;
}

.nav-links a span {
    font-size: 0.85rem;
}

.nav-links a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #374151, #4B5563);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: -1;
    border-radius: 25px;
}

.nav-links a:hover::before {
    left: 0;
}

.nav-links a:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #374151, #4B5563);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-links a.active {
    background: linear-gradient(135deg, #374151, #4B5563);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.nav-links a.active::after {
    width: 80%;
}

/* CTA Button in Navigation */
.nav-cta {
    margin-left: 1rem;
}

.nav-cta-btn {
    background: linear-gradient(135deg, #374151, #4B5563);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-cta-btn:hover {
    background: linear-gradient(135deg, #4B5563, #6B7280);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
}

/* Enhanced Hamburger Menu */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.hamburger:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: scale(1.05);
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: linear-gradient(135deg, #374151, #4B5563);
    margin: 3px 0;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 2px;
    transform-origin: center;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
    background: linear-gradient(135deg, #764ba2, #667eea);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
    transform: scale(0);
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background: linear-gradient(135deg, #764ba2, #667eea);
}

/* Navigation Progress Indicator */
.nav-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(135deg, #374151, #4B5563);
    width: 0%;
    transition: width 0.3s ease;
    border-radius: 0 0 2px 2px;
}

/* Search Box (Optional Enhancement) */
.nav-search {
    position: relative;
    margin-left: 1rem;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
}

.nav-search.active {
    opacity: 1;
    transform: scale(1);
}

.nav-search input {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 0.5rem 1rem;
    color: #333;
    font-size: 0.9rem;
    width: 200px;
    backdrop-filter: blur(10px);
}

.nav-search input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

/* Navigation Right Side */
.nav-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Theme Toggle Button */
.theme-toggle {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
    border: 1px solid rgba(100, 116, 139, 0.3);
    color: #E2E8F0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.theme-toggle:hover {
    background: linear-gradient(135deg, rgba(51, 65, 85, 0.9) 0%, rgba(71, 85, 105, 0.7) 100%);
    transform: scale(1.1) rotate(180deg);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.theme-toggle i {
    font-size: 1rem;
    transition: all 0.3s ease;
}

/* Search Toggle Button */
.search-toggle {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
    border: 1px solid rgba(100, 116, 139, 0.3);
    color: #E2E8F0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.search-toggle:hover {
    background: linear-gradient(135deg, rgba(51, 65, 85, 0.9) 0%, rgba(71, 85, 105, 0.7) 100%);
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Enhanced Search Box */
.nav-search {
    position: absolute;
    top: 50%;
    right: 200px;
    transform: translateY(-50%) scale(0);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%);
    border: 1px solid rgba(100, 116, 139, 0.4);
    border-radius: 25px;
    padding: 0.5rem;
    backdrop-filter: blur(15px);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 250px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.nav-search.active {
    opacity: 1;
    transform: translateY(-50%) scale(1);
}

.nav-search input {
    background: transparent;
    border: none;
    color: #E2E8F0;
    font-size: 0.9rem;
    width: 100%;
    padding: 0.5rem;
    outline: none;
}

.nav-search input::placeholder {
    color: #94A3B8;
}

.close-search {
    color: #94A3B8;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.close-search:hover {
    color: #E2E8F0;
    background: rgba(255, 255, 255, 0.1);
}

/* Download CV Button */
.download-cv {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
    border: 1px solid rgba(100, 116, 139, 0.3);
    color: #E2E8F0;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.download-cv:hover {
    background: linear-gradient(135deg, rgba(51, 65, 85, 0.9) 0%, rgba(71, 85, 105, 0.7) 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    color: #F1F5F9;
    border-color: rgba(148, 163, 184, 0.5);
}

.download-cv i {
    font-size: 0.9rem;
}

/* Additional Animations */
@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Page Loading State */
body:not(.loaded) .nav-links li {
    opacity: 0;
    transform: translateY(-30px);
}

/* Body class for mobile menu */
body.nav-open {
    overflow: hidden;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
    position: relative;
    overflow: hidden;
    padding: 100px 0 50px;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 30%, rgba(100, 116, 139, 0.3) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(71, 85, 105, 0.2) 0%, transparent 40%),
        radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.1) 0%, transparent 60%);
    animation: heroParticles 20s ease-in-out infinite;
}

@keyframes heroParticles {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(120deg); }
    66% { transform: translateY(10px) rotate(240deg); }
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
    z-index: 2;
    position: relative;
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.profile-image {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: linear-gradient(135deg, #374151, #4B5563, #6B7280);
    padding: 12px;
    animation: float 6s ease-in-out infinite;
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.4),
        0 0 80px rgba(100, 116, 139, 0.3),
        inset 0 0 50px rgba(148, 163, 184, 0.1);
    position: relative;
    overflow: hidden;
}

.profile-image::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #64748B, #94A3B8, #CBD5E1, #F1F5F9);
    border-radius: 50%;
    z-index: -1;
    animation: profileBorder 4s linear infinite;
}

@keyframes profileBorder {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.profile-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    background: #e2e8f0;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-15px) rotate(2deg); }
    50% { transform: translateY(-10px) rotate(0deg); }
    75% { transform: translateY(-15px) rotate(-2deg); }
}

.hero-text {
    position: relative;
}

.hero-text h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 25%, #CBD5E1 50%, #94A3B8 75%, #64748B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 400% 400%;
    animation: heroTextGlow 6s ease infinite;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
    line-height: 1.1;
    position: relative;
}

.hero-text h1::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #64748B, #94A3B8);
    border-radius: 2px;
    animation: underlineGlow 3s ease infinite;
}

@keyframes underlineGlow {
    0%, 100% { 
        width: 60px; 
        box-shadow: 0 0 10px rgba(100, 116, 139, 0.5);
    }
    50% { 
        width: 120px; 
        box-shadow: 0 0 20px rgba(148, 163, 184, 0.8);
    }
}

@keyframes heroTextGlow {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 0%; }
    50% { background-position: 100% 100%; }
    75% { background-position: 0% 100%; }
}

.hero-text h2 {
    font-size: 2rem;
    color: #CBD5E1;
    margin-bottom: 1.5rem;
    font-weight: 400;
    position: relative;
    opacity: 0.9;
}

.hero-text p {
    font-size: 1.3rem;
    color: #94A3B8;
    margin-bottom: 3rem;
    line-height: 1.8;
    max-width: 90%;
    opacity: 0.8;
}

/* Add typing effect */
.typing-text {
    border-right: 3px solid #64748B;
    animation: typing 4s steps(40) infinite, blink 1s infinite;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
}

@keyframes typing {
    0%, 50% { width: 0; }
    100% { width: 100%; }
}

@keyframes blink {
    0%, 50% { border-color: #64748B; }
    51%, 100% { border-color: transparent; }
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 1.5rem 3rem;
    background: linear-gradient(135deg, #374151, #4B5563, #6B7280);
    background-size: 200% 200%;
    color: #F1F5F9;
    text-decoration: none;
    border-radius: 60px;
    font-weight: 700;
    font-size: 1.2rem;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 
        0 20px 50px rgba(0, 0, 0, 0.3),
        0 0 30px rgba(100, 116, 139, 0.2),
        inset 0 1px 0 rgba(148, 163, 184, 0.2);
    transform: translateY(0);
    position: relative;
    overflow: hidden;
    border: 2px solid rgba(148, 163, 184, 0.3);
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button::after {
    content: '→';
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.cta-button:hover::after {
    transform: translateX(8px);
}

@keyframes ctaPulse {
    0%, 100% { 
        background-position: 0% 50%;
        box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4);
    }
    50% { 
        background-position: 100% 50%;
        box-shadow: 0 20px 50px rgba(76, 205, 196, 0.5);
    }
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 25px 60px rgba(255, 107, 107, 0.6);
    animation: ctaHover 0.6s ease;
}

@keyframes ctaHover {
    0%, 100% { transform: translateY(-5px) scale(1.05) rotate(0deg); }
    50% { transform: translateY(-5px) scale(1.05) rotate(2deg); }
}

/* Section Styling */
.section {
    padding: 5rem 0;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease;
}

.section.visible {
    opacity: 1;
    transform: translateY(0);
}

.section-title {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 900;
    margin-bottom: 4rem;
    background: linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 25%, #CBD5E1 50%, #94A3B8 75%, #64748B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 400% 400%;
    animation: titleGlow 4s ease infinite;
    text-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    position: relative;
    transform: translateY(0) translateZ(0);
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3)) 
           drop-shadow(0 0 30px rgba(71, 85, 105, 0.2));
}

@keyframes titleGlow {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 0%; }
    50% { background-position: 100% 100%; }
    75% { background-position: 0% 100%; }
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 6px;
    background: linear-gradient(135deg, #374151, #4B5563, #6B7280);
    background-size: 200% 200%;
    border-radius: 3px;
    animation: underlineGrow 3s ease infinite;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4),
                0 0 25px rgba(76, 205, 196, 0.3);
}

@keyframes underlineGrow {
    0%, 100% { 
        width: 120px; 
        background-position: 0% 50%;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4), 0 0 25px rgba(76, 205, 196, 0.3);
    }
    50% { 
        width: 180px; 
        background-position: 100% 50%;
        box-shadow: 0 6px 25px rgba(255, 107, 107, 0.6), 0 0 35px rgba(76, 205, 196, 0.5);
    }
}

/* About Section */
.about {
    background: linear-gradient(135deg, #1E293B 0%, #334155 100%);
    position: relative;
    overflow: hidden;
    padding: 120px 0;
}

.about::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 80% 20%, rgba(100, 116, 139, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 20% 80%, rgba(71, 85, 105, 0.1) 0%, transparent 50%);
    animation: aboutFlow 15s ease infinite;
}

@keyframes aboutFlow {
    0%, 100% { transform: translateY(0%) rotate(0deg); }
    50% { transform: translateY(-3%) rotate(2deg); }
}

.about::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 20%, rgba(76, 205, 196, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(69, 183, 209, 0.08) 0%, transparent 50%);
    animation: aboutFlow 15s ease infinite;
    z-index: 1;
}

@keyframes aboutFlow {
    0%, 100% { transform: translateX(0%) rotate(0deg); }
    50% { transform: translateX(5%) rotate(2deg); }
}

.about .container {
    position: relative;
    z-index: 2;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 2;
}

.about-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.about-card {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(100, 116, 139, 0.3);
    border-radius: 20px;
    padding: 2.5rem;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.about-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(100, 116, 139, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.about-card:hover::before {
    opacity: 1;
}

.about-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    border-color: rgba(148, 163, 184, 0.5);
}

.about-card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #94A3B8, #CBD5E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.about-card h3 {
    color: #F1F5F9;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.about-card p {
    color: #94A3B8;
    line-height: 1.6;
    font-size: 0.95rem;
}

/* Personal Info Cards */
.personal-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
    margin: 4rem 0;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}

.personal-info::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(45deg, rgba(100, 116, 139, 0.1), rgba(148, 163, 184, 0.05), rgba(100, 116, 139, 0.1));
    border-radius: 30px;
    z-index: -1;
    animation: personalInfoGlow 8s ease infinite;
}

.personal-info::after {
    content: '';
    position: absolute;
    top: -25px;
    left: -25px;
    right: -25px;
    bottom: -25px;
    background: linear-gradient(45deg, 
        rgba(100, 116, 139, 0.05), 
        rgba(148, 163, 184, 0.02), 
        rgba(203, 213, 225, 0.03),
        rgba(100, 116, 139, 0.05));
    border-radius: 35px;
    z-index: -2;
    animation: personalInfoGlow 12s ease infinite reverse;
}

@keyframes personalInfoGlow {
    0%, 100% { 
        opacity: 0.3;
        transform: scale(1);
    }
    50% { 
        opacity: 0.6;
        transform: scale(1.02);
    }
}

.info-card {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.8) 50%, rgba(71, 85, 105, 0.7) 100%);
    backdrop-filter: blur(25px);
    border: 2px solid rgba(148, 163, 184, 0.4);
    border-radius: 25px;
    padding: 2.5rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    transform: perspective(1000px) rotateX(0deg);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.4),
        0 0 40px rgba(100, 116, 139, 0.2),
        inset 0 1px 0 rgba(148, 163, 184, 0.2);
}

.info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent);
    transition: left 0.8s ease;
}

.info-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(100, 116, 139, 0.2), rgba(148, 163, 184, 0.1));
    opacity: 0;
    transition: opacity 0.4s ease;
}

.info-card:hover::before {
    left: 100%;
}

.info-card:hover::after {
    opacity: 1;
}

.info-card:hover {
    transform: perspective(1000px) translateY(-15px) rotateX(5deg) scale(1.05);
    box-shadow: 
        0 40px 80px rgba(0, 0, 0, 0.5),
        0 0 60px rgba(148, 163, 184, 0.4),
        inset 0 2px 0 rgba(255, 255, 255, 0.3);
    border-color: rgba(203, 213, 225, 0.7);
    animation: cardFloat 0.6s ease;
}

@keyframes cardFloat {
    0% { transform: perspective(1000px) translateY(0) rotateX(0deg) scale(1); }
    50% { transform: perspective(1000px) translateY(-20px) rotateX(8deg) scale(1.08); }
    100% { transform: perspective(1000px) translateY(-15px) rotateX(5deg) scale(1.05); }
}

.info-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgba(100, 116, 139, 0.3), rgba(148, 163, 184, 0.2), rgba(203, 213, 225, 0.1));
    border: 2px solid rgba(148, 163, 184, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 15px 30px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
}

.info-icon::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(148, 163, 184, 0.2), transparent);
    animation: iconRotate 3s linear infinite;
}

@keyframes iconRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.info-card:hover .info-icon {
    transform: scale(1.15) rotate(10deg);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 30px rgba(148, 163, 184, 0.5),
        inset 0 2px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(203, 213, 225, 0.6);
}

.info-content {
    z-index: 2;
    position: relative;
}

.info-content h4 {
    color: #F1F5F9;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: linear-gradient(135deg, #F1F5F9, #CBD5E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
}

.info-content h4::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #64748B, #94A3B8);
    border-radius: 1px;
    transition: width 0.3s ease;
}

.info-card:hover .info-content h4::after {
    width: 60px;
}

.info-content span {
    color: #E2E8F0;
    font-size: 1.2rem;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.info-card:hover .info-content span {
    color: #F1F5F9;
    transform: translateX(5px);
}

.gpa-info {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.gpa-label {
    color: #94A3B8 !important;
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    transform: none !important;
}

.gpa-value {
    color: #34d399 !important;
    font-size: 1.1rem !important;
    font-weight: 700 !important;
    background: linear-gradient(135deg, #34d399, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: none !important;
}

.about-icon {
    font-size: 8rem;
    text-align: center;
    background: linear-gradient(135deg, #374151, #4B5563, #6B7280);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 200%;
    animation: iconPulse 4s ease infinite;
    filter: drop-shadow(0 10px 20px rgba(255, 107, 107, 0.3));
}

@keyframes iconPulse {
    0%, 100% { 
        background-position: 0% 50%;
        transform: scale(1);
    }
    50% { 
        background-position: 100% 50%;
        transform: scale(1.1);
    }
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #CBD5E1;
}

/* Skills Section */
.skills {
    background: linear-gradient(135deg, #334155 0%, #475569 50%, #1E293B 100%);
    position: relative;
    overflow: hidden;
    padding: 120px 0;
}

.skills::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(150, 206, 180, 0.12) 0%, transparent 60%),
                radial-gradient(circle at 70% 30%, rgba(255, 234, 167, 0.1) 0%, transparent 50%);
    animation: skillsWave 18s ease infinite;
    z-index: 1;
}

@keyframes skillsWave {
    0%, 100% { transform: scale(1) rotate(0deg); }
    33% { transform: scale(1.05) rotate(1deg); }
    66% { transform: scale(0.98) rotate(-1deg); }
}

.skills .container {
    position: relative;
    z-index: 2;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
    position: relative;
    z-index: 2;
}

.skill-item {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.85) 100%);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(100, 116, 139, 0.4);
    padding: 3rem;
    border-radius: 25px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3),
                0 10px 30px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(148, 163, 184, 0.2);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    text-align: center;
    transform: translateY(0) translateZ(0);
}

.skill-circle {
    position: relative;
    display: inline-block;
}

.progress-ring {
    transform: rotate(-90deg);
}

.progress-ring-circle {
    stroke: rgba(100, 116, 139, 0.3);
    stroke-width: 8;
    fill: transparent;
    stroke-dasharray: 439.82;
    stroke-dashoffset: 439.82;
    transition: stroke-dashoffset 2s ease;
    stroke-linecap: round;
}

.skill-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.skill-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.skill-icon i {
    font-size: 2.5rem;
}

.skill-name {
    color: #F1F5F9;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    display: block;
}

.skill-percentage {
    color: #94A3B8;
    font-size: 1.5rem;
    font-weight: 700;
    display: block;
}

.skill-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(76, 205, 196, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
}

.skill-item:hover::before {
    opacity: 1;
}

.skill-item:hover {
    transform: translateY(-15px) scale(1.05) rotateX(5deg);
    box-shadow: 0 40px 80px rgba(255, 107, 107, 0.3),
                0 20px 60px rgba(76, 205, 196, 0.25),
                0 0 50px rgba(69, 183, 209, 0.2),
                inset 0 2px 0 rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 107, 107, 0.6);
    animation: skillPop 0.6s ease;
}

@keyframes skillPop {
    0% { transform: translateY(0) scale(1) rotateX(0deg); }
    50% { transform: translateY(-20px) scale(1.08) rotateX(8deg); }
    100% { transform: translateY(-15px) scale(1.05) rotateX(5deg); }
}

.skill-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.skill-name {
    font-weight: 600;
    font-size: 1.2rem;
    color: #F1F5F9;
}

.skill-percentage {
    background: linear-gradient(135deg, #94A3B8, #CBD5E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: bold;
    font-size: 1.1rem;
}

.skill-bar {
    height: 10px;
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(51, 65, 85, 0.4));
    border-radius: 15px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.skill-progress {
    height: 100%;
    background: linear-gradient(135deg, #64748B 0%, #94A3B8 50%, #CBD5E1 100%);
    background-size: 200% 200%;
    animation: skillProgress 3s ease infinite;
    border-radius: 15px;
    width: 0%;
    transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
}

@keyframes skillProgress {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: progressShine 2s ease infinite;
}

@keyframes progressShine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.secondary-skills {
    margin-top: 4rem;
    position: relative;
    z-index: 2;
}

.secondary-skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.skill-badge {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%);
    backdrop-filter: blur(15px);
    border: 2px solid rgba(100, 116, 139, 0.3);
    color: #F1F5F9;
    padding: 1rem 1.5rem;
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.4s ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.skill-badge i {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
}

.skill-badge::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #4ECDC4, #45B7D1);
    transition: left 0.3s ease;
    border-radius: 25px;
}

.skill-badge:hover::before {
    left: 0;
}

.skill-badge:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    border-color: rgba(148, 163, 184, 0.5);
}

.skill-badge span {
    position: relative;
    z-index: 1;
}

/* Projects Section */
.projects {
    background: #1E293B;
    position: relative;
    overflow: hidden;
}

.projects::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 60% 40%, rgba(255, 234, 167, 0.1) 0%, transparent 60%),
                radial-gradient(circle at 20% 60%, rgba(69, 183, 209, 0.08) 0%, transparent 50%);
    animation: projectsFloat 12s ease infinite;
    z-index: 1;
}

@keyframes projectsFloat {
    0%, 100% { transform: translateY(0%) scale(1); }
    50% { transform: translateY(-2%) scale(1.02); }
}

.projects .container {
    position: relative;
    z-index: 2;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.85) 100%);
    backdrop-filter: blur(25px);
    border: 2px solid rgba(100, 116, 139, 0.4);
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                0 10px 25px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(148, 163, 184, 0.2);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    cursor: pointer;
    position: relative;
    transform: translateY(0) translateZ(0);
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.03) 0%, rgba(76, 205, 196, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
    z-index: 1;
}

.project-card:hover::before {
    opacity: 1;
}

.project-card:hover {
    transform: translateY(-20px) scale(1.06) rotateY(5deg);
    box-shadow: 0 50px 100px rgba(255, 107, 107, 0.3),
                0 30px 80px rgba(76, 205, 196, 0.25),
                0 0 60px rgba(69, 183, 209, 0.2),
                inset 0 2px 0 rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 107, 107, 0.6);
    animation: projectLift 0.8s ease;
}

@keyframes projectLift {
    0% { transform: translateY(0) scale(1) rotateY(0deg); }
    30% { transform: translateY(-10px) scale(1.02) rotateY(2deg); }
    60% { transform: translateY(-25px) scale(1.08) rotateY(8deg); }
    100% { transform: translateY(-20px) scale(1.06) rotateY(5deg); }
}

.project-image {
    height: 200px;
    background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%);
    background-size: 300% 300%;
    animation: projectImageFlow 8s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3rem;
    position: relative;
    z-index: 2;
}

@keyframes projectImageFlow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.project-content {
    padding: 2rem;
    position: relative;
    z-index: 2;
}

.project-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    background: linear-gradient(135deg, #F1F5F9, #CBD5E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.project-description {
    color: #94A3B8;
    margin-bottom: 1.5rem;
    line-height: 1.7;
    font-size: 1rem;
}

.project-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.4s ease;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    position: relative;
    overflow: hidden;
}

.project-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #4ECDC4, #45B7D1);
    transition: left 0.3s ease;
    border-radius: 25px;
}

.project-button:hover::before {
    left: 0;
}

.project-button:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(76, 205, 196, 0.4);
}

.project-button span {
    position: relative;
    z-index: 1;
}

/* Contact Section */
.contact {
    background: linear-gradient(135deg, #0F172A 0%, #1E293B 25%, #334155 50%, #475569 75%, #64748B 100%);
    background-size: 400% 400%;
    animation: contactFlow 20s ease infinite;
    color: #E2E8F0;
    position: relative;
    overflow: hidden;
}

@keyframes contactFlow {
    0%, 100% { background-position: 0% 50%; }
    25% { background-position: 100% 0%; }
    50% { background-position: 100% 100%; }
    75% { background-position: 0% 100%; }
}

.contact::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
    animation: contactParticles 25s linear infinite;
    z-index: 1;
}

@keyframes contactParticles {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.05); }
    100% { transform: rotate(360deg) scale(1); }
}

.contact .container {
    position: relative;
    z-index: 2;
}

.contact-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

/* Contact Information Styling */
.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
    text-align: left;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
    padding: 1.5rem;
    border-radius: 15px;
    border: 1px solid rgba(100, 116, 139, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.contact-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(148, 163, 184, 0.5);
}

.contact-item i {
    font-size: 1.5rem;
    color: #94A3B8;
    min-width: 24px;
}

.contact-details h4 {
    color: #F1F5F9;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.contact-details a {
    color: #CBD5E1;
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-details a:hover {
    color: #94A3B8;
}

.contact-details span {
    color: #CBD5E1;
}

.contact-form {
    display: grid;
    gap: 2rem;
    margin: 3rem 0;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
    backdrop-filter: blur(30px);
    padding: 3rem;
    border-radius: 30px;
    border: 2px solid rgba(100, 116, 139, 0.3);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4),
                0 15px 40px rgba(0, 0, 0, 0.2),
                inset 0 2px 0 rgba(148, 163, 184, 0.2);
    transform: translateY(0) translateZ(0);
    transition: all 0.5s ease;
}

.contact-form:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25),
                0 20px 50px rgba(255, 107, 107, 0.15),
                inset 0 3px 0 rgba(255, 255, 255, 0.4);
}

.form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
}

.form-group label {
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: #F1F5F9;
}

.form-group input,
.form-group textarea {
    padding: 1.5rem;
    border: 2px solid rgba(100, 116, 139, 0.3);
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.5) 100%);
    color: #F1F5F9;
    backdrop-filter: blur(15px);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-size: 1.1rem;
    position: relative;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3),
                0 4px 15px rgba(0, 0, 0, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #94A3B8;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-5px) scale(1.02);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05),
                0 15px 40px rgba(255, 255, 255, 0.2),
                0 0 30px rgba(255, 107, 107, 0.3);
    animation: inputGlow 0.6s ease;
}

@keyframes inputGlow {
    0% { box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 15px rgba(255, 255, 255, 0.1); }
    50% { box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05), 0 20px 50px rgba(255, 255, 255, 0.25), 0 0 40px rgba(255, 107, 107, 0.4); }
    100% { box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05), 0 15px 40px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 107, 107, 0.3); }
}

.submit-button {
    padding: 1.5rem 3rem;
    background: linear-gradient(135deg, rgba(100, 116, 139, 0.9) 0%, rgba(71, 85, 105, 0.8) 100%);
    color: #F1F5F9;
    border: 3px solid rgba(148, 163, 184, 0.4);
    border-radius: 50px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-size: 1.2rem;
    backdrop-filter: blur(20px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3),
                0 8px 25px rgba(0, 0, 0, 0.2),
                inset 0 2px 0 rgba(148, 163, 184, 0.3);
    position: relative;
    overflow: hidden;
    transform: translateY(0) translateZ(0);
}

.submit-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
    transition: left 0.4s ease;
    border-radius: 50px;
}

.submit-button:hover::before {
    left: 0;
}

.submit-button:hover {
    color: white;
    transform: translateY(-10px) scale(1.08);
    box-shadow: 0 25px 60px rgba(255, 255, 255, 0.4),
                0 15px 50px rgba(255, 107, 107, 0.3),
                0 0 40px rgba(76, 205, 196, 0.3),
                inset 0 3px 0 rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.7);
    animation: buttonBounce 0.8s ease;
}

@keyframes buttonBounce {
    0% { transform: translateY(0) scale(1); }
    30% { transform: translateY(-5px) scale(1.03); }
    60% { transform: translateY(-15px) scale(1.1); }
    100% { transform: translateY(-10px) scale(1.08); }
}

.submit-button span {
    position: relative;
    z-index: 1;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

.social-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E2E8F0;
    text-decoration: none;
    font-size: 1.8rem;
    transition: all 0.4s ease;
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

/* Platform-specific colors */
.social-icon[title="GitHub"]:hover {
    background: linear-gradient(135deg, #333, #24292f);
    border-color: #333;
    color: white;
    box-shadow: 0 15px 40px rgba(51, 51, 51, 0.4);
}

.social-icon[title="Facebook"]:hover {
    background: linear-gradient(135deg, #1877f2, #166fe5);
    border-color: #1877f2;
    color: white;
    box-shadow: 0 15px 40px rgba(24, 119, 242, 0.4);
}

.social-icon[title="Instagram"]:hover {
    background: linear-gradient(135deg, #e4405f, #fd1d1d, #fcaf45);
    border-color: #e4405f;
    color: white;
    box-shadow: 0 15px 40px rgba(228, 64, 95, 0.4);
}

.social-icon[title="LinkedIn"]:hover {
    background: linear-gradient(135deg, #0077b5, #005582);
    border-color: #0077b5;
    color: white;
    box-shadow: 0 15px 40px rgba(0, 119, 181, 0.4);
}

.social-icon[title="Email"]:hover {
    background: linear-gradient(135deg, #ea4335, #d33b2c);
    border-color: #ea4335;
    color: white;
    box-shadow: 0 15px 40px rgba(234, 67, 53, 0.4);
}

.social-icon[title="Phone"]:hover {
    background: linear-gradient(135deg, #25d366, #128c7e);
    border-color: #25d366;
    color: white;
    box-shadow: 0 15px 40px rgba(37, 211, 102, 0.4);
}

.social-icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
}

.social-icon:hover::before {
    opacity: 1;
}

.social-icon:hover {
    transform: translateY(-8px) scale(1.1) rotate(5deg);
    animation: socialBounce 0.6s ease;
}

@keyframes socialBounce {
    0% { transform: translateY(0) scale(1) rotate(0deg); }
    25% { transform: translateY(-4px) scale(1.05) rotate(2deg); }
    50% { transform: translateY(-12px) scale(1.15) rotate(8deg); }
    75% { transform: translateY(-6px) scale(1.08) rotate(3deg); }
    100% { transform: translateY(-8px) scale(1.1) rotate(5deg); }
}

.social-icon span {
    position: relative;
    z-index: 1;
}

/* Footer */
footer {
    background: linear-gradient(135deg, #2D3748 0%, #1A202C 50%, #2B2D42 100%);
    color: white;
    text-align: center;
    padding: 3rem 0;
    position: relative;
    overflow: hidden;
}

footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 25% 25%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(76, 205, 196, 0.08) 0%, transparent 50%);
    animation: footerGlow 20s ease infinite;
}

@keyframes footerGlow {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;
    z-index: 2;
}

.footer-content p {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 107, 107, 0.8), rgba(76, 205, 196, 0.8));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 500;
}

/* Soft Skills Section */
.soft-skills {
    background: linear-gradient(135deg, #475569 0%, #334155 50%, #1E293B 100%);
    position: relative;
    overflow: hidden;
    padding: 120px 0;
}

.soft-skills::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 40% 30%, rgba(148, 163, 184, 0.12) 0%, transparent 60%),
                radial-gradient(circle at 60% 70%, rgba(100, 116, 139, 0.1) 0%, transparent 50%);
    animation: softSkillsGlow 20s ease infinite;
    z-index: 1;
}

@keyframes softSkillsGlow {
    0%, 100% { transform: translateY(0%) rotate(0deg); }
    50% { transform: translateY(-2%) rotate(1deg); }
}

.soft-skills .container {
    position: relative;
    z-index: 2;
}

.section-subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: #94A3B8;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9;
    line-height: 1.6;
}

.soft-skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-bottom: 4rem;
}

.soft-skill-card {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.85) 100%);
    backdrop-filter: blur(20px);
    border: 2px solid rgba(100, 116, 139, 0.4);
    border-radius: 25px;
    padding: 2.5rem;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.soft-skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(148, 163, 184, 0.05) 0%, rgba(100, 116, 139, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
}

.soft-skill-card:hover::before {
    opacity: 1;
}

.soft-skill-card:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    border-color: rgba(148, 163, 184, 0.6);
}

.soft-skill-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, rgba(100, 116, 139, 0.3), rgba(148, 163, 184, 0.2));
    border: 2px solid rgba(148, 163, 184, 0.4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    font-size: 2.2rem;
    color: #E2E8F0;
    transition: all 0.4s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.soft-skill-card:hover .soft-skill-icon {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, rgba(148, 163, 184, 0.4), rgba(203, 213, 225, 0.3));
    border-color: rgba(203, 213, 225, 0.6);
}

.soft-skill-content h3 {
    color: #F1F5F9;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #F1F5F9, #CBD5E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.soft-skill-content p {
    color: #94A3B8;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-size: 1rem;
}

.skill-level {
    margin-top: 1.5rem;
}

.skill-bars {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.skill-bar-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.skill-bar-item span {
    color: #CBD5E1;
    font-size: 0.9rem;
    font-weight: 600;
}

.progress-bar {
    height: 8px;
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(51, 65, 85, 0.4));
    border-radius: 10px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.progress-fill {
    height: 100%;
    background: linear-gradient(135deg, #64748B 0%, #94A3B8 50%, #CBD5E1 100%);
    background-size: 200% 200%;
    animation: progressGlow 3s ease infinite;
    border-radius: 10px;
    width: 0%;
    transition: width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
}

@keyframes progressGlow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: progressShine 2s ease infinite;
}

/* Additional Soft Skills */
.additional-soft-skills {
    text-align: center;
    position: relative;
    z-index: 2;
}

.additional-soft-skills h3 {
    color: #F1F5F9;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #F1F5F9, #CBD5E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.soft-skills-tags {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
}

.skill-tag {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%);
    backdrop-filter: blur(15px);
    border: 2px solid rgba(100, 116, 139, 0.3);
    color: #E2E8F0;
    padding: 1.2rem 1.5rem;
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.skill-tag::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(100, 116, 139, 0.2), rgba(148, 163, 184, 0.1));
    transition: left 0.3s ease;
    border-radius: 25px;
}

.skill-tag:hover::before {
    left: 0;
}

.skill-tag:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: rgba(148, 163, 184, 0.5);
    color: #F1F5F9;
}

.skill-tag i {
    font-size: 1.2rem;
    color: #94A3B8;
    transition: all 0.3s ease;
    z-index: 1;
    position: relative;
}

.skill-tag:hover i {
    color: #CBD5E1;
    transform: scale(1.1);
}

.skill-tag span {
    z-index: 1;
    position: relative;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .logo-subtitle {
        display: none;
    }

    .nav-links {
        position: fixed;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(15, 23, 42, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 2rem;
        transform: translateX(-100%);
        transition: all 0.3s ease;
        box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
        border-radius: 0;
        gap: 1rem;
    }

    .nav-links.active {
        transform: translateX(0);
    }

    .nav-links a {
        padding: 1rem;
        justify-content: center;
        font-size: 1rem;
        border-radius: 15px;
    }

    .nav-links a i {
        font-size: 1.2rem;
    }

    .nav-links a span {
        font-size: 1rem;
    }

    .nav-right {
        gap: 0.5rem;
    }

    .theme-toggle,
    .search-toggle {
        width: 35px;
        height: 35px;
    }

    .download-cv {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }

    .download-cv span {
        display: none;
    }

    .nav-search {
        position: fixed;
        top: 80px;
        left: 1rem;
        right: 1rem;
        width: auto;
    }

    .nav-cta-btn {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }

    .nav-cta-btn span {
        display: none;
    }

    .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
    }

    .hero-text h1 {
        font-size: 2.5rem;
    }

    .profile-image {
        width: 250px;
        height: 250px;
        margin: 0 auto;
    }

    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .about-icon {
        font-size: 5rem;
    }

    .personal-info {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin: 3rem 0;
    }

    .personal-info::before {
        top: -15px;
        left: -15px;
        right: -15px;
        bottom: -15px;
        border-radius: 20px;
    }

    .info-card {
        padding: 2rem;
        gap: 1.5rem;
    }

    .info-card:hover {
        transform: perspective(1000px) translateY(-10px) rotateX(3deg) scale(1.02);
    }

    .info-icon {
        width: 70px;
        height: 70px;
        font-size: 2rem;
    }

    .info-content h4 {
        font-size: 1rem;
    }

    .info-content span {
        font-size: 1.1rem;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .soft-skills-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .soft-skill-card {
        padding: 2rem;
    }

    .soft-skill-icon {
        width: 60px;
        height: 60px;
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    .soft-skill-content h3 {
        font-size: 1.2rem;
    }

    .soft-skills-tags {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .skill-tag {
        padding: 1rem;
        justify-content: center;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        justify-content: center;
        text-align: center;
    }

    .contact-info {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .contact-item {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }

    .social-icons {
        gap: 1rem;
        flex-wrap: wrap;
    }

    .social-icon {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    .hero-text h1 {
        font-size: 2rem;
    }

    .hero-text h2 {
        font-size: 1.3rem;
    }

    .section {
        padding: 3rem 0;
    }

    .section-title {
        font-size: 2rem;
    }

    .profile-image {
        width: 200px;
        height: 200px;
    }
}
</style>