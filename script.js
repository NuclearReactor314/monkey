const outputDiv = document.getElementById("output");
const targetMessage = `Congrats! You’ve been patient enough to see this. I know this is a bit ridiculous, but I just wanted to tell you that I really like you. I don’t know when I’ll finish this or when you’ll see it, so I’ll take the chance to wish you: Happy Thanksgiving, Merry Christmas, Happy New Year, Happy Easter, and also Good Morning, Good Afternoon, Good Evening, or Good Night.`;

let randomText = "";
let revealTimeout = 45000; // Adjust this value for when to reveal the final message (e.g., 15 seconds).

// Generate random letters
function generateRandomLetters(length) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Update the random text continuously
function startTyping() {
  const interval = setInterval(() => {
    randomText += generateRandomLetters(5); // Append random characters
    if (randomText.length > 500) {
      randomText = randomText.slice(-500); // Keep the text area manageable
    }
    outputDiv.textContent = randomText;
  }, 100);

  // Reveal the final message after the timeout
  setTimeout(() => {
    clearInterval(interval);
    revealMessage();
  }, revealTimeout);
}

// Display the final message
function revealMessage() {
  randomText = targetMessage;
  outputDiv.textContent = randomText;
}

// Start the simulation
startTyping();
