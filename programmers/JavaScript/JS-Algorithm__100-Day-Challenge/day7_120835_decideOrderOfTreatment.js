// 코딩테스트 입문 > 진료순서 정하기

// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 못 푼 문제 (생각한 알고리즘은 같았으나 배열을 바꿔버리는 sort를어떻게 해결해야할지 모르겠어서 결국 못 품 ㅜ)
// 배열을 깨트리는 sort를 유지시키려면 slice()를 사용하면 되는 것이었음!!
// slice()는 특정 범위의 배열을 복제하는 것인데, 딱히 인자를 안넣었으니 전체 배열을 복사한다는 의미임!
// 그리고 복제된 sort 배열을에 인덱스 값을 넣어주고, 원래의 값과 인덱스를 매치시키는 게 안됐음
// 이건 map과 indexOf를 이용하면 풀 수 있던 거임!!

function solution(emergency) {
    const newArr = emergency.slice().sort((a,b) => b-a)
    
    return emergency.map(v => newArr.indexOf(v)+1)
}

console.log(solution([3, 76, 24]))
// solution([3, 76, 24])
console.log(solution([1, 2, 3, 4, 5, 6, 7]))
console.log(solution([30, 10, 23, 6, 100]))