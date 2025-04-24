// Sample projects data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with secure payment integration, product management, and user authentication.",
        image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, team features, and progress tracking.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing my work and skills with modern design and animations.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    },
    {
        title: "Weather Dashboard",
        description: "A weather application with real-time data, location-based forecasts, and interactive maps.",
        image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
    },
    {
        title: "Fitness Tracker",
        description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and nutrition tracking features.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Recipe Finder",
        description: "An interactive recipe application with advanced search, meal planning, and shopping list features.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
    }
];

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const projectsContainer = document.getElementById('projects-container');
const contactForm = document.getElementById('contact-form');

// Theme Toggle
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.dataset.theme = savedTheme;
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.dataset.theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// Mobile Navigation
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Render Projects
function renderProjects() {
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        </div>
    `).join('');
}

// Form Validation
function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Name validation
    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        isValid = false;
    } else {
        clearError(name);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        clearError(email);
    }

    // Message validation
    if (message.value.trim() === '') {
        showError(message, 'Message is required');
        isValid = false;
    } else {
        clearError(message);
    }

    return isValid;
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
    input.classList.add('error');
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = '';
    input.classList.remove('error');
}

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Message sent successfully!');
        contactForm.reset();
    }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderProjects();
}); 