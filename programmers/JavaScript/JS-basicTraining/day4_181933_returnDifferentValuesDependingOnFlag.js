// 코딩테스트 코딩 기초 트레이닝  > 조건 문자열
// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, flag) {
    return flag === true? a+b : a-b
}
solution(-4, 7, false)

// 아. true이기 때문에 굳이 === true 안써도 되는구나
function solution(a, b, flag) {
    return flag ? a+b : a-b;
}