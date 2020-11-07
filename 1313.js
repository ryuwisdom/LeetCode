const decompressRLElist = function (nums) {
  let pairs = [];

  // make pairs
  for (let i = 0; i < nums.length / 2 && i >= 0; i++) {
    let freq = nums[2 * i];
    let val = nums[2 * i + 1];
    pairs.push([freq, val]);
  }
  // [freq , val], [freq , val]
  let result = [];

  for (let j = 0; j < pairs.length && j >= 0; j++) {
    for (let i = 0; i < pairs[i]; i++) {
      result.push(pairs[i][1]);
      // console.log("+_+");
    }
  }

  console.log(result);
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4]));
