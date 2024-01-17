document.addEventListener("DOMContentLoaded", function () {
  const emergencyForm = document.getElementById("emergencyForm");

  async function handleSubmit(event) {
    event.preventDefault();

    const status = document.getElementById("my-form-status");

    try {
      await formspree.submitForm(emergencyForm);
      status.innerHTML = "Form submitted successfully!";
      emergencyForm.reset();
    } catch (error) {
      status.innerHTML = "Oops! There was a problem submitting your form.";
    }
  }

  emergencyForm.addEventListener("submit", handleSubmit);
});
