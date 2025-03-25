package recursion;

import java.util.*;

public class Basics {

    static int count = 0;

    public static void func(int i, int j, int m, int n) {
        count++;
        if (i >= n || j >= m) {
            return;
        }
        if (i == n - 1 && j == m - 1) {
            return;
        }
        func(i, j + 1, m, n);
        func(i + 1, j, m, n);
    }

    // Generate all subsets

    public static void helper(int idx, int[] nums, List<Integer> temp, List<List<Integer>> ans) {
        if (idx >= nums.length) {
            ans.add(new ArrayList<>(temp));
            return;
        }
        temp.add(nums[idx]);
        helper(idx + 1, nums, temp, ans);
        temp.remove(temp.size() - 1);
        helper(idx + 1, nums, temp, ans);
    }

    public static List<List<Integer>> genAllSubsets(int[] nums) {
        List<Integer> temp = new ArrayList<>();
        List<List<Integer>> ans = new ArrayList<>();
        helper(0, nums, temp, ans);
        return ans;
    }

    // Generate combinations containing not more than 2 occurrences of the same
    // element

    public static void helperII(int idx, int[] nums, List<Integer> lst, List<List<Integer>> ans, int n) {
        if (idx >= n) {
            ans.add(new ArrayList<>(lst));
            return;
        }
        helperII(idx + 1, nums, lst, ans, n);
        lst.add(nums[idx]);
        helperII(idx + 1, nums, lst, ans, n);
        lst.add(nums[idx]);
        helperII(idx + 1, nums, lst, ans, n);
        lst.remove(lst.size() - 1);
        lst.remove(lst.size() - 1);
    }

    public static List<List<Integer>> genCombinationsTwoOcc(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> lst = new ArrayList<>();
        helperII(0, nums, lst, ans, nums.length);
        return ans;
    }

    public static void helperIII(int idx, List<Integer> unique, List<List<Integer>> ans, 
    List<Integer> lst, Map<Integer, Integer> hm) {
        if (idx >= unique.size()) {
            ans.add(new ArrayList<>(lst));
            return;
        }
        helperIII(idx + 1, unique, ans, lst, hm);
        int freq = hm.get(unique.get(idx));
        for (int i = 0; i < freq; i++) {
            lst.add(unique.get(idx));
            helperIII(idx + 1, unique, ans, lst, hm);
        }
        for (int i = 0; i < freq; i++) {
            lst.remove(lst.size() - 1);
        }
    }

    public static List<List<Integer>> subsetsWithDup(int[] nums) {
        Map<Integer, Integer> hm = new HashMap<>();
        List<Integer> unique = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            if (hm.containsKey(nums[i])) {
                hm.put(nums[i], hm.get(nums[i]) + 1);
            } else {
                hm.put(nums[i], 1);
                unique.add(nums[i]);
            }
        }
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();
        helperIII(0, unique, ans, temp, hm);
        return ans;
    }

    // Combination Sum -> How many subsets in the array have sum equal to given sum?

    public static void helperIV(int idx, int[] nums, int currSum, int[] count, int n) {
        if (idx >= n) {
            if (currSum == 0) {
                count[0]++;
                return;
            } else return;
        }
        helperIV(idx + 1, nums, currSum - nums[idx], count, n);
        helperIV(idx + 1, nums, currSum, count, n);
    }

    public static int combinationSum(int[] nums, int sum) {
        int[] count = { 0 };
        helperIV(0, nums, sum, count, nums.length);
        return count[0];
    }

    // Combination Sum -> Can take as many duplicates as possible

    public static void helperV(int idx, int[] nums, int currSum, List<Integer> temp, List<List<Integer>> ans, int n) {
        if (idx >= n) {
            if (currSum == 0) {
                ans.add(new ArrayList<>(temp));
                return;
            } else return;
        }
        helperV(idx + 1, nums, currSum, temp, ans, n);
        int limit = currSum / nums[idx];
        for (int i = 1; i <= limit; i++) {
            temp.add(nums[idx]);
            helperV(idx + 1, nums, currSum - (nums[idx] * (i)) , temp, ans, n);
        }
        for (int i = 1; i <= limit; i++) {
            temp.remove(temp.size() - 1);
        }
    }

    public static List<List<Integer>> combinationSumII(int[] nums, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> list = new ArrayList<>();
        helperV(0, nums, target, list, ans, nums.length);
        return ans;
    }

    // BIT Masking Subset Generation
    public static void genSubsetsBitMask(int[] nums, int n){
        System.out.println("All subsets using BIT Masking: ");
        List<Integer> subsets = new ArrayList<>();
        for (int i = 0; i < (1<<n); i++) {
            int mask = i;
            for (int j = 0; j < n; j++) {
                if((mask & (1 << j)) != 1){
                    subsets.add(nums[j]);
                }
            }
            System.out.println(subsets);
            subsets = new ArrayList<>();
        }
    }

    // Max of array
    // Recursion

    public static int findMax(int[] nums, int i, int j){
        if(i == j) return nums[i];
        int mid = i + (j - i) / 2;
        int firstHalf = findMax(nums, i, mid);
        int secondHalf = findMax(nums, mid + 1, j);
        return Math.max(firstHalf, secondHalf);
    }


    public static void main(String[] args) {
        func(0, 0, 3, 2);
        System.out.println(count);

        int[] nums = { 1, 2, 3 };
        System.out.println(genAllSubsets(nums));
        System.out.println("Printing for combinations containing not more than 2 instances of the same element: ");
        System.out.println(genCombinationsTwoOcc(new int[] { 1, 2 }));
        System.out.println("Subsets with Duplicates II: ");
        System.out.println(subsetsWithDup(new int[] { 1, 2, 2, 3 }));

        System.out.println("Printing subsets with given sum: ");
        System.out.println(combinationSum(new int[] { 2, 1, 4, 5 }, 6));

        System.out.println("Printing subsets with given sum with duplicates: ");
        System.out.println(combinationSumII(new int[] { 2, 3, 6, 7 }, 7));

        genSubsetsBitMask(new int[]{1, 2, 3}, 3);

        int[] arr = {2, 31, 41, 9, 3, 1, 4, 123, 30, 31};
        System.out.println(findMax(arr, 0, arr.length - 1));
    }
}
