const mazeArray = [
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
['S', 'SC', 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23
];

const startPoint = mazeArray[10][0].position;


const table = document.getElementById("myTable");
    
for (let i = 0; i < mazeArray.length; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < mazeArray[i].length; j++) {
    const cell = document.createElement("td");
    cell.setAttribute("data-value", mazeArray[i][j]);
    //cell.textContent = myArray[i][j];
    row.appendChild(cell);
    if (mazeArray[i][j] == 'S') {
      cell.style.paddingRight = "25px";
      cell.style.scale = 1.5;
      cell.innerHTML = "Start";
    }
    if (mazeArray[i][j] == 'F') {
      cell.style.paddingLeft = "25px";
      cell.style.scale = 1.5;
      cell.innerHTML = "Finish";
    }
    if (mazeArray[i][j] == 'SC') {
      cell.innerHTML = '<i id="person" class="fa-solid fa-person-running fa-xl"></i>';
    }
  }
  table.appendChild(row);
}

/*
const goodCell = document.querySelector("td[data-value='0']");
  if (left >= 0 && goodCell.dataset.value !== 1) {
      person.style.left = `${left + 10}px`;
  }
}
*/
function init() {
  person = document.getElementById("person");
  person.style.position = "absolute";
  person.style.left = "0";
  person.style.top = "0";
}

function movePersonRight() {
  const rightNumbers = person.style.left.replace("px", "");
  const left = parseInt(rightNumbers, 10);

  if (left >= 0 && td[data-value=="0"]) {
      person.style.left = `${left + 10}px`;
  }
}

function movePersonLeft() {
  const leftNumbers = person.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left >= 0 && td[data-value=="0"]) {
      person.style.left = `${left - 10}px`;
  }
}

function movePersonUp() {
  const topNumbers = person.style.top.replace("px", "");
  const top = parseInt(topNumbers, 10);

  if (top >= 0 && td[data-value=="0"]) {
      person.style.top = `${top - 10}px`;
  }
}

function movePersonDown() {
const bottomNumbers = person.style.top.replace("px", "");
const top = parseInt(bottomNumbers, 10);

if (top >= 0 && td[data-value=="0"]) {
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
while (myArray[i][j] == 'S') {
  const startPoint = myArray[i][j];
  startPoint.innerHTML = startPoint.textContent;
  startPoint.style[z-index] = 11;
}

  while (myArray[10][0] == 'S') {
    const startPoint = myArray[10][0];
    startPoint.textContent = startPoint;
  }
*/
// User Character Movement

/*
const myPerson = document.getElementById("person");
const computedStyle = getComputedStyle(myPerson);
const backgroundColor = computedStyle.backgroundColor;
*/

/*
var person = null;
var row = null;

let wallVal = document.querySelector("mazeVal").value;
*/