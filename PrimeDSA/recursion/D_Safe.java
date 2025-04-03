import java.util.*;

public class D_Safe {

    public static void helper(String s, StringBuilder sb, int matchPos, int idx, List<String> ans, int n) {
        if (idx >= n) {
            if (matchPos == 0) {
                ans.add(sb.toString());
                return;
            } else
                return;
        }
        char ch = s.charAt(idx);

        // When positions remaining to be matched is greater than 0, we have 2 choices
        // First set the charAt index as it as and call for next index
        // and the second choice is to negate the current bit

        if (matchPos > 0) {
            sb.setCharAt(idx, ch);
            helper(s, sb, matchPos - 1, idx + 1, ans, n);
        }

        // Second choice for pos value greater than 0
        // And only choice when pos becomes 0

        char toggleCH = '0';
        if (ch == '0') {
            toggleCH = '1';
        }
        sb.setCharAt(idx, toggleCH);
        helper(s, sb, matchPos, idx + 1, ans, n);
    }

    public static List<String> generateCombinations(String s, int matchPos) {
        StringBuilder sb = new StringBuilder(s);
        List<String> ans = new ArrayList<>();
        helper(s, sb, matchPos, 0, ans, s.length());
        return ans;
    }

    public static class Pair {
        String s;
        int c;

        public Pair(String s, int c) {
            this.s = s;
            this.c = c;
        }
    }

    public static boolean isValid(String s, String t, int c) {
        int n = s.length();
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == t.charAt(i)) {
                cnt++;
            }
        }
        return (cnt == c);
    }

    public static List<String> filter(List<String> ans, String s, int c, List<String> temp) {
        for (String curr : ans) {
            if (isValid(curr, s, c)) {
                temp.add(curr);
            }
        }
        return temp;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        Pair[] combinations = new Pair[m];
        for (int i = 0; i < m; i++) {
            String s = sc.next();
            int c = sc.nextInt();
            combinations[i] = new Pair(s, c);
        }
        List<String> allCombosForFirstString = generateCombinations(combinations[0].s, combinations[0].c);
        System.out.println(allCombosForFirstString);
        for (int i = 1; i < m; i++) {
            allCombosForFirstString = filter(allCombosForFirstString, combinations[i].s, combinations[i].c, new ArrayList<>());
        }
        System.out.println(allCombosForFirstString);
        System.out.println(allCombosForFirstString.size());
        sc.close();
    }
}