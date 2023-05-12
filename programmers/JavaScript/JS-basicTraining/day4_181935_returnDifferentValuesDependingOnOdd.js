// 코딩테스트 코딩 기초 트레이닝  > 홀짝에 따라 다른 값 반환하기
// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % 2 !== 0) {
      if (i % 2 !== 0) {
        answer += i;
      }
    } else {
      if (i % 2 == 0) {
        answer = answer + i ** 2
      }
    }
  }
  return answer
}
solution(7);
