'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b); // Ordenar o array em ordem crescente
  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    minSum += arr[i]; // Soma dos 4 menores elementos
    maxSum += arr[i + 1]; // Soma dos 4 maiores elementos
  }

  console.log(minSum + ' ' + maxSum);
}



function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
