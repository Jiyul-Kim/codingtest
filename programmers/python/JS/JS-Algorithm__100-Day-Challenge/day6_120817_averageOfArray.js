// 코딩테스트 입문 > 배열의 평균값

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// function solution(numbers) {
    
//     for (let i = 0; i<numbers.length; i ++){
//         console.log(numbers[i])
//     } ;
// }
// solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// for (let i = 0; i < numbers.length; i ++){
//     console.log(numbers[i])
// } ;
function solution(numbers) {
    const result = numbers.reduce((a, c) => {
        return a + c;}, 0) 
    return result / numbers.length;
}
// 암시적 반환 써서 좀 더 줄이기
function solution(numbers) {
    return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}