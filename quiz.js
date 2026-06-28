"use strict";
/*jshint browser: true, devel: true */
/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: [ask user about my favorite color (Red)]
    -variable: favColorResp
   - Correct answer: Red
   - If (favColorResp === "Red"){
   print( "That is correct!")
   score= score + 1
   
   else print("Sorry, that is not correct.")
   }
   
   Question 2: [ask user about my preferred shoe brand (Nike)]
    -variable: prefBrand
   - Correct answer: Nike
   - If (prefBrand === "Nike)"{
   print( "That is correct!")
   score= score + 1
   
   else print("Sorry, that is not correct.")
   }
   
    Question 3: [ask user about my favorite season. (Winter)]
    -variable: favSeasonResp
   - Correct answer: Winter
   - If (favSeasonResp === "Winter"{
   print( "That is correct!")
   score= score + 1
   
   else print("Sorry, that is not correct.")
   }
   
   Question 4: [ask user about my dogs breed. (Bully)]
    -variable: dogsBreed
   - Correct answer: Bully
   - If (dogsBreed === "Bully"{
   print( "That is correct!")
   score= score + 1
   
   else print("Sorry, that is not correct.")
   }
6. Math: How will I calculate the percentage?
grade=(score / by 4 )*100
7. Final feedback logic (if / else if / else):

if (score === 4 || score == 3)
alert("good job.")

if (score <= 2) 
alert("Better luck next time.")
*/

console.log("=== My Quiz Game ===");

// Initialize score
let score = 0;
// Question 1
let favColorResp = prompt("What is my favorite color? (Hint: It is a primary color.)");
if (favColorResp && favColorResp.trim() !== ""){  
favColorResp = favColorResp.toLowerCase();
    if (favColorResp === "red"){
        alert( "That is correct!");
        score = score + 1;}
   else alert("Sorry, that is not correct.");
}
        
// Question 2
let prefBrand = prompt("What is my preferred shoe brand?");
if (prefBrand&& prefBrand.trim() !== ""){  
prefBrand = prefBrand.toLowerCase();
if (prefBrand === "nike"){
        alert( "That is correct!");
        score = score + 1;}
   else alert("Sorry, that is not correct.");
}
// Question 3
let favSeasonResp = prompt("What is my Favorite Season? Hint: It's usually cold.");
if (favSeasonResp && favSeasonResp.trim() !== ""){  
favSeasonResp = favSeasonResp.toLowerCase();
if (favSeasonResp === "winter"){
        alert( "That is correct!");
        score = score + 1;}
    else alert("Sorry, that is not correct.");}
// Question 4
let dogsBreed = prompt("What is the breed of my dog? (Hint: It is an American...)");
if (dogsBreed && dogsBreed.trim() !== ""){  
dogsBreed = dogsBreed.toLowerCase();
if (dogsBreed === "bully"){
        alert( "That is correct!");
        score = score + 1;}

   else alert("Sorry, that is not correct.");}
// Calculate percentage using math
let grade = (score / 4 )*100;
// Final feedback using if / else if / else

if (score === 4 || score === 3){
alert("You got a " + grade + "% Good Job!");
}

else if (score <= 2){
alert("You got a " + grade + "% Better luck next time.");
}


// Additional feedback with logical operators

// Final summary alert