// 코딩테스트 입문 > 짝수의 합

// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.

// function solution(n) {
//     let a = Array(n).fill().map((_, i) => i))
//     for (let j = )
// }

// solution(3)


function solution(n) {
    let a = Array(n).fill().map((_, i) => i + 1);
    let result = 0; 
    for (let j = 0; j < n; j ++) {
        if (a[j] % 2 === 0) {
            let k = a[j];
            if (k!==0) {
                result += k  
            }
        }
    }
    return result
}
solution(10)

// 정답 보면서 배운 것
// 1. filter 메소드
// 필터 메소드를 사용하면 조건에 맞는 배열 값만 추려내서 보여줌
// >>> 이걸로 짝수 찾기가 더 쉬워짐
function solution(n) {
    return Array(n).fill().map((_, i) => i + 1).filter(n => n % 2 === 0);
    // [ 2, 4, 6, 8, 10 ]
}

// 2. reduce 메소드
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
// reduce 메소드를 이용하면, 현재값 + 누적값을 구할 수 있음.
// |누적값|현재값|인덱스|
// |-----|------|---|
// | 0 | 1 | 0 |
// | 1 | 2 | 1 |
// | 3 | 3 | 2 | 
// 결과 >> 6
function solution(n) {
    return Array(n).fill().map((_, i) => i + 1).filter(n => n % 2 === 0).reduce((a, c) => a + c, 0);
    // 30
}
// 만약에 초기값이 들어가지 않는다면, ([].reduce((a,c) => 결과) 런타임 에러 출력함. 여기선 1의 존재가 [] 과 같게 들어가니까 초기값인 0을 넣어주는 게 중요함!