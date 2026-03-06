//Declare a score (0-100)
//Calculate letter grade based on score
//Display score and corresponding letter grade

let score = 73 
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
  console.log(`score is ${score}: ${grade}!`); 