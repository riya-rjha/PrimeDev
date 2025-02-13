public class PalindromicSubsequences {

    public static int countPalindromicSubsequences(String s) {
        int n = s.length();
        int[] prefixCount = new int[10];
        int[] suffixCount = new int[10];
        prefixCount[0] = s.charAt(0) - '0';
        for (int i = 2; i < n; i++) {
            char ch = s.charAt(i);
            suffixCount[ch - '0']++;
        }
        int cnt = 0;
        for (int i = 1; i < n - 1; i++) {
            for (char digit = '0'; digit <= '9'; digit++) {
                int leftCount = prefixCount[digit - '0'];
                int rightCount = suffixCount[digit - '0'];
                cnt += leftCount * rightCount;
            }
            prefixCount[s.charAt(i) - '0']++;
            suffixCount[s.charAt(i + 1) - '0']--;
        }
        return cnt;
    }

    public static void main(String[] args) {
        String s = "1234543219";
        System.out.println(countPalindromicSubsequences(s));
    }
}