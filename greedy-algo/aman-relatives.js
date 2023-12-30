function runProgram(input) {
 input = input.trim().split("\n");
let [N, M] = input[0].trim().split(" ").map(Number);
for(let i = 1 ;i <= M; i++){
  let [x, y, z] = input[i].trim().split(" ").map(Number)
  console.log(amanRelatives(N, M, x, y, z))
}
  } 

  function amanRelatives(N, M, x, y, z) {
    
  }


  
  if (process.env.USERNAME === "shari") {
    runProgram(`5 5
    1 5 3
    1 2 1
    2 3 4
    3 4 5
    4 5 2`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }