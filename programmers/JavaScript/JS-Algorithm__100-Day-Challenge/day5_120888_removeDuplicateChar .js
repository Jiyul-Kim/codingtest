// 코딩테스트 입문 > 중복된 문자 제거
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    const stringArr = [...my_string]
    const set = new Set(stringArr)
    const uniqueArr  = [...set]
    return uniqueArr.join('');
}

solution("people")

// 오.. 위 방법을 좀 더 하드코딩 할 수 있음
function solution(my_string) {
    return [...new Set(my_string)].join('');
}