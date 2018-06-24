var E = Math.pow(10, -4)
let A = new Array([10, 2, 1], [1, 5, 1], [2, 3, 10])
let Fiterative = {
    x1: (x2, x3) => { return (7 -2*x2 - x3) / 10 },
    x2: (x1, x3) => { return (-8 - x3 -x1) / 5 }, 
    x3: (x1, x2) => { return (6 - 3*x2 - 2*x1) / 10 } 
}

function gaussSeidel() {
    let n = 1, r0, r1
    let x0 = new Array(0, 0, 0)
    let x1

    x1 = x0.slice()

    x0[0] = Fiterative.x1(x0[1], x0[2])
    x0[1] = Fiterative.x2(x0[0], x0[2])
    x0[2] = Fiterative.x3(x0[0], x0[1])
    
    r0 = maxSubM(x0, x1)
    // r1 = r0 + E + 1
    while(Md(r0) > E){
        r0
        x1 = x0.slice()
        x0[0] = Fiterative.x1(x0[1], x0[2])
        x0[1] = Fiterative.x2(x0[0], x0[2])
        x0[2] = Fiterative.x3(x0[0], x0[1])
        r0 = maxSubM(x0, x1)
        console.log('[' + x0 + '] [' + x1 + '] r: ' + '||' + r0)
        n++
    }
    console.log()
    console.log("Solution: [" + x1 + "] Iteractions: " + n) 
}

gaussSeidel()

function Md(x){ // Module of x
    if (x < 0) {
        return x*(-1)
    } else {
        return x
    }
}

function maxSubM(x0, x1){ // X1 - x0 - Gets the max elements of each array and sub them
    let result = new Array()
    let max
    for(let i = 0; i < x1.length; i++){ // Columns
        result[i] = Md(x1[i]) - Md(x0[i])
    }
    max = result[0]
    for(let i = 1; i < result.length; i++){ // Columns
        if(max < result[i])
        max = result[i]
    }
    return max
}

function rLine(A){
    let n = A.length // lines
    let m = A[0].length // coluns
    let result = 0

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i != j)
                result += Md(A[i][j])
        }
        result = result/Md(A[i][i])
        console.log(result)
        if(result > 1)
            return false
            
        result = 0
    }
    return true
}

// console.log(rLine(A))
