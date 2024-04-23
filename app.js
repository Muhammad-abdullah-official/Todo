var nameInput = document.getElementById('name');
var usernameInput = document.getElementById('uname');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('con_password');

function validateForm() {
  var nameValue = nameInput.value;
  var usernameValue = usernameInput.value;
  var emailValue = emailInput.value;
  var passwordValue = passwordInput.value;
  var confirmPasswordValue = confirmPasswordInput.value;
  var namePattern = /^[A-Za-z]+$/;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameValue === '' || !namePattern.test(nameValue)) {
    alert('Please enter a valid name');
    return false;
  }

  if (usernameValue === '') {
    alert('Please enter a valid username');
    return false;
  }

  if (localStorage.getItem('username') === usernameValue) {
    alert('Username already exists');
    return false;
  }

  if (!emailPattern.test(emailValue)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (localStorage.getItem('email') === emailInput) {
    alert('email already exist');
  }

  if (passwordValue === '' || passwordValue.length < 8) {
    alert('Password must be at least 8 characters long');
    return false;
  }

  if (confirmPasswordValue === '' || confirmPasswordValue.length < 8) {
    alert('Confirm Password must be at least 8 characters long');
    return false;
  }

  if (passwordValue !== confirmPasswordValue) {
    alert('Passwords do not match');
    return false;
  }

  // localStorage.removeItem('name');
  // localStorage.removeItem('username');
  // localStorage.removeItem('email');
  // localStorage.removeItem('password');

  // Store form data in localStorage
  localStorage.setItem('name', nameValue);
  localStorage.setItem('username', usernameValue);
  localStorage.setItem('email', emailValue);
  localStorage.setItem('password', passwordValue);

  nameInput.value = '';
  usernameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
  alert('Account created successfully');

  window.location.href = 'index.html';
  // Prevent form submission
  return false;
}

// for signin page
var signinUsername = document.getElementById('signinUsername');
var signinPassword = document.getElementById('signinPassword');

function signinform() {
  signinUsernameValue = signinUsername.value;
  signinPasswordValue = signinPassword.value;

  if (
    signinUsernameValue === localStorage.getItem('username') &&
    signinPasswordValue === localStorage.getItem('password')
  ) {
    alert('Welcome');
    window.location.href = 'todo.html';
  } else {
    alert('username or password doesnot match');
  }
}
