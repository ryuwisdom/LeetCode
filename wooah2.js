function solution(s, op) {
  let answer = [];
  for (let i = 1; i < s.length; i++) {
    if (op === '*') {
      let result = Number(s.substring(0, i)) * Number(s.substring(i, s.length));
      answer.push(result);
    } else if (op === '-') {
      let result = Number(s.substring(0, i)) - Number(s.substring(i, s.length));
      answer.push(result);
    } else if (op === '+') {
      let result = Number(s.substring(0, i)) + Number(s.substring(i, s.length));
      answer.push(result);
    }
  }
  return answer;
}
