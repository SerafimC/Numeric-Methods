// Its necessary look up fot the G(x) = x equivalence and choose an initial X0
var Euler = 2.718
var oInterval = {
    a: 0,
    b: 2,
    E: Math.pow(10, -1)
}
// G(x) relative to function f(x) = x*x -x -1
function G(x){
    return Math.pow((x+3)/(Math.pow(x, 2)+2), (1/2))
}

// Module of X
function AlwaysPositive(x){
    if (x < 0) {
        return x*(-1)
    } else {
        return x
    }
}

// Verify if result exists on interval.
// If it doesnt, returns the higher or bottom limit
function overInterval(x){
    var result = G(x)
    if(result < oInterval.a)
        return oInterval.a
    else if(result > oInterval.b)
        return oInterval.b
    else    
        return result
}

function fix_point(){
    var n = 0
    var x0 = 0, x1
    
    x1 = overInterval(x0)

    while(AlwaysPositive(G(x1)-G(x0)) > oInterval.E){
        x0 = x1
        x1 = overInterval(x1)
        n++ 
        console.log("Root: " + x1 + " N: " + n +  " Error: " + AlwaysPositive(G(x1)-G(x0)) )
    }
    console.log("Root: " + x1 + " N: " + n +  " Error: " + AlwaysPositive(G(x1)-G(x0)) )
    // console.log(AlwaysPositive(G(x1)-G(x0)))
}

fix_point()