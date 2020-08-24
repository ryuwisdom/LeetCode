var smallerNumbersThanCurrent = function (nums) {

    let result = []

   
    let answer = 0


    for (let j = 0; j < nums.length; j++) {
        for(let i = 0;i< nums.length;i++){
            if (nums[i] < nums[j] && j != i) {
                answer++
            }
            
        }
        result.push(answer)
        answer = 0
        
    }

    
    return result
    
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));


