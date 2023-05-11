// 코딩테스트 입문 > 특정 문자 제거하기
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 문제 해결 못함. 
// 해결하려했던 과정
// 1. replace
// > replace는 앞에 한 글자만 바뀌어서 실패
// 2. replace를 반복하는 방식
// > while로 하려 했으나 조건을 어떻게 해야할지 몰라서 실패 
 
function solution(my_string, letter) {
    console.log(my_string.replaceAll(letter, "")) ; 
}
solution("BCBdbe", "B")