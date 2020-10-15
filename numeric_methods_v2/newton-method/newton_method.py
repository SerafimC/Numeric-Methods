import math
from sympy import *

class Newton_method:

    def __init__(self, x):
        self.xs = Symbol('s')
        self.func = cos(self.xs) - self.xs**2
        self.f_prime = self.func.diff(self.xs)
        
        self.x = float(x)
        self.error = 99

    def function(self):
        func = lambdify(self.xs, self.func)
        return func(self.x)

    def derivative(self):
        func = lambdify(self.xs, self.f_prime)
        return func(self.x)

    def iterate(self):
        xn = self.x - (self.function() / self.derivative())
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
    