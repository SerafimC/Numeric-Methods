import math
from sympy import *

class Newton_method:

    def __init__(self, x):
        self.xs = Symbol('s')
        self.function = cos(self.xs) - self.xs**2
        self.derivative = self.function.diff(self.xs)

        self.function = lambdify(self.xs, self.function)
        self.derivative = lambdify(self.xs, self.derivative)
        
        self.x = float(x)
        self.error = 99

    def iterate(self):
        xn = self.x - (self.function(self.x) / self.derivative(self.x))
        self.error = abs(self.x - xn)
        self.x = xn
        return xn

if __name__ == '__main__':
    x0 = 1
    tol = 1e-5
    it = 0
    root_found = None
   
    newton = Newton_method(x0)
    
    while(newton.error >= tol):
        print('Iteracao ' + str(it+1))
        root_found = newton.iterate()
        print(root_found)
        it += 1
    