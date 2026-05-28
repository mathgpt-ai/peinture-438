const translations = {
    fr: {
        announceText: "Le calendrier se remplit rapidement —",
        announceLink: " Cliquez ici pour obtenir votre estimation gratuite !",
        navServices: "Services",
        navPortfolio: "Réalisations",
        navContact: "Contact",
        heroEyebrow: "Peinture Résidentielle · Laval",
        heroTitle: "Des murs parfaits, un service impeccable.",
        heroDesc: "Votre équipe de confiance pour tous vos projets résidentiels. Travail soigné, réalisé avec fierté.",
        heroBtn: "Obtenir une soumission",
        heroBtn2: "Voir les réalisations",
        servicesLabel: "Ce que nous proposons",
        servicesTitle: "Notre Service",
        serviceCardTitle: "Peinture Résidentielle",
        serviceCardDesc: "Intérieur et extérieur, préparation minutieuse des surfaces et finition haut de gamme. Un travail propre, soigné et durable, réalisé avec fierté et professionnalisme.",
        whyLabel: "Pourquoi nous choisir",
        whyTitle: "Ce qui nous distingue",
        whyDesc: "Un service personnalisé, réalisé avec soin et fierté. Aucun sous-traitant — que de la qualité dans chaque projet.",
        why1: "Finitions impeccables et souci du détail",
        why2: "Travail réalisé directement sur place",
        why3: "Préparation minutieuse des surfaces",
        why4: "Produits de haute qualité, résultat durable",
        why5: "Estimation gratuite à domicile",
        whyBtn: "Obtenir une estimation gratuite",
        portfolioLabel: "Nos réalisations",
        portfolioTitle: "Avant / Après",
        portfolioDesc: "Voyez la transformation Peinture438 de vos propres yeux.",
        portfolioBtn: "Voir toutes nos réalisations →",
        labelBefore: "Avant",
        labelAfter: "Après",
        contactLabel: "Contactez-nous",
        contactTitle: "Prêt à transformer votre espace ?",
        contactDesc: "Demandez une estimation gratuite dès maintenant. Nous nous déplaçons à domicile pour évaluer votre projet.",
        formName: "Votre Nom",
        formEmail: "Votre Courriel",
        formMsg: "Parlez-nous de votre projet (pièces, dimensions, etc.)...",
        formBtn: "Envoyer",
        formSubject: "Nouvelle soumission - Peinture438",
        footerText: "Tous droits réservés.",
        successMsg: "✅ Message envoyé ! Nous vous répondrons dans les plus brefs délais.",
        errorMsg: "❌ Une erreur s'est produite. Veuillez réessayer ou me contacter directement.",
        sendingMsg: "Envoi en cours..."
    },
    en: {
        announceText: "Calendar filling up fast —",
        announceLink: " Click here to get your free estimate!",
        navServices: "Services",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        heroEyebrow: "Residential Painting · Laval",
        heroTitle: "Perfect walls, impeccable service.",
        heroDesc: "Your trusted team for all your residential projects. Clean, detailed work done with pride.",
        heroBtn: "Get a Free Quote",
        heroBtn2: "See Our Work",
        servicesLabel: "What we offer",
        servicesTitle: "Our Service",
        serviceCardTitle: "Residential Painting",
        serviceCardDesc: "Interior and exterior, meticulous surface preparation, and high-end finishes. Clean, detailed, and durable work, completed with pride and professionalism.",
        whyLabel: "Why choose us",
        whyTitle: "What sets us apart",
        whyDesc: "A personalized service done with care and pride. No subcontractors — just quality in every project.",
        why1: "Impeccable finishes and attention to detail",
        why2: "Work done directly on site",
        why3: "Meticulous surface preparation",
        why4: "High-quality products, lasting results",
        why5: "Free in-home estimate",
        whyBtn: "Get a free estimate",
        portfolioLabel: "Our work",
        portfolioTitle: "Before / After",
        portfolioDesc: "See the Peinture438 transformation with your own eyes.",
        portfolioBtn: "See all our work →",
        labelBefore: "Before",
        labelAfter: "After",
        contactLabel: "Contact Us",
        contactTitle: "Ready to transform your space?",
        contactDesc: "Request a free estimate now. I come to your home to evaluate your project.",
        formName: "Your Name",
        formEmail: "Your Email",
        formMsg: "Tell us about your project (rooms, dimensions, etc.)...",
        formBtn: "Send",
        formSubject: "New submission - Peinture438",
        footerText: "All rights reserved.",
        successMsg: "✅ Message sent! I'll get back to you as soon as possible.",
        errorMsg: "❌ Something went wrong. Please try again or contact me directly.",
        sendingMsg: "Sending..."
    }
};

let currentLang = 'fr';
const langBtn = document.getElementById('lang-btn');

function applyTranslations() {
    const t = translations[currentLang];
    const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
    const setPlaceholder = (id, val) => { const el = document.getElementById(id); if(el) el.placeholder = val; };

    set('announce-text', t.announceText);
    set('announce-link', t.announceLink);
    set('nav-services', t.navServices);
    set('nav-portfolio', t.navPortfolio);
    set('nav-contact', t.navContact);
    set('hero-eyebrow', t.heroEyebrow);
    set('hero-title', t.heroTitle);
    set('hero-desc', t.heroDesc);
    set('hero-btn', t.heroBtn);
    set('hero-btn2', t.heroBtn2);
    set('services-label', t.servicesLabel);
    set('services-title', t.servicesTitle);
    set('service-card-title', t.serviceCardTitle);
    set('service-card-desc', t.serviceCardDesc);
    set('why-label', t.whyLabel);
    set('why-title', t.whyTitle);
    set('why-desc', t.whyDesc);
    set('why-1', t.why1);
    set('why-2', t.why2);
    set('why-3', t.why3);
    set('why-4', t.why4);
    set('why-5', t.why5);
    set('why-btn', t.whyBtn);
    set('portfolio-label', t.portfolioLabel);
    set('portfolio-title', t.portfolioTitle);
    set('portfolio-desc', t.portfolioDesc);
    set('portfolio-btn', t.portfolioBtn);
    set('contact-label', t.contactLabel);
    set('contact-title', t.contactTitle);
    set('contact-desc', t.contactDesc);
    set('form-btn', t.formBtn);
    set('footer-text', t.footerText);
    setPlaceholder('form-name', t.formName);
    setPlaceholder('form-email', t.formEmail);
    setPlaceholder('form-msg', t.formMsg);
    const subj = document.getElementById('form-subject');
    if(subj) subj.value = t.formSubject;
    document.querySelectorAll('[data-label="before"]').forEach(el => el.textContent = t.labelBefore);
    document.querySelectorAll('[data-label="after"]').forEach(el => el.textContent = t.labelAfter);
    langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslations();
});

// ── Hamburger ────────────────────────────────────────────
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

// ── Web3Forms ────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formBtn     = document.getElementById('form-btn');
const successMsg  = document.getElementById('form-success');
const errorMsg    = document.getElementById('form-error');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = translations[currentLang];
    formBtn.textContent = t.sendingMsg;
    formBtn.disabled = true;
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
        });
        const result = await response.json();
        if (result.success) {
            successMsg.textContent = t.successMsg;
            successMsg.style.display = 'block';
            contactForm.reset();
        } else { throw new Error(); }
    } catch {
        errorMsg.textContent = t.errorMsg;
        errorMsg.style.display = 'block';
    } finally {
        formBtn.textContent = translations[currentLang].formBtn;
        formBtn.disabled = false;
    }
});