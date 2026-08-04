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
            const itemName = text(item.name, language);
            
            const descriptionText = text(item.desc, language);
            const descHtml = descriptionText ? `<p class="item-desc">${descriptionText}</p>` : "";
            const imageHtml = item.image ? `<img src="${item.image}" alt="${itemName}" class="menu-item-image">` : "";

            // New Add to Cart Button
            const addToCartBtn = `<button class="add-to-cart-btn" onclick="addToCart('${itemName}', '${price}')" data-i18n="addToCart">${t("addToCart")}</button>`;

            return `
                <article class="menu-item-card">
                    <div class="menu-item-content">
                        <div>
                            <h3>${itemName}${badge}</h3>
                            ${descHtml}
                        </div>
                        <div class="menu-item-price">${price}</div>
                        ${addToCartBtn}
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

// ==========================================
// CART LOGIC
// ==========================================
let cart = [];

window.addToCart = function(name, priceStr) {
    let price = 0;
    if (priceStr && priceStr !== "-") {
        price = parseFloat(priceStr.replace(',', '.').replace(/[^\d.-]/g, ''));
    }
    
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    
    updateCartUI();
    // Notice: We removed the code that automatically opened the cart modal here!
};

window.updateCartUI = function() {
    const countElem = document.getElementById('cart-count');
    const itemsContainer = document.getElementById('cart-items');
    const totalElem = document.getElementById('cart-total-price');
    
    // New Bottom Bar Elements
    const bottomBar = document.getElementById('bottom-cart-bar');
    const bottomTotalElem = document.getElementById('cart-bar-total');
    
    if(!countElem || !itemsContainer || !totalElem || !bottomBar) return;

    // Calculate totals
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Floating Bar & Modal text
    countElem.innerText = totalItems;
    const formattedTotal = totalPrice.toFixed(2).replace('.', ',');
    totalElem.innerText = formattedTotal;
    if(bottomTotalElem) bottomTotalElem.innerText = formattedTotal;
    
    // Render Items in Sidebar
    itemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <span class="cart-item-title">${item.quantity}x ${item.name}</span>
                <span class="cart-item-price">${(item.price * item.quantity).toFixed(2).replace('.', ',')} €</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
        </div>
    `).join('');

    // Logic to show/hide the bottom bar based on cart state
    if (cart.length > 0) {
        bottomBar.classList.remove('hidden');
    } else {
        bottomBar.classList.add('hidden');
        
        // Optional: Close the modal if they remove the very last item while it is open
        const modal = document.getElementById('cart-modal');
        if (modal.classList.contains('open')) {
            toggleCart();
        }
    }
};

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};

window.toggleCart = function() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('open');
};

window.prepareCheckout = function() {
    if (cart.length === 0) {
        alert(t("emptyCart"));
        return;
    }
    
    console.log("SENDING TO SPRING BOOT: ", cart);
    alert("Checkout ready! Open the console (F12) to see your cart data.");
};

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