"use strict";
//window.onload = main;
window.errorArray = []; //used to hold all error messages

function main() {
    errorArray = []; //reset errorArray
    
    //validating methods
    validatePhone();
    verifyConditions();
    verifyPeriod();
    validateStudyId();
    
    //construct error message and display
    if (errorArray.length > 0) {
        var errorString = ''
        for (var i = 0; i < errorArray.length; i++) {
            errorString += (errorArray[i] + "\n");
        }
        alert(errorString);
        return false;
    } else {
        var confirmation = confirm("Do you want to submit the form data?")
        if (confirmation) {
            return true;
        } else {
            return false;
        }
    }
}

function validatePhone() {
    var phoneFirstPart_in = document.getElementById("phoneFirstPart").value;
    var phoneSecondPart_in = document.getElementById("phoneSecondPart").value;
    var phoneThirdPart_in = document.getElementById("phoneThirdPart").value;

    if (phoneFirstPart_in.length != 3 || !Number.isInteger(Number(phoneFirstPart_in))) {
        errorArray.push("Invalid phone number");   
    } else if (phoneSecondPart_in.length != 3 || !Number.isInteger(Number(phoneSecondPart_in))) {
        errorArray.push("Invalid phone number"); 
    } else if (phoneThirdPart_in.length != 4 || !Number.isInteger(Number(phoneThirdPart_in))) {
        errorArray.push("Invalid phone number"); 
    }
}

function verifyConditions() {
    var highBloodPressureChecked = document.getElementById("highBloodPressure").checked;
    var diabetesChecked = document.getElementById("diabetes").checked;
    var glaucomaChecked = document.getElementById("glaucoma").checked;
    var asthmaChecked = document.getElementById("asthma").checked;
    var noneChecked = document.getElementById("none").checked;
    
    if (noneChecked) {
        if (highBloodPressureChecked || diabetesChecked || glaucomaChecked || asthmaChecked) {
            errorArray.push("Invalid conditions selection");
        }
    } else if (!highBloodPressureChecked && !diabetesChecked && !glaucomaChecked && !asthmaChecked) {
        errorArray.push("No conditions selected");
    }
}

function verifyPeriod() {
    var periodNeverChecked = document.getElementById("periodNever").checked;
    var periodLessOneChecked = document.getElementById("periodLessOne").checked;
    var periodOneToTwoChecked = document.getElementById("periodOneToTwo").checked;
    var periodMoreTwoChecked = document.getElementById("periodMoreTwo").checked;
    
    if (!periodNeverChecked && !periodLessOneChecked && !periodOneToTwoChecked && !periodMoreTwoChecked) {
        errorArray.push("No time period selected");
    }
}

function validateStudyId() {
    var firstFourDigits_in = document.getElementById("firstFourDigits").value;
    var secondFourDigits_in = document.getElementById("secondFourDigits").value;

    if (firstFourDigits_in.length != 4 || secondFourDigits_in.length != 4) {
        errorArray.push("Invalid study id");
    } else if (firstFourDigits_in.charAt(0) != 'A' || secondFourDigits_in.charAt(0) != 'B') {
        errorArray.push("Invalid study id");
    } else if (!Number.isInteger(Number(firstFourDigits_in.substring(1,4))) || !Number.isInteger(Number(secondFourDigits_in.substring(1,4)))) {
        errorArray.push("Invalid study id");
    }
}