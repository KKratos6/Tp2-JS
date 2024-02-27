

let fruits = ["fraise", "pomme", "banane", "orange", "kiwis", "ananas", "poire", "mangue", "clemantine"];
let fruits2 = [];


onclick="createList()"

function createList() {

  let list = document.createElement("ul");


  for (let i = 1; i <= 5; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = "Element " + i;
      list.appendChild(listItem);
  }


  document.getElementById("listContainer").appendChild(list);
}