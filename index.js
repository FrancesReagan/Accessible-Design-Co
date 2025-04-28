function sendMessage() {
  // Get the button element
  const button = document.getElementById('submitButton');
  
  // Replace the button with a paragraph
  button.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';
  
  // Get the ADC-logo element and add focus to it
  document.getElementById('ADC-logo').focus();
}

function checkInputs() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const postcode = document.getElementById('postcode').value;
  const email = document.getElementById('email').value;
  

  // Checks if all fields are filled (truthy)
  const allFilled = name && address && city && postcode && email;
  
  if (allFilled) {
      popoverMessage.style.opacity = '0';
  }
  
  document.getElementById('submitButton').disabled = !allFilled;
  return allFilled
}

// Event listeners for each input field
document.getElementById('name').addEventListener('input', checkInputs);
document.getElementById('address').addEventListener('input', checkInputs);
document.getElementById('city').addEventListener('input', checkInputs);
document.getElementById('state').addEventListener('input', checkInputs);
document.getElementById('postcode').addEventListener('input', checkInputs);
document.getElementById('email').addEventListener('input', checkInputs);