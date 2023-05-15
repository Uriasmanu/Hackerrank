/* Minha tentativa
let arr = [1,2,3,4,10,11]
let sum = 0

function simplesSum () {
    for (let i = 0; i < arr.length; i++){
        sum = arr[i]
    }
}

console.log(sum) */

// Resposta correta
function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
