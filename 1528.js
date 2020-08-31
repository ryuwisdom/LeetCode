// const restoreString = function(s, indices) {
//   let answer = {}
// for(let i = 0;i<s.length;i++){

//   answer[indices[i]] = s[i]

// }

// const submit = Object.values(answer)
// console.log(submit.join(''));
// return submit.join('')
// };

// console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3])); //"leetcode"

const arr = [1, 2, 3, 4, 5];

const callback = function (a){
  return a*10
}
// arr.map(a)
console.log(arr.map(callback));


// map 함수는 
// 파라미터로 받은 함수를
// .앞에있는 배열의 모든 요소에
// 적용시킨다
