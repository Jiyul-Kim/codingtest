// 코딩테스트 코딩 기초 트레이닝  > 공배수
// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
function solution(number, n, m) {
    if (number%n===0 && number%m===0){
        return 1        
    } else {

        return 0
    }
}
solution(60, 2, 3)
solution(55, 10, 5)

// 뭐자? 내가 쓴 삼항 연산자랑 다를 게 없는데..
function solution(number, n, m) {
    return number%n===0 && number%m===0 ? 1:0;
}