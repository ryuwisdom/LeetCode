function solution(money, expected, actual) {
  let batting = 100;
  var answer = money;
  for (let i = 0; i < actual.length; i++) {
    if (expected[i] !== actual[i]) {
      answer -= batting;
      batting *= 2;
      if (answer < batting) {
        batting = answer;
        if (answer < 0) {
          return 0;
        }
      }
    } else {
      if (answer === batting) {
        answer *= 2;
        batting = 100;
      } else {
        answer += batting;
        batting = 100;
      }
    }
  }
  return answer;
}
