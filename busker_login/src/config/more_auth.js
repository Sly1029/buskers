isValid = true;
fieldArray = [];
function checkPasswords() {
  password = document.getElementById("password").value;
  confirmedPassword = document.getElementById("confirmedPassword").value;
  if (password != confirmedPassword) {
    document.getElementById("passwordStatus").style.color = "#FA676C";
    document.getElementById("passwordStatus").innerHTML =
      "Passwords do not match";

    console.log(password);
    console.log(confirmedPassword);
  } else {
    document.getElementById("passwordStatus").style.color = "#71D79A";
    document.getElementById("passwordStatus").innerHTML = "Passwords match!";

    console.log(password);
    console.log(confirmedPassword);
  }
}
/*
 * Checks each field if empty, changes isValid to true if all fields are filled
 * Firebase functionality in auth.js will not be called until isValid = true
 */
function checkFields() {
  form = document.getElementById("signup-form");
  var i;
  for (i = 0; i < form.length - 1; i++) {
    fieldArray[i] = form[i].value;
  }
  isValid = fieldArray.every(isNotEmpty);
}
/*
 * Returns true if string is not empty
 */
function isNotEmpty(newStr) {
  return newStr != "";
}