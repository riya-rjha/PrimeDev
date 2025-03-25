package recursion;

public class FastExponentiation {

    public static int helper(int x, int y) {
        if (y == 0) {
            return 1;
        }
        if (y % 2 == 0) {
            return helper(x, y / 2) * helper(x, y / 2);
        }
        return x * helper(x , y / 2) * helper(x, y / 2);
    }

    public static void main(String[] args) {
        int x = 2;
        int y = -2;
        int power = helper(x, y);
        if (y >= 0) {
            System.out.println(power);
        } else {
            System.out.println((float) 1 / (float) power);
        }
    }
}
