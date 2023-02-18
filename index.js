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

let currentRow = 10;
let currentCol = 1;

function moveSC(e) {
  switch (e.key) {
    case "ArrowUp":
      if (mazeArray[currentRow - 1][currentCol] == 0) {
        mazeArray[currentRow][currentCol] = 0;
        currentRow--;
        mazeArray[currentRow][currentCol] = 'SC';

        moveDomIcon(currentRow, currentCol);
      } if (mazeArray[currentRow][currentCol] == 'F') {
        window.alert("You've finished the maze!");
      }
      break;
    case "ArrowDown":
      if (mazeArray[currentRow + 1][currentCol] == 0) {
        mazeArray[currentRow][currentCol] = 0;
        currentRow++;
        mazeArray[currentRow][currentCol] = 'SC';

        moveDomIcon(currentRow, currentCol);
      } if (mazeArray[currentRow][currentCol] == 'F') {
        window.alert("You've finished the maze!");
      }
      break;
    case "ArrowLeft":
      if (mazeArray[currentRow][currentCol - 1] == 0) {
        mazeArray[currentRow][currentCol] = 0;
        currentCol--;
        mazeArray[currentRow][currentCol] = 'SC';

        moveDomIcon(currentRow, currentCol);
      } if (mazeArray[currentRow][currentCol] == 'F') {
        window.alert("You've finished the maze!");
      }
      break;
    case "ArrowRight":
      if (mazeArray[currentRow][currentCol + 1] == 0) {
        mazeArray[currentRow][currentCol] = 0;
        currentCol++;
        mazeArray[currentRow][currentCol] = 'SC';

        moveDomIcon(currentRow, currentCol);
      } if (mazeArray[currentRow][currentCol] == 'F') {
        window.alert("You've finished the maze!");
      }   
      break;
  }
  console.clear();
  mazeArray.innerHTML = console.table(mazeArray);
}

function moveDomIcon(arrIndex, arrSubIndex) {
  // Current location of our runner
  document.querySelector('td[data-value=SC]').setAttribute('data-value', 0);
  $runner = document.getElementById('person');
  $runner.remove();

  // New location of our runner
  $domRow = document.querySelectorAll('tr')[arrIndex].children[arrSubIndex];
  $domRow.setAttribute('data-value', 'SC');
  $domRow.innerHTML = $runner.outerHTML;
}

function moveDomIcon(arrIndex, arrSubIndex) {
  // Current location of our runner
  document.querySelector('td[data-value=SC]').setAttribute('data-value', 0);
  $runner = document.getElementById('person');
  $runner.remove();

  // New location of our runner
  $domRow = document.querySelectorAll('tr')[arrIndex].children[arrSubIndex];
  $domRow.setAttribute('data-value', 'SC');
  $domRow.innerHTML = $runner.outerHTML;
}

document.addEventListener("keydown", moveSC);

//console.log(userPosition);

// Testing Out Splice Method to Move User Character //
/*
console.log(mazeArray[10][1]);
console.log(mazeArray[10][2]);

function swap() {
  let index1 = mazeArray[10][1];
  let index2 = mazeArray[10][2];
  
  //index1.innerHTML = index2;
  //index2.innerHTML = index1;
  mazeArray.splice(index1, 1, mazeArray[index2]);
  mazeArray.splice(index2, 1, mazeArray[index1 - 1]);

  console.log(mazeArray);
};

//window.onload = swap;

/*
function moveUserCharacter () {
let y = 10;
let x = 1;
let newPosition;
userPosition = mazeArray[y][x];

console.log(mazeArray[y].splice(1, 1));


document.addEventListener("keydown", (event) =>  {
  const key = event.key;
  let newX;

  switch (key) {
    case "ArrowRight":
      //newX = x++;
      newPosition = mazeArray.splice(1, 1, x++);
      //return newPosition;
      userPosition[y][x] = newPosition[y][x];
    }
}
)
};

window.onload = moveUserCharacter;
*/



//----------------------------------



// Function to Move Character within Maze
/*
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

  if (left >=0) {
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


/*
const goodCell = document.querySelector("td[data-value='0']");
  if (left >= 0 && goodCell.dataset.value !== 1) {
      person.style.left = `${left + 10}px`;
  }
}


let characterPosition = mazeArray[10][1];

document.addEventListener("keydown", (event) =>  {
  const key = event.key;
  let newPosition;

  switch (key) {
    case "ArrowUp":
      newPosition = [characterPosition[0] - 1, characterPosition[1]];
      break;
    case "ArrowDown":
      newPosition = [characterPosition[0] + 1, characterPosition[1]];
      break;
    case "ArrowLeft":
      newPosition = [characterPosition[0], characterPosition[1] - 1];
      break;
    case "ArrowRight":
      newPosition = [characterPosition[0], characterPosition[1] + 1];
      break;
    default:
      return;
  }
//});

if (
  newPosition[0] < 0 ||
  newPosition[0] >= mazeArray[0].length ||
  newPosition[1] < 0 ||
  newPosition[1] >= mazeArray[0][0].cells.length
) {
  return;
}
/*
const newCell = mazeArray.rows[newPosition[0]].cells[newPosition[1]];
if (newCell.dataset.value === "1") {
  return;
}

const characterCell = mazeArray.rows[characterPosition[0]].cells[characterPosition[1]];
characterCell.textContent = " ";
newCell.innerHTML = '<i id="person" class="fa-solid fa-person-running fa-xl"></i>';
characterPosition = newPosition;
});
*/
