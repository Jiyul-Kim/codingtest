// 코딩테스트 입문 > 컨트롤 제트

// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

// const num = "10 20 30 40".split(' ')
// let newArr = [];
// let answer = 0;

// for (let i = 0; i < num.length; i++){
//     let indexZ = num.indexOf("Z")
//     if (indexZ === -1){
//         console.log(num.map(Number).reduce((a,b) => (a+b)))
//     } else {
//         const removed = num.splice(indexZ-1, 2)
//         if (num.includes('Z')===false){
//             break
//         }
//     }
// }
// if (num.length === 0){
//     console.log(0)
// } else {
//     const result = num.map(Number).reduce((a,b) => (a+b))
//     console.log(result)
// }

function solution(s) {
  const num = s.split(" ");

  for (let i = 0; i < num.length; i++) {
    let indexZ = num.indexOf("Z");
    if (indexZ === -1) {
      return num.map(Number).reduce((a, b) => a + b);
    } else {
      const removed = num.splice(indexZ - 1, 2);
      if (num.includes("Z") === false) {
        break;
      }
    }
  }
  if (num.length === 0) {
    return 0;
  } else {
    return num.map(Number).reduce((a, b) => a + b)
  }
}
console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("-1 -2 -3 Z"));

// 좀 더 쉽게 풀 수 있었네

function solution(s){
    s = s.split(' ');
    let result = [];
    for (let i of s){
        if (i === "Z"){
            result.pop()
        } else {
            result.push(+i)
        }
    }
    return result.reduce((a,c) => a+c, 0)
}
console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("-1 -2 -3 Z"));