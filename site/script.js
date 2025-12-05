/**
 * Report Automation MVP - Landing Page JavaScript
 * Features: Mobile menu, smooth scrolling, scroll animations, lazy loading, i18n
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
// INTERNATIONALIZATION (i18n)
// ============================================================================

const i18n = {
    currentLang: 'en',
    translations: {},
    supportedLangs: ['en', 'ru', 'zh', 'es', 'pt', 'ar', 'kk'],
    langNames: {
        en: 'EN',
        ru: 'RU',
        zh: '中文',
        es: 'ES',
        pt: 'PT',
        ar: 'AR',
        kk: 'KK'
    },

    async loadTranslation(lang) {
        if (this.translations[lang]) {
            return this.translations[lang];
        }

        try {
            const response = await fetch(`i18n/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${lang} translation`);
            }
            this.translations[lang] = await response.json();
            return this.translations[lang];
        } catch (error) {
            console.error(`Error loading translation for ${lang}:`, error);
            if (lang !== 'en') {
                return this.loadTranslation('en');
            }
            return null;
        }
    },

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    },

    async applyTranslations(lang) {
        const translation = await this.loadTranslation(lang);
        if (!translation) return;

        this.currentLang = lang;

        // Update HTML lang and dir attributes
        const html = document.documentElement;
        html.setAttribute('lang', translation.lang || lang);
        html.setAttribute('dir', translation.dir || 'ltr');

        // Update all elements with data-i18n attribute
        const elements = queryAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = this.getNestedValue(translation, key);

            if (value) {
                if (element.tagName === 'META') {
                    element.setAttribute('content', value);
                } else if (element.tagName === 'TITLE') {
                    document.title = value;
                } else {
                    element.textContent = value;
                }
            }
        });

        // Update language selector display
        const langCurrent = query('.lang-current');
        if (langCurrent) {
            langCurrent.textContent = this.langNames[lang] || lang.toUpperCase();
        }

        // Update active state in dropdown
        const langOptions = queryAll('.lang-option');
        langOptions.forEach(option => {
            const optionLang = option.getAttribute('data-lang');
            if (optionLang === lang) {
                addClass(option, 'active');
            } else {
                removeClass(option, 'active');
            }
        });

        // Save preference
        localStorage.setItem('preferredLanguage', lang);

        console.log(`Language switched to: ${lang}`);
    },

    detectPreferredLanguage() {
        // Check localStorage first
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && this.supportedLangs.includes(saved)) {
            return saved;
        }

        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.supportedLangs.includes(browserLang)) {
            return browserLang;
        }

        // Default to English
        return 'en';
    }
};

function initLanguageSelector() {
    const selector = query('.language-selector');
    const langBtn = query('.lang-btn');
    const langOptions = queryAll('.lang-option');

    if (!selector || !langBtn) return;

    // Toggle dropdown
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleClass(selector, 'open');
    });

    // Handle language selection
    langOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang && i18n.supportedLangs.includes(lang)) {
                i18n.applyTranslations(lang);
                removeClass(selector, 'open');
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!selector.contains(e.target)) {
            removeClass(selector, 'open');
        }
    });

    // Initialize with detected or saved language
    const preferredLang = i18n.detectPreferredLanguage();
    i18n.applyTranslations(preferredLang);
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
        initLanguageSelector();

        console.log('Report Automation MVP - Application initialized successfully');
    }
}

// Start initialization
initializeApp();
