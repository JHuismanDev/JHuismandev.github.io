const canvas = document.querySelector('.particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 1,
    speedX: Math.random() * 2 - 2,
    speedY: Math.random() * -2 - 1 // negative Y speed to move up
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0, 123, 255, 0.5)';

  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x > canvas.width + particle.size) {
      particle.x = -particle.size;
    }
    if (particle.x < -particle.size) {
      particle.x = canvas.width + particle.size;
    }
    if (particle.y > canvas.height + particle.size) {
      particle.y = -particle.size;
    }
    if (particle.y < -particle.size) {
      particle.y = canvas.height + particle.size;
    }
  });

  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles.length = 0;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 1,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * -2 - 1 // negative Y speed to move up
    });
  }
});

const navLinks = document.querySelectorAll('.nav-li a');

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', createParticles);
    });

    function createParticles(event) {
      const link = event.target;
      const rect = link.getBoundingClientRect();
      const particlesContainer = document.createElement('div');
      particlesContainer.classList.add('particles-container');
      particlesContainer.style.position = 'absolute';
      particlesContainer.style.top = (rect.top + rect.height / 2) + 'px';
      particlesContainer.style.left = (rect.left + rect.width / 2) + 'px';

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = Math.random() * rect.height + 'px';
        particle.style.left = Math.random() * rect.width + 'px';
        particlesContainer.appendChild(particle);
      }

      document.body.appendChild(particlesContainer);

      setTimeout(() => {
        particlesContainer.remove();
      }, 1000);
    }
