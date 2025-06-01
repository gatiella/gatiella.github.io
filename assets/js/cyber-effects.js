// Cyber Effects JavaScript

// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingStatus = document.getElementById('loading-status');
    
    const loadingMessages = [
        'Connecting to secure server...',
        'Initializing encryption protocols...',
        'Verifying digital certificates...',
        'Loading cybersecurity modules...',
        'Establishing secure connection...',
        'Access granted. Welcome, user.'
    ];
    
    let messageIndex = 0;
    
    const updateLoadingMessage = () => {
        if (messageIndex < loadingMessages.length - 1) {
            loadingStatus.textContent = loadingMessages[messageIndex];
            messageIndex++;
            setTimeout(updateLoadingMessage, 500);
        } else {
            loadingStatus.textContent = loadingMessages[messageIndex];
            setTimeout(() => {
                loadingScreen.classList.add('fade-out');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        }
    };
    
    updateLoadingMessage();
});

// Matrix Rain Effect
class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        this.fontSize = 14;
        this.drops = [];
        
        this.init();
        this.animate();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        const columns = this.canvas.width / this.fontSize;
        
        for (let i = 0; i < columns; i++) {
            this.drops[i] = Math.random() * this.canvas.height;
        }
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = this.fontSize + 'px Fira Code';
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.chars[Math.floor(Math.random() * this.chars.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            
            this.ctx.fillText(text, x, y);
            
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
    
    resize() {
        this.init();
    }
}

// Initialize Matrix Effect
document.addEventListener('DOMContentLoaded', function() {
    const matrixCanvas = document.getElementById('matrix-canvas');
    if (matrixCanvas) {
        const matrix = new MatrixRain(matrixCanvas);
        
        window.addEventListener('resize', () => {
            matrix.resize();
        });
    }
});

// Typing Effect
class TypeWriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.write();
    }
    
    write() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.write(), this.speed);
        }
    }
}

// Initialize typing effects
document.addEventListener('DOMContentLoaded', function() {
    const typeElements = document.querySelectorAll('[data-type]');
    
    typeElements.forEach(element => {
        const text = element.textContent;
        const speed = element.dataset.speed || 50;
        element.textContent = '';
        
        // Start typing when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    new TypeWriter(element, text, speed);
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
});

// Glitch Effect
function createGlitchEffect(element) {
    const originalText = element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let iterations = 0;
    const maxIterations = 10;
    
    const glitchInterval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        iterations += 1;
        
        if (iterations > maxIterations) {
            clearInterval(glitchInterval);
            element.textContent = originalText;
        }
    }, 50);
}

// Add glitch effect to elements on hover
document.addEventListener('DOMContentLoaded', function() {
    const glitchElements = document.querySelectorAll('.glitch-hover');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            createGlitchEffect(element);
        });
    });
});

// Parallax Scrolling Effect
document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Terminal Cursor Animation
document.addEventListener('DOMContentLoaded', function() {
    const cursors = document.querySelectorAll('.terminal-cursor');
    
    cursors.forEach(cursor => {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    });
});

// Copy Code Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('.highlight');
    
    codeBlocks.forEach(block => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'COPY';
        wrapper.appendChild(copyBtn);
        
        copyBtn.addEventListener('click', function() {
            const code = block.querySelector('code');
            const text = code.textContent;
            
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = 'COPIED!';
                copyBtn.style.background = '#00ff41';
                copyBtn.style.color = '#0a0a0a';
                
                setTimeout(() => {
                    copyBtn.textContent = 'COPY';
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                copyBtn.textContent = 'FAILED';
                copyBtn.style.background = '#ff0041';
                copyBtn.style.color = '#ffffff';
                
                setTimeout(() => {
                    copyBtn.textContent = 'COPY';
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                }, 2000);
            });
        });
    });
});

// Particle Animation for Background
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.init();
        this.animate();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.fillStyle = `rgba(0, 255, 65, ${particle.opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
    
    resize() {
        this.init();
    }
}

// Initialize Particle System
document.addEventListener('DOMContentLoaded', function() {
    const particleCanvas = document.getElementById('particle-canvas');
    if (particleCanvas) {
        const particles = new ParticleSystem(particleCanvas);
        
        window.addEventListener('resize', () => {
            particles.resize();
        });
    }
});

// Cyber Grid Animation
document.addEventListener('DOMContentLoaded', function() {
    const gridElements = document.querySelectorAll('.cyber-grid, .cyber-grid-footer');
    
    gridElements.forEach(grid => {
        // Create animated grid lines
        for (let i = 0; i < 20; i++) {
            const line = document.createElement('div');
            line.className = 'grid-line';
            line.style.left = `${Math.random() * 100}%`;
            line.style.animationDelay = `${Math.random() * 5}s`;
            line.style.animationDuration = `${3 + Math.random() * 4}s`;
            grid.appendChild(line);
        }
    });
});

// Security Status Indicator
document.addEventListener('DOMContentLoaded', function() {
    const statusDots = document.querySelectorAll('.status-dot');
    
    statusDots.forEach(dot => {
        setInterval(() => {
            dot.style.boxShadow = dot.style.boxShadow ? '' : '0 0 10px currentColor';
        }, 2000);
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navigation = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && navigation) {
        mobileMenuBtn.addEventListener('click', function() {
            navigation.classList.toggle('nav-open');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navigation.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navigation.classList.remove('nav-open');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
});

// Skill Bar Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 2s ease-in-out';
                bar.style.width = targetWidth;
            }, 500);
        });
    };
    
    // Trigger animation when skills section is in view
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(skillsSection);
                }
            });
        });
        
        observer.observe(skillsSection);
    }
});

// Terminal Command Simulation
document.addEventListener('DOMContentLoaded', function() {
    const terminals = document.querySelectorAll('.terminal-window');
    
    terminals.forEach(terminal => {
        const commands = terminal.querySelectorAll('.command');
        commands.forEach((command, index) => {
            setTimeout(() => {
                command.style.opacity = '1';
                command.style.transform = 'translateX(0)';
            }, index * 1000);
        });
    });
});