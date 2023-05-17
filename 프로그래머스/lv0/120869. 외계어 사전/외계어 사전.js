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