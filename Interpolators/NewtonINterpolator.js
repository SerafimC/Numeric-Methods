// P(x) = y0 + sum(Di*y0(x-xi))
let aX = [ 1, 3, 4, 5]
let aY = [0, 6, 24, 60]
let aDelta = Array(0)

// aY = aX.map(function F(x) {
//     return Math.sqrt(1+x)
// });

// console.log(aX)
// console.log(aY)

function Newton(x){
    let cExp = 'P(x) = '
    let cExp1 = 'P('+x+') = '
    let nProd
    let aDelta
    let result

    cExp += ' y0 + '
    result = aY[0]
    aDelta = CalcDD(aX, aY, 1)
    // Sum 
    for(let i = 0; i < aX.length - 1; i++){
        nProd = 1
        // Producer
        for(let j = 0; j <= i; j++){
            cExp += '(x - x'+j+').'
            cExp1 += '('+x+' - '+aX[j]+').'
            nProd = (x - aX[j])*nProd
        }
        cExp += 'D'+i+' + '
        cExp1 += aDelta[i]+ ' + '
        result += nProd*aDelta[i]
    }
    console.log(cExp+ '0 ') 
    console.log(cExp1) 
    return result
}

function DifDiv(aX, aY, i, dif){
        return (aY[(i-dif)+1] - aY[(i-dif)]) / (aX[i] - aX[i-dif])
}

function CalcDD(aX, aY, dif){
    var aResult = Array(0)
    var aDelta = Array(0)

    for(var j = 0; j < aY.length - 1; j++){
        aResult.push(DifDiv(aX, aY, j+dif, dif))
    }
    console.log(aResult)
    if (aResult.length == 1){
        aDelta.push(aResult[0])
        return aDelta
    }
    dif++;
    aDelta.push(aResult[0])
    aDelta = aDelta.concat(CalcDD(aX, aResult, dif))

    return aDelta
}

console.log(Newton(2))