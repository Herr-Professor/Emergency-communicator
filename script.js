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
    const xhr = new XMLHttpRequest();
    const endpoint = form.getAttribute("action");

    xhr.open("POST", endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          handleSuccessResponse(xhr.responseText);
        } else {
          handleErrorResponse(xhr.responseText);
        }
      }
    };

    xhr.send(new URLSearchParams(formData).toString());
  }

  function handleSuccessResponse(response) {
    alert(response); // Display Formspree's response
    // You can customize this function based on your needs
  }

  function handleErrorResponse(response) {
    alert("Error submitting form. Please try again later.");
  }
});
