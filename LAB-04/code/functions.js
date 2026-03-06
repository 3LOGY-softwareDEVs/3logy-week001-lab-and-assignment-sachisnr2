//SIMPLE FUNCTION
//FUNCTION WITH RETURN
//FUNCTION WITH LOGIC
//greet a user by name
//name as parameter

function greetUser(Aisha) {
    console.log("good day," + Aisha + "! how may we help you?");
}
 //add number
 function addNumbers(number1, number2) {
    return number1 + number2;
 }

 //is number even?
function isEven(number) {
    if (number % 2 ===0) {
        return true;
    } else {
        return false;
    }
}

//call greeting function
greetUser("Aisha");

//call sum function
let sum = addNumbers(70, 20);
console.log("sum is:", sum);
//call even check function
let result = isEven(20);
console.log("is the number even?", result);