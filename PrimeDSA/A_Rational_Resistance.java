import java.util.*;

public class A_Rational_Resistance {

    private static long helper(long a, long b) {
        if (a == 0 || b == 0) return 0;
        long resistance = a / (long) b;
        if (resistance >= 1) return resistance + helper(a % b, b);
        return b / (long)a + helper(a, b % a);
    }

    
    private static long helperII(long a, long b) {
        if(b == 1) return a;
        long resistance = a / (long) b;
        if(resistance < 1) return helperII(b, a);
        return resistance + helperII(b, a % b);
    }


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextLong();
        long b = sc.nextLong();
        System.out.println(helper(a, b));
        System.out.println(helperII(a, b));
        sc.close();
    }   
}