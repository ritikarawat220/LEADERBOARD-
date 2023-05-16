import "./index.css";
import itemList from "./itemList";
import { getScores, postScores } from "./request";

const TEST_GAME_ID = "ubc1A0KC5FEKLnsszaXFow";

const refreshButton = document.getElementById("refresh-btn");
const form = document.getElementById("form");

refreshButton.addEventListener("click", () => {
  getScores().then((scores) => {
    itemList(scores.result);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("name-input");
  const scoreInput = document.getElementById("score-input");
  const name = nameInput.value;
  const score = parseInt(scoreInput.value, 10);

  // Check that the name and score have no more than 20 letters and 10 digits
  if (name.length > 20) {
    alert("Oopsie! Your name can't be longer than 20 letters. Keep it short and snappy, like a ninja!");
    return;
  }
  if (score.toString().length > 10) {
    alert("Whoa there, cowboy! Scores can't have more than 10 digits. Are you trying to break the game or what?");
    return;
  }

  // If the name and score are valid, post the score to the server
  const body = { user: name, score };
  postScores(TEST_GAME_ID, body);

  // Clear the name and score inputs
  nameInput.value = "";
  scoreInput.value = "";
});


getScores(TEST_GAME_ID).then((scores) => {
  const { result } = scores;
  itemList(result); 
});
