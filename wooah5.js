function solution(penter, pexit, pescape, data) {
  let packElement = [penter, pexit, pescape];
  let prefixFordata = pescape;
  let len = penter.length;
  let dataArr = [];
  let tempStr = '';
  let cnt = 0;
  let temp = [];
  for (let i = 0; i < data.length; i++) {
    tempStr += data[i];
    if (tempStr.length % penter.length === 0) {
      temp.push(tempStr);
      tempStr = '';
    }
  }
  let answer = temp.map((el, idx) => {
    return packElement.indexOf(temp[idx]) > -1 ? pescape + el : el;
  });
  answer = answer.join('');
  return penter + answer + pexit;
}
