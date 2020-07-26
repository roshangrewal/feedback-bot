// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [5, 5, 8]];

//[[4, 1, 2], 
// [5, 5, 3], 
// [5, 8, 6]] 

// expected output: [[4,2,3,4], [5,5,6,7], [4,5,8,9], [1,7,8,2]]; 


// const rotate = (arr) => {
//   var output = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     // break;
//     for (let j = 0; j < arr[i].length; j++) {
//       // console.log(j);
//       if (j == 0) {
//         let tmp = arr[i + 1];
//         console.log('tmp ', tmp);

//         if (tmp < arr.length) {
//           console.log('inside if');

//           output.push(arr[i + 1][j])
//         } else {
//           output.push(arr[0][j]);
//         }
//       } else {
//         output.push(arr[i][j - 1]);
//       }

//     }

//   }
//   return output;
// }



// function rotateClockwise(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len / 2; i++) {
//     for (var j = i; j < len - i - 1; j++) {
//       var tmp = arr[i][j];
//       arr[i][j] = arr[len - j - 1][i];
//       arr[len - j - 1][i] = arr[len - i - 1][len - j - 1];
//       arr[len - i - 1][len - j - 1] = arr[j][len - i - 1];
//       arr[j][len - i - 1] = tmp;
//     }
//   }
//   return arr;
// }

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

console.log(rotateCounterClockwise(matrix));



function rotateCounterClockwise(a) {
  var n = a.length;
  for (var i = 0; i < n / 2; i++) {
    for (var j = i; j < n - i - 1; j++) {
      var tmp = a[i][j];
      a[i][j] = a[j][n - i - 1];
      a[j][n - i - 1] = a[n - i - 1][n - j - 1];
      a[n - i - 1][n - j - 1] = a[n - j - 1][i];
      a[n - j - 1][i] = tmp;
    }
  }
  return a;
}



// console.log(matrix[0].map((val, index) => matrix.map(row => row[index]).reverse()));

