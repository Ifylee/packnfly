// function to capitalize the first letter of a string
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
// Function to validate an email address using a regular expression
  export function validateEmail(email) {
    // Regular expression for a valid email address
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
// Function to remove hyphens from a string and capitalize the first letter of each word
  export function removeHyphensAndCapitalize(string) {
    // Using a regular expression to replace hyphens with spaces and capitalize the first letter of each word
    return string.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
  }