
const defangIPaddr = function(address) {
    let result = ""
    // for(let i = 0;i<address.length;i++){      
    //     // console.log(result);
    // }
    // result = address.replace(/'.'*/g, "[.]")

    result = address.replace(/\./g, "[.]")
   
    return result
};

console.log(defangIPaddr("1.1.1.1"));

