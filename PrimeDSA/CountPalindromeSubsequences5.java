public class CountPalindromeSubsequences5 {

    public static int countPalindromes(String s) {
        int n = s.length();
        int[][] prefix = new int[10][10];
        int[][] suffix = new int[10][10];
        int[] prefixCount = new int[10];
        int[] suffixCount = new int[10];

        char fst = s.charAt(0);
        char sec = s.charAt(1);
        prefixCount[fst - '0']++;
        prefixCount[sec - '0']++;
        prefix[fst - '0'][sec - '0'] = 1;

        for (int i = 3; i < n; i++) {
            char curr = s.charAt(i);
            suffixCount[curr - '0']++;
        }

        for (int i = 3; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                char first = s.charAt(i);
                char second = s.charAt(j);
                suffix[first - '0'][second - '0']++; 
            }
        }

        int cnt = 0;

        for (int i = 2; i < n - 2; i++) {
            for (int j = 0; j < 10; j++) {
                for (int k = 0; k < 10; k++) {
                    cnt += prefix[j][k] * suffix[k][j];
                }
            }

            for (int j = 0; j < 10; j++) {
                prefix[j][s.charAt(i) - '0'] += prefixCount[j];
            }

            prefixCount[s.charAt(i) - '0']++;
            suffixCount[s.charAt(i + 1) - '0']--;

            for (int k = 0; k < 10; k++) {
                suffix[s.charAt(i + 1) - '0'][k] -= suffixCount[k];
            }
        }
        return cnt;
    }

    public static void main(String[] args) {
        // String s = "103301";
        String s = "0000000";
        System.out.println(countPalindromes(s));
    }
}
