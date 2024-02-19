# Train ticket price calculator

## Instructions
Trenitalia needs a program that will ask the user the number of kilometers he wants to travel and the age of the passenger.

Based on this information you will have to calculate the total price of the trip, according to these rules:
 - The ticket price is defined based on km (0.21 € per km)
 - A 20% discount applies for minors
 - A 40% discount applies for those over 65

The final price output must be put out in human form (with a maximum of two decimal to indicate cents on the price).

## Steps

- STEP 1: Ask the user Number of kilometers he want to travel and The age
  - add two prompt to get kilometers and age of the user
  - save them into variables
- STEP 2: Calculate the price based on km
  - multiply user km by 0.21 € to get the full price of the kilometers   
- STEP 3: Apply a discount if applicable 
  - if the user's age is less than 18
    - decrease the full price by 20%
  - if the user's age is more than 65
    - decrease the full price by 40%
- STEP 4: Output the final price in human form with a maximum of two decimal
  - ensure the final price has a maximum of two decimal places

