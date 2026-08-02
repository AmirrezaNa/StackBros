const MENU_GROUPS = [
    {
        category: "burger",
        type: "single",
        eyebrow: { de: "Burger", en: "Burgers" },
        title: { de: "Burger", en: "Burgers" },
        note: { de: "Hausgemachte Burger frisch zubereitet.", en: "Homemade burgers freshly prepared." },
        items: [
            { name: { de: "Stack Bros Spezial", en: "Stack Bros Special" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/burger.JPG" },
            { name: { de: "Cheeseburger", en: "Cheeseburger" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/burger.JPG" },
            { name: { de: "Mushroom Burger", en: "Mushroom Burger" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/burger.JPG" },
            { name: { de: "Bacon Burger", en: "Bacon Burger" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/burger.JPG" },
            { name: { de: "Chicken Burger", en: "Chicken Burger" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/burger.JPG" }
        ]
    },
    {
        category: "salat",
        type: "single",
        eyebrow: { de: "Salat", en: "Salads" },
        title: { de: "Salate", en: "Salads" },
        note: { de: "Frische und knackige Salate.", en: "Fresh and crisp salads." },
        items: [
            { name: { de: "Caesar Salat mit Hähnchen", en: "Caesar Salad with Chicken" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/CaesarSalat.JPG" },
            { name: { de: "Thunfisch Salat", en: "Tuna Salad" }, desc: { de: "", en: "" }, prices: ["-"], image: "path/to/your/image.jpg" },
            { name: { de: "Ziegenkäse Salat", en: "Goat Cheese Salad" }, desc: { de: "", en: "" }, prices: ["-"], image: "path/to/your/image.jpg" },
            { name: { de: "Schafskäse Salat", en: "Feta Cheese Salad" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Schafskäse.JPG" },
            { name: { de: "Chef Salat", en: "Chef Salad" }, desc: { de: "", en: "" }, prices: ["-"], image: "path/to/your/image.jpg" }
        ]
    },
    {
        category: "croque",
        type: "single",
        eyebrow: { de: "Croque", en: "Croques" },
        title: { de: "Croques", en: "Croques" },
        note: { 
            de: "Mittagsangebot: Jeder Croque + Getränk nur 10,99 €", 
            en: "Lunch Offer: Any Croque + Drink for only €10.99" 
        },
        items: [
            { name: { de: "Hawaii", en: "Hawaiian" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Hawaii.JPG" },
            { name: { de: "Schinken Tomaten", en: "Ham & Tomato" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Schinken.JPG" },
            { name: { de: "Pute Tomaten", en: "Turkey & Tomato" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/PuteTomaten.JPG" },
            { name: { de: "Pute Ananas", en: "Turkey & Pineapple" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/PuteAnanas.JPG" },
            { name: { de: "Pute Bacon", en: "Turkey Bacon" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/PuteBacon.JPG" },
            { name: { de: "Salami", en: "Salami" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Salami.JPG" },
            { name: { de: "Thunfisch", en: "Tuna" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Thunfisch.JPG" },
            { name: { de: "Crispy Chicken", en: "Crispy Chicken" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/CrispyChicken.JPG" },
            { name: { de: "Schafskäse", en: "Feta Cheese" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Schafskäse.JPG" },
            { name: { de: "Ziegenkäse", en: "Goat Cheese" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Ziegenkäse.JPG" },
            { name: { de: "Mozzarella", en: "Mozzarella" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Mozzarella.JPG" },
            { name: { de: "Camembert", en: "Camembert" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Camembert.JPG" },
            { name: { de: "Frikadelle", en: "Meatball" }, desc: { de: "", en: "" }, prices: ["-"], image: "../../images/Frikadelle.JPG" }
        ]
    },
    {
        category: "crepe",
        type: "single",
        eyebrow: { de: "Crêpe", en: "Crêpes" },
        title: { de: "Crêpes", en: "Crêpes" },
        note: { de: "Süße Crêpes zum Genießen.", en: "Sweet crêpes to enjoy." },
        items: [
            { name: { de: "Nutella", en: "Nutella" }, desc: { de: "", en: "" }, prices: ["-"], image: "path/to/your/image.jpg" },
            { name: { de: "Nutella-Banane", en: "Nutella & Banana" }, desc: { de: "", en: "" }, prices: ["-"], image: "path/to/your/image.jpg" },
            { name: { de: "Apfelmus", en: "Applesauce" }, desc: { de: "", en: "" }, prices: ["-"], image: "path/to/your/image.jpg" },
            { name: { de: "Zimt-Zucker", en: "Cinnamon & Sugar" }, desc: { de: "", en: "" }, prices: ["-"], image: "path/to/your/image.jpg" }
        ]
    }
];

function currentLanguage() {
    return typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "de";
}

function text(value, language = currentLanguage()) {
    if (!value) return "";
    return value[language] || value.en || value.de || "";
}

function renderMenu() {
    const container = document.getElementById("menu-list");
    if (!container) return;

    const language = currentLanguage();
    const newLabel = language === "en" ? "NEW" : "NEU";

    container.innerHTML = MENU_GROUPS.map(group => {
        const rows = group.items.map(item => {
            const badge = item.isNew ? ` <span class="badge">${newLabel}</span>` : "";
            const price = item.prices[0]; // Fetching the single price
            
            const descriptionText = text(item.desc, language);
            const descHtml = descriptionText ? `<p class="item-desc">${descriptionText}</p>` : "";
            
            const imageHtml = item.image ? `<img src="${item.image}" alt="${text(item.name, language)}" class="menu-item-image">` : "";

            return `
                <article class="menu-item-card">
                    <div class="menu-item-content">
                        <div>
                            <h3>${text(item.name, language)}${badge}</h3>
                            ${descHtml}
                        </div>
                        <div class="menu-item-price">${price}</div>
                    </div>
                    ${imageHtml}
                </article>
            `;
        }).join("");

        return `
            <section id="category-${group.category}" class="menu-group" data-category="${group.category}">
                <div class="menu-group-heading">
                    <p class="eyebrow">${text(group.eyebrow, language)}</p>
                    <h2>${text(group.title, language)}</h2>
                    <p>${text(group.note, language)}</p>
                </div>
                <div class="menu-items-grid">
                    ${rows}
                </div>
            </section>
        `;
    }).join("");
}

function setupCategoryScroll() {
    const buttons = document.querySelectorAll(".category-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            const categoryFilter = button.dataset.filter;
            
            if (categoryFilter === "all") {
                document.querySelector(".menu-categories").scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                const targetSection = document.getElementById(`category-${categoryFilter}`);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    setupCategoryScroll();
});

window.addEventListener("languageChanged", renderMenu);