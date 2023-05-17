// 코딩테스트 입문 > 점수 매기기
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
    let avgScore = []
    for (let i of score){
        avgScore.push(i.reduce((a,b) => (a+b)/2))
    }
    const newArr = avgScore.slice().sort((a,b)=>b-a)
    return avgScore.map(v => newArr.indexOf(v)+1)
}

solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]])

// 평균 구하는 거 map 이용하면 더 줄일 수 있었삼!
function solution(score) {
    let avgScore = score.map((v) => (v[0]+v[1])/2)
    const newArr = avgScore.slice().sort((a,b)=>b-a)
    return avgScore.map(v => newArr.indexOf(v)+1)
}
solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]])