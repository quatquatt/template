import pandas as pd
class SyntaxDemo:
    # Class variable
    class_var = 10

    def __init__(self, instance_var, array_var):
        # Instance variables
        self.instance_var = instance_var
        self.array_var = array_var

    @staticmethod
    def static_method():
        print("This is a static method.")

    def instance_method(self):
        print("This is an instance method.")
        print("Instance variable: ", self.instance_var)
        print("Array variable: ", self.array_var)

# Local variable
local_var = "Hello, World!"

# List
array = [1, 2, 3, 4, 5]

# Object instantiation
demo = SyntaxDemo(local_var, array)

# Method calls
SyntaxDemo.static_method()
demo.instance_method()

# Control structures
if SyntaxDemo.class_var > 5:
    print("Class variable is greater than 5.")
else:
    print("Class variable is not greater than 5.")

for i in array:
    print("Array element: ", i)

while SyntaxDemo.class_var < 15:
    print("Incrementing class variable.")
    SyntaxDemo.class_var += 1

try:
    print("Trying to divide by zero...")
    result = 10 / 0
except ZeroDivisionError as e:
    print("Caught an exception: ", e)
finally:
    print("This is the finally block.")