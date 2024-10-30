const checkoutForm = document.getElementById('checkout-form');
const authorizationPopup = document.getElementById('authorization-popup');
const successPopup = document.getElementById('success-popup');
const cardTypePopup = document.getElementById('card-type-popup');
const closeButtons = document.querySelectorAll('.close-button');
const cartItemsContainer = document.getElementById('cart-items');
const totalAmountDisplay = document.getElementById('total-amount');
const cardNumberInput = document.getElementById('cardnumber');
const cardTypeMessage = document.getElementById('card-type-message');

// ... (existing cart data and populating logic)

// Handle card number input
cardNumberInput.addEventListener('input', () => {
    const cardNumber = cardNumberInput.value.replace(/\s/g, '');
    let cardType = '';

    if (/^4/.test(cardNumber)) {
        cardType = 'Visa';
    } else if (/^(5[1-5]|22[2-9]|2[3-7])/.test(cardNumber)) {
        cardType = 'Mastercard';
    } else {
        cardType = 'Unknown';
    }

    if (cardType !== 'Unknown') {
        cardTypeMessage.textContent = `This is a ${cardType} card.`;
        cardTypePopup.style.display = 'block';
    } else {
        cardTypePopup.style.display = 'none';
    }
});

// ... (existing form submission and popup handling logic)

// Close the card type popup when the close button is clicked
const cardTypeCloseButton = cardTypePopup.querySelector('.close-button');
cardTypeCloseButton.addEventListener('click', () => {
    cardTypePopup.style.display = 'none';
});

// Close the card type popup when the user clicks outside the popup
window.addEventListener('click', (event) => {
    if (event.target === cardTypePopup) {
        cardTypePopup.style.display = 'none';
    }
});