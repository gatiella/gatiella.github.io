---
layout: default
title: CyberSec Specialist
---

<section id="hero">
  <div class="hacker-text">
    >_ Welcome to my security portfolio
  </div>
  <h1>CYBER DEFENSE <span class="cyber-glitch" data-text="SPECIALIST">SPECIALIST</span></h1>
  <p>Penetration Tester | Security Researcher | Network Defender</p>
  
  <div class="cyber-buttons">
    <a href="#projects" class="cyber-button">View Projects</a>
    <a href="#contact" class="cyber-button">Contact Me</a>
  </div>
</section>

<section id="projects">
  <h2>Security Projects</h2>
  <div class="project-grid">
    {% for project in site.projects %}
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="tags">
        {% for tag in project.tags %}
        <span>{{ tag }}</span>
        {% endfor %}
      </div>
      <a href="{{ project.url }}" class="cyber-link">Case Study <i class="fas fa-arrow-right"></i></a>
    </div>
    {% endfor %}
  </div>
</section>

<section id="skills">
  <h2>Technical Skills</h2>
  <div class="skills-matrix">
    <div class="skill-item">
      <div class="skill-name">
        <span>Penetration Testing</span>
        <span>95%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-level" style="width: 95%"></div>
      </div>
    </div>
    <!-- Add more skills similarly -->
  </div>
</section>

<section id="contact">
  <h2>Secure Contact</h2>
  <form class="cyber-form">
    <input type="text" placeholder="Name" class="cyber-input">
    <input type="email" placeholder="Email" class="cyber-input">
    <textarea placeholder="Encrypted Message" class="cyber-input"></textarea>
    <button type="submit" class="cyber-button">Send Message</button>
  </form>
  <div class="contact-alt">
    <p>For sensitive communications:</p>
    <p><i class="fas fa-key"></i> PGP: <code>0x1A2B3C4D5E6F7890</code></p>
    <p><i class="fas fa-shield-alt"></i> Signal: +1 (555) 123-4567</p>
  </div>
</section>