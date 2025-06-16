// Portfolio Website JavaScript

// DOM Elements
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const typingText = document.querySelector('.typing-text');
const backToTopBtn = document.getElementById('back-to-top');
const progressBar = document.getElementById('progress-bar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

// Mobile menu toggle
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Typing effect for hero section
const titles = ['Software Developer', 'Frontend Specialist', 'Backend Engineer', 'Full Stack Developer', 'Infosys Intern'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;
    
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Start typing effect after page load
setTimeout(typeEffect, 1000);

// Scroll event handler
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    
    // Update scroll progress bar
    if (progressBar) {
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
    
    // Show/hide back to top button
    if (backToTopBtn) {
        if (scrollTop > 300) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    }
    
    // Update active navigation link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollTop >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Back to top functionality
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Project details data
const projects = {
    project1: {
        title: " Faby",
        description: `
            <p class="text-gray-600 mb-4">A toddler care mobile app built using Swift and Supabase, designed to assist first-time parents with personalized baby growth tracking, nutrition plans, vaccination reminders, and a supportive parenting community. The app ensures reliable health tracking and developmental milestone insights for children aged 1–3 years.</p>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul class="list-disc pl-5 mb-4 text-gray-600">
                <li>User authentication and profile management</li>
                <li>Product catalog with categories and filters</li>
                <li>Shopping cart and wishlist functionality</li>
                <li>Order processing and payment integration</li>
                <li>Admin dashboard for inventory management</li>
                <li>Responsive design for all devices</li>
            </ul>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h4>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Redux</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Node.js</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Express</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">MongoDB</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">JWT</span>
            </div>
        `
    },
    project2: {
        title: "Messenging-Application",
        description: `
            <p class="text-gray-600 mb-4">A collaborative task management application built with Vue.js and Express. This app helps teams organize projects, track progress, and collaborate effectively with real-time updates.</p>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul class="list-disc pl-5 mb-4 text-gray-600">
                <li>Project and task organization</li>
                <li>Team collaboration and task assignment</li>
                <li>Real-time updates and notifications</li>
                <li>Progress tracking and reporting</li>
                <li>Calendar integration and deadline reminders</li>
                <li>File sharing and comments</li>
            </ul>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h4>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Vuex</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Express</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Socket.io</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">PostgreSQL</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">JWT</span>
            </div>
        `
    },
    project3: {
        title: "Analytics Dashboard",
        description: `
            <p class="text-gray-600 mb-4">An interactive analytics dashboard built with React and D3.js, powered by a Python backend. This tool visualizes business metrics and KPIs with customizable reports and real-time data.</p>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul class="list-disc pl-5 mb-4 text-gray-600">
                <li>Interactive data visualizations</li>
                <li>Customizable dashboard layouts</li>
                <li>Real-time data updates</li>
                <li>Report generation and export</li>
                <li>Data filtering and segmentation</li>
                <li>User permission management</li>
            </ul>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h4>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">D3.js</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Flask</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">PostgreSQL</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Pandas</span>
            </div>
        `
    }
};

// Project modal functionality
function showProjectDetails(projectId) {
    if (!projects[projectId] || !modalTitle || !modalContent || !projectModal) return;
    
    modalTitle.textContent = projects[projectId].title;
    modalContent.innerHTML = projects[projectId].description;
    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    if (!projectModal) return;
    
    projectModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
if (projectModal) {
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModal && !projectModal.classList.contains('hidden')) {
        closeProjectModal();
    }
});

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(this);
        const formValues = {};
        
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        
        try {
            // Submit to Firebase and send email
            if (window.submitContactForm) {
                const result = await window.submitContactForm(formValues);
                
                if (result.success) {
                    showNotification('Thank you for your message! I will get back to you soon.', 'success');
                    this.reset();
                } else {
                    throw new Error(result.error || 'Failed to send message');
                }
            } else {
                // Fallback: just show success message
                console.log('Form submitted:', formValues);
                showNotification('Thank you for your message! I will get back to you soon.', 'success');
                this.reset();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-full ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-pill, .project-card, .experience-item').forEach(el => {
    observer.observe(el);
});

// Smooth scroll to top on page load
window.addEventListener('load', () => {
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
});

// Theme toggle functionality (for future enhancement)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Lazy loading for images (for future enhancement)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-dependent operations can be added here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Make functions globally available
window.showProjectDetails = showProjectDetails;
window.closeProjectModal = closeProjectModal;

// Debug function for development
function debugInfo() {
    console.log('Portfolio Website Debug Info:');
    console.log('- Menu button:', menuBtn ? 'Found' : 'Not found');
    console.log('- Mobile menu:', mobileMenu ? 'Found' : 'Not found');
    console.log('- Typing text:', typingText ? 'Found' : 'Not found');
    console.log('- Progress bar:', progressBar ? 'Found' : 'Not found');
    console.log('- Sections:', sections.length);
    console.log('- Nav links:', navLinks.length);
    console.log('- Project modal:', projectModal ? 'Found' : 'Not found');
}

// Run debug in development mode
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    debugInfo();
} 