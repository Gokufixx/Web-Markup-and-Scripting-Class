window.addEventListener("load", ev => {
  let myForm = document.getElementById("myForm");
  let inputField = document.getElementById("inputField");
     

  // JavaScript code for form validation
	// Prevent form from submitting
  myForm.addEventListener("submit", function() {
    ev.preventDefault();
  // Retrieve the input field value
    let putVal = inputField.value;
  // Regular expression pattern for alphanumeric input
    let isValid = /^[a-zA-Z0-9]+$/
  // Check if the input value matches the pattern
    if(isValid.test(putVal)) {
    // Valid input: display confirmation and submit the form
      alert("Form Submitted")
      myForm.submit();
    }
    // Invalid input: display error message
    else {
      alert("Invalid Entry")
    }
  });
});