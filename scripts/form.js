document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function (event) {
    let isValid = true;

    if (!nameInput.value.trim()) {
      showError('name-error', 'Please enter your name');
      isValid = false;
    } else {
      hideError('name-error');
    }

    if (!isValidEmail(emailInput.value.trim())) {
      showError('email-error', 'Please enter a valid email address');
      isValid = false;
    } else {
      hideError('email-error');
    }

    if (!messageInput.value.trim()) {
      showError('message-error', 'Please enter your message');
      isValid = false;
    } else {
      hideError('message-error');
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  });

  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }

  function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
