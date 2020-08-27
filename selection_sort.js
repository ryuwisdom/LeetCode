let arr = [4, 1, 3, 9, 7]

// function swap(param){

//     for(let i =0;i<param.length;i++){

//         for(let j = 0;j+i<param.length;j++){

//             if(param[j]>param[j+1]){
//                 [param[j],param[j+1]] = [param[j+1],param[j]]
//             }
//         }
//     }
// return param
// }
// console.log(swap(arr));

function swap(param) {

    let n = param.length

    for (let i = 0; i < n - 1; i++) {
        let minIndex = param[i]
        for (let j = i + 1; j < n; j++) {

            if (param[j] < minIndex) {
                minIndex = param[j]
                [param[i],param[j]] =  [param[j],param[i]]
            }


        }
    }
    return param


}

console.log(swap(arr));