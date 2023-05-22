// 코딩테스트 입문 > 다항식 더하기

// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

// .. 3시간 30분 걸린 문제. 18점 문제였다. 예외 처리에서 많이 애먹은 문제.. 어떻게든 끈기 있게 풀었다.

function solution(polynomial) {
    polynomial = polynomial.replaceAll('1x', 'x')
    const arr = polynomial.split(' + ')
    const onlyX = []
    const onlyNum = []
    for (let i of arr){
        i.includes('x') ? onlyX.push(i) : onlyNum.push(i)
    }
   

    if (onlyNum.length === 0){
        const xNum = [];
        let xNumResult = 0;
        const xArr = []
        for (let k=0; k<onlyX.length; k++){
            if (onlyX[k].length === 1){
                xArr.push(onlyX[k])
            } else if(onlyX[k].length > 1) {
                xNum.push(onlyX[k].replace('x',''))    
            } 
        }
        xNumResult = xNum.map(Number).reduce((ac,cr) => ac + cr, 0)
        if (xNumResult === 0){
            if (xArr.length === 1){
                console.log(`x`) 
            } else {
                console.log(`${xArr.length}x`) 

            }
        } else {
            console.log(`${xNumResult+xArr.length}x`)
        }
        
    } else if (onlyX.length === 0){
            console.log(onlyNum.map(Number).reduce((ac, cr)=> ac+cr).toString())

    } else{
        const xNum = [];
        let xNumResult = 0;
        const xArr = [];
        // x숫자만 더하기
        for (let j=0; j<onlyX.length; j++){
            if (onlyX[j].length === 1){
                xArr.push(onlyX[j])
            } else if(onlyX[j].length > 1) {
                xNum.push(onlyX[j].replace('x',''))    
            } 
        }
        // 숫자만 더하기
        const numArr = onlyNum.map(Number).reduce((ac, cr) => ac + cr)
        const xSum = xNumResult+xArr.length
        xNumResult = xNum.map(Number).reduce((ac,cr) => ac + cr, 0)
        if (xNumResult === 0){
            if(xSum === 1){
                console.log(`x + ${numArr}`) 
            } else {

                console.log(`${xSum}x`) 
            }
        } else {
            if (numArr === 0){
                console.log(`${xSum}x`)
            } else {

                console.log(`${xSum}x + ${numArr}`)
            }
        }
}
    

}

solution("3x + 7 + x")
solution("3x + 7 + 3x")
solution("3x + 7 + x + 8")
solution("x + x + x")
solution("7 + 8 + 5")
solution("17 + 8 + 5")
solution("0")
solution("1x + 3 + 9")
solution("13x + 10x")
solution("1 + 1")
solution("x + 0")
solution("3x + 0")
solution("0")
solution("1x")


