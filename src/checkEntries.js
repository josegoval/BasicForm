import {
  checkLettersAndSpaces,
  checkLettersAndUnderscores,
  checkPassword,
} from "./utils/textChecker";

window.checkFirstname = function () {
  const text = document.getElementById("firstname").value.trim();
  const err = document.getElementById("firstnameError");

  if (!checkLettersAndSpaces(text)) {
    err.innerHTML = "Please introduce only letters and spaces.";
    return;
  }

  err.innerHTML = "";
};

window.checkLastname = function () {
  const text = document.getElementById("lastname").value.trim();
  const err = document.getElementById("lastnameError");

  if (!checkLettersAndSpaces(text)) {
    err.innerHTML = "Please introduce only letters and spaces.";
    return;
  }

  err.innerHTML = "";
};

window.checkUsername = function () {
  const text = document.getElementById("username").value.trim();
  const err = document.getElementById("usernameError");

  if (!checkLettersAndUnderscores(text)) {
    err.innerHTML = "Please introduce only letters and underscores.";
    return;
  }

  err.innerHTML = "";
};

window.checkPassword = function () {
  const text = document.getElementById("password").value.trim();
  const err = document.getElementById("passwordError");

  if (!checkPassword(text)) {
    err.innerHTML =
      "Please introduce more than 8 characters and not only numbers.";
    return;
  }

  err.innerHTML = "";
};

window.checkConfirmPassword = function () {
  const pass1 = document.getElementById("password").value.trim();
  const pass2 = document.getElementById("confirmPassword").value.trim();
  const err = document.getElementById("confirmPasswordError");

  if (pass1 !== pass2) {
    err.innerHTML = "The password does not match.";
    return;
  }

  err.innerHTML = "";
};
