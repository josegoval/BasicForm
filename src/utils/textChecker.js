/**
 * Check if the text contains only letters
 * @param {string} text
 */
const checkLetters = (text) => {
  let regex = /^[a-zA-Z]+$/;
  return regex.test(text);
};

/**
 * Check if the text contains only letters and spaces
 * @param {string} text
 */
const checkLettersAndSpaces = (text) => {
  let regex = /^[a-zA-Z ]+$/;
  return regex.test(text);
};

/**
 * Check if the text contains only letters and underscores
 * @param {string} text Text to check
 */
const checkLettersAndUnderscores = (text) => {
  let regex = /^[a-zA-Z_]+$/;
  return regex.test(text);
};

/**
 * Check a password with more than 8 length and which contains numbers and others.
 * @param {string} text Text to check
 */
const checkPassword = (text) => {
  //Lenght greater than 8
  if (text.length > 8) {
    // Require numbers and others
    // Check if contains numbers
    // Check if contains others than numbers
    if (/[0-9]/.test(text) && /[^0-9]/.test(text)) {
      return true;
    }
  }

  return false;
};

export {
  checkLetters,
  checkLettersAndSpaces,
  checkLettersAndUnderscores,
  checkPassword,
};
