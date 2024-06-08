document.addEventListener("DOMContentLoaded", function () {
    const submitFormButton = document.getElementById("submitForm");
    submitFormButton.addEventListener("click", function () {
        // Get form data and send it to your backend for Google Sheets integration.
        // You will need to implement the backend logic separately.
    });
});

// script.js
function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.classList.contains("active")) {
      answer.classList.remove("active");
    } else {
      answer.classList.add("active");
    }
  }
  