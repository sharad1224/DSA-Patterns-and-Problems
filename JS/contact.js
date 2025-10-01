const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("✅ Thank you! Your message has been received.");
  window.location.reload();
});
