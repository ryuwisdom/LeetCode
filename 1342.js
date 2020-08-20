const numberOfSteps = function (num) {
    let step = 0 // 의미없는 이름 - 1
    let obtain = num // 헷갈림 -1

    while (obtain !== 0) { // 일단 무한반복에 특정 조건까지라면 while이 적합
        if (obtain % 2 == 0) {
            obtain = obtain / 2
        } else { // 의미없는 else if 
            obtain = obtain - 1
        }
        step++;
    }

    return step

};

// -5 
// if (obtain % 2 == 0) { // -1 조건을 하나 찾기위해서 이상한 조건을 막 갖다붙임
//     obtain = obtain / 2

// } else { // -1 마찬가지
//     obtain = obtain - 1
// }

// step++

console.log(numberOfSteps(14)); //6