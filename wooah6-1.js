function func(logs) {
  const myObj = {};
  const countObj = {};
  for (const log of logs) {
    const arr = log.split(' ');
    if (myObj[arr[0]] === undefined) {
      myObj[arr[0]] = {};
      countObj[arr[0]] = { count: 0 };
    }
    if (myObj[arr[0]][arr[1]] === undefined) countObj[arr[0]].count++;
    myObj[arr[0]][arr[1]] = arr[2];
  }
  const result = [];
  const keys = Object.keys(myObj);
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const a = JSON.stringify(myObj[keys[i]]);
      const b = JSON.stringify(myObj[keys[j]]);
      if (
        a === b &&
        countObj[keys[i]].count === countObj[keys[j]].count &&
        countObj[keys[i]].count > 4
      ) {
        if (!result.includes(keys[i])) result.push(keys[i]);
        if (!result.includes(keys[j])) result.push(keys[j]);
      }
    }
  }
  if (result.length === 0) return ['None'];
  console.log(result);
  return result;
}
