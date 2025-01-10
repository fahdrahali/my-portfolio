import User from "./user.js";

const validateEmailInput = (email) => {
  if (email !== email.toLowerCase())
    return 'Email address should be in lower case';

  return email;
};

const submitForm = (name, email, message) => {
  const msg = validateEmailInput(email);
  console.log(msg);

  if (msg !== email) document.querySelector('.error-msg').innerText = msg;
  else {
    const user = new User(name, email, message)
    localStorage.setItem('user', JSON.stringify(user));
    document.getElementById('form').submit();
  }
};

export default submitForm;
