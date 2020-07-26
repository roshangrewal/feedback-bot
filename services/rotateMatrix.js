const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [5, 5, 8]];

const rotate = (arr) => {
  let len = arr.length;

  for (let i = 0; i < len / 2; i++) {
    console.log(arr[i]);
    for (let j = i; j < len - i - 1; j++) {
      // console.log(j);

      var temp = arr[i][j];
      // console.log(temp);
      arr[i][j] = arr[len - j - 1][i];
      arr[len - j - 1][i] = arr[len - i - 1][len - j - 1];
      arr[len - i - 1][len - j - 1] = arr[j][len - i - 1];
      arr[j][len - i - 1] = temp;

    }
  }
  return arr;
}

console.log(rotate(matrix));
