
// get kilometers and age of the user
const tripKm = Number(prompt('How many kilometers do you like to travel?'));
const userAge = Number(prompt('How old are you'));

// multiply user km by 0.21 € to get the full price
const pricePerKm = 0.21;
let fullPrice = tripKm * pricePerKm;

console.log(fullPrice);