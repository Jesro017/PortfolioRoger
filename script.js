// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate sending the message
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Clear the form
  document.getElementById('contact-form').reset();
});