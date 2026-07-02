const MENU_GROUPS = [
    {
        category: "croque",
        type: "croque",
        eyebrow: { de: "Croques", en: "Croques" },
        title: { de: "Klassik", en: "Classic" },
        note: {
            de: "Mini 18cm: 8,00 € | Normal 26cm: 11,50 € | XL 36cm: 16,00 €",
            en: "Mini 18cm: €8.00 | Regular 26cm: €11.50 | XL 36cm: €16.00"
        },
        items: [
            { name: { de: "Croque Schinken", en: "Ham Croque" }, desc: { de: "Schinken, Tomate und Edamer", en: "Ham, tomato, and Edam cheese" }, prices: ["8,00 €", "11,50 €", "16,00 €"] },
            { name: { de: "Croque Salami", en: "Salami Croque" }, desc: { de: "Salami, Gewürzgurke und Edamer", en: "Salami, pickled cucumber, and Edam cheese" }, prices: ["8,00 €", "11,50 €", "16,00 €"] },
            { name: { de: "Croque Hawaii", en: "Hawaiian Croque" }, desc: { de: "Schinken, Ananas und Edamer", en: "Ham, pineapple, and Edam cheese" }, prices: ["8,00 €", "11,50 €", "16,00 €"] },
            { name: { de: "Croque Frikadelle", en: "Meatball Croque" }, desc: { de: "Frikadelle, Tomate, Ketchup und Edamer", en: "Meatball, tomato, ketchup, and Edam cheese" }, prices: ["8,00 €", "11,50 €", "16,00 €"] },
            { name: { de: "Croque Chorizo", en: "Chorizo Croque" }, desc: { de: "Spanische Paprika-Salami, Tomate und Edamer", en: "Spanish paprika salami, tomato, and Edam cheese" }, prices: ["8,00 €", "11,50 €", "16,00 €"] },
            { name: { de: "Croque Pute", en: "Turkey Croque" }, desc: { de: "Putenbrust, Tomate und Edamer", en: "Turkey breast, tomato, and Edam cheese" }, prices: ["8,00 €", "11,50 €", "16,00 €"] }
        ]
    },
    {
        category: "croque",
        type: "croque",
        eyebrow: { de: "Croques", en: "Croques" },
        title: { de: "Spezial", en: "Special" },
        note: {
            de: "Mini 18cm: 8,50 € | Normal 26cm: 12,00 € | XL 36cm: 17,00 €",
            en: "Mini 18cm: €8.50 | Regular 26cm: €12.00 | XL 36cm: €17.00"
        },
        items: [
            { name: { de: "Croque Pute Bacon", en: "Turkey Bacon Croque" }, desc: { de: "Putenbrust, Tomate, Bacon und Edamer", en: "Turkey breast, tomato, bacon, and Edam cheese" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Hähnchen Tomate", en: "Chicken Tomato Croque" }, desc: { de: "Hähnchenbrust, Tomate und Edamer", en: "Chicken breast, tomato, and Edam cheese" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Hähnchen Ananas", en: "Chicken Pineapple Croque" }, desc: { de: "Hähnchenbrust, Ananas und Edamer", en: "Chicken breast, pineapple, and Edam cheese" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Gyros", en: "Gyros Croque" }, desc: { de: "Gyros, Tomate und Edamer", en: "Gyros, tomato, and Edam cheese" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Thunfisch", en: "Tuna Croque" }, desc: { de: "Thunfisch, Tomate und Edamer", en: "Tuna, tomato, and Edam cheese" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Sucuk", en: "Sucuk Croque" }, desc: { de: "Rinder-Knoblauchwurst, Tomate und Edamer", en: "Beef garlic sausage, tomato, and Edam cheese" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Hot Dog", en: "Hot Dog Croque" }, desc: { de: "Wurst, dänische Gurken, Röstzwiebeln, Ketchup und Edamer", en: "Sausage, Danish pickles, fried onions, ketchup, and Edam cheese" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Schafskäse", en: "Feta Cheese Croque" }, desc: { de: "Schafskäse und Tomate", en: "Feta cheese and tomato" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Ziegenkäse", en: "Goat Cheese Croque" }, desc: { de: "Ziegenkäse und Tomate", en: "Goat cheese and tomato" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Mozzarella", en: "Mozzarella Croque" }, desc: { de: "Mozzarella und Tomate", en: "Mozzarella and tomato" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Camembert", en: "Camembert Croque" }, desc: { de: "Camembert und Preiselbeeren", en: "Camembert and cranberries" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Falafel", en: "Falafel Croque" }, isNew: false, desc: { de: "Falafel, Tomate, Ketchup, Edamer und Salat nach Wahl", en: "Falafel, tomato, ketchup, Edam cheese, and salad of your choice" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Avocado", en: "Avocado Croque" }, isNew: false, desc: { de: "Avocado, optional Hähnchen oder Tackofleisch, und Salat nach Wahl", en: "Avocado, optional chicken or taco meat, and salad of your choice" }, prices: ["8,50 €", "12,00 €", "17,00 €"] },
            { name: { de: "Croque Kräuter-Omelette", en: "Herb Omelette Croque" }, isNew: false, desc: { de: "Kräuter-Omelette mit Ei, Gewürzgurke und Tomate", en: "Herb omelette with egg, pickled cucumber, and tomato" }, prices: ["8,50 €", "12,00 €", "17,00 €"] }
        ]
    },
    {
        category: "croque",
        type: "croque",
        eyebrow: { de: "Croques", en: "Croques" },
        title: { de: "Premium", en: "Premium" },
        note: {
            de: "Mini 18cm: 9,00 € | Normal 26cm: 12,50 € | XL 36cm: 18,00 €",
            en: "Mini 18cm: €9.00 | Regular 26cm: €12.50 | XL 36cm: €18.00"
        },
        items: [
            { name: { de: "Croque Crispy Chicken", en: "Crispy Chicken Croque" }, desc: { de: "Crispy Chicken, Tomate, Jalapenos und Chesterkäse", en: "Crispy chicken, tomato, jalapeños, and Chester cheese" }, prices: ["9,00 €", "12,50 €", "18,00 €"] },
            { name: { de: "Croque Spicy Chicken", en: "Spicy Chicken Croque" }, desc: { de: "Spicy Chicken, Tomate, rote Zwiebeln und Edamer", en: "Spicy chicken, tomato, red onions, and Edam cheese" }, prices: ["9,00 €", "12,50 €", "18,00 €"] },
            { name: { de: "Croque Steak", en: "Steak Croque" }, isNew: false, desc: { de: "Rinder-Steak, Champignons, Jalapenos, BBQ-Sauce und Cheddar", en: "Beef steak, mushrooms, jalapeños, BBQ sauce, and cheddar" }, prices: ["9,00 €", "12,50 €", "18,00 €"] },
            { name: { de: "Croque Cheese Paradise", en: "Cheese Paradise Croque" }, isNew: false, desc: { de: "Mozzarella, Sulguni, Cheddar oder Edamer und Salat nach Wahl", en: "Mozzarella, sulguni, cheddar or Edam cheese, and salad of your choice" }, prices: ["9,00 €", "12,50 €", "18,00 €"] }
        ]
    },
    {
        category: "burger",
        type: "single",
        eyebrow: { de: "Burger", en: "Burgers" },
        title: { de: "Burger", en: "Burgers" },
        note: { de: "Klassische Burger, Smash Burger und Stack-Spezialitäten.", en: "Classic, smash, and signature burgers." },
        items: [
            { name: { de: "Hamburger", en: "Hamburger" }, desc: { de: "Klassischer Burger mit Rindfleisch-Patty, Salat, Tomaten, Zwiebeln und Sauce", en: "Classic burger with a beef patty, lettuce, tomatoes, onions, and sauce" }, prices: ["6,80 €"] },
            { name: { de: "Cheeseburger", en: "Cheeseburger" }, desc: { de: "Mit geschmolzenem Käse auf dem Patty", en: "With melted cheese on the patty" }, prices: ["7,50 €"] },
            { name: { de: "Chillicheeseburger", en: "Chili Cheeseburger" }, desc: { de: "Feurig, käsig und mit einem richtigen Kick für Schärfe-Fans", en: "Fiery, cheesy, and with a proper kick for spice lovers" }, prices: ["7,80 €"] },
            { name: { de: "Mushroom Burger", en: "Mushroom Burger" }, desc: { de: "Mit saftigen Champignons", en: "With juicy mushrooms" }, prices: ["7,80 €"] },
            { name: { de: "BBQ Burger", en: "BBQ Burger" }, desc: { de: "Mit Rindfleisch-Patty und rauchiger BBQ-Sauce", en: "With beef patty and smoky BBQ sauce" }, prices: ["8,50 €"] },
            { name: { de: "Veggie Burger", en: "Veggie Burger" }, desc: { de: "Vegetarischer Burger", en: "Vegetarian burger" }, prices: ["7,80 €"] },
            { name: { de: "Halloumi Burger", en: "Halloumi Burger" }, desc: { de: "Mit gegrilltem Halloumi-Käse", en: "With grilled halloumi cheese" }, prices: ["8,50 €"] },
            { name: { de: "Single Smash Burger", en: "Single Smash Burger" }, desc: { de: "Mit einem dünn gesmashten und scharf angebratenen Rindfleisch-Patty", en: "With a thin smashed, seared beef patty" }, prices: ["7,50 €"] },
            { name: { de: "Stackburger", en: "Stackburger" }, desc: { de: "Signature Burger nach Hausrezept", en: "Signature burger made to a house recipe" }, prices: ["8,20 €"] },
            { name: { de: "Super Stackburger", en: "Super Stackburger" }, desc: { de: "XXL-Version des Stackburgers", en: "XXL version of the Stackburger" }, prices: ["11,30 €"] },
            { name: { de: "Double Smash", en: "Double Smash" }, desc: { de: "Mit zwei dünn gesmashten Patties", en: "With two thin smashed patties" }, prices: ["10,90 €"] }
        ]
    },
    {
        category: "sides",
        type: "single",
        eyebrow: { de: "Beilagen", en: "Sides" },
        title: { de: "Beilagen", en: "Sides" },
        note: { de: "Perfekt zu deinem Burger oder Croque.", en: "Perfect next to your burger or croque." },
        items: [
            { name: { de: "Pommes", en: "Fries" }, desc: { de: "Klassische goldgelb frittierte Kartoffelstäbchen", en: "Classic golden-yellow fried potato sticks" }, prices: ["3,90 €"] },
            { name: { de: "Süßkartoffel-Pommes", en: "Sweet Potato Fries" }, desc: { de: "Frittierte Süßkartoffel-Pommes", en: "Fried sweet potato fries" }, prices: ["5,60 €"] },
            { name: { de: "Chilicheese Nuggets", en: "Chili Cheese Nuggets" }, desc: { de: "Frittierte Nuggets mit cremigem Käse und scharfen Jalapeños", en: "Fried nuggets filled with creamy cheese and spicy jalapeños" }, prices: ["4,90 €"] },
            { name: { de: "Onion Rings", en: "Onion Rings" }, isNew: false, desc: { de: "Panierte und frittierte Zwiebelringe", en: "Battered and fried onion rings" }, prices: ["4,50 €"] },
            { name: { de: "Cheese Fries", en: "Cheese Fries" }, isNew: false, desc: { de: "Pommes mit geschmolzenem Käse", en: "Fries with melted cheese" }, prices: ["5,20 €"] },
            { name: { de: "Truffle Cheese Fries", en: "Truffle Cheese Fries" }, isNew: false, desc: { de: "Premium-Pommes mit geschmolzenem Käse und feinem Trüffelöl", en: "Premium fries with melted cheese and fine truffle oil" }, prices: ["6,50 €"] }
        ]
    }
];

function currentLanguage() {
    return typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "de";
}

function text(value, language = currentLanguage()) {
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
            return `
                <article class="menu-row">
                    <div>
                        <h3>${text(item.name, language)}${badge}</h3>
                        <p>${text(item.desc, language)}</p>
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
