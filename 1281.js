const subtractProductAndSum = function(n) {
    let multiple = 1
    let plus = 0
    
    const converter = String(n)
    

    for(let i =0;i<converter.length;i++){

        multiple *= converter[i]
        plus += Number(converter[i])
        // console.log(multiple *= converter[i]);
        // console.log(plus += Number(converter[i]));
 
    }

    

    const result = multiple - plus
    return result


};
console.log(subtractProductAndSum(234)); //15



