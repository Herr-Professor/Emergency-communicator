document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("my-form");

  async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const data = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          status.innerHTML = responseData.errors.map(error => error.message).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form.";
        }
      }
    } catch (error) {
      status.innerHTML = "Oops! There was a problem submitting your form.";
    }
  }

  form.addEventListener("submit", handleSubmit);
});
