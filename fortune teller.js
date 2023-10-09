// Enter name:
let userName = "Meera";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Enter your question below:
let userQuestion = "Will I die today?"; 
console.log(`${userName} has asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

// You can edit the answers below:
switch (randomNumber) {
  case 0:
    eightBall = "Signs point to yes";
    break;

  case 1:
    eightBall = "Outlook not so good";
    break;

  case 2:
    eightBall = "My sources say no";
    break;

  case 3:
    eightBall = "Do not count on it";
    break;

  case 4:
    eightBall = "Cannot predict now";
    break;

  case 5:
    eightBall = "Reply hazy try again";
    break;

  case 6:
    eightBall = "It is decidedly so";
    break;

  case 7:
    eightBall = "It is certain";
    break;
}

console.log(eightBall);