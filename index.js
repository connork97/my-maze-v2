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
];

const table = document.getElementById("myTable");


for (let i = 0; i < mazeArray.length; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < mazeArray[i].length; j++) {
    const cell = document.createElement("td");
    cell.setAttribute("data-value", mazeArray[i][j]);
    row.appendChild(cell);
    if (mazeArray[i][j] == 'S') {
      cell.style.paddingRight = "35px";
      cell.style.scale = 2;
      cell.innerHTML = "Start";
    }
    if (mazeArray[i][j] == 'F') {
      cell.style.paddingLeft = "35px";
      cell.style.scale = 2;
      cell.innerHTML = "Finish";
    }
    if (mazeArray[i][j] == 'SC') {
      cell.innerHTML = '<i id="runningPerson" class="fa-solid fa-person-running fa-2xl"></i>';
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
        //Runner faces up on up arrow key press
        $runner = document.getElementById('runningPerson');
        $runner.style.transform = 'rotate(-45deg)';
      } if (mazeArray[currentRow][currentCol + 1] == 'F') {
        window.alert("You've finished the maze!");
      } if (mazeArray[currentRow][currentCol + 1] == 'S') {
        window.alert("Wrong way there bud.");
      }
      break;
    case "ArrowDown":
      if (mazeArray[currentRow + 1][currentCol] == 0) {
        mazeArray[currentRow][currentCol] = 0;
        currentRow++;
        mazeArray[currentRow][currentCol] = 'SC';

        moveDomIcon(currentRow, currentCol);
        //Runner faces down on down arrow key press
        $runner = document.getElementById('runningPerson');
        $runner.style.transform = 'rotate(45deg)';
      } if (mazeArray[currentRow][currentCol - 1] == 'F') {
        window.alert("You've finished the maze!");
      } if (mazeArray[currentRow][currentCol - 1] == 'S') {
        window.alert("Wrong way there bud.");
      }
      break;
    case "ArrowLeft":
      if (mazeArray[currentRow][currentCol - 1] == 0) {
        mazeArray[currentRow][currentCol] = 0;
        currentCol--;
        mazeArray[currentRow][currentCol] = 'SC';

        moveDomIcon(currentRow, currentCol);
        //Runner faces left on left arrow key press
        $runner = document.getElementById('runningPerson');
        $runner.style.transform = 'scaleX(-1)';
      } if (mazeArray[currentRow][currentCol - 1] == 'F') {
        window.alert("You've finished the maze!");
      } if (mazeArray[currentRow][currentCol - 1] == 'S') {
        window.alert("Wrong way there bud.");
      }
      break;
    case "ArrowRight":
      if (mazeArray[currentRow][currentCol + 1] == 0) {
        mazeArray[currentRow][currentCol] = 0;
        currentCol++;
        mazeArray[currentRow][currentCol] = 'SC';

        moveDomIcon(currentRow, currentCol);
        //Runner faces right on right arrow key press
        $runner = document.getElementById('runningPerson');
        $runner.style.transform = 'scaleX(1)';
      } if (mazeArray[currentRow][currentCol + 1] == 'F') {
        window.alert("You've finished the maze!");
      } if (mazeArray[currentRow][currentCol + 1] == 'S') {
        window.alert("Wrong way there bud.");
      }
      break;
  }
  console.clear();
  mazeArray.innerHTML = console.table(mazeArray);
}

function moveDomIcon(arrIndex, arrSubIndex) {
  // Current location of our runner
  document.querySelector('td[data-value=SC]').setAttribute('data-value', 0);
  $runner = document.getElementById('runningPerson');
  $runner.remove();

  // New location of our runner
  $domRow = document.querySelectorAll('tr')[arrIndex].children[arrSubIndex];
  $domRow.setAttribute('data-value', 'SC');
  $domRow.innerHTML = $runner.outerHTML;
}

document.addEventListener("keydown", moveSC);

window.addEventListener("keydown", function(e) {
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
}, false);


// Testing to see about changing up/down directions based on last key pressed (left vs right)
/*
let pressedKeysArr = [];
let lastKey;

function pressedKeys(e) {
  if (e.keyCode == "ArrowLeft" || e.keyCode == "ArrowRight") {
    pressedKeysArr.push(e.key);
    lastKey = pressedKeysArr[pressedKeysArr.length - 1];
  }
}
*/
/*
$('table').on('keydown', function(e) {
  pressedKeys.push(e.key);
  lastKey = pressedKeys[pressedKeys.length - 2]

  $('#output').html(lastKey);
});
*/
