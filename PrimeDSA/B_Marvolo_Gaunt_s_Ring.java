import java.util.*;

public class B_Marvolo_Gaunt_s_Ring {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        long p = sc.nextLong();
        long q = sc.nextLong();
        long r = sc.nextLong();
        long[] nums = new long[(int) n];
        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextLong();
        }
        long[] prefixMin = new long[(int) n];
        long[] suffixMax = new long[(int) n];
        prefixMin[0] = p * nums[0];
        for (int i = 1; i < n; i++) {
            prefixMin[i] = Math.max(p * nums[i], prefixMin[i - 1]);
        }
        suffixMax[(int) n - 1] = r * nums[(int) n - 1];
        for (int i = (int) n - 2; i >= 0; i--) {
            suffixMax[i] = Math.max(suffixMax[i + 1], r * nums[i]);
        }
        // System.out.println("Prefix: " + Arrays.toString(prefixMin));
        // System.out.println("Suffix: " + Arrays.toString(suffixMax));
        long ans = Long.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            ans = Math.max(q * nums[i] + prefixMin[i] + suffixMax[i], ans);
        }
        System.out.println(ans);
        sc.close();
    }
}