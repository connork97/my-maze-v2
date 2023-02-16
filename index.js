// Define the maze as a 2D array
const array = [
  1[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  2[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  3[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  4[1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  5[1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  6[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  7[1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  8[1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1 ,1, 1, 1, 1],
  9[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 10[1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 11[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 12[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 13[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21
];

const table = document.getElementById("my-table");


window.onload = function() {
for (let i = 0; i < array.length; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < array[i].length; j++) {
    const cell = document.createElement("td");
    cell.setAttribute("data-value", array[i][j]);
    cell.textContent = array[i][j];
    row.appendChild(cell);
  }
  table.appendChild(row);
}
}



/*
// Set the starting and ending points
const start = { x: 1, y: 1 };
const end = { x: 7, y: 7 };

// Define a function to print the maze to the console
function printMaze(maze) {
  for (let i = 0; i < maze.length; i++) {
    console.log(maze[i].join(' '));
  }
}

// Print the initial maze
console.log('Initial maze:');
printMaze(maze);

// Define a function to solve the maze using recursive backtracking
function solveMaze(maze, x, y) {
  // Check if we have reached the end
  if (x === end.x && y === end.y) {
    return true;
  }

  // Check if the current position is a wall or has already been visited
  if (maze[y][x] === 1 || maze[y][x] === 'X') {
    return false;
  }

  // Mark the current position as visited
  maze[y][x] = 'X';

  // Try moving in all four directions
  if (solveMaze(maze, x + 1, y)) { // Move right
    return true;
  }
  if (solveMaze(maze, x - 1, y)) { // Move left
    return true;
  }
  if (solveMaze(maze, x, y + 1)) { // Move down
    return true;
  }
  if (solveMaze(maze, x, y - 1)) { // Move up
    return true;
  }

  // If we can't move in any direction, backtrack
  maze[y][x] = 0;

  return false;
}

// Solve the maze
console.log('Solving maze...');
solveMaze(maze, start.x, start.y);

// Print the solved maze
console.log('Solved maze:');
printMaze(maze);





/*



const canvas = document.getElementById('maze');
const ctx = canvas.getContext('2d');

// Constants for the maze
const cellSize = 20;
const numCols = Math.floor(canvas.width / cellSize);
const numRows = Math.floor(canvas.height / cellSize);

// Create the maze
const maze = createMaze(numRows, numCols);

// Set the start and finish positions
let startRow = 1;
let startCol = 1;
let finishRow = numRows - 2;
let finishCol = numCols - 2;

// Draw the maze and the character
drawMaze();
drawCharacter(startRow, startCol);

// Move the character using the arrow keys
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      moveCharacter(-1, 0);
      break;
    case 'ArrowDown':
      moveCharacter(1, 0);
      break;
    case 'ArrowLeft':
      moveCharacter(0, -1);
      break;
    case 'ArrowRight':
      moveCharacter(0, 1);
      break;
  }
});

function createMaze(numRows, numCols) {
  // Create a 2D array to represent the maze
  const maze = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    maze[i] = new Array(numCols).fill(1);
  }

  // Set the borders of the maze to be walls
  for (let i = 0; i < numCols; i++) {
    maze[0][i] = 0;
    maze[numRows - 1][i] = 0;
  }
  for (let i = 0; i < numRows; i++) {
    maze[i][0] = 0;
    maze[i][numCols - 1] = 0;
  }

  // Generate the maze using a recursive backtracking algorithm
  const stack = [[1, 1]];
  while (stack.length > 0) {
    const [row, col] = stack.pop();
    if (maze[row][col] === 0) continue;
    maze[row][col] = 0;
    const neighbors = getUnvisitedNeighbors(row, col, maze);
    if (neighbors.length > 0) {
      stack.push([row, col]);
      const [nextRow, nextCol] = neighbors[Math.floor(Math.random() * neighbors.length)];
      removeWall(row, col, nextRow, nextCol, maze);
      stack.push([nextRow, nextCol]);
    }
  }

  return maze;
}

function getUnvisitedNeighbors(row, col, maze) {
  const neighbors = [];
  if (row > 1 && maze[row - 2][col] === 1) {
    neighbors.push([row - 2, col]);
  }
  if (col > 1 && maze[row][col - 2] === 1) {
    neighbors.push([row, col - 2]);
  }
  if (row < maze.length - 2 && maze[row + 2][col] === 1) {
    neighbors.push([row + 2, col]);
  }
  if (col < maze[0].length - 2 && maze[row][col + 2] === 1) {
    neighbors.push([row, col + 2]);
  }
  return neighbors;
}




/*
function createMaze(canvas, cellSize) {
  const ctx = canvas.getContext('2d');
  const width = document.getElementById("canvas").width;
  const height = document.getElementById("canvas").height;

  // Calculate the number of cells in the maze
  const numCols = Math.floor(width / cellSize);
  const numRows = Math.floor(height / cellSize);

  // Create a 2D array to represent the maze
  const maze = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    maze[i] = new Array(numCols).fill(1);
  }

  // Set the borders of the maze to be walls
  for (let i = 0; i < numCols; i++) {
    maze[0][i] = 0;
    maze[numRows - 1][i] = 0;
  }
  for (let i = 0; i < numRows; i++) {
    maze[i][0] = 0;
    maze[i][numCols - 1] = 0;
  }

  // Generate the maze using a recursive backtracking algorithm
  const stack = [[1, 1]];
  while (stack.length > 0) {
    const [row, col] = stack.pop();
    if (maze[row][col] === 0) continue;
    maze[row][col] = 0;
    const neighbors = getUnvisitedNeighbors(row, col, maze);
    if (neighbors.length > 0) {
      stack.push([row, col]);
      const [nextRow, nextCol] = neighbors[Math.floor(Math.random() * neighbors.length)];
      removeWall(row, col, nextRow, nextCol, maze);
      stack.push([nextRow, nextCol]);
    }
  }

  // Draw the maze on the canvas
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (maze[row][col] === 1) {
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }
}

function getUnvisitedNeighbors(row, col, maze) {
  const neighbors = [];
  if (row > 1 && maze[row - 2][col] === 1) {
    neighbors.push([row - 2, col]);
  }
  if (col > 1 && maze[row][col - 2] === 1) {
    neighbors.push([row, col - 2]);
  }
  if (row < maze.length - 2 && maze[row + 2][col] === 1) {
    neighbors.push([row + 2, col]);
  }
  if (col < maze[0].length - 2 && maze[row][col + 2] === 1) {
    neighbors.push([row, col + 2]);
  }
  return neighbors;
}

function removeWall(row1, col1, row2, col2, maze) {
  const wallRow = row1 + Math.floor((row2 - row1) / 2);
  const wallCol = col1 + Math.floor((col2 - col1) / 2);
  maze[wallRow][wallCol] = 0;
}
*/






/*
const map = `WWWWWWWWWWWWWWWWWWWWW
             W   W     W     W W W
             W W W WWW WWWWW W W W
             W W W   W     W W   W
             W WWWWWWW W WWW W W W
             W         W     W W W
             W WWW WWWWW WWWWW W W
             W W   W   W W     W W
             W WWWWW W W W WWW W F
             S     W W W W W W WWW 
             WWWWW W W W W W W W W
             W     W W W   W W W W
             W WWWWWWW WWWWW W W W
             W       W       W   W
             WWWWWWWWWWWWWWWWWWWWW`.split("\n");
             
const fSpace = " "; 
map.forEach((row, index) => {
  row.trim().split("").forEach((path, i) => {
    var span = document.createElement("span");
    span.textContent = fSpace; // default
    span.classList.toggle("blue", path === "W");
    if (path === "S") {
      span.classList.add("start");
      span.textContent = "Start";
    }
    else if (path === "F") {
      span.classList.add("finish");
      span.textContent = "End";
    }
    document.body.appendChild(span);
  });
  document.body.appendChild(document.createElement("br"))
});
*/