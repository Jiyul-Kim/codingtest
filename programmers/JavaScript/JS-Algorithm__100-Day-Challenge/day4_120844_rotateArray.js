// 코딩테스트 입문 > 배열 회전시키기
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
  if (direction === "right") {
    const deleteEnd = numbers.pop();
    numbers.unshift(deleteEnd);
    return numbers;
  } else {
    const deleteStart = numbers.shift();
    numbers.push(deleteStart);
    return numbers;
  }
}
solution([1, 2, 3], "right");
solution([4, 455, 6, 4, -1, 45, 6], "left");

// 앗 좀 더 간단하게 적을 수 있었음!!
function solution(numbers, direction) {
    if (direction === "right") {
      numbers.unshift(numbers.pop());
      return numbers;
    } else {
      numbers.push(numbers.shift());
      return numbers;
    }
  }