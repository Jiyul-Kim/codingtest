// 코딩테스트 입문 > 겹치는 선분의 길이

function solution(lines) {
    const resultArr = [];
    for(let line of lines){
        for(let i=line[0]; i<line[1]+1; i++){
            if (line[0] !== line[1] && line[1] !== line[0]){

                resultArr.push(i)
            }
        }
    }
    console.log(resultArr)
    // const filtered = resultArr.filter((item, index)=> resultArr.indexOf(item) !==index)
    // console.log([...new Set(filtered)].length)
}

solution([[0, 1], [2, 5], [3, 9]])
solution([[-1, 1], [1, 3], [3, 9]])
solution([[0, 5], [3, 9], [1, 10]])