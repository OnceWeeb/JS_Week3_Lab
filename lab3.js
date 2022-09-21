"use strict";

// method to get value by selector
const $ = selector => document.querySelector(selector);

// Store digit/letter into an array of phone_number
const phone_number_array = [3,8,6,9,7,2,9];
const phone_number_array2 = ["a", "d", "l", "p"];
// let input_phone_number_array = document.getElementById(input_id).value;
let convert_digit = [];
let convert_letter = [];




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

    // if (isDigit == true) {
    //     console.log(phone_number_array);
    // }

    // Handle convert phone number from letter to digit    
    if (isDigit == true /* expression */ ) {
        //TODO: Handle convert phone number from letter to digit

        let convert_digit = [];
        let input_phone_number_array = document.getElementById('input_id').value;

        // console.log(input_phone_number_array);


        for(let i = 0;  i <input_phone_number_array.length; i++){
            if (input_phone_number_array[i] == 1) {
                convert_digit.push('');
            } else if (input_phone_number_array[i] == 2){
                convert_digit.push('a');
            } else if (input_phone_number_array[i] == 3){
                convert_digit.push('d');
            } else if (input_phone_number_array[i] == 4){
                convert_digit.push('g');
            } else if (input_phone_number_array[i] == 5){
                convert_digit.push('j');
            } else if (input_phone_number_array[i] == 6){
                convert_digit.push('m');
            } else if (input_phone_number_array[i] == 7){
                convert_digit.push('p');
            } else if (input_phone_number_array[i] == 8){
                convert_digit.push('t');
            } else if (input_phone_number_array[i] == 9){
                convert_digit.push('w');
            } else if (input_phone_number_array[i] == 0){
                convert_digit.push('');
            } 

            // console.log(convert_digit);

        }

        console.log(convert_digit);
        console.log(input_phone_number_array);

        document.querySelector('#output_id').value = convert_digit;


    }

    if (isLetter == true) {

        convert_letter = [];
        let input_phone_number_array = document.getElementById('input_id').value;
        let input_array = Array.from(input_phone_number_array);
        //TODO: handle convert phone number from digit to letter
        // let convertedLetter = [];
        for(let i = 0; i < input_array.length; i++){
            if (input_array[i] === "a"||"b"||"c") {
                convert_letter.push('2');
            } else if (input_array[i] === "d"||"e"||"f") {
                convert_letter.push('3'); 
            } else if (input_array[i] === "g"||"h"||"i") {
                convert_letter.push('4'); 
            } else if (input_array[i] === "j"||"k"||"l") {
                convert_letter.push('5');
            } else if (input_array[i] === "m"||"n"||"o") {
                convert_letter.push('6'); 
            } else if (input_array[i] === "p"||"q"||"r"||"s") {
                convert_letter.push('7'); 
            } else if (input_array[i] === "t"||"u"||"v") {
                convert_letter.push('8'); 
            } else if (input_array[i] === "w"||"x"||"y"||"z") {
                convert_letter.push('9'); 
            }              
        }

        console.log(convert_letter);
        // convert_letter_string = convert_letter.join('');

        document.querySelector('#output_id').value = convert_letter;
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