---
layout: default
title: Home
---

<section class="hero-section">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title glitch" data-text="CYBERSECURITY PROFESSIONAL">
        <span data-type="CYBERSECURITY PROFESSIONAL">CYBERSECURITY PROFESSIONAL</span>
      </h1>
      <p class="hero-subtitle">
        <span class="bracket">[</span>
        <span class="typing-text" data-type="Penetration Tester | Security Researcher | Ethical Hacker">Penetration Tester | Security Researcher | Ethical Hacker</span>
        <span class="bracket">]</span>
      </p>
      <div class="hero-buttons">
        <a href="{{ '/projects' | relative_url }}" class="btn btn-primary glitch-hover">
          <i class="fas fa-code"></i> View Projects
        </a>
        <a href="{{ '/about' | relative_url }}" class="btn glitch-hover">
          <i class="fas fa-user-secret"></i> About Me
        </a>
      </div>
    </div>
    <div class="hero-terminal">
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-buttons">
            <span class="btn-close"></span>
            <span class="btn-minimize"></span>
            <span class="btn-maximize"></span>
          </div>
          <div class="terminal-title">root@cyberportfolio:~</div>
        </div>
        <div class="terminal-body">
          <div class="terminal-line">
            <span class="prompt">$</span>
            <span class="command">whoami</span>
          </div>
          <div class="terminal-line">
            <span class="output">{{ site.author }}</span>
          </div>
          <div class="terminal-line">
            <span class="prompt">$</span>
            <span class="command">cat skills.txt</span>
          </div>
          <div class="terminal-line">
            <span class="output">Penetration Testing</span>
          </div>
          <div class="terminal-line">
            <span class="output">Vulnerability Assessment</span>
          </div>
          <div class="terminal-line">
            <span class="output">Network Security</span>
          </div>
          <div class="terminal-line">
            <span class="output">Web Application Security</span>
          </div>
          <div class="terminal-line">
            <span class="prompt">$</span>
            <span class="command">./run_scan.sh</span>
          </div>
          <div class="terminal-line">
            <span class="output text-green">Scan completed successfully!</span>
          </div>
          <div class="terminal-line">
            <span class="prompt">$</span>
            <span class="terminal-cursor">_</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="services-section">
  <div class="container">
    <h2 class="section-title text-center">
      <span class="bracket">[</span>
      Services
      <span class="bracket">]</span>
    </h2>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3>Penetration Testing</h3>
        <p>Comprehensive security assessments to identify vulnerabilities in your infrastructure, applications, and networks.</p>
        <ul class="service-features">
          <li>Network Penetration Testing</li>
          <li>Web Application Testing</li>
          <li>Mobile Application Testing</li>
          <li>Social Engineering Assessments</li>
        </ul>
      </div>
      
      <div class="service-card">
        <div class="service-icon">
          <i class="fas fa-bug"></i>
        </div>
        <h3>Vulnerability Assessment</h3>
        <p>Systematic identification and evaluation of security weaknesses in your systems and applications.</p>
        <ul class="service-features">
          <li>Automated Vulnerability Scanning</li>
          <li>Manual Security Testing</li>
          <li>Risk Assessment & Prioritization</li>
          <li>Remediation Guidance</li>
        </ul>
      </div>
      
      <div class="service-card">
        <div class="service-icon">
          <i class="fas fa-code"></i>
        </div>
        <h3>Security Consulting</h3>
        <p>Expert guidance on implementing robust security measures and best practices for your organization.</p>
        <ul class="service-features">
          <li>Security Architecture Review</li>
          <li>Compliance Assessment</li>
          <li>Security Training</li>
          <li>Incident Response Planning</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">150+</div>
        <div class="stat-label">Security Assessments</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">500+</div>
        <div class="stat-label">Vulnerabilities Found</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">50+</div>
        <div class="stat-label">Clients Secured</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">24/7</div>
        <div class="stat-label">Security Monitoring</div>
      </div>
    </div>
  </div>
</section>

<section class="recent-posts-section">
  <div class="container">
    <h2 class="section-title text-center">
      <span class="bracket">[</span>
      Latest Blog Posts
      <span class="bracket">]</span>
    </h2>
    <div class="posts-grid">
      {% for post in site.posts limit:3 %}
      <article class="post-card">
        <div class="post-header">
          <h3 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <div class="post-meta">
            <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
            <span class="post-categories">
              {% for category in post.categories %}
                <span class="category">{{ category }}</span>
              {% endfor %}
            </span>
          </div>
        </div>
        <div class="post-excerpt">
          {{ post.excerpt | strip_html | truncate: 150 }}
        </div>
        <div class="post-footer">
          <a href="{{ post.url | relative_url }}" class="read-more">
            Read More <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
      {% endfor %}
    </div>
    <div class="text-center">
      <a href="{{ '/blog' | relative_url }}" class="btn glitch-hover">
        <i class="fas fa-blog"></i> View All Posts
      </a>
    </div>
  </div>
</section>