// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
});

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function navigateTo(pageId) {
    showPage(pageId);
    window.scrollTo(0, 0);
}

// Navigation link click handlers
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        navigateTo(pageId);
    });
});

// Resume Modal
const toggleResumeBtn = document.getElementById('toggleResume');
const closeResumeBtn = document.getElementById('closeResume');
const resumeModal = document.getElementById('resumeModal');

toggleResumeBtn.addEventListener('click', () => {
    resumeModal.classList.add('show');
});

closeResumeBtn.addEventListener('click', () => {
    resumeModal.classList.remove('show');
});

resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
        resumeModal.classList.remove('show');
    }
});

// Initialize
initializeTheme();
