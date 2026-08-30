//Assignment 5:  
//Problem: Create a Javascript that checks whether the given username and 
//password match the predefined login credentials using simple variables
let enteredUsername= "admin@emalil.com";
let enteredPassword= "admin@123";
const correctUsername= "admin@emalil.com";
const correctPassword= "admin@123";  

if (enteredUsername===correctUsername && enteredPassword===correctPassword){
    console.log("Login successful");
}
else{
    console.log("Invalid username or password");
}