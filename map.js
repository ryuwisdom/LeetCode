let a = 100
let b = 200


function swap(num1, num2) {
    let num3;

    num3 = a;
    a = b;
    b = num3;

}

swap(a, b);



console.log(a, b); // 20 10