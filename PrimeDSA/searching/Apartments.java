import java.util.*;

public class Apartments {

    public static int lowerBound(int x, int st, int end, int[] nums) {
        while (st <= end) {
            int mid = st + (end - st) / 2;
            if (nums[mid] < x) {
                st = mid + 1;
            } else {
                if (mid == st) return mid;
                if (nums[mid - 1] < x) return mid;
                else end = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int k = sc.nextInt();
        int[] desiredApartments = new int[n];
        int[] apartments = new int[m];
        for (int i = 0; i < n; i++) {
            desiredApartments[i] = sc.nextInt();
        }
        for (int i = 0; i < m; i++) {
            apartments[i] = sc.nextInt();
        }
        Arrays.sort(desiredApartments);
        Arrays.sort(apartments);

        int cnt = 0;
        int ub = n - 1;
        for(int apartment: apartments){
            int lb = apartment - k;
            int lowerBound = lowerBound(lb, lb, ub, desiredApartments);
            if(lowerBound == -1) break;
            cnt++;
        }
        System.out.println(cnt);
    }
}