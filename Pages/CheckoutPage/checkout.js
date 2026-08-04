const TRANSLATIONS = {
    de: {
        backLink: "&larr; Zurück zur Speisekarte",
        deliveryDetails: "Lieferdetails",
        fullName: "Vollständiger Name *",
        phoneNumber: "Telefonnummer *",
        deliveryAddress: "Lieferadresse *",
        placeholderName: "Max Mustermann",
        placeholderPhone: "+49 151 12345678",
        placeholderAddress: "Straße & Hausnummer, PLZ, Ort",
        placeOrder: "Kostenpflichtig bestellen",
        processing: "Bestellung wird verarbeitet...",
        orderSummary: "Bestellübersicht",
        totalAmount: "Gesamtsumme",
        thankYou: "Vielen Dank für Ihre Bestellung!",
        orderNumberMsg: "Ihre Bestellnummer lautet",
        preparingMsg: "Wir haben Ihre Bestellung erhalten und bereiten sie vor.",
        backToMenuBtn: "Zurück zur Speisekarte",
        noCartAlert: "Kein Warenkorb gefunden. Weiterleitung zur Speisekarte...",
        emptyCartAlert: "Ihr Warenkorb ist leer. Weiterleitung zur Speisekarte...",
        orderFailed: "Bestellung konnte nicht aufgegeben werden: "
    },
    en: {
        backLink: "&larr; Back to Menu",
        deliveryDetails: "Delivery Details",
        fullName: "Full Name *",
        phoneNumber: "Phone Number *",
        deliveryAddress: "Delivery Address *",
        placeholderName: "John Doe",
        placeholderPhone: "+49 151 12345678",
        placeholderAddress: "Street Name & No., Postal Code, City",
        placeOrder: "Place Order",
        processing: "Processing Order...",
        orderSummary: "Order Summary",
        totalAmount: "Total Amount",
        thankYou: "Thank You For Your Order!",
        orderNumberMsg: "Your order number is",
        preparingMsg: "We have received your order and are preparing it now.",
        backToMenuBtn: "Back to Menu",
        noCartAlert: "No cart found. Redirecting to menu...",
        emptyCartAlert: "Your cart is empty. Redirecting to menu...",
        orderFailed: "Could not place order: "
    }
};

let currentLang = "de";
let cartData = [];

function getTranslation(key) {
    return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS["de"][key] || key;
}

function applyLanguage() {
    currentLang = localStorage.getItem("stackbros_lang") || "de";
    document.documentElement.lang = currentLang;

    // Static text via data-i18n
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (TRANSLATIONS[currentLang]?.[key]) {
            elem.innerText = TRANSLATIONS[currentLang][key];
        }
    });

    // Special elements & Placeholders
    document.getElementById("back-link").innerHTML = getTranslation("backLink");
    document.getElementById("customerName").placeholder = getTranslation("placeholderName");
    document.getElementById("customerPhoneNumber").placeholder = getTranslation("placeholderPhone");
    document.getElementById("customerAddress").placeholder = getTranslation("placeholderAddress");
}

function loadCartAndRender() {
    applyLanguage();

    const rawCart = localStorage.getItem("stackbros_cart");
    if (!rawCart) {
        alert(getTranslation("noCartAlert"));
        window.location.href = "../MenuPage/Menu.html";
        return;
    }

    cartData = JSON.parse(rawCart);
    if (!Array.isArray(cartData) || cartData.length === 0) {
        alert(getTranslation("emptyCartAlert"));
        window.location.href = "../MenuPage/Menu.html";
        return;
    }

    const itemsContainer = document.getElementById("summary-items-list");
    const totalPriceElement = document.getElementById("summary-total-price");

    let total = 0;
    itemsContainer.innerHTML = cartData.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="summary-item">
                <div class="item-details">
                    <span class="item-qty">${item.quantity}x</span>
                    <span>${item.name}</span>
                </div>
                <span>${itemTotal.toFixed(2).replace('.', ',')} €</span>
            </div>
        `;
    }).join("");

    totalPriceElement.innerText = total.toFixed(2).replace('.', ',') + " €";
}

document.getElementById("checkout-form").addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById("submit-btn");
    const errorBanner = document.getElementById("error-banner");
    
    errorBanner.style.display = "none";
    submitBtn.disabled = true;
    submitBtn.innerText = getTranslation("processing");

    const customerName = document.getElementById("customerName").value.trim();
    const customerPhoneNumber = document.getElementById("customerPhoneNumber").value.trim();
    const customerAddress = document.getElementById("customerAddress").value.trim();

    const totalPrice = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const orderPayload = {
        customerName: customerName,
        customerPhoneNumber: customerPhoneNumber,
        customerAddress: customerAddress,
        totalPrice: totalPrice,
        items: cartData
    };

    try {
        const response = await fetch("http://localhost:8080/api/orders/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderPayload)
        });

        const result = await response.json();

        if (response.ok && result.success) {
            localStorage.removeItem("stackbros_cart");
            
            document.querySelector(".checkout-layout").innerHTML = `
                <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
                    <h2 style="border: none; color: orange; font-size: 1.8rem;">${getTranslation("thankYou")}</h2>
                    <p style="margin: 15px 0; font-size: 1.1rem; color: #fff;">
                        ${getTranslation("orderNumberMsg")} <strong style="color: orange;">#${result.orderId}</strong>
                    </p>
                    <p style="color: #aaa;">${getTranslation("preparingMsg")}</p>
                    <a href="../MenuPage/Menu.html" class="btn-submit" style="display: inline-block; width: auto; padding: 12px 30px; text-decoration: none; margin-top: 25px;">
                        ${getTranslation("backToMenuBtn")}
                    </a>
                </div>
            `;
        } else {
            throw new Error(result.error || "Server error");
        }
    } catch (err) {
        console.error("Checkout Error:", err);
        errorBanner.innerText = getTranslation("orderFailed") + err.message;
        errorBanner.style.display = "block";
        submitBtn.disabled = false;
        submitBtn.innerText = getTranslation("placeOrder");
    }
});

document.addEventListener("DOMContentLoaded", loadCartAndRender);