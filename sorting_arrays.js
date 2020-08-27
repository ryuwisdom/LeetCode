// sort()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
// reverse()
console.log(fruits.reverse());

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a,b){return a - b}));

//  array descending
const descending = [40, 100, 1, 5, 25, 10];
console.log(descending.sort(function(a, b){return b - a}));

// Sorting an Array in Random Order
const random = [40, 100, 1, 5, 25, 10];
console.log(random.sort(function(a, b){return 0.5 - Math.random()}));

// Math.max ()
console.log(Math.max(...points));
console.log(Math.max.apply(null, [40, 100, 1, 5, 25, 10])); //동일한 결과
console.log(Math.max(...[40, 100, 1, 5, 25, 10])); //동일한 결과
console.log(Math.max(40, 100, 1, 5, 25, 10));

// Math.min ()
console.log(Math.min.apply(null,points));

// 객체 배열 정렬

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
]
console.log(cars.sort(function(a,b){return a.year - b.year}));