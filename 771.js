const numJewelsInStones = function (J, S) {
    let result = 0
    
    for(let j = 0;j<J.length; j++){ 
        
        for (let i = 0; i < S.length; i++) {
            if (J[j] == S[i]) {
                result++
            }
        }

     }
 
    return result

};


console.log(numJewelsInStones("aA", "aAAbbbb"));