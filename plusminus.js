/*n = arr.legth;

function plusMinus (arr){
    for (let i = 0; i < n; i++{
        if (arr[i] > 0){
        
        let positive = (positive +1)
    } if (arr[i] < 0){
        let negative = (negative +1)
    }

    if (arr[i] == 0){
        let zero = (zero +1)
    }

    let proportionPositive = negative.valu/n;
})
}*/

function plusMinus(arr) {
  const n = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  const positiveRatio = positiveCount / n;
  const negativeRatio = negativeCount / n;
  const zeroRatio = zeroCount / n;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}


