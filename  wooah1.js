function solution(grades, weights, threshold) {
  let gradesConvert = [];
  let sumOfweights = 0;
  let answer = 0;

  for (let i = 0; i <= grades.length; i++) {
    if (grades[i] === 'A+') {
      grades[i] = 10;
    }
    if (grades[i] == 'A0') {
      grades[i] = 9;
    }
    if (grades[i] == 'B+') {
      grades[i] = 8;
    }
    if (grades[i] == 'B0') {
      grades[i] = 7;
    }
    if (grades[i] == 'C+') {
      grades[i] = 6;
    }
    if (grades[i] == 'C0') {
      grades[i] = 5;
    }
    if (grades[i] == 'D+') {
      grades[i] = 4;
    }
    if (grades[i] == 'D0') {
      grades[i] = 3;
    }
    if (grades[i] == 'F') {
      grades[i] = 0;
    }
  }

  for (let i = 0; i < weights.length; i++) {
    gradesc.push(grades[i] * weights[i]);
  }
  sumOfweights = gradesConvert.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (answer = sumOfweights - threshold);
}

solution(['A+', 'D+', 'F', 'C0'], [2, 5, 10, 3], 50);
