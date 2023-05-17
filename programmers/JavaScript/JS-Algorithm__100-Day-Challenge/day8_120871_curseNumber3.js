// 코딩테스트 입문 > 저주의 숫자 3
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// 못 풀었습니다.. 솔직히 헤맸습니다....... 이렇게 쉽게 풀 수 있는 것을...................................

function solution(n) {
    var answer = 0;
    for (let i = 0; i < n; i++){
        answer += 1
        while (answer % 3 === 0 || answer.toString().split('').includes('3')){
            answer += 1
        }
    }
    return answer
}

console.log(solution(5))



