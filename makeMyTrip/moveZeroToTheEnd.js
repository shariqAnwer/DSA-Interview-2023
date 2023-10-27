//brute force
function zeroToTheEndBF(arr) {
    let nonZero = []
    let Zeros = []
    arr.map(el => el !== 0 ? nonZero.push(el) : Zeros.push(el))
    return nonZero.concat(Zeros)
}

//optimized
function zeroToTheEnd(arr) {
    let c = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            [arr[i], arr[c]] = [arr[c], arr[i]]
            c++
        }
    } 
    return arr
}


let arr = [8, 0, 3, 0, 5, 0]
let x = zeroToTheEnd(arr)
console.log(x)