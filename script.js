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
      body: formData
    })
    .then(response => {
      if (response.ok) {
        handleSuccessResponse();
      } else {
        handleErrorResponse();
      }
    })
    .catch(error => {
      handleErrorResponse();
    });
  }

  function handleSuccessResponse() {
    alert("Form submitted successfully!");
    // You can customize this function based on your needs
  }

  function handleErrorResponse() {
    alert("Error submitting form. Please try again later.");
  }
});
