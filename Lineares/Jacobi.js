var E = Math.pow(10, -2)
let A = new Array([10, 2, 1], [1, 5, 1], [2, 3, 10])
let Fiterative = {
    x1: (x2, x3) => { return (7 -2*x2 - x3) / 10 },
    x2: (x1, x3) => { return (-8 - x3 -x1) / 5 }, 
    x3: (x1, x2) => { return (6 - 3*x2 - 2*x1) / 10 } 
}

function gaussJacobi() {
    let n = 1, r0, r1
    let x0 = new Array(0, 0, 0)
    let x1 = new Array( Fiterative.x1(x0[1], x0[2]), 
                        Fiterative.x2(x0[0], x0[2]),
                        Fiterative.x3(x0[0], x0[1]))

    console.log(x0)
    console.log(x1)

    r0 = maxSubM(x0, x1)
    r1 = r0 + E + 1
    while(Md(r1-r0) > E){
        r0 = r1
        x0 = x1
        x1 = new Array( Fiterative.x1(x0[1], x0[2]), 
                        Fiterative.x2(x0[0], x0[2]),
                        Fiterative.x3(x0[0], x0[1]))
        r1 = maxSubM(x0, x1)
        console.log('[' + x0 + '] [' + x1 + '] r: ' + r1 + '||' + r0)
        n++
    }
    console.log()
    console.log("Solution: [" + x1 + "] Iteractions: " + n) 
}

gaussJacobi()

function Md(x){
    if (x < 0) {
        return x*(-1)
    } else {
        return x
    }
}

function maxSubM(x0, x1){
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

// Dominant Diagonal
function DD(A){
    let n = A.length // lines
    let m = A[0].length // coluns
    let result = 0

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i != j)
                result += Md(A[i][j])
        }
        console.log(result)
        if(result > Md(A[i][i]))
            return false
            
        result = 0
    }
    return true
}
// console.log(DD(A))