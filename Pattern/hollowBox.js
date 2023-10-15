// Problem Statement

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

function hollowBox(num) {
    let out = "";
    for(let i = 1; i <= num; i++) {
        for(let j = 1 ;j <= num; j++) {
            if(i == 1 || i == num) {
                out += "*"
            }else if(j == 1 || j == num){
                out += "*"
            }else {
                out += " "
            }
        }
        out += "\n"
    }
    console.log(out)
}

let num = 5
hollowBox(num)