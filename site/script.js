/**
 * Report Automation MVP - Landing Page JavaScript
 * Features: Mobile menu, smooth scrolling, scroll animations, lazy loading
 */

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function query(selector) {
    return document.querySelector(selector);
}

function queryAll(selector) {
    return document.querySelectorAll(selector);
}

function addClass(element, className) {
    if (element && !element.classList.contains(className)) {
        element.classList.add(className);
    }
}

function removeClass(element, className) {
    if (element && element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

function toggleClass(element, className) {
    if (element) {
        element.classList.toggle(className);
    }
}

// ============================================================================
// MOBILE MENU TOGGLE
// ============================================================================

function initMobileMenu() {
    const hamburger = query('.hamburger');
    const navMenu = query('.nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleClass(navMenu, 'active');
        toggleClass(hamburger, 'active');
    });

    // Close menu when clicking on nav links
    const navLinks = queryAll('.nav-menu a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            removeClass(navMenu, 'active');
            removeClass(hamburger, 'active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            removeClass(navMenu, 'active');
            removeClass(hamburger, 'active');
        }
    });
}

// ============================================================================
// SMOOTH SCROLL
// ============================================================================

function initSmoothScroll() {
    const links = queryAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = query(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================================================

function initScrollAnimations() {
    const observeSelectors = [
        '.feature-card',
        '.solution-card',
        '.workflow-step',
        '.example-card',
        '.faq-item'
    ];

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                addClass(entry.target, 'slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observeSelectors.forEach(function (selector) {
        const elements = queryAll(selector);
        elements.forEach(function (element) {
            observer.observe(element);
        });
    });
}

// ============================================================================
// LAZY LOADING FOR IMAGES
// ============================================================================

function initLazyLoading() {
    const images = queryAll('img[data-src]');

    if (!images.length) return;

    const imageLoadObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');

                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    imageLoadObserver.unobserve(img);
                    addClass(img, 'loaded');
                }
            }
        });
    }, {
        threshold: 0.01,
        rootMargin: '50px'
    });

    images.forEach(function (img) {
        imageLoadObserver.observe(img);
    });
}

// ============================================================================
// NAVBAR SHADOW ON SCROLL
// ============================================================================

function initNavbarShadow() {
    const navbar = query('.navbar');

    if (!navbar) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            addClass(navbar, 'shadow');
        } else {
            removeClass(navbar, 'shadow');
        }
    }, { passive: true });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function initializeApp() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        console.log('Report Automation MVP - Initializing application');

        initMobileMenu();
        initSmoothScroll();
        initScrollAnimations();
        initLazyLoading();
        initNavbarShadow();

        console.log('Report Automation MVP - Application initialized successfully');
    }
}

// Start initialization
initializeApp();
