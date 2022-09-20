"use strict";

// method to get value by selector
const $ = selector => document.querySelector(selector);

// Store digit/letter into an array of phone_number
const phone_number_array = [3,8,6,9,7,2,9];
const input_phone_number_array = document.querySelector('#input_id').value


// Add an event on the radio button (alternative method of adding an onClick event)
const onDigit = () => {
    // Example
    const isDigit = document.querySelector('#digit').checked;
    if (isDigit == true) {
        document.querySelector('#phone-number-label').innerText = 'Digit to Letter';
    } else {
        // document.querySelector()
        document.querySelector('#phone-number-label').innerText = 'Letter to Digit';
    
    }

}

/**
 * Function convert phone number
 */
const convertPhoneNumber = () => {
    const isDigit = $('#digit').checked;
    const isLetter = $('#letter').checked;

    // Handle convert phone number from letter to digit    
    if (isDigit == true /* expression */ ) {
        //TODO: Handle convert phone number from letter to digit
        let convertedDigit = [];
        for(let i = 0; phone_number_array; i++){
            if (phone_number_array == 1) {
                convertedDigit.push('');
            } else if (phone_number_array == 2){
                convertedDigit.push('a');
            } else if (phone_number_array == 3){
                convertedDigit.push('d');
            } else if (phone_number_array == 4){
                convertedDigit.push('g');
            }

        }


    }

    if (isLetter) {
        //TODO: handle convert phone number from digit to letter
        let convertedLetter = [];
        for(let i = 0; phone_number_array.length; i++){

        }
    }

    // TODO: Read a single character at time from the input phone number (digit/letter)
    // and store it in phone_number_array

    // TODO: Show the converted phone number into the output field
}
document.addEventListener("DOMContentLoaded", () => {
    // register click event for the button
    let buttonID = '#action';
    $(buttonID).addEventListener("click", convertPhoneNumber);
});