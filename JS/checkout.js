
// Function to get query parameters from the URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1); // Remove the "?" from the query string
    const pairs = queryString.split("&"); // Split into key-value pairs

    pairs.forEach((pair) => {
        const [key, value] = pair.split("="); // Split each pair into key and value
        params[decodeURIComponent(key)] = decodeURIComponent(value); // Decode and store in params object
    });

    return params; // Return the params object
}

// Function to get query parameters from the URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1); // Remove the "?" from the query string
    const pairs = queryString.split("&"); // Split into key-value pairs

    pairs.forEach((pair) => {
        const [key, value] = pair.split("="); // Split each pair into key and value
        params[decodeURIComponent(key)] = decodeURIComponent(value); // Decode and store in params object
    });

    return params; // Return the params object
}

// Function to update the cart with the selected plan or total price
function updateCart() {
    const params = getQueryParams(); // Get query parameters from the URL

    // Debug: Log the query parameters
    console.log("Query Parameters:", params);

    // Get references to the sections
    const orderSummary = document.getElementById("order-summary");
    const totalOnly = document.getElementById("total-only");

    // Check if only the total parameter is present
    if (params.total && !params.plan) {
        // Hide the Order Summary section
        if (orderSummary) {
            orderSummary.style.display = "none";
        }

        // Show the Total Only section
        if (totalOnly) {
            totalOnly.style.display = "block";
        }

        // Update the total price in the Total Only section
        const totalDisplay = document.getElementById("total-display");
        if (totalDisplay) {
            totalDisplay.textContent = `EGP ${params.total}`;
            console.log("Total Only Section Updated:", params.total); // Debug
        }
    } else {
        // Show the Order Summary section
        if (orderSummary) {
            orderSummary.style.display = "block";
        }

        // Hide the Total Only section
        if (totalOnly) {
            totalOnly.style.display = "none";
        }
    }

    // If a plan is provided, update the cart with the plan details
    if (params.plan) {
        const planName = params.plan || "Basic Plan"; // Default to Basic Plan if no plan is provided
        const planPrice = parseFloat(params.price.replace(/,/g, '')) || 800; // Remove commas and parse, default to EGP 800

        // Debug: Log the plan details
        console.log("Plan Name:", planName);
        console.log("Plan Price:", planPrice);

        // Update the cart items
        const cartItemsContainer = document.querySelector(".cart-items");
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = `
                <div class="cart-item">
                    <p>${planName}</p>
                    <p>EGP ${planPrice.toFixed(2)}</p>
                </div>
            `;
        }

        // Update the totals
        const subtotalElement = document.getElementById("subtotal");
        const taxElement = document.getElementById("tax");
        const totalElement = document.getElementById("total");

        if (subtotalElement && taxElement && totalElement) {
            const tax = planPrice * 0.15; // 15% tax (VAT in Egypt)
            const total = planPrice + tax;

            subtotalElement.textContent = `EGP ${planPrice.toFixed(2)}`;
            taxElement.textContent = `EGP ${tax.toFixed(2)}`;
            totalElement.textContent = `EGP ${total.toFixed(2)}`;

            // Debug: Log the updated totals
            console.log("Subtotal:", subtotalElement.textContent);
            console.log("Tax:", taxElement.textContent);
            console.log("Total:", totalElement.textContent);
        }
    }

    // If a total price is provided, update the cart with the total price
    if (params.total) {
        const totalPrice = params.total || "0.00"; // Default to 0.00 if no total is provided

        // Update the total price in the checkout page
        const totalElement = document.getElementById("total");
        if (totalElement) {
            totalElement.textContent = `EGP ${totalPrice}`;
            console.log("Total Price Updated:", totalPrice); // Debug
        }
    }
}

// Initialize the page
updateCart();

function flipCard() {
    const flipCardInner = document.querySelector('.flip-card-inner');
    flipCardInner.style.transform = 'rotateY(180deg)';
}

function unflipCard() {
    const flipCardInner = document.querySelector('.flip-card-inner');
    flipCardInner.style.transform = 'rotateY(0deg)';
}


// Function to validate the payment form
function validatePaymentForm() {
    const cardNumber = document.getElementById("card-number").value.trim();
    const expiryDate = document.getElementById("expiry-date").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const cardHolder = document.getElementById("card-holder").value.trim();

    // Simple validation checks
    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
        window.location.href = "/Home.html?status=error&message=Something+wrong+happened";
        return false; // Prevent form submission
    }

    // Validate CVV is exactly 3 digits
    if (cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
        window.location.href = "/Home.html?status=error&message=Something+wrong+happened";
        return false; // Prevent form submission
    }

    // Validate card number is exactly 16 digits
    if (cardNumber.length !== 16 || !/^\d{16}$/.test(cardNumber)) {
        window.location.href = "/Home.html?status=error&message=Something+wrong+happened";
        return false; // Prevent form submission
    }

    // Validate expiry date format (MM/YY)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        window.location.href = "/Home.html?status=error&message=Something+wrong+happened";
        return false; // Prevent form submission
    }

    // If all validations pass, redirect with success message
    window.location.href = "/Home.html?status=success&message=Payment+successful!";
    return true;
}





