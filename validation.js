// validation.js

function validateForm(firstNameValue, lastNameValue, countryValue, checkedLanguages,selectedGender) {
    const errors = [];

    const nameRegex = /^[a-zA-Z0-9\s]{2,30}$/;



    if (firstNameValue.trim() === "") {
        errors.push("First Name is required.");
    } else if (!nameRegex.test(firstNameValue)) {
        errors.push("First Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
    }

    if (lastNameValue.trim() === "") {
        errors.push("Last Name is required.");
    } else if (!nameRegex.test(lastNameValue)) {
        errors.push("Last Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
    }

 

    if (countryValue === "Select your Country") {
        errors.push("Country field is required");
    }

    if (checkedLanguages.length < 2) {
        if (checkedLanguages.length < 1) {
            errors.push("Languages field is required");
        } else {
            errors.push("Languages must have atleast 2 should be selected");
        }
    }
    if ( selectedGender === null) {
        errors.push("Gender is required.");
    }
    return errors;
}
