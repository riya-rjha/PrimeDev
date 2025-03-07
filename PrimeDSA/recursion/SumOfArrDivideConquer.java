package recursion;

public class SumOfArrDivideConquer {

    // TC - O(N)
    // SC - O(log N)
    private static int helper(int left, int right, int[] nums) {
        if (left == right) {
            return nums[left];
        }
        int mid = left + (right - left) / 2;
        int leftPartSum = helper(left, mid, nums);
        int rightPartSum = helper(mid + 1, right, nums);
        return leftPartSum + rightPartSum;
    }

    public static void main(String[] args) {
        int[] nums = { 1, 2, 1, 2, 3, 2, 1, 1 };
        System.out.println(helper(0, nums.length - 1, nums));
    }
}
