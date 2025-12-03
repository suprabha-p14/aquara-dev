// --- Configuration ---
const whatsappNumber = '919819478847'; // ⚠️ REPLACE with your full WhatsApp number (e.g., '919876543210')

// --- Navigation Toggle Logic (kept for completeness) ---
const navToggle = document.querySelector('.nav-toggle');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.querySelector('.close-btn');

if (navToggle && sideNav && closeBtn) {
    navToggle.addEventListener('click', () => {
        sideNav.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('open');
    });

    // Close when clicking outside 
    document.addEventListener('click', (e) => {
        if (!sideNav.contains(e.target) && !navToggle.contains(e.target) && sideNav.classList.contains('open')) {
            sideNav.classList.remove('open');
        }
    });
}


// --- WhatsApp Redirect Logic ---
const productButtons = document.querySelectorAll('.product-card .view-product-btn');

productButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // We no longer need to read the product name, but we keep the logic structure.
        
        // MODIFIED: Generic message expressing overall interest
        const baseMessage = `Hello, I saw your product selection and I'd like to know more about your collection. Could you share some details?`;
        
        const encodedMessage = encodeURIComponent(baseMessage);
        
        // Construct the full WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp chat in a new tab
        window.open(whatsappUrl, '_blank');
    });

});
