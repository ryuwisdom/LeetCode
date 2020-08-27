
const restoreString = function(s, indices) {
    
let i = 0
let map = new Map();
for(let i = 0;i<s.length;i++){

    
    map.set(s[i], indices[i])
    
    
}
console.log([indices[i] , s[i]]);



};
console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3])); //"leetcode"