// Its necessary to find the derivative function Fdx

var pi = Math.atan(1)
var oInterval = {
    a: 1.5,
    b: 3,
    E: Math.pow(10, -10)
}

function alwaysPositive(x){
    if(x < 0)
        return x*(-1)
    else
        return x
}

function F(x){
    return 1/2 + (1/4)*Math.pow(x,2)-(1/2)*Math.cos(2*x)
}

// Derivative of F(X)
function Fdx(x){
    return (1/2)*x - Math.sin(x)-x*Math.cos(x) +Math.sin(2*x)
}

function newton_method(){
    var n = 0
    var x0 = pi/2
    var x1 = x0 - (F(x0)/ Fdx(x0))
    console.log('X0: ' + x0)
    console.log('X1: ' + x1)
    while(alwaysPositive(x1-x0) > oInterval.E && (x1 >= oInterval.a && x1 <= oInterval.b)){
        x0 = x1
        x1 = x0 - (F(x0)/ Fdx(x0))
        n++
    }
    console.log("Root: " + x1 + " found on " + n + " interactions")
}

newton_method()
