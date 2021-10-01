//the map on the contact page
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([51.5, -0.09]).addTo(mymap);

L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);


//the contact form functionality 

var fields = {};
document.addEventListener("DOMContentLoaded", function () {
    fields.firstName = document.getElementById('fname');
    fields.lastName = document.getElementById('lname');
    fields.emailAddress = document.getElementById('eAddress');
    fields.phoneNumber = document.getElementById('pNumber');
    fields.message = document.getElementById('subject');
    fields.gdprCheckBox = document.getElementById('gdprCheckbox');
})

//checks whether a field value is empty or not
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

//checks whether a field value is is a number or not
function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

//checks whether the gdpr box is checked
function gdprCheck(value) {
    return (value.checked);
}

//just a filler function ready for recaptcha but there isnt any recaptcha in reality
function checkRecaptcha() {

}

//checks whether the field value is a properly formatted email address
function isEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function isPhoneNumber(number) {
    const regex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
    return regex.test(number);
}

//runs the actual validation
function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}


//Combines all the validation into one final function
function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.emailAddress, isNotEmpty);
    valid &= fieldValidation(fields.emailAddress, isEmail);
    valid &= fieldValidation(fields.phoneNumber, isNotEmpty);
    valid &= fieldValidation(fields.phoneNumber, isNumber)
    valid &= fieldValidation(fields.message, isPhoneNumber);
    valid &= fieldValidation(fields.gdprCheckBox, gdprCheck);
    //recaptcha would go below

    return valid;
}

isFormValid = false;
function isFormValid () {
    if(isValid() == true) {
        //if true then allow the form to be submitted
        document.getElementById("good-input").classList.remove("hidden-default");
    }
    else {
        //show some text saying its wrong 
        document.getElementById("bad-input").classList.remove("hidden-default");
    }
    
}
