//AGE CALCULATOR
//require readline module
//collect username
//collect userage
//display name
//age calculation
            //convert age to number using parseInt
            //covert age to  months {age * 12}
            //convert age to days {age * 365}
            //age calculated * 24

const console = require('console');

const readUserInput = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}); 


readUserInput.question("What is your Name?", userName =>{
    console.log(`You are welcome to 3logy ${userName}`)
    
    readUserInput.question("How old are you?", userAge =>{
        console.log(userAge);
        let age = parseInt(userAge);
        console.log(`Okay! we will calculate your age as follow dear ${userName}`)

console.log(`Your age in month is: ${userAge * 12}`)
console.log(`Your age in days is: ${userAge * 365}`)
console.log(`${userName} Your age in hours is: ${userAge * 8760}`);


        readUserInput.close();
    })

    
})