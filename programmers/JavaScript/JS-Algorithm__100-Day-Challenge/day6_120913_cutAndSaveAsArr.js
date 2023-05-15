// 코딩테스트 입문 > 잘라서 배열로 저장하기
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(my_str, n) {
    let result = [];
    const strArr = my_str.split('')
    const run = Math.ceil(strArr.length/n)
    for (let j = 0; j < run ; j ++){
        result.push(strArr.slice(0,n).join(''))
        for (let i = 0; i < n; i++){
            strArr.shift()
        }
    }
    return result;
}

console.log(solution("abc1Addfggg4556b",6))
console.log(solution("abcdef123",3))



// const a = "abc1Addfggg4556b"


// const num = 3



// console.log(result)

// console.log(strArr.slice(0,6))
// for (let i = 0; i < 6; i++){
    
//     strArr.shift()
// }
// console.log(strArr.slice(0,6))


// console.log(strArr)