function diagonalDifference(arr) {
    let n = arr.length;
    let primarySum = 0;
    let secondarySum = 0;
  
    for (let i = 0; i < n; i++) {
      primarySum += arr[i][i];
      secondarySum += arr[i][n - 1 - i];
    }
  
    return Math.abs(primarySum - secondarySum);
  }
  
  // Exemplo de uso:
  const matrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
  const result = diagonalDifference(matrix);
  console.log(result); // Saída: 15
  