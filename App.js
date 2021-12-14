const word = document.getElementById("word");
const wrongLetter = document.getElementById("wrong-letter");
const playAgain = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);
const correctLetters = ["a"];
const wrongLetters = [];

function displayWord() {
  word.innerHTML = `
${selectedWord
  .split("")
  .map(
    (letter) =>
      `<span class="letters">${
        correctLetters.includes(letter) ? letter : ""
      }</span>`
  )
  .join("")}`;

  const innerWord = word.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You Won :)";
    popup.style.display = "flex";
  }
}

displayWord();
