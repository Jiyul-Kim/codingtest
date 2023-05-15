// 코딩테스트 입문 > 팩토리얼
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// i! ≤ n
// 못 풀었음요.. 팩토리얼 자체가 생소해서 ㅋㅋ..

// function solution(n) {
//     var answer = 0;
//     return answer;
// }

// solution()

// 어떻게든 풀려고한 흔적..
// let inputValue = 3628800;
// let result = 1;
// for (let i = 1; i <= inputValue; i++){
//     // console.log(i)
//     inputValue = inputValue / i
//     if (inputValue > 1){
//         // console.log(parseInt(inputValue))
//     }
// }
// console.log( inputValue)

function solution(n) {
    let i = 1;
    let factorial = 1;
    while (factorial <= n){
        i += 1
        factorial *= i
        
    }
    return i-1
}

solution(7)
