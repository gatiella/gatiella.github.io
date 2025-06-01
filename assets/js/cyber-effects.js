// Matrix background effect
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  
  // Matrix characters
  const chars = "01";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];
  
  // Initialize drops
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
  }
  
  // Matrix effect
  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 10, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#0f0";
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      drops[i]++;
    }
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  });
  
  // Start animation
  setInterval(drawMatrix, 33);
  
  // Hacker text effect
  const hackerText = document.querySelector('.hacker-text');
  const originalText = hackerText.textContent;
  let iterations = 0;
  
  const hackerEffect = setInterval(() => {
    hackerText.textContent = originalText
      .split("")
      .map((char, index) => {
        if (index < iterations || char === " ") return char;
        return chars.charAt(Math.floor(Math.random() * chars.length));
      })
      .join("");
    
    if (iterations >= originalText.length) clearInterval(hackerEffect);
    iterations += 1 / 3;
  }, 30);
  
  // Navigation glow effect
  const navLinks = document.querySelectorAll('.glowing-nav a');
  const glowBar = document.querySelector('.glow-bar');
  
  function updateGlowBar() {
    const activeLink = document.querySelector('.glowing-nav a:hover');
    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = activeLink.parentElement.getBoundingClientRect();
      
      glowBar.style.width = `${linkRect.width}px`;
      glowBar.style.left = `${linkRect.left - navRect.left}px`;
      glowBar.style.opacity = '1';
    } else {
      glowBar.style.opacity = '0';
    }
  }
  
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', updateGlowBar);
    link.addEventListener('mouseleave', updateGlowBar);
  });
});