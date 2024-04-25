#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

#define PI 3.14159

// This is a single line comment

/* This is a
   multi-line comment */

// Global variable
int globalVar = 10;

// Enum
enum Days {Mon, Tue, Wed, Thu, Fri, Sat, Sun};

// Struct
struct Point {
    int x;
    int y;
};

// Class
class Circle {
public:
    Circle(double r) : radius(r) {}

    double area() {
        return PI * radius * radius;
    }

private:
    double radius;
};

// Function
int add(int a, int b) {
    return a + b;
}

// Template function
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    // Variable declaration
    int a = 5, b = 10;

    // If-else statement
    if (a > b) {
        std::cout << "a is greater than b" << std::endl;
    } else {
        std::cout << "b is greater than a" << std::endl;
    }

    // For loop
    for (int i = 0; i < 10; i++) {
        std::cout << i << std::endl;
    }

    // While loop
    while (a < b) {
        a++;
    }

    // Do-while loop
    do {
        b--;
    } while (b > 0);

    // Switch case
    switch (a) {
        case 1:
            std::cout << "One" << std::endl;
            break;
        case 2:
            std::cout << "Two" << std::endl;
            break;
        default:
            std::cout << "Default" << std::endl;
    }

    // Vector
    std::vector<int> vec = {1, 2, 3, 4, 5};

    // Map
    std::map<std::string, int> map = {{"one", 1}, {"two", 2}, {"three", 3}};

    // Lambda function
    auto lambda = [](int x) { return x * x; };
    int num = 50;

    // Using an algorithm
    std::sort(vec.begin(), vec.end());

    return 0;
}