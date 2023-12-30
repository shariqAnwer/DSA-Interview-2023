

function explore(row, col, input) {
  // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
  if(row < 0 || col < 0 || row >= input.length || col >= input[row].length || input[row][col] === '0')
  return 

      //Otherwise, we should explore it!
    //First let's set the current spot to "0"
    input[row][col] ='0'
    //1 to the right, left, up, down
    explore(row, col + 1, input)  //right
    explore(row, col-1, input)    //left
    explore(row+1, col, input)    //down
    explore(row-1, col, input)    //up
}

function noOfIslands(input) {
  let islandCount = 0;

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if (input[row][col] == "1") {
        islandCount++;
        explore(row, col, input);
      }
    }
  }

  return islandCount;
}

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(noOfIslands(grid));





//recursion &dfs
