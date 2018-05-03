var xIn
var pi = Math.atan(1)
var oInterval = {
    a: 0,
    b: 1,
    E: Math.pow(10, -3)
}
// Module of X
function AlwaysPositive(x){
    if (x < 0) {
        return x*(-1)
    } else {
        return x
    }
}
// F function 
function F(x){
    // return (-12.4 + 10*(0.5*pi - Math.asin(x) -x*Math.pow((1-Math.pow(x,2)),0.5))) // Questao 1
}

function bisection_method(){
    var n = 0
    xIn = (oInterval.a + oInterval.b) / 2
    var fA = F(oInterval.a)
    var fB = F(oInterval.b)

    while(xIn != 0 && AlwaysPositive(fA-fB) > oInterval.E){
        xIn = (oInterval.a + oInterval.b) / 2
        fA = F(oInterval.a)
        fB = F(oInterval.b)
        fC = F(xIn)
        // console.log("Interval: "+ oInterval.a + " - " + oInterval.b + " c: " + xIn)
        if(fA*fC < 0){
            oInterval.b = xIn
            // console.log("New B: "+ oInterval.b)
        } else {
            oInterval.a = xIn 
            // console.log("New A: "+ oInterval.a)
        }
        // console.log("")
        n++
    }
    console.log("Root: " + xIn + " N: " + n + " Error: " + AlwaysPositive(fA-fB))
}

bisection_method()
// console.log(oInterval.E)