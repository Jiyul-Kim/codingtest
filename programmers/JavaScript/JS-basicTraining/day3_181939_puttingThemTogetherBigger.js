// 코딩테스트 코딩 기초 트레이닝  >더 크게 합치기
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

function solution(a, b) {
    const strA = a.toString()
    const strB = b.toString()
    if (Number(strA+strB) > Number(strB+strA)){
        return Number(strA+strB)
    } else if (Number(strA+strB) ===  Number(strB+strA)){
        return Number(strA+strB)
    } else {
        return Number(strB+strA)
    }
}
solution(9, 91)

// 와 .. 처음에 리터럴로 출력하는 걸 생각했는데, 이게 값 비교가 되려나? 싶어서 포기했었는데 어떤분이 Math.max로 풀으셨네..
function solution(a,b){
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}