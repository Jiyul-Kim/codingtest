// 코딩테스트 입문 > k의 개수

// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

function solution(i, j, k) {
    const Arr = [`${i}`,]
    let answer = [];
    while (i < j){
        i += 1
        Arr.push(i.toString())
    }
    for (let n = 0; n < Arr.length; n ++){
        const newArr = Arr[n].split('')
        for (let a = 0; a < newArr.length; a++){
            if (newArr[a] === k.toString()){
                answer.push(newArr)
            }
        }
    }
    return answer.length
}



solution(1, 10000, 8)

// 아!! 이거 i += 1 이렇게 푸는 것 보다 빈 변수를 만들어주고 거기에 i를 더하게 하면 숫자 출력이 더 쉬웠던거임!!
let start = 1;
let end = 13;
let s = '';
for (start; start <= end; start++){
    s += start
}
// 12345678910111213