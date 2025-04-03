import java.util.*;

public class A_Flying_Saucer_Segments {

    public static long power(long x, long y, long m) {
        if (y == 0) {
            return 1;
        }
        long ans = power(x, y / 2, m);
        long modAns = ((ans % m) * (ans % m)) % m;
        if (y % 2 == 0) {
            return modAns;
        }
        return ((x % m) * (modAns % m)) % m;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        long m = sc.nextLong();
        long ans = power(3, n, m);
        ans = ans - 1;
        if(ans < 0){
            ans = ans + m;
        }
        // System.out.println(ans);
        System.out.println(ans % m);
        sc.close();
    }
}