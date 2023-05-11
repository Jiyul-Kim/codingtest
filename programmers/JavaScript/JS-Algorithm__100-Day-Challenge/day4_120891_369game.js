// 코딩테스트 입문 > 배열의 유사도
// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(order) {
    const game = ["3", "6", "9"]
    return Array.from(
        order
        .toString())
        .filter((v => game.includes(v))
        ).length ;
}
solution(29423)
// 앗 조금 더 줄일 수 있네
function solution(order) {
    return Array.from(
        order
        .toString())
        .filter((v => ["3", "6", "9"].includes(v))
        ).length ;
}

// 제일 쉽게? 풀 수 있는 방법은 matchAll을 쓰는 것이었음!!
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}