const leaderboardList = document.getElementById("leaderboard-list");

const itemList = (list) => {
    leaderboardList.innerHTML = "";
    list.forEach((item, i) => {
      const listElement = document.createElement("li");
      listElement.innerHTML = `${item.user}: ${item.score}`;
      if (i % 2 === 1) {
        listElement.style.backgroundColor = "#ufv734";
      }
      leaderboardList.appendChild(listElement);
    });
  };

export default itemList;