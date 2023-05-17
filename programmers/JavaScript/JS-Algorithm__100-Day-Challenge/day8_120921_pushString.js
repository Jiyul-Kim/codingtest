// 코딩테스트 입문 > 문자열 밀기

// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
    const aArr = [...A]
    const bArr = [...B]
    let count = 0;
    if (A!==B){
        for(let i =1; i < aArr.length; i++){
            aArr.unshift(aArr.pop())
            count ++
            // console.log(aArr)
            if (aArr.toString()===bArr.toString()){
                return count
            } 
        }
        return -1
    } else {
        return 0
    }
}

console.log(solution ("hello","ohell"))
console.log(solution ("hello","lohel"))
console.log(solution ("apple","elppa"))
console.log(solution ("atat","tata"))
console.log(solution ("abc","abc"))

// 처음에 사용하려 했던 while을 쓰는 방법
while (count < B.length) {
    count ++
    aArr.unshift(aArr.pop())
    if (aArr.join('')===B){
        return count
    }
}