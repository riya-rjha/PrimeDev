import java.util.*;

public class A_Transformation_from_A_to_B {

    private static void helper(long a, long b, List<Long> temp, List<List<Long>> ans){
        if(temp.size() > 0 && temp.get(temp.size() - 1) == b) {
            ans.add(new ArrayList<>(temp));
            return;
        }
        if(a >= b) return;
        temp.add(2 * a);
        helper(2 * a, b, temp, ans);
        // System.out.println("Adding twice: " + temp);
        temp.remove(temp.size() - 1);
        temp.add(10 * a + 1);
        // System.out.println("Adding addon: " + temp);
        helper(10 * a + 1, b, temp, ans);
        temp.remove(temp.size() - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextLong();
        long b = sc.nextLong();
        List<Long> temp = new ArrayList<>();
        List<List<Long>> ans = new ArrayList<>();
        helper(a, b, temp, ans);
        if(ans.size() == 0) System.out.println("NO");
        else {
            List<Long> finalAns = ans.get(0);
            finalAns.add(0, a);
            System.out.println("YES");
            System.out.println(finalAns.size());
            for (Long ele : finalAns) {
                System.out.print(ele +" ");
            }
            System.out.println();
        }
        sc.close();
    }
}