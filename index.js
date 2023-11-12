const answerLength = 5;
const rounds = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");

async function init() {

    let currentRow = 0;
    let currentGuess = "";
    let done = false;
    let isLoading = true;

}

// fetch word from API

const res = await fetch("https://words.dev-apis.com/word-of-the-day");
const { word: wordRes } = await res.json ();
const word = wordRes.toUppercase();
const wordparts = word.split("");
isLoading = false;
setLoading(isLoading);
 
