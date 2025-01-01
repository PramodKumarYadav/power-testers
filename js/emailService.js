export function initializeEmailJS(publicKey) {
    // Initialize EmailJS
    (function () {
        emailjs.init({
            publicKey: publicKey,
        });
    })();
}

export function sendEmail(serviceId, templateId, formData) {
  return emailjs.send(serviceId, templateId, formData);
}