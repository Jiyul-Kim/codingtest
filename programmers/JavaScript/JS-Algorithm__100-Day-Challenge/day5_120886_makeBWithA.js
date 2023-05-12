// 코딩테스트 입문 > A로 B 만들기
// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 못 푼 문제..
// sort (배열을 오름차순으로 정리해서..ㅎㄷㄷ 같은 글자가 되는지를 판단하게 하는 거였음!!)
function solution(before, after) {
    return [...before].sort().join('')===[...after].sort().join('')? 1:0
}
solution("allpe", "apple")