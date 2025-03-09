package recursion;

import java.util.Arrays;

public class DistinctPaths {

    static int count = 0;

    // Recursion
    // TC - O( 2^(n + m) )
    public static void distinctPaths(int i, int j, int n, int m) {
        if (i >= n || j >= m) {
            return;
        }
        if (i == n - 1 && j == m - 1) {
            count++;
            return;
        }
        distinctPaths(i + 1, j, n, m);
        distinctPaths(i, j + 1, n, m);
    }

    public static int distinctPathsCount(int i, int j, int n, int m) {
        if (i >= n || j >= m) {
            return 0;
        }
        if (i == n - 1 && j == m - 1) {
            return 1;
        }
        return distinctPathsCount(i + 1, j, n, m) + distinctPathsCount(i, j + 1, n, m);
    }

    // Dynamic Programming
    public static int distinctPaths(int n, int m) {
        int[][] grid = new int[n][m];
        for (int[] is : grid) {
            Arrays.fill(is, 1);
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            }
        }
        return grid[n - 1][m - 1];
    }

    public static void main(String[] args) {
        distinctPaths(0, 0, 3, 2);
        System.out.println(count);
        System.out.println(distinctPaths(3, 2));
        System.out.println(distinctPathsCount(0, 0, 3, 2));
    }
}
