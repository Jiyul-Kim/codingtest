// 코딩테스트 코딩 기초 트레이닝  > 중복된 문자 제거
// 길이가 같은 두 문자열 str1과 str2가 주어집니다. 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

function solution(str1, str2) {
    const str1Arr = str1.split('')
    const str2Arr = str2.split('')
    const newArr = []
    for (let i=0; i < str1Arr.length + str2Arr.length; i++){
        newArr.push(str1Arr[i])
        newArr.push(str2Arr[i])
    }
    return newArr.join('')
}
solution("aaaaa","bbbbb")
// 굳~~이 스플릿 안써도 됐는데. 문자열 인덱싱 쓰면 됐는데 하하하
function solution(str1, str2) {
    let answer = '';
    for (let i=0; i < str1.length; i++){
        answer += str1[i] + str2[i]
    }
    return answer
}
solution("aaaaa","bbbbb")
