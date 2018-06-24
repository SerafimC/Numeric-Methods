// Its necessary to find the derivative function Fdx
var oInterval = {
    a: 0,
    b: 2,
    E: Math.pow(10, -10)
}

// Verify if result exists on interval.
// If it doesnt, returns the higher or bottom limit
function overInterval(x){
    var result = (x - (F(x)/ Fdx(x)))
    console.log(result)
    if(result < oInterval.a)
        return oInterval.a
    else if(result > oInterval.b)
        return oInterval.b
    else    
        return result
}

function AlwaysPositive(x){
    if(x < 0)
        return x*(-1)
    else
        return x
}

function F(x){
    return Math.pow(x,4) + 2*Math.pow(x, 2) -x -3
}

// Derivative of F(X)
function Fdx(x){
    return 4*Math.pow(x,3) + 4*x -1
}

function newton_method(){
    var n = 0
    var x0 = 0.5, x1
   
    x1 = overInterval(x0)

    console.log (x0 + ' - ' + x1)
    while(AlwaysPositive(x1-x0) > oInterval.E){
        x0 = x1
        x1 = overInterval(x0)
        n++
        
        console.log("Root: " + x1 + " N: " + n +  " Error: " + AlwaysPositive(x1-x0)) 
    }
    console.log("Root: " + x1 + " N: " + n +  " Error: " + AlwaysPositive(x1-x0)) 
}

newton_method()
