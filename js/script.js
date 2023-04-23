const guessedLetters = document.querySelector(".guessedletters");
const guessedLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remainin span");
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//Function to add placeholders for each letter
const placeholders = function(word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholders(word);

guessedLetterButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value="";
});
