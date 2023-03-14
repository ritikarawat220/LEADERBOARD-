const leaderboardList = document.getElementById("leaderboard-list");

const itemList = (placeholders) => {
    placeholders.forEach((item, i) => {
        const listElement = document.createElement("li");
        listElement.innerHTML = `${item.name}: ${item.score}`;
        if (i % 2 === 1){
            listElement.style.backgroundColor = "#d3d3";
        }
        leaderboardList.appendChild(listElement);
    });
};

export default itemList;