// imports
import {
  checkLettersAndSpaces,
  checkLettersAndUnderscores,
  checkPassword,
} from "./utils/textChecker";

// Variables required to submit
let validFirstName = true;
let validLastName = true;
let validUsername = false;
let validPassword = false;
let validConfirmPassword = false;

// Checking entries
window.checkFirstname = function () {
  const text = document.getElementById("firstname").value.trim();
  const err = document.getElementById("firstnameError");

  if (!checkLettersAndSpaces(text) && text !== "" && text !== null) {
    validFirstName = false;
    err.innerHTML = "Please introduce only letters and spaces.";
  } else {
    validFirstName = true;
    err.innerHTML = "";
  }

  checkSubmitRequirements();
};

window.checkLastname = function () {
  const text = document.getElementById("lastname").value.trim();
  const err = document.getElementById("lastnameError");

  if (!checkLettersAndSpaces(text) && text !== "" && text !== null) {
    validLastName = false;
    err.innerHTML = "Please introduce only letters and spaces.";
  } else {
    validLastName = true;
    err.innerHTML = "";
  }

  checkSubmitRequirements();
};

window.checkUsername = function () {
  const text = document.getElementById("username").value.trim();
  const err = document.getElementById("usernameError");

  if (!checkLettersAndUnderscores(text)) {
    validUsername = false;
    err.innerHTML = "Please introduce only letters and underscores.";
  } else {
    validUsername = true;
    err.innerHTML = "";
  }

  checkSubmitRequirements();
};

window.checkPassword = function () {
  const text = document.getElementById("password").value.trim();
  const err = document.getElementById("passwordError");

  if (!checkPassword(text)) {
    validPassword = false;
    err.innerHTML =
      "Please introduce more than 8 characters and not only numbers.";
  } else {
    validPassword = true;
    err.innerHTML = "";
  }

  checkSubmitRequirements();
};

window.checkConfirmPassword = function () {
  const pass1 = document.getElementById("password").value.trim();
  const pass2 = document.getElementById("confirmPassword").value.trim();
  const err = document.getElementById("confirmPasswordError");

  if (pass1 !== pass2) {
    validConfirmPassword = false;
    err.innerHTML = "The password does not match.";
  } else {
    validConfirmPassword = true;
    err.innerHTML = "";
  }

  checkSubmitRequirements();
};

// Submit button functionality
/**
 * Toggle the "disabled" propety to the submit button according to the required
 * inputs.
 */
function checkSubmitRequirements() {
  let flag = true;

  //   console.log(
  //     validFirstName,
  //     validLastName,
  //     validUsername,
  //     validPassword,
  //     validConfirmPassword
  //   );
  if (
    validFirstName &&
    validLastName &&
    validUsername &&
    validPassword &&
    validConfirmPassword
  ) {
    flag = false;
    console.log("herewqeq");
  }

  console.log(flag);
  document.getElementById("submitButton").disabled = flag;
}

// This shouldnt be here, just for fake feedback
window.sendForm = function () {
  alert("Successfully submitted!");
};
