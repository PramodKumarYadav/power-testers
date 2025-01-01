import { loadConfig } from './configLoader.js';
import { initializeEmailJS, sendEmail } from './emailService.js';

document.addEventListener('DOMContentLoaded', () => {
  loadConfig()
    .then((config) => {
      initializeEmailJS(config.PUBLIC_KEY);

      // Handle Form Submission
      document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value,
        };

        // Send email via EmailJS
        sendEmail(config.SERVICE_ID, config.TEMPLATE_ID, formData)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again later.');
          });
      });
    })
    .catch((error) => {
      console.error('Error loading configuration:', error);
    });
});