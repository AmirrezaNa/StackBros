const LANGUAGE_KEY = "stackbrosLanguage";
const DEFAULT_LANGUAGE = "de";

const TRANSLATIONS = {
    de: {
        navHome: "Startseite",
        navMenu: "Speisekarte",
        navContact: "Kontakt",

        homeHeroTitle: "Willkommen bei STACK BROS!",
        homeHeroText: "Frische Croques, Burger und Beilagen in Hamburg.",
        viewMenu: "Speisekarte ansehen",
        historyTitle: "Unsere Geschichte",
        historyText1: "STACK BROS empfängt seit Jahren Gäste mit authentischem Essen, herzlicher Gastfreundschaft und einer gemütlichen Atmosphäre.",
        historyText2: "Heute verbinden wir frische Zutaten, beliebte Klassiker und freundlichen Service zu einem besonderen Erlebnis für jeden Gast.",
        footballTitle: "Fußball live sehen",
        footballText1: "Bei STACK BROS erleben Sie Fußball in besonderer Atmosphäre. Sehen Sie wichtige Spiele live auf unseren großen Bildschirmen und genießen Sie dazu leckeres Essen und erfrischende Getränke.",
        footballText2: "Kommen Sie vorbei, fiebern Sie mit Ihrem Lieblingsteam mit und genießen Sie die Saison mit uns!",
        matchSchedule: "Spielplan ansehen",
        jobs: "Jobs",
        gallery: "Galerie",
        phoneNumber: "Telefonnummer:",
        address: "Adresse:",
        openingHours: "Öffnungszeiten:",
        weekdays: "Montag - Freitag:",
        weekend: "Samstag - Sonntag:",
        rights: "© 2026 STACK BROS. Alle Rechte vorbehalten.",

        menuHeroTitle: "Unsere Speisekarte",
        menuHeroText: "Croques, Burger und Beilagen frisch für dich gemacht.",
        all: "Alle",
        croques: "Croques",
        burgers: "Burger",
        sides: "Beilagen",
        fullName: "Vollständiger Name",

        contactTitle: "Kontakt",
        contactHeroTitle: "Kontaktieren Sie uns",
        contactHeroText: "Wir freuen uns auf Ihre Nachricht oder Ihren Besuch.",
        yourEmail: "Ihre E-Mail",
        subject: "Betreff",
        yourMessage: "Ihre Nachricht",
        sendMessage: "Nachricht senden",
        followUs: "Folgen Sie uns",
        created: "Erstellt:",


    },
    en: {
        navHome: "Home",
        navMenu: "Menu",
        navContact: "Contact Us",

        homeHeroTitle: "Welcome to STACK BROS!",
        homeHeroText: "Fresh croques, burgers, and sides in Hamburg.",
        viewMenu: "View Menu",
        historyTitle: "Our History",
        historyText1: "STACK BROS has welcomed guests for years with authentic food, warm hospitality, and a cozy atmosphere.",
        historyText2: "Today, we combine fresh ingredients, favorite classics, and friendly service to create a special experience for every guest.",
        footballTitle: "Watch Football Live",
        footballText1: "At STACK BROS, you can enjoy football in a great atmosphere. Watch important matches live on our big screens while enjoying delicious food and refreshing drinks.",
        footballText2: "Join us, cheer for your favorite team, and enjoy the season with us!",
        matchSchedule: "View Match Schedule",
        jobs: "Job Opportunities",
        gallery: "Gallery",
        phoneNumber: "Phone Number:",
        address: "Address:",
        openingHours: "Opening Hours:",
        weekdays: "Monday - Friday:",
        weekend: "Saturday - Sunday:",
        rights: "© 2026 STACK BROS. All Rights Reserved.",

        menuHeroTitle: "Our Menu",
        menuHeroText: "Croques, burgers, and sides made fresh for you.",
        all: "All",
        croques: "Croques",
        burgers: "Burgers",
        sides: "Sides",
        fullName: "Full Name",

        contactTitle: "Contact",
        contactHeroTitle: "Contact Us",
        contactHeroText: "We look forward to your message or visit.",
        yourEmail: "Your Email",
        subject: "Subject",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        followUs: "Follow Us",
        created: "Created:",


    }
};

function getCurrentLanguage() {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return saved === "en" || saved === "de" ? saved : DEFAULT_LANGUAGE;
}

function setCurrentLanguage(language) {
    localStorage.setItem(LANGUAGE_KEY, language);
    applyTranslations();
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { language } }));
}

function t(key) {
    const language = getCurrentLanguage();
    return TRANSLATIONS[language][key] || TRANSLATIONS.en[key] || key;
}

function applyTranslations() {
    const language = getCurrentLanguage();
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-title]").forEach(element => {
        element.setAttribute("title", t(element.dataset.i18nTitle));
    });

    document.querySelectorAll("[data-i18n-value]").forEach(element => {
        element.setAttribute("value", t(element.dataset.i18nValue));
    });

    const titleKey = document.body ? document.body.dataset.pageTitle : null;
    if (titleKey) {
        document.title = `STACK BROS! - ${t(titleKey)}`;
    }

    document.querySelectorAll(".language-option").forEach(option => {
        option.classList.toggle("active", option.dataset.lang === language);
    });
}

function createLanguageSwitcher() {
    const wrapper = document.querySelector(".language-switcher");

    if (!wrapper) {
        return;
    }

    wrapper.innerHTML = `
        <span class="language-option" data-lang="de">DE</span>
        <span class="language-divider">|</span>
        <span class="language-option" data-lang="en">EN</span>
    `;

    wrapper.querySelectorAll(".language-option").forEach(option => {
        option.addEventListener("click", () => {
            setCurrentLanguage(option.dataset.lang);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createLanguageSwitcher();
    applyTranslations();
});

window.t = t;
window.applyTranslations = applyTranslations;
window.getCurrentLanguage = getCurrentLanguage;
