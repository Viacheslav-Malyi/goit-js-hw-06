const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  const formData = { email: email.value, password: password.value };
  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены');
  } else console.log(formData);
  event.currentTarget.reset();
}
