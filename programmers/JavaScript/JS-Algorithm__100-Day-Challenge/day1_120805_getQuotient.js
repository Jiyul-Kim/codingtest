// 몫 구하기
// num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.

function solution(num1, num2) {
    const answer = parseInt(num1 / num2)
    return answer
}
solution(1,2)
// 이렇게도 가능합니다.
function solution(num1, num2) {
    const answer = ~~(num1 / num2);
    return answer
}
// ~~는 