

//the contact form validation functionality 
function isFormValid() {

    //run through and grab all the data in the form
    const fName = document.getElementById("fName");
    const lName = document.getElementById("lName");
    const eAddress = document.getElementById("eAddress");
    const pNumber = document.getElementById("pNumber");
    const message = document.getElementById("message");
    const gdpr = document.getElementById("gdpr");

    const submitButton = document.getElementById("submitButton");



    //array so that I can loop through the input elements instead of doing them all individually as, loads are just text fields tbh
    const inputElements = [];
    inputElements.push(fName, lName, eAddress, pNumber, message, gdpr);

    const checkedInputElements = [];

    //Current client side validation does email and empty fields, ill more as I have time and find approprirate regex
    for (let index = 0; index < inputElements.length; index++) {
        //establish iterator element varible
        let curElement = inputElements[index];

        if(curElement.value.length != 0) {
            checkedInputElements.push(curElement);
            //is not empty
            curElement.style.borderColor = "green";

            if((curElement.name == "eAddress") && (validateEmail(curElement.value))) {
                checkedInputElements.push(curElement);
                curElement.style.borderColor = "green";
            } else if(curElement.name == "eAddress")  {
                checkedInputElements.splice(curElement ,1);
                curElement.style.borderColor = "red";
            }
        }
        else {
            //is empty field
            checkedInputElements.splice(curElement ,1);
            curElement.style.borderColor = "red";
        }
    }


    //now when they are all good, allow the button to be pressed
    if (checkedInputElements.length < 6) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
        //show a error message or smth
    }

    //UNDO THIS, WHEN YOU WORK OUT HOW TO ACCESS CPANEL SQLDATABASES
    submitButton.disabled = true;

}



//checks whether a field value is is a number or not
function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

//checks whether the gdpr box is checked
function gdprCheck(value) {
    return (value.checked);
}

//regex function that returns a bool as to whether to the email placed in the params is valid
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//checks phone number against regex
function isPhoneNumber(number) {
    const regex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    return regex.test(number);
}

