const myAge = prompt("How old are you?");
const age = Number(myAge);   
 if (age >= 16) {
    console.log(`You are eligible`);
 } else {
        console.log(`You must be at least 16 years old. It seems you are ${age}`);
    }