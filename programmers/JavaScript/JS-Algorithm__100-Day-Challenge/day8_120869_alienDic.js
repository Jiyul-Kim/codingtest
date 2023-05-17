// 코딩테스트 입문 > 외계어 사전
// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(spell, dic) {
    let answer = []
    for (let i = 0; i < dic.length ; i++){
        let result = [];
        answer.push(result)
        for (let j = 0; j < spell.length ; j++){
            if (dic [i].includes(spell[j])===true){
                result.push(true)
            }
        }
    } 
    let count = 0;
    for (let k in answer){
        if (spell.length === answer[k].length){
            count ++
        }
    }
    if (count > 0){
        return 1
    } else {
        return 2
    }
}

solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])
solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])
solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])

// sort 정렬을 해서 풀면 더 쉬운 문제였음.
// 그리고 every (모두가 만족해야 true 반환) 를 사용하면 더 좋았을 것임!
// 지금은 모두 만족하는 것이 아닌 모두 사용한 값이 하나라도 있다면 true를 반환해야 하니 'some'을 쓰면 되는 것
// 그리고 배열은 요소 값으로 비교가 안됨. !!

function solution(spell, dic){
    return dic.some((v) => [...v].sort().toString() === [...spell].sort().toString()) ? 1: 2;
}