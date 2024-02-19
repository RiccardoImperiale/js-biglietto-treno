
// get kilometers and age of the user
const tripKm = Number(prompt('How many kilometers do you like to travel?'));
const userAge = Number(prompt('How old are you'));

// multiply user km by 0.21 € to get the full price
const pricePerKm = 0.21;
let fullPrice = tripKm * pricePerKm;

// subtract 20% of the full price if the user is a minor
if (userAge < 18) {
    fullPrice -= fullPrice / 100 * 20;
}
// subtract 40% of the full price if the user is more than 65
if (userAge >= 65) {
    fullPrice -= fullPrice / 100 * 40;
}

// ensure the final price has a maximum of two decimal places
const finalPrice = fullPrice.toFixed(2);
alert(`The final price is ${finalPrice}€`);