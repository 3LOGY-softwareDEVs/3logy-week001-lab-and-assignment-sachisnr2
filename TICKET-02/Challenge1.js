//To create a funtion named getGrade
//The funtion that takes a students grade ranging for 0-100
//The funtion should return A,B,C,D of F based on the following criteia:
//Return A for the scores greater than or equal to 70 and less than or equal to 100
//Return B for the scores greater than or equal to 60 and less than 70
//Return C for the scores greater than or equal to 50 and less than 60
//Return D for the scores greater than or equal to 45 and less than 50
//Return E for the scores greater than or equal to 40 and less than 45
//Return F for the scores greater than or equal to 0 and less than 40
//Return Invalid Score for otherwise

function getGrade(score) {
// TODO: Return "A", "B", "C", "D", or "F"
if (score >= 70 && score <= 100){
    return "A";
}else if (score >= 60 && score < 70){
    return "B";
}else if (score >= 50 && score < 60){
    return "C";
}else if (score >= 45 && score < 50){
    return "D";
}else if (score >= 40 && score < 45){
    return "E";
}else if (score >= 0 && score < 40){
    return "F";
}else {
    return "Inavlid Score"
}
}
console.log(getGrade(33));