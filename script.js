
// ==============================
// FOOD MENU DATA
// ==============================

const foodItems = [

    {
        id: 1,
        name: "Classic Beef Burger",
        category: "Burger",
        price: 249,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        description: "Juicy grilled burger with fresh lettuce and cheese."
    },

    {
        id: 2,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 299,
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600",
        description: "Classic Italian pizza with mozzarella and basil."
    },

    {
        id: 3,
        name: "Creamy Alfredo Pasta",
        category: "Pasta",
        price: 279,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600",
        description: "Creamy white sauce pasta with herbs and parmesan."
    },

    {
        id: 4,
        name: "Chocolate Brownie",
        category: "Dessert",
        price: 149,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
        description: "Rich chocolate brownie with a soft fudgy centre."
    },

    {
        id: 5,
        name: "Double Cheese Burger",
        category: "Burger",
        price: 329,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=600",
        description: "Double patties loaded with delicious melted cheese."
    },

    {
        id: 6,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 399,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
        description: "Crispy pizza loaded with cheese and pepperoni."
    },

    {
        id: 7,
        name: "Strawberry Cake",
        category: "Dessert",
        price: 199,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600",
        description: "Soft and creamy strawberry cake with fresh fruit."
    },

    {
        id: 8,
        name: "Fresh Orange Juice",
        category: "Drinks",
        price: 99,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600",
        description: "Freshly squeezed orange juice, full of goodness."
    },

    {
        id: 9,
        name: "Cold Coffee",
        category: "Drinks",
        price: 129,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
        description: "Chilled creamy coffee for your perfect refreshment."
    }

];


// ==============================
// RENDER FOOD ITEMS
// ==============================

const foodGrid = document.getElementById("foodGrid");

let cart = [];


function displayFoodItems(category = "All") {

    foodGrid.innerHTML = "";

    const filteredItems = category === "All"
        ? foodItems
        : foodItems.filter(item => item.category === category);

    filteredItems.forEach(item => {

        const foodCard = document.createElement("div");

        foodCard.className = "food-card";

        foodCard.innerHTML = `
            <img src="${item.image}"
                 alt="${item.name}"
                 loading="lazy">

            <div class="food-info">

                <span class="food-category">
                    ${item.category}
                </span>

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <div class="food-bottom">

                    <span class="food-price">
                        ₹${item.price}
                    </span>

                    <button
                        class="add-cart"
                        data-id="${item.id}"
                        aria-label="Add ${item.name} to cart">
                        +
                    </button>

                </div>

            </div>
        `;

        foodGrid.appendChild(foodCard);

    });

}


// ==============================
// FILTER FOOD ITEMS
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.filter;

        displayFoodItems(category);

    });

});


// ==============================
// CATEGORY SHORTCUTS
// ==============================

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        filterButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.filter === category
            );

        });

        displayFoodItems(category);

    });

});


// ==============================
// ADD TO CART
// ==============================

foodGrid.addEventListener("click", (event) => {

    const button = event.target.closest(".add-cart");

    if (!button) return;

    const itemId = Number(button.dataset.id);

    const selectedItem = foodItems.find(
        item => item.id === itemId
    );

    if (selectedItem) {

        cart.push(selectedItem);

        updateCart();

        showToast(
            selectedItem.name + " added to cart! 🛒"
        );

    }

});


// ==============================
// CART DETAILS
// ==============================

function updateCart() {

    const totalItems = cart.length;

    const totalPrice = cart.reduce(
        (total, item) => total + item.price,
        0
    );

    console.log("Cart Items:", totalItems);

    console.log("Cart Total: ₹" + totalPrice);

}


// ==============================
// TOAST NOTIFICATION
// ==============================

let toastTimer;

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ==============================
// NEWSLETTER SUBSCRIPTION
// ==============================

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("emailInput").value;

    const message = document.getElementById("newsletterMessage");

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        message.textContent =
            "Thank you for subscribing! ❤️";

        newsletterForm.reset();

    } else {

        message.textContent =
            "Please enter a valid email address.";

    }

});


// ==============================
// INITIALIZE WEBSITE
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    displayFoodItems();

});
