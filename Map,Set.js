// Map
let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1)); // num1
console.log(map.get('1')); // str1

console.log(map.size); // 3

// Map은 키로 객체를 허용
let bonnie = {
    name: "bonnie"
};
let visitsCountMap = new Map();
visitsCountMap.set(bonnie, 5);
// bonnie를 맵의 키로 
console.log(visitsCountMap.get(bonnie)); // 5

// 만약 객체형 키를 객체에 쓴다면? 
let ryu = {
    name: 'ryu'
};
let ryu2 = {
    name: 'ryu2'
};
let visitCountObj = {};

visitCountObj[ryu] = 6
visitCountObj[ryu2] = 62


console.log(visitCountObj['object Object']);
console.log(visitCountObj);

// Iteration over Map
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
} // cucumber, tomatoes, onion

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount);
} // 500, 350, 50

// itertate over [key, value] entries
for (let entry of recipeMap) {
    // the same as of recipeMap.entries()
    console.log(entry); // ["cucumber", 500], ["tomatoes", 350], ["onion", 50]
}

// forEach 
// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
    console.log(`${key}:${value}`);
}) // cucumber:500, tomatoes:350, onion:50

// Obeject.entries: Map from Object

// arry of [key, value] pairs
let mapA = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);
console.log(mapA.get('1')); // str1

// 평범한 객체로 Map을 만들땐 내장메서드 Obeject.entries(obj)을 활용해야한다.
let obj = {
    name: "bonnie",
    age: 28
};
let mapB = new Map(Object.entries(obj));
console.log(mapB.get('name'));


// Object.fromEntries: Object from Map
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['peach', 4]
])

console.log(prices.orange);

let mpcC = new Map();
map.set('banana', 1),
map.set('orange', 2);
map.set('peach', 4);

let obj1 = Object.fromEntries(map.entries());
// let obj1 = Object.fromEntries(map); - entries() 생략해도 동일

console.log(obj1.peach);

// set
// 중복을 허용하지 않는 값을 모아놓은 컬렉션. 
// set 내에 동일한 value가 있다면 set.add(value)을 아무리 많이 호출하더라도 반응x

// ex)방문자 방명록 제작시, 방문 횟수 상관없이 단 한번만 기록할때 

let set = new Set();

let miffy = { name: "miffy"}
let wisdom = { name: "wisdom"}
let Ryu = { name: "Ryu"}

// miffy가 중복
set.add(miffy);
set.add(wisdom);
set.add(ryu);
set.add(miffy);

console.log(set.size); // 3 - 중복제외됨

for (let user of set){
    console.log(user.name); 
} // miffy, wisdom, ryu만 출력 (중복제외)


// Iteration over Set
// for of 사용 

let set1 = new Set(["oranges", "apples", "bananas"]);
for( let value of set1) console.log(value); 

// forEach로도 동일하게 나온다
set.forEach((value, valueAgain, set) => {
    alert(value);
  });