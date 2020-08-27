// Input: N = 10, 
// arr[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
// Output: 1 2 3 4 5 6 7 8 9 10

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// function swap(param, N) {

//     let n = N

//     for (let i = 0; i < n-1; i++) {
//         for (let j = 0; j < n-1; j++) {

//             if (param[j] > param[j + 1]) {
//                 [param[j], param[j + 1]] = [param[j + 1], param[j]]
//             }

//         }
//     }
// return param
// }
// // swap(arr)
// console.log(swap(arr, 10));

arr.sort((a, b) => a - b);

console.log(arr);