//Simple If/Else
//Check if a number is positive or negative
 //Log appropriate message

 let number = 20
 if(number > 10) {
    console.log("the number is positive");
 } else {
    console.log("the number is zero");
 }

//Multiple Conditions (else if)
//Check a student's score (0-100)
//Assign letter grade (A, B, C, D, F)
//Log the grade with the score

const score = 56
if (score >= 90) { 
    grade = "A"; 
} else if (score >= 80) { 
    grade = "B"; 
} else if (score >= 70) { 
    grade = "C"; 
} else if (score >= 60) { 
    grade = "D"; 
} else { 
    grade = "F"; 
} 
  console.log(`You got a ${score}: ${grade}!`); 

//Nested Conditions
//Check if someone can vote (age >= 18)
 //If yes, check if they're registered
 //Log appropriate message

 let age = 18
 let isRegistered = true
 if (age > 18) {
    console.log("you're right to vote.");
 } else if (isRegistered) {
    console.log("you are elogible to vote and registered!");
 } else {
    console.log("you are eligible to vote!");
 }
  

