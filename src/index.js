import "./index.css";
import itemList from "./itemList";
import { getScores, postScores } from "./request";

const TEST_GAME_ID = "ubc1A0KC5FEKLnzaXFow";

const refreshButton = document.getElementById("refresh-btn");
const form = document.getElementById("form");

refreshButton.addEventListener("click", () => {
  getScores().then((scores) => {
    itemList(scores.result);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const body = {
    user: document.getElementById("name-input").value,
    score: parseInt(document.getElementById("score-input").value, 10),
  };
  postScores(TEST_GAME_ID, body);
  document.getElementById("name-input").value = "";
  document.getElementById("score-input").value = "";
});

getScores(TEST_GAME_ID).then((scores) => {
  const { result } = scores;
  itemList(result); 
});