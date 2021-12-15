const word = document.querySelector("#word");
const wrongLetter = document.querySelector("#wrong-letters");
const playAgain = document.querySelector("#play-button");
const popup = document.querySelector("#popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["clarusway", "javascript", "interface", "react"];

let selectedWord = words[Math.floor(Math.random() * words.length)]; //random word

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  word.innerHTML = `
${selectedWord
  .split("")
  .map(
    (letter) =>
      `<span class="letter">${
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

function updateWrongLetters() {
  wrongLetter.innerHTML = `
  ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  figureParts.forEach((bodyPart, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      bodyPart.style.display = "block";
    } else {
      bodyPart.style.display = "none";
    }
  });
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Unfortunately you lost :(";
    popup.style.display = "flex";
  }
}
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 222) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLetters();
      } else {
        showNotification();
      }
    }
  }
});

playAgain.addEventListener("click", () => {
  correctLetters.splice(0);
  wrongLetters.splice(0);
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  updateWrongLetters();
  popup.style.display = "none";
});
displayWord();
