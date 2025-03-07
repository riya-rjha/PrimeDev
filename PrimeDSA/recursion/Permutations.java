package recursion;

import java.util.*;

public class Permutations {

    // Using Additional Space
    public static List<List<Integer>> getPermutations(int idx, int[] nums, int n, List<List<Integer>> ans,
            List<Integer> temp) {
        if (idx >= n) {
            return ans;
        }
        int size = temp.size();
        int element = nums[idx];
        for (int i = 0; i <= size && i < n; i++) {
            temp.add(i, element);
            if (temp.size() == n) {
                ans.add(new ArrayList<>(temp));
            }
            // System.out.println(ans);
            getPermutations(idx + 1, nums, n, ans, temp);
            temp.remove((Integer) element);
        }
        return ans;
    }

    // Swapping Logic + Backtracking

    public static void swap(int a, int b, int[] nums) {
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    public static List<int[]> helper(int idx, int[] nums, int n, List<int[]> ans) {
        if (idx >= n) {
            int[] arr = new int[nums.length];
            for (int i = 0; i < nums.length; i++) {
                arr[i] = nums[i];
            }
            ans.add(arr);
            return ans;
        }
        for (int i = idx; i < n; i++) {
            swap(idx, i, nums);
            helper(idx + 1, nums, n, ans);
            swap(idx, i, nums);
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 2, 3 };
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> lst = new ArrayList<>();
        lst.add(nums[0]);
        System.out.println(getPermutations(1, nums, nums.length, ans, lst));
        List<int[]> answer = new ArrayList<>();
        answer = helper(0, nums, nums.length, answer);
        for (int[] is : answer) {
            System.out.print(Arrays.toString(is)+" ");
        }
    }
}
