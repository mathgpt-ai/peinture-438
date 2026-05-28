// Traductions pour la page portfolio
const translations = {
    fr: {
        navServices: "Services",
        navPortfolio: "Réalisations",
        navContact: "Contact",
        pageTitle: "Toutes nos Réalisations",
        pageSubtitle: "Avant & Après — Chaque projet, une transformation.",
        labelBefore: "Avant",
        labelAfter: "Après",
        backBtn: "← Retour à l'accueil",
        footerText: "Tous droits réservés."
    },
    en: {
        navServices: "Services",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        pageTitle: "All Our Work",
        pageSubtitle: "Before & After — Every project, a transformation.",
        labelBefore: "Before",
        labelAfter: "After",
        backBtn: "← Back to Home",
        footerText: "All rights reserved."
    }
};

let currentLang = 'fr';

const langBtn = document.getElementById('lang-btn');

function applyTranslations() {
    const t = translations[currentLang];
    document.getElementById('nav-services').textContent   = t.navServices;
    document.getElementById('nav-portfolio').textContent  = t.navPortfolio;
    document.getElementById('nav-contact').textContent    = t.navContact;
    document.getElementById('page-title').textContent     = t.pageTitle;
    document.getElementById('page-subtitle').textContent  = t.pageSubtitle;
    document.getElementById('back-btn').textContent       = t.backBtn;
    document.getElementById('footer-text').textContent    = t.footerText;
    document.querySelectorAll('[data-label="before"]').forEach(el => el.textContent = t.labelBefore);
    document.querySelectorAll('[data-label="after"]').forEach(el  => el.textContent = t.labelAfter);
    langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslations();
});

// ── Hamburger Menu ────────────────────────────────────────────────────────────
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav      = document.getElementById('main-nav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    mainNav.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('open');
        mainNav.classList.remove('open');
    });
});