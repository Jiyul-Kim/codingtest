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
                return `x`
            } else {
                return `${xArr.length}x`

            }
        } else {
            return `${xNumResult+xArr.length}x`
        }
        
    } else if (onlyX.length === 0){
        return onlyNum.map(Number).reduce((ac, cr)=> ac+cr).toString()
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

        xNumResult = xNum.map(Number).reduce((ac,cr) => ac + cr, 0)
        if (xNumResult === 0){
            if(xNumResult+xArr.length === 1){
                return `x + ${numArr}`
            } else {

                return `${xNumResult+xArr.length}x`
            }
        } else {
            if (numArr === 0){
                return `${xNumResult+xArr.length}x`
            } else {

                return`${xNumResult+xArr.length}x + ${numArr}`
            }
        }
}
    

}