// Alternative EmailJS-only contact form (simpler setup)
// Add this to your script.js if you prefer not to use Firebase

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceID: 'your_service_id',     // Replace with your EmailJS service ID
    templateID: 'your_template_id',   // Replace with your EmailJS template ID
    userID: 'your_user_id'            // Replace with your EmailJS user ID
};

// Alternative contact form handler (EmailJS only)
function setupEmailJSContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // Send email directly using EmailJS
                const result = await emailjs.sendForm(
                    EMAILJS_CONFIG.serviceID,
                    EMAILJS_CONFIG.templateID,
                    this,
                    EMAILJS_CONFIG.userID
                );
                
                console.log('Email sent successfully:', result);
                showNotification('Thank you for your message! I will get back to you soon.', 'success');
                this.reset();
                
            } catch (error) {
                console.error('Error sending email:', error);
                showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Initialize EmailJS and form handler
(function() {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.userID);
    
    // Setup form handler when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupEmailJSContactForm);
    } else {
        setupEmailJSContactForm();
    }
})();

// Instructions to use this file:
// 1. Replace the Firebase script tags in index.html with just the EmailJS script
// 2. Replace the contact form handler in script.js with the function above
// 3. Update the EMAILJS_CONFIG with your actual EmailJS credentials
// 4. Make sure your EmailJS template has these field names:
//    - name (for the name input)
//    - email (for the email input) 
//    - subject (for the subject input)
//    - message (for the message textarea) 