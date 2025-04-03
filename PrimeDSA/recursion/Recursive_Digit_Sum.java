import java.util.Scanner;

public class Recursive_Digit_Sum {

    public static int superDigit(String n, int k) {
        if(n.length() == 1) return Integer.parseInt(n);
        long sum = 0;
        int[] digitArray = new int[n.length()];
        int i = 0;
        while(i < n.length()){
            digitArray[i] = n.charAt(i) - '0';
            i++;
        }
        for (int j = 0; j < digitArray.length; j++) {
            sum += digitArray[j];
        }
        sum = sum * k;
        return superDigit(String.valueOf(sum), 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String n = sc.next();
        int k = sc.nextInt();
        System.out.println(superDigit(n, k));
        sc.close();
    }
}