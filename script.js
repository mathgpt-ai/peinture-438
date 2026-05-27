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
        footerText: "Tous droits réservés."
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
        footerText: "All rights reserved."
    }
};

// Variable pour suivre la langue actuelle (par défaut: français)
let currentLang = 'fr';

const langBtn = document.getElementById('lang-btn');

langBtn.addEventListener('click', () => {
    // Basculer la langue
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    
    // Mettre à jour le texte du bouton (il affiche la langue opposée disponible)
    langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    
    // Appliquer les traductions à chaque élément
    document.getElementById('nav-services').textContent = translations[currentLang].navServices;
    document.getElementById('nav-portfolio').textContent = translations[currentLang].navPortfolio;
    document.getElementById('nav-contact').textContent = translations[currentLang].navContact;
    
    document.getElementById('hero-title').textContent = translations[currentLang].heroTitle;
    document.getElementById('hero-desc').textContent = translations[currentLang].heroDesc;
    document.getElementById('hero-btn').textContent = translations[currentLang].heroBtn;
    
    document.getElementById('services-title').textContent = translations[currentLang].servicesTitle;
    document.getElementById('service-card-title').textContent = translations[currentLang].serviceCardTitle;
    document.getElementById('service-card-desc').textContent = translations[currentLang].serviceCardDesc;
    
    document.getElementById('portfolio-title').textContent = translations[currentLang].portfolioTitle;
    document.getElementById('portfolio-desc').textContent = translations[currentLang].portfolioDesc;
    
    // Traduire les étiquettes Avant / Après dans la galerie
    document.querySelectorAll('.label-before').forEach(el => el.textContent = translations[currentLang].labelBefore);
    document.querySelectorAll('.label-after').forEach(el => el.textContent = translations[currentLang].labelAfter);
    
    document.getElementById('contact-title').textContent = translations[currentLang].contactTitle;
    document.getElementById('contact-desc').textContent = translations[currentLang].contactDesc;
    
    // Traduire les placeholders du formulaire
    document.getElementById('form-name').placeholder = translations[currentLang].formName;
    document.getElementById('form-email').placeholder = translations[currentLang].formEmail;
    document.getElementById('form-msg').placeholder = translations[currentLang].formMsg;
    document.getElementById('form-btn').textContent = translations[currentLang].formBtn;
    
    document.getElementById('footer-text').textContent = translations[currentLang].footerText;
});