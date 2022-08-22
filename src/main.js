let players = [
  {
    name: "Lionel Messi",
    selected: false,
  },
  {
    name: "Neymar",
    selected: false,
  },
  {
    name: "Robert Lewandowski",
    selected: false,
  },
  {
    name: "Christiano Ronaldo",
    selected: false,
  },
  {
    name: "Luis Suarez",
    selected: false,
  },
  {
    name: "Ansu Fati",
    selected: false,
  },
];

const selectedPlayerList = [];

let totalPlayerCost = 0;
let managerCost = 0;
let coachCost = 0;
let totalCost = 0;

const cards = document.getElementsByClassName("cards")[0];

function selectPlayer(event, index) {
  if (selectedPlayerList.length < 5) {
    players[index].selected = true;
    selectedPlayerList.push(players[index].name);
    console.log(selectedPlayerList);
    renderHTMLCard();
    return;
  }
  alert("Oops! You can't select more than five players");
}

function renderHTMLCard() {
  cards.innerHTML = "";
  for (let i = 0; i < players.length; i++) {
    cards.innerHTML += `
          <div>
          <p>Name: ${players[i].name}</p>
          <button ${
            players[i].selected ? "disabled" : ""
          } onClick="selectPlayer(event, ${i})">Select</button>
          <div>
          `;
  }
}

renderHTMLCard();
