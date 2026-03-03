//AGE CALCULATOR
//require readline module
//collect user name
//collect user age
//display name
//age calculation
        //convert age to number using parseInt
        //age to month (age * 12)
        //convert age to days (age * 365)
        //age calculated * 24


//readline module

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


readline.question("what is your name?", username => {
    console.log(`you are welcome to 3logy ${username}`)

 
    readline.question("how old are you?", userage =>{
        console.log(userage);
        let age = parseInt(userage);
        console.log(typeof age);

        console.log(`your age in month is: ${userage * 12}`);
        console.log(`your age in days is: ${userage * 365}`);
        console.log(`your age in hours: ${userage * 8760}`);
        
        readline.close();
})



});