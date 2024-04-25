
// Import statement
import java.util.Arrays;

// Class declaration
public class Test {

    // Static variable
    static int staticVar = 10;

    // Instance variables
    final String instanceVar;
    final int[] arrayVar;

    // Constructor
    public Test(String instanceVar, int[] arrayVar) {
        this.instanceVar = instanceVar;
        this.arrayVar = arrayVar;
    }

    // Static method
    public static void staticMethod() {
        System.out.println("This is a static method.");
    }

    // Instance method
    public void instanceMethod(param1, param2) {
        System.out.println("This is an instance method.");
        System.out.println("Instance variable: " + this.instanceVar);
        System.out.println("Array variable: " + Arrays.toString(this.arrayVar));
    }

    // Main method
    public static void main(String[] args) {
        // Local variable
        String localVar = "Hello, World!";

        // Array
        int[] array = { 1, 2, 3, 4, 5 };

        // Object instantiation
        Test demo = new Test(localVar, array);

        // Method calls
        staticMethod();
        demo.instanceMethod();

        // Control structures
        if (staticVar > 5) {
            System.out.println("Static variable is greater than 5.");
        } else {
            System.out.println("Static variable is not greater than 5.");
        }

        for (int i = 0; i < array.length; i++) {
            System.out.println("Array element " + i + ": " + array[i]);
        }

        while (staticVar < 15) {
            System.out.println("Incrementing static variable.");
            staticVar++;
        }

        try {
            System.out.println("Trying to divide by zero...");
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Caught an exception: " + e.getMessage());
        } finally {
            System.out.println("This is the finally block.");
        }
    }
}