
const defangIPaddr = function(address) {
    let result = ""
   
    result = address.replace(/\./g, "[.]")
   
    return result
};

console.log(defangIPaddr("1.1.1.1"));

