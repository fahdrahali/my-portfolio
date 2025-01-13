class User {
  constructor(fname, email, message) {
    this.fname = fname;
    this.email = email;
    this.message = message;
  }

  static getUserLocalStorage = (name, email, message) => {
    const user = JSON.parse(localStorage.getItem('user'));
    name.value = user.fname;
    email.value = user.email;
    message.value = user.message;
  };
}

export default User;
