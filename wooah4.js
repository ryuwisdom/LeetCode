function solution(n, board) {
  let answer = 0;

  let answer = 0;
  let temp = [];
  let start = [0, 0];
  let x,
    y = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp.push(0);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp[board[i][j] - 1] = [i, j];
    }
  }
  for (let i = 0; i < n * n; i++) {
    let distanceX = Math.abs(temp[i][0] - start[0]);
    let minX = Math.min(distanceX, n - distanceX);
    let distanceY = Math.abs(temp[i][1] - start[1]);
    let minY = Math.min(distanceY, n - distanceY);
    start[0] = temp[i][0];
    start[1] = temp[i][1];
    answer += minX + minY + 1;
  }
  return answer;
}
