// 코딩테스트 입문 > 가까운 수
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 진짜 한 시간 이상 푼듯.. 대박.. 풀었다.. 이거 17점 짜리 문제였음..

function solution(array, n) {
    array.sort((a, b)=> a-b)
    let difference = 0;
    let result = []
    for (let i = 0; i < array.length; i ++){
        difference=  Array(Math.abs(n-array[i])).length
        result.push(difference)
    }
    const minIdex = result.indexOf(Math.min(...result))
    return array[minIdex]
}
// solution([3, 10, 28], 20)
solution([10, 13, 11], 12)
solution([12, 3, 4, 10, 13], 11)

// const test1 = [3, 10, 28];
// const test2 = 20;
// let difference = 0;
// let result = []
// for (let i = 0; i < test1.length; i ++){
//     difference=  Array(Math.abs(test2-test1[i])).length
//     result.push(difference)
// }
// // console.log(result)
// const minIdex = result.indexOf(Math.min(...result))
// console.log(test1[minIdex])
// // console.log(result.findIndex((num) => Math.min(num)))
// // console.log(result.filter((num) => Math.min(num)));