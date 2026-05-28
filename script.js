// Dictionnaire contenant les textes en Français et en Anglais
const translations = {
    fr: {
        navServices: "Services",
        navPortfolio: "Réalisations",
        navContact: "Contact",
        heroTitle: "Des murs parfaits, un service impeccable.",
        heroDesc: "Votre peintre de confiance pour tous vos projets résidentiels.",
        heroBtn: "Obtenir une soumission",
        servicesTitle: "Mon Service",
        serviceCardTitle: "Peinture Résidentielle",
        serviceCardDesc: "Intérieur et extérieur, préparation minutieuse des surfaces et finition haut de gamme. Un travail propre, soigné et durable, réalisé directement par le propriétaire.",
        portfolioTitle: "Notre Travail : Avant / Après",
        portfolioDesc: "Voyez la transformation Peinture438 de vos propres yeux.",
        labelBefore: "Avant",
        labelAfter: "Après",
        contactTitle: "Contactez-moi",
        contactDesc: "Prêt à transformer votre espace ? Demandez une estimation gratuite dès maintenant.",
        formName: "Votre Nom",
        formEmail: "Votre Courriel",
        formMsg: "Parlez-nous de votre projet (pièces, dimensions, etc.)...",
        formBtn: "Envoyer",
        formSubject: "Nouvelle soumission - Peinture438",
        footerText: "Tous droits réservés.",
        portfolioBtn: "Voir toutes nos réalisations →",
        successMsg: "✅ Message envoyé ! Je vous répondrai dans les plus brefs délais.",
        errorMsg: "❌ Une erreur s'est produite. Veuillez réessayer ou me contacter directement.",
        sendingMsg: "Envoi en cours..."
    },
    en: {
        navServices: "Services",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        heroTitle: "Perfect walls, impeccable service.",
        heroDesc: "Your trusted painter for all your residential projects.",
        heroBtn: "Get a Free Quote",
        servicesTitle: "My Service",
        serviceCardTitle: "Residential Painting",
        serviceCardDesc: "Interior and exterior, meticulous surface preparation, and high-end finishes. Clean, detailed, and durable work, completed directly by the owner.",
        portfolioTitle: "Our Work: Before / After",
        portfolioDesc: "See the Peinture438 transformation with your own eyes.",
        labelBefore: "Before",
        labelAfter: "After",
        contactTitle: "Contact Me",
        contactDesc: "Ready to transform your space? Request a free estimate now.",
        formName: "Your Name",
        formEmail: "Your Email",
        formMsg: "Tell us about your project (rooms, dimensions, etc.)...",
        formBtn: "Send",
        formSubject: "New submission - Peinture438",
        portfolioBtn: "See all our work →",
        footerText: "All rights reserved.",
        successMsg: "✅ Message sent! I'll get back to you as soon as possible.",
        errorMsg: "❌ Something went wrong. Please try again or contact me directly.",
        sendingMsg: "Sending..."
    }
};

// Variable pour suivre la langue actuelle (par défaut: français)
let currentLang = 'fr';

const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    applyTranslations();
});

function applyTranslations() {
    const t = translations[currentLang];

    document.getElementById('nav-services').textContent = t.navServices;
    document.getElementById('nav-portfolio').textContent = t.navPortfolio;
    document.getElementById('nav-contact').textContent = t.navContact;

    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-desc').textContent = t.heroDesc;
    document.getElementById('hero-btn').textContent = t.heroBtn;

    document.getElementById('services-title').textContent = t.servicesTitle;
    document.getElementById('service-card-title').textContent = t.serviceCardTitle;
    document.getElementById('service-card-desc').textContent = t.serviceCardDesc;

    document.getElementById('portfolio-title').textContent = t.portfolioTitle;
    document.getElementById('portfolio-desc').textContent = t.portfolioDesc;

    document.querySelectorAll('.label-before').forEach(el => el.textContent = t.labelBefore);
    document.querySelectorAll('.label-after').forEach(el => el.textContent = t.labelAfter);

    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('contact-desc').textContent = t.contactDesc;

    document.getElementById('form-name').placeholder = t.formName;
    document.getElementById('form-email').placeholder = t.formEmail;
    document.getElementById('form-msg').placeholder = t.formMsg;
    document.getElementById('form-btn').textContent = t.formBtn;
    document.getElementById('form-subject').value = t.formSubject;

    document.getElementById('footer-text').textContent = t.footerText;
    const portfolioBtn = document.getElementById('portfolio-btn');
    if (portfolioBtn) portfolioBtn.textContent = t.portfolioBtn;
}

// ── Web3Forms Submission ──────────────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formBtn     = document.getElementById('form-btn');
const successMsg  = document.getElementById('form-success');
const errorMsg    = document.getElementById('form-error');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const t = translations[currentLang];

    // Update button state
    formBtn.textContent = t.sendingMsg;
    formBtn.disabled = true;
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    const formData = new FormData(contactForm);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });

        const result = await response.json();

        if (result.success) {
            successMsg.textContent = t.successMsg;
            successMsg.style.display = 'block';
            contactForm.reset();
        } else {
            throw new Error(result.message || 'Submission failed');
        }
    } catch (err) {
        console.error('Form error:', err);
        errorMsg.textContent = t.errorMsg;
        errorMsg.style.display = 'block';
    } finally {
        formBtn.textContent = translations[currentLang].formBtn;
        formBtn.disabled = false;
    }
});

// ── Hamburger Menu ────────────────────────────────────────────────────────────
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav      = document.getElementById('main-nav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    mainNav.classList.toggle('open');
});

// Close menu when a nav link is tapped (smooth UX on mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('open');
        mainNav.classList.remove('open');
    });
});