// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    mirror: true,
    anchorPlacement: 'top-bottom'
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Navbar animation on load
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Typing effect for hero section
const text = "And I'm a Full Stack Python Developer";
const typingText = document.querySelector('.hero-section .lead');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    typingText.textContent = '';
    setTimeout(typeWriter, 1000);
});

// Progress bar animation
const progressBars = document.querySelectorAll('.progress-bar');
const animateProgress = () => {
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
};

// Animate progress bars when they come into view
const progressSection = document.querySelector('.skills-container');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress();
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (progressSection) {
    progressObserver.observe(progressSection);
}

// Project cards hover effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Service cards hover effect
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Social links hover effect
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Add floating elements
function createFloatingElements() {
    const count = 8; // Number of floating elements
    const container = document.body;
    
    for (let i = 0; i < count; i++) {
        // Create circle
        const circle = document.createElement('div');
        circle.className = 'floating-element floating-circle';
        circle.style.left = `${Math.random() * 100}vw`;
        circle.style.top = `${Math.random() * 100}vh`;
        circle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(circle);
        
        // Create square
        const square = document.createElement('div');
        square.className = 'floating-element floating-square';
        square.style.left = `${Math.random() * 100}vw`;
        square.style.top = `${Math.random() * 100}vh`;
        square.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(square);
    }
}

// Initialize floating elements
document.addEventListener('DOMContentLoaded', createFloatingElements);

// Enhanced image hover effects
document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = image.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        image.style.transform = `
            perspective(1000px)
            rotateX(${(y - 0.5) * 10}deg)
            rotateY(${(x - 0.5) * 10}deg)
            scale3d(1.05, 1.05, 1.05)
        `;
    });
    
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'none';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroSection && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Skills animation
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                const progressBar = entry.target.querySelector('.progress-bar');
                const width = progressBar.getAttribute('data-progress');
                progressBar.style.setProperty('--progress-width', width + '%');
            }
        });
    }, {
        threshold: 0.2
    });

    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize animations when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSkillsAnimation();
});

// Hero Image Enhanced Animation
document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.querySelector('.hero-image-container');
    const heroImage = document.querySelector('.hero-image');
    
    if (!heroContainer || !heroImage) return;

    // Smooth parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        // Calculate rotation based on mouse position
        const rotateX = (clientY / innerHeight - 0.5) * 10;
        const rotateY = (clientX / innerWidth - 0.5) * 10;
        
        // Apply smooth transform
        heroImage.style.transform = `
            perspective(1000px)
            rotateX(${-rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(10px)
        `;
    });
    
    // Reset transform on mouse leave
    document.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'none';
    });
    
    // Add smooth transition back to original state
    heroImage.addEventListener('transitionend', () => {
        heroImage.style.transition = 'transform 0.5s ease';
    });
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSkillsAnimation();
    
    // Enhanced title animations
    const sectionTitles = document.querySelectorAll('.section-title-wrapper');
    
    // Initialize AOS for titles
    sectionTitles.forEach(title => {
        title.setAttribute('data-aos', 'fade-up');
        title.setAttribute('data-aos-duration', '1000');
    });

    // Add hover effect for titles
    sectionTitles.forEach(titleWrapper => {
        titleWrapper.addEventListener('mouseenter', () => {
            const dot = titleWrapper.querySelector('.dot');
            const lines = titleWrapper.querySelectorAll('.line');
            
            // Enhance dot animation
            dot.style.animation = 'none';
            dot.offsetHeight; // Trigger reflow
            dot.style.animation = 'pulseDot 1s infinite';
            
            // Animate lines
            lines.forEach(line => {
                line.style.width = '70px';
                line.style.transition = 'width 0.5s ease';
            });
        });

        titleWrapper.addEventListener('mouseleave', () => {
            const lines = titleWrapper.querySelectorAll('.line');
            lines.forEach(line => {
                line.style.width = '50px';
            });
        });
    });
});

// Create floating particles
function createParticles() {
    const particleCount = 30;
    const colors = ['#6366f1', '#8b5cf6', '#ec4899'];
    const container = document.createElement('div');
    container.className = 'particles-container';
    document.body.appendChild(container);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 3;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${Math.random() * 100}vw;
            animation-duration: ${Math.random() * 3 + 2}s;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        container.appendChild(particle);
    }
}

// Enhanced Navbar Animations
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    // Reset animations for page load
    setTimeout(() => {
        // Force reflow to restart animations
        navItems.forEach(item => {
            item.style.animation = 'none';
            item.offsetHeight; // Trigger reflow
            item.style.animation = '';
        });
    }, 100);

    // Scroll handler for active link
    window.addEventListener('scroll', () => {
        // Add floating particles on scroll
        if (!navbar.querySelector('.nav-particle') && Math.random() > 0.7) {
            createNavParticle();
        }

        // Update active link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
                
                // Emit particles on active link change
                const rect = link.getBoundingClientRect();
                emitParticles(rect.left + rect.width/2, rect.top + rect.height/2);
            }
        });
    });

    // Create floating particle
    function createNavParticle() {
        const particle = document.createElement('div');
        particle.classList.add('nav-particle');
        
        // Random styling
        const size = Math.random() * 8 + 4;
        const posX = Math.random() * navbar.offsetWidth;
        const posY = Math.random() * navbar.offsetHeight;
        const duration = Math.random() * 3 + 2;
        const hue = Math.random() * 60 + 180; // Blue to cyan range
        
        // Apply styles
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${posX}px;
            top: ${posY}px;
            background: hsla(${hue}, 100%, 70%, 0.6);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 ${size*2}px hsla(${hue}, 100%, 70%, 0.8);
            animation: floatParticle ${duration}s ease-in-out forwards;
            z-index: 1;
        `;
        
        navbar.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Emit particles on active link change
    function emitParticles(x, y) {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 6 + 3;
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 30 + 20;
            const hue = Math.random() * 60 + 180; // Blue to cyan range
            
            particle.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: hsla(${hue}, 100%, 70%, 0.8);
                border-radius: 50%;
                pointer-events: none;
                box-shadow: 0 0 ${size*2}px hsla(${hue}, 100%, 70%, 0.8);
                transform: translate(-50%, -50%);
                z-index: 9999;
            `;
            
            document.body.appendChild(particle);
            
            // Animate
            const duration = Math.random() * 0.8 + 0.4;
            const distance = velocity * duration;
            const destX = x + Math.cos(angle) * distance;
            const destY = y + Math.sin(angle) * distance;
            
            particle.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: `translate(calc(${destX}px - 50%), calc(${destY}px - 50%)) scale(1)`, opacity: 1, offset: 0.6 },
                { transform: `translate(calc(${destX}px - 50%), calc(${destY}px - 50%)) scale(0)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
            });
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, duration * 1000);
        }
    }

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Visual feedback on click
            const rect = this.getBoundingClientRect();
            emitParticles(rect.left + rect.width/2, rect.top + rect.height/2);
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });

        // Add hover animation for cursor
        link.addEventListener('mouseenter', function() {
            const rect = this.getBoundingClientRect();
            const x = rect.left + rect.width/2;
            const y = rect.top + rect.height/2;
            
            // Create hover glow effect
            const hoverGlow = document.createElement('div');
            hoverGlow.classList.add('hover-glow');
            hoverGlow.style.cssText = `
                position: fixed;
                width: 40px;
                height: 40px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(0,238,255,0.3) 0%, rgba(0,238,255,0) 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                pointer-events: none;
                z-index: 1;
                animation: hoverGlow 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            `;
            
            document.body.appendChild(hoverGlow);
            
            setTimeout(() => {
                hoverGlow.remove();
            }, 500);
        });
    });

    // Add keyframe for hover glow and float particle
    const style = document.createElement('style');
    style.textContent = `
        @keyframes hoverGlow {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(2.5); opacity: 1; }
        }
        
        @keyframes floatParticle {
            0% { transform: translateY(0) scale(0); opacity: 0; }
            20% { opacity: 1; transform: scale(1); }
            100% { transform: translateY(-${navbar.offsetHeight}px) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Mobile menu animation
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.addEventListener('click', () => {
        const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            // Closing animation
            navbarCollapse.classList.remove('show');
        } else {
            // Opening animation with shockwave effect
            const rect = navbarToggler.getBoundingClientRect();
            const x = rect.left + rect.width/2;
            const y = rect.top + rect.height/2;
            
            const shockwave = document.createElement('div');
            shockwave.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(0,238,255,0.4) 0%, rgba(0,238,255,0) 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 9999;
            `;
            
            document.body.appendChild(shockwave);
            
            shockwave.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: 'translate(-50%, -50%) scale(20)', opacity: 0 }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.11, 0.67, 0.08, 0.99)'
            });
            
            setTimeout(() => {
                shockwave.remove();
                navbarCollapse.classList.add('show');
            }, 150);
        }
    });
});

// Minimal JavaScript - only for smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
});