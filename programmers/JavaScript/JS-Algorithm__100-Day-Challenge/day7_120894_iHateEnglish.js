// 코딩테스트 입문 > 영어가 싫어요
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때|numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// 못 풀었음.. 걍 쉬운 문제였고.. 객체로 만드는게 맞았음..
// 진심 내가 너무 어렵게 생각했다,..

// function solution(numbers) {
//     const engNum = [zero|one|two|three|four|five|six|seven|eight|nine]
//     let result = [];
//     let answer = [];
//     for (let i = 0; i < engNum.length; i++){
//         let numStIdx = numbers.indexOf(engNum[i])
//         result.push(numStIdx)
//     }
//     // let newArr = result.filter((el) => el !== -1)
//     // console.log(newArr)
//     // console.log(result[0])
//     for (let j = 0; j < result.length; j++){
//         if (result[j] === -1){
//             delete result[j]
//         }
//         if (result[j] !== undefined ){
//             answer.push(engNum[j])
//         } else {
//             console.log(result[j])
//         }

//     }
//     console.log(answer)
// }

// // solution(onetwothreefourfivesixseveneightnine)
// solution(onefourzerosixseven)


function solution(numbers) {
    const engNum = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    return +numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return engNum[v]
    })
}
