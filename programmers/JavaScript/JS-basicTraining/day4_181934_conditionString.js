// 코딩테스트 코딩 기초 트레이닝 > 조건 문자열

function solution(ineq, eq, n, m) {
    if (ineq === ">"){
        if (eq === "="){
            if(n >= m){
                return 1
            }
        } else if (eq === "!"){
            if(n > m){
                return 1
            }
        }
    } else if (ineq === "<") {
        if (eq === "="){
            if(n <= m){
                return 1
            }
        } else if (eq === "!"){
            if(n < m){
                return 1
            }
        }
    }
    return 0
}
solution("<", "=", 20, 50)