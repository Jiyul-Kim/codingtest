// 코딩테스트 입문 > 피자 나눠 먹기(1)
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function solution(n) {
    if (n / 7 === 0) {
        return 0
    }
    let result = 0;
    if (n % 7){
        result += 1
    }
    return Math.floor(n / 7) + result
}

solution()

// Math.ceil(올림) 하면............ 더 쉽게 풀 수 있는 거였삼....
function solution(n){
    return Math.ceil(n / 7)
}