const getScores = async (id) => { //eslint-disable-line no-unused-vars
    const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ubc1A0KC5FEKLnzaXFow/scores";
    const response = await fetch(url, { method: "GET" });
    const scores = await response.json();
    return scores;
  };
  
  const postScores = async (id, body) => { 
    const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ubc1A0KC5FEKLnzaXFow/scores";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  
  export { getScores, postScores };
  