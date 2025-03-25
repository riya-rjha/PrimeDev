package recursion;

import java.util.*;

public class TowerOfHanoi {

    static int count = 0;

    public static void helper(int n, int src, int helper, int destination) {
        if (n == 0)
            return;
        helper(n - 1, src, destination, helper);
        count++;
        helper(n - 1, helper, src, destination);
    }

    public static int totWays(int n) {
        if (n == 0)
            return 0;
        int srcToHelper = totWays(n - 1);
        int helperToDest = totWays(n - 1);
        return srcToHelper + 1 + helperToDest;
    }

    private static int helperII(int src, int helper, int dest, int plates, int currMove, List<Integer> ans, int count) {
        if (plates == 1) {
            count++;
            if (count == currMove) {
                ans.add(src);
                ans.add(dest);
            }
            return count;
        }
        count = helperII(src, dest, helper, plates - 1, currMove, ans, count);
        count++;
        if (count == currMove) {
            ans.add(src);
            ans.add(dest);
        }
        count = helperII(helper, src, dest, plates - 1, currMove, ans, count);
        return count;
    }

    public static List<Integer> shiftPile(int N, int n) {
        List<Integer> ans = new ArrayList<>();
        helperII(1, 2, 3, N, n, ans, 0);
        return ans;
    }

    public static void main(String[] args) {
        helper(3, 1, 3, 2);
        System.out.println(count);
        System.out.println(totWays(3));
        System.out.println(shiftPile(2, 2));
        System.out.println(shiftPile(2, 2));
    }
}
