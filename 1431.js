//  @param {number[]} candies
//  @param {number} extraCandies
//  @return {boolean[]}

const kidsWithCandies = function (candies, extraCandies) {
  let arr = [];

  for (let i = 0; i < candies.length; i++) {
    let a = extraCandies + candies[i];

    if (a >= Math.max.apply(null, candies)) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
//[true,true,true,false,true]
