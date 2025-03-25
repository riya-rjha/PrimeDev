import java.util.Scanner;

public class H_Queries_for_Number_of_Palindromes {

    public static void countPalindrome(int[][] matrix, String s, int n) {
        

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int queries = sc.nextInt();
        int[][] matrix = new int[s.length()][s.length()];
        countPalindrome(matrix, s, s.length());
        while (queries > 0) {
            int l = sc.nextInt();
            int r = sc.nextInt();
            System.out.println(matrix[l - 1][r - 1]);
        }
    }
}