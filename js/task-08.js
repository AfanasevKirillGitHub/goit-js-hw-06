const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  const formData = {
    email: formEl.email.value,
    password: formEl.password.value,
  };

  if (formData.email === "" || formData.password === "") {
    window.alert(
      "Пожалуйста, заполните все поля и повторите попытку авторизации"
    );
  } else {
    form.reset();
    console.log(formData);
  }
}
