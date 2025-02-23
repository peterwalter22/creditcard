document.addEventListener("DOMContentLoaded", function () {
    const cardNumberInput = document.getElementById("card-number");
    const cardHolderInput = document.getElementById("card-holder");
    const expiryInput = document.getElementById("expiry");
    const cvvInput = document.getElementById("cvv");
    const cardFront = document.querySelector(".card-front");
    const cardBack = document.querySelector(".card-back");

    // Format card number input
    cardNumberInput.addEventListener("input", function () {
        this.value = this.value
            .replace(/\D/g, "") // Remove non-digits
            .replace(/(.{4})/g, "$1 ") // Add spaces after every 4 digits
            .trim()
            .substring(0, 19); // Limit to 19 characters including spaces
    });

    // Flip to back when entering CVV
    cvvInput.addEventListener("focus", function () {
        cardFront.style.zIndex = "1";
        cardBack.style.zIndex = "2";
    });

    // Flip to front when leaving CVV field
    cvvInput.addEventListener("blur", function () {
        cardFront.style.zIndex = "2";
        cardBack.style.zIndex = "1";
    });

    // Prevent non-numeric input for card number & CVV
    cardNumberInput.addEventListener("keypress", onlyNumbers);
    cvvInput.addEventListener("keypress", onlyNumbers);

    function onlyNumbers(event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }
});
