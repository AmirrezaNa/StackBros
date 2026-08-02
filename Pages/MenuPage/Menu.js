const MENU_GROUPS = [
    {
        category: "burger",
        type: "single",
        eyebrow: { de: "Burger", en: "Burgers" },
        title: { de: "Burger", en: "Burgers" },
        note: { de: "Hausgemachte Burger frisch zubereitet.", en: "Homemade burgers freshly prepared." },
        items: [
            { name: { de: "Stack Bros Spezial", en: "Stack Bros Special" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Cheeseburger", en: "Cheeseburger" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Mushroom Burger", en: "Mushroom Burger" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Bacon Burger", en: "Bacon Burger" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Chicken Burger", en: "Chicken Burger" }, desc: { de: "", en: "" }, prices: ["-"] }
        ]
    },
    {
        category: "salat",
        type: "single",
        eyebrow: { de: "Salat", en: "Salads" },
        title: { de: "Salate", en: "Salads" },
        note: { de: "Frische und knackige Salate.", en: "Fresh and crisp salads." },
        items: [
            { name: { de: "Caesar Salat mit Hähnchen", en: "Caesar Salad with Chicken" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Thunfisch Salat", en: "Tuna Salad" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Ziegenkäse Salat", en: "Goat Cheese Salad" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Schafskäse Salat", en: "Feta Cheese Salad" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Chef Salat", en: "Chef Salad" }, desc: { de: "", en: "" }, prices: ["-"] }
        ]
    },
    {
        category: "croque",
        type: "croque",
        eyebrow: { de: "Croque", en: "Croques" },
        title: { de: "Croques", en: "Croques" },
        note: { 
            de: "Mittagsangebot: Jeder Croque + Getränk nur 10,99 €", 
            en: "Lunch Offer: Any Croque + Drink for only €10.99" 
        },
        items: [
            { name: { de: "Hawaii", en: "Hawaiian" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Schinken Tomaten", en: "Ham & Tomato" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Pute Tomaten", en: "Turkey & Tomato" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Pute Ananas", en: "Turkey & Pineapple" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Pute Bacon", en: "Turkey Bacon" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Salami", en: "Salami" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Thunfisch", en: "Tuna" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Crispy Chicken", en: "Crispy Chicken" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Schafskäse", en: "Feta Cheese" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Ziegenkäse", en: "Goat Cheese" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Mozzarella", en: "Mozzarella" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Camembert", en: "Camembert" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] },
            { name: { de: "Frikadelle", en: "Meatball" }, desc: { de: "", en: "" }, prices: ["-", "-", "-"] }
        ]
    },
    {
        category: "crepe",
        type: "single",
        eyebrow: { de: "Crêpe", en: "Crêpes" },
        title: { de: "Crêpes", en: "Crêpes" },
        note: { de: "Süße Crêpes zum Genießen.", en: "Sweet crêpes to enjoy." },
        items: [
            { name: { de: "Nutella", en: "Nutella" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Nutella-Banane", en: "Nutella & Banana" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Apfelmus", en: "Applesauce" }, desc: { de: "", en: "" }, prices: ["-"] },
            { name: { de: "Zimt-Zucker", en: "Cinnamon & Sugar" }, desc: { de: "", en: "" }, prices: ["-"] }
        ]
    }
];

function currentLanguage() {
    return typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "de";
}

function text(value, language = currentLanguage()) {
    // Added a safeguard in case a description or note is missing
    if (!value) return "";
    return value[language] || value.en || value.de || "";
}

function priceLabel(index, type, language = currentLanguage()) {
    if (type === "croque") {
        return [language === "en" ? "Mini" : "Mini", language === "en" ? "Regular" : "Normal", "XL"][index];
    }
    return language === "en" ? "Price" : "Preis";
}

function renderMenu() {
    const container = document.getElementById("menu-list");
    if (!container) return;

    const language = currentLanguage();
    const newLabel = language === "en" ? "NEW" : "NEU";

    container.innerHTML = MENU_GROUPS.map(group => {
        const isCroque = group.type === "croque";
        const tableClass = isCroque ? "croque-table" : "single-price-table";
        const headers = isCroque
            ? ["Croque", "Mini", language === "en" ? "Regular" : "Normal", "XL"]
            : [text(group.title, language), language === "en" ? "Price" : "Preis"];

        const rows = group.items.map(item => {
            const badge = item.isNew ? ` <span class="badge">${newLabel}</span>` : "";
            const prices = item.prices.map((price, index) => `<span data-label="${priceLabel(index, group.type, language)}">${price}</span>`).join("");
            
            // Generate description HTML only if a description exists
            const descriptionText = text(item.desc, language);
            const descHtml = descriptionText ? `<p>${descriptionText}</p>` : "";

            return `
                <article class="menu-row">
                    <div>
                        <h3>${text(item.name, language)}${badge}</h3>
                        ${descHtml}
                    </div>
                    ${prices}
                </article>
            `;
        }).join("");

        return `
            <section class="menu-group" data-category="${group.category}">
                <div class="menu-group-heading">
                    <p class="eyebrow">${text(group.eyebrow, language)}</p>
                    <h2>${text(group.title, language)}</h2>
                    <p>${text(group.note, language)}</p>
                </div>

                <div class="menu-table ${tableClass}">
                    <div class="menu-table-head">${headers.map(header => `<span>${header}</span>`).join("")}</div>
                    ${rows}
                </div>
            </section>
        `;
    }).join("");

    applyActiveFilter();
}

function applyActiveFilter() {
    const activeButton = document.querySelector(".category-btn.active");
    const filter = activeButton ? activeButton.dataset.filter : "all";
    document.querySelectorAll(".menu-group").forEach(group => {
        const shouldShow = filter === "all" || group.dataset.category === filter;
        group.classList.toggle("hidden", !shouldShow);
    });
}

function setupCategoryFilter() {
    const buttons = document.querySelectorAll(".category-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            applyActiveFilter();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    setupCategoryFilter();
});

window.addEventListener("languageChanged", renderMenu);