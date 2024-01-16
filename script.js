document.addEventListener("DOMContentLoaded", function () {
  const requestHelpForm = document.getElementById("requestHelpForm");
  const offerHelpForm = document.getElementById("offerHelpForm");

  requestHelpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleFormSubmission(requestHelpForm);
  });

  offerHelpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleFormSubmission(offerHelpForm);
  });

  function handleFormSubmission(form) {
    const formData = new FormData(form);

    sendFormData(formData, form);
  }

  function sendFormData(formData, form) {
    const endpoint = form.getAttribute("action");
    
    fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => handleSuccessResponse(data))
    .catch(error => handleErrorResponse(error));
  }

  function handleSuccessResponse(response) {
    alert(response.message); // Display Formspree's response
    // You can customize this function based on your needs
  }

  function handleErrorResponse(error) {
    alert("Error submitting form. Please try again later.");
  }
});
