const myArray = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 'F'],
  [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0 ,0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
['S', 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23
];

    
const table = document.getElementById("myTable");
    
for (let i = 0; i < myArray.length; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < myArray[i].length; j++) {
    const cell = document.createElement("td");
    cell.setAttribute("data-value", myArray[i][j]);
    //cell.textContent = myArray[i][j];
    row.appendChild(cell);
  }
  table.appendChild(row);
}

function init() {
  person = document.getElementById("person");
  person.style.position = "absolute";
  person.style.left = "0";
  person.style.top = "0";
}

function movePersonRight() {
  const rightNumbers = person.style.left.replace("px", "");
  const left = parseInt(rightNumbers, 10);

  if (left >= 0) {
      person.style.left = `${left + 10}px`;
  }
}

function movePersonLeft() {
  const leftNumbers = person.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left >= 0) {
      person.style.left = `${left - 10}px`;
  }
}

function movePersonUp() {
  const topNumbers = person.style.top.replace("px", "");
  const top = parseInt(topNumbers, 10);

  if (top >= 0) {
      person.style.top = `${top - 10}px`;
  }
}

function movePersonDown() {
const bottomNumbers = person.style.top.replace("px", "");
const top = parseInt(bottomNumbers, 10);

if (top >= 0) {
    person.style.top = `${top + 10}px`;
}
}


document.addEventListener("keydown", function (e) {
if (e.key === "ArrowLeft") {
    movePersonLeft();
}
if (e.key === "ArrowRight") {
    movePersonRight();
}
if (e.key === "ArrowUp") {
    movePersonUp();
}
if (e.key === "ArrowDown") {
    movePersonDown();
}
});

window.onload = init;

/*
var person = null;
var row = null;

let wallVal = document.querySelector("mazeVal").value;
*/