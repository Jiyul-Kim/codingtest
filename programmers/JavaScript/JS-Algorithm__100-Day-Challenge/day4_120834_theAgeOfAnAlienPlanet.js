// 코딩테스트 입문 > 외계행성의 나이
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

function solution(age) {
  const strAge = String(age);
  const mapfn = (arg) => Number(arg);
  const newArr = Array.from(strAge, mapfn);
  const alienAge = ["a", "b", "c", "d", "e", "f", "g", "h","i" ,"j"];
  let answer = "";
  for (i in newArr) {
    answer += alienAge[newArr[i]];
  }
  return answer
}

solution(100);

// 아 애초에 숫자를 배열로 바꾸지 않아도 됐네.. 숫자를 스트링으로 변경해서 스트링의 인덱스를 이용하면 됐음
// 새로 알아가는 메소드, .toString()
function solution(age) {
  age = age.toString();
  const alienAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let answer = "";
  for (let i = 0; i < age.length; i++) {
    answer += alienAge[age[i]];
  }
  return answer;
}
solution(100);
