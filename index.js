
const form = document.createElement("form")
const formGroup = document.createElement("div")
formGroup.className ="w-50 mt-5 vh-auto mx-auto bg-secondary p-5 text-white"

const heading = document.createElement("h2")
heading.textContent = "Application Form"
heading.className = "text-center"
formGroup.appendChild(heading)

// first Name 
const firstName = document.createElement("div");
const firstNamelabel = document.createElement("label")
firstNamelabel.textContent = "First Name:";
const firstNameInput = document.createElement("input");
firstNameInput.type ="text";
firstNameInput.className ="form-control"
firstNameInput.placeholder ="Enter Your Name";
firstName.appendChild(firstNamelabel);
firstName.appendChild(firstNameInput);
formGroup.appendChild(firstName);

const lastName = document.createElement("div");
const lastNamelabel = document.createElement("label")
lastNamelabel.textContent = "Last Name:";
const lastNameInput = document.createElement("input");
lastNameInput.type ="text";
lastNameInput.className ="form-control"
lastNameInput.placeholder ="Enter Your Name";
lastName.appendChild(lastNamelabel);
lastName.appendChild(lastNameInput);
formGroup.appendChild(lastName);

const country = document.createElement("div");
const countryLabel = document.createElement("label");
countryLabel.textContent ="Country";
const countryDropdown = document.createElement("select");
countryDropdown.className="form-control";
const countries =["Select your Country","Afghanistan","India","South Africa"]
countries.forEach((country)=>{
    const option = document.createElement("option")
    option.textContent = country;
    option.value = country;
    countryDropdown.appendChild(option)
})
country.appendChild(countryLabel);
country.appendChild(countryDropdown);
formGroup.appendChild(country);

const languages = document.createElement("div");
const languageLabel = document.createElement("label");
languageLabel.textContent ="Languages known"

languages.appendChild(languageLabel);

const checkBoxes = ["Tamil","English","Malayalam"];
checkBoxes.forEach((checkbox)=>{
    const languagesCheckboxes = document.createElement("div");
     languagesCheckboxes.className ="form-check form-check-inline" ; 
    const languageCheckboxesInput = document.createElement("input");
    languageCheckboxesInput.className ="form-check-inline";
    languageCheckboxesInput.type ="checkbox";

    const languageCheckboxesLabel = document.createElement("div");
    languageCheckboxesLabel.className = "form-check-inline ps-2";
    languageCheckboxesLabel.textContent = checkbox;

    languagesCheckboxes.appendChild(languageCheckboxesInput);
    languagesCheckboxes.appendChild(languageCheckboxesLabel);
    languages.appendChild(languagesCheckboxes)
});
formGroup.appendChild(languages);


const gender = document.createElement("div");
const genderLabel = document.createElement("label");
genderLabel.textContent ="Gender"

gender.appendChild(genderLabel);

const genders = ["Male","Female","others"];
checkBoxes.forEach((radio)=>{
    const genderRadioButtons = document.createElement("div");
    genderRadioButtons.className ="form-check form-check-inline" ; 
    const genderInput = document.createElement("input");
    genderInput.className ="form-check-inline";
    genderInput.type ="radio";
    genderInput.name ="radio"

    const genderLabel = document.createElement("div");
    genderLabel.className = "form-check-inline ps-2";
    genderLabel.textContent = radio;

    genderRadioButtons.appendChild(genderInput);
    genderRadioButtons.appendChild(genderLabel);
    gender.appendChild(genderRadioButtons)
});
formGroup.appendChild(gender);


const submitButton = document.createElement("button");
submitButton.className ="btn btn-success";
submitButton.textContent ="Submit"
formGroup.appendChild(submitButton)




form.appendChild(formGroup)


document.body.appendChild(form)
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const countryValue = countryDropdown.value;
    const checkedLanguages = Array.from(languages.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.nextSibling.textContent);
    const checkedRadio = gender.querySelector('input[type="radio"]:checked');
    const selectedGender = checkedRadio ? checkedRadio.nextSibling.textContent : null;
    
    // const selectedGender = gender.querySelector('input[type="radio"]:checked').nextSibling.textContent;
    // const selectedGender = gender.querySelector('input[type="radio"]:checked').labels[0].textContent;
    console.log(selectedGender)
    const errors = validateForm(firstNameValue, lastNameValue, countryValue, checkedLanguages,selectedGender);
    console.log("Detected Errors:", errors);
    const existingErrors = form.querySelectorAll(".text-danger");
    existingErrors.forEach((error) => error.remove());

    if (errors.length === 0) {
        const formData = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            country: countryValue,
            languages: checkedLanguages,
            gender:selectedGender
        };
        console.log(formData);
        form.reset();
    } else {
        // Display errors for each field
        errors.forEach((error) => {
         
            if (error.includes("First Name")) {
                appendError(firstName, error);
            } else if (error.includes("Last Name")) {
                appendError(lastName, error);
            } else if (error.includes("Country")) {
                appendError(country, error);
            } else if (error.includes("Languages")) {
                appendError(languages, error);
            }
            else if (error.includes("Gender")) {
                appendError(gender, error);
            }
       
        });
    }
}
function appendError(fieldElement, errorMessage) {
    const errorContainer = document.createElement("div");
    errorContainer.className = "text-danger";
    errorContainer.textContent = errorMessage;
    fieldElement.appendChild(errorContainer);
   
}
// Form Submission Function
// Form Submission Function
// function handleSubmit(event) {
//     event.preventDefault(); // Prevent default form submission

//     const firstNameValue = firstNameInput.value.trim();
//     const lastNameValue = lastNameInput.value.trim();
//     const countryValue = countryDropdown.value;
//     const checkedLanguages = Array.from(languages.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.nextSibling.textContent);

//     // Clear any previous error messages
//     const existingErrors = form.querySelectorAll(".text-danger");
//     existingErrors.forEach((error) => error.remove());

//     const nameRegex = /^[a-zA-Z0-9\s]{2,30}$/;
//     // Validation
//     let errors = [];
//     if (firstNameValue.trim() === "") {
//         errors.push("First Name is required.");
//         appendError(firstName, "First Name is required.");
//     } else if (!nameRegex.test(firstNameValue)) {
//         errors.push("First Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
//         appendError(firstName, "First Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
//     }
    
//     if (lastNameValue.trim() === "") {
//         errors.push("Last Name is required.");
//         appendError(lastName, "Last Name is required.");
//     } else if (!nameRegex.test(lastNameValue)) {
//         errors.push("Last Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
//         appendError(lastName, "Last Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
//     }
//     if (countryValue === "Select your Country") {
//         errors.push("Please select a country.");
//         appendError(country, "Please select a country.");
//     }
//     if (checkedLanguages.length < 2) {
//         if (checkedLanguages.length < 1) {
//             errors.push("Select languages.");
//             appendError(languages, "Select languages.");
//         }else{
//             errors.push("Select at least two languages.");
//             appendError(languages, "Select at least two languages.");
//         }
     
//     }

//     if (errors.length === 0) {

//         const formData = {
//             firstName: firstNameValue,
//             lastName: lastNameValue,
//             country: countryValue,
//             languages: checkedLanguages
//         };
//         console.log(formData);

//         // Reset form fields
//         form.reset();
//     }
// }

// // Function to append error messages to respective fields
// function appendError(fieldElement, errorMessage) {
//     const errorContainer = document.createElement("div");
//     errorContainer.className = "text-danger";
//     errorContainer.textContent = errorMessage;
//     fieldElement.appendChild(errorContainer);
// }

// Add event listener to form


// form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     const firstNameValue = firstNameInput.value.trim();
//     const lastNameValue = lastNameInput.value.trim();
//     const countryValue = countryDropdown.value;
//     const checkedLanguages = Array.from(languages.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.nextSibling.textContent);

//     // Clear any previous error messages
//     const existingErrors = form.querySelectorAll(".text-danger");
//     existingErrors.forEach((error) => error.remove());

//     const nameRegex = /^[a-zA-Z0-9\s]{2,30}$/;
//     // Validation
//     let errors = [];
//     if (firstNameValue.trim() === "") {
//         errors.push("First Name is required.");
//         appendError(firstName, "First Name is required.");
//     } else if (!nameRegex.test(firstNameValue)) {
//         errors.push("First Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
//         appendError(firstName, "First Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
//     }
    
//     if (lastNameValue.trim() === "") {
//         errors.push("Last Name is required.");
//         appendError(lastName, "Last Name is required.");
//     } else if (!nameRegex.test(lastNameValue)) {
//         errors.push("Last Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
//         appendError(lastName, "Last Name should be between 2 to 30 characters and contain only letters, numbers, and spaces.");
//     }
//     if (countryValue === "Select your Country") {
//         errors.push("Please select a country.");
//         appendError(country, "Please select a country.");
//     }
//     if (checkedLanguages.length < 2) {
//         if (checkedLanguages.length < 1) {
//             errors.push("Select languages.");
//             appendError(languages, "Select languages.");
//         }else{
//             errors.push("Select at least two languages.");
//             appendError(languages, "Select at least two languages.");
//         }
     
//     }

//     if (errors.length === 0) {

//         const formData = {
//             firstName: firstNameValue,
//             lastName: lastNameValue,
//             country: countryValue,
//             languages: checkedLanguages
//         };
//         console.log(formData);

//         // Reset form fields
//         form.reset();
//     }
// });

// // Function to append error messages to respective fields



// Form Submission Function
// form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     const firstNameValue = firstNameInput.value.trim();
//     const lastNameValue = lastNameInput.value.trim();
//     const countryValue = countryDropdown.value;
//     const checkedLanguages = Array.from(languages.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.nextSibling.textContent);

//     // Validation
//     let errors = [];
//     if (firstNameValue === "") {
//         errors.push("First Name is required.");
//     }
//     if (lastNameValue === "") {
//         errors.push("Last Name is required.");
//     }
//     if (countryValue === "Select your Country") {
//         errors.push("Please select a country.");
//     }
//     if (checkedLanguages.length < 2) {
//         errors.push("Select at least two languages.");
//     }

//     // Clear any previous error messages
//     const existingErrors = form.querySelectorAll(".text-danger");
//     existingErrors.forEach((error) => error.remove());

//     if (errors.length > 0) {
//         // Show errors below each field
//         errors.forEach((error) => {
//             const errorContainer = document.createElement("div");
//             errorContainer.className = "text-danger";
//             errorContainer.textContent = error;
//             form.insertBefore(errorContainer, submitButton.nextSibling);
//         });
//     } else {
//         // Create object with form data and log to console
//         const formData = {
//             firstName: firstNameValue,
//             lastName: lastNameValue,
//             country: countryValue,
//             languages: checkedLanguages
//         };
//         console.log(formData);

//         // Reset form fields
//         form.reset();
//     }
// });


// form.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     const firstNameValue = firstNameInput.value.trim();
//     const lastNameValue = lastNameInput.value.trim();
//     const countryValue = countryDropdown.value;
//     const checkedLanguages = Array.from(languages.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.nextSibling.textContent);

//     // Validation
//     let errors = [];
//     if (firstNameValue === "") {
//         errors.push("First Name is required.");
//     }
//     if (lastNameValue === "") {
//         errors.push("Last Name is required.");
//     }
//     if (countryValue === "Select your Country") {
//         errors.push("Please select a country.");
//     }
//     if (checkedLanguages.length < 2) {
//         errors.push("Select at least two languages.");
//     }

//     if (errors.length > 0) {
//         // Show errors below each field
//         const errorContainer = document.createElement("div");
//         errorContainer.className = "text-danger";
//         errorContainer.textContent = errors.join(" ");
//         form.insertBefore(errorContainer, submitButton);
//     } else {
//         // Create object with form data and log to console
//         const formData = {
//             firstName: firstNameValue,
//             lastName: lastNameValue,
//             country: countryValue,
//             languages: checkedLanguages
//         };
//         console.log(formData);

//         // Clear any previous error messages
//         const existingErrors = form.querySelectorAll(".text-danger");
//         existingErrors.forEach((error) => error.remove());

//         // Reset form fields
//         form.reset();
//     }
// });