// // 코딩테스트 입문 > 배열의 평균값

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
    
//     for (let i = 0; i<numbers.length; i ++){
//         console.log(numbers[i])
//     } ;
// }
// solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < numbers.length; i ++){
//     console.log(numbers[i])
// } ;
let result = 0;
result = numbers.reduce((a, c, i) => {
    return a + c;}, 0)
console.log(a)