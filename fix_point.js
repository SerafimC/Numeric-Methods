// Its necessary look up fot the G(x) = x equivalence and choose an initial X0
var Euler = 2.718
var oInterval = {
    a: 9,
    b: 10,
    E: Math.pow(10, -10)
}
// G(x) relative to function f(x) = x*x -x -1
function G(x){
    return (300 + 201.0625*(1-Math.pow(Euler, (0.1*x/0.25))))/20.10625
}

// Module of X
function AlwaysPositive(x){
    if (x < 0) {
        return x*(-1)
    } else {
        return x
    }
}

function fix_point(){
    var n = 0
    var x0 = 9, x1
    
    x1 = G(x0)

    while(AlwaysPositive(G(x1)-G(x0)) > oInterval.E && (x1 >= oInterval.a && x1 <= oInterval.b)){
        x0 = x1
        x1 = G(x1)
        n++ 
    }
    console.log("Root: " + x1 + " N: " + n +  " Error: " + AlwaysPositive(G(x1)-G(x0)) )
    // console.log(AlwaysPositive(G(x1)-G(x0)))
}

fix_point()