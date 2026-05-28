const translations = {
    fr: {
        announceText: "Le calendrier se remplit rapidement —",
        announceLink: " Cliquez ici pour obtenir votre estimation gratuite !",
        navServices: "Services", navPortfolio: "Réalisations", navContact: "Contact",
        portfolioLabel: "Nos réalisations",
        pageTitle: "Toutes nos transformations",
        pageSubtitle: "Avant & Après — Chaque projet, une transformation.",
        labelBefore: "Avant", labelAfter: "Après",
        backBtn: "← Retour à l'accueil",
        footerText: "Tous droits réservés."
    },
    en: {
        announceText: "Calendar filling up fast —",
        announceLink: " Click here to get your free estimate!",
        navServices: "Services", navPortfolio: "Portfolio", navContact: "Contact",
        portfolioLabel: "Our work",
        pageTitle: "All Our Transformations",
        pageSubtitle: "Before & After — Every project, a transformation.",
        labelBefore: "Before", labelAfter: "After",
        backBtn: "← Back to Home",
        footerText: "All rights reserved."
    }
};

let currentLang = 'fr';
const langBtn = document.getElementById('lang-btn');

function applyTranslations() {
    const t = translations[currentLang];
    const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
    set('announce-text', t.announceText);
    set('announce-link', t.announceLink);
    set('nav-services', t.navServices);
    set('nav-portfolio', t.navPortfolio);
    set('nav-contact', t.navContact);
    set('portfolio-label', t.portfolioLabel);
    set('page-title', t.pageTitle);
    set('page-subtitle', t.pageSubtitle);
    set('back-btn', t.backBtn);
    set('footer-text', t.footerText);
    document.querySelectorAll('[data-label="before"]').forEach(el => el.textContent = t.labelBefore);
    document.querySelectorAll('[data-label="after"]').forEach(el  => el.textContent = t.labelAfter);
    langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslations();
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav = document.getElementById('main-nav');
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