// Input: N = 5, arr[] = { 4, 1, 3, 9, 7}
// Output: 1 3 4 7 9
let arr = [4, 1, 3, 9, 7]

function swap(param) { // 파라미터를 설정했지만 쓰지않음 => 파라미터를 설정하고 함수내부에서 파라미터를 사용할것
    const n = param.length // 배열 길이는 함수 내부에서 계산

    for (let i = 0; i<n-1; i++) {

        for (let j = 0; j<n-1; j++) {

            if (param[j] > param[j + 1]) {
              
             [param[j], param[j + 1]] = [param[j + 1], param[j]]
            
            }
           
        }
        
    }
    
}
swap(arr);
console.log(arr);