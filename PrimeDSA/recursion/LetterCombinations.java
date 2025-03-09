package recursion;

import java.util.*;

public class LetterCombinations {

    static HashMap<Character, String> hm = new HashMap<>();

    public static void helper(int idx, List<String> ans, String curr, String digits, int n) {
        if (curr.length() == n && !curr.equals("")) {
            ans.add(curr);
            return;
        }
        if (idx >= n) return;
        char currDigit = digits.charAt(idx);
        String alphabets = hm.get(currDigit);
        for (int i = 0; i < alphabets.length(); i++) {
            char currChar = alphabets.charAt(i);
            helper(idx + 1, ans, curr + currChar, digits, n);
        }
    }

    public static List<String> letterCombinations(String digits) {
        List<String> ans = new ArrayList<>();
        helper(0, ans, "", digits, digits.length());
        return ans;
    }

    public static void main(String[] args) {
        String digits = "23";
        // String digits = "234";
        // String digits = "";
        hm.put('2', "abc");
        hm.put('3', "def");
        hm.put('4', "ghi");
        hm.put('5', "jkl");
        hm.put('6', "mno");
        hm.put('7', "pqrs");
        hm.put('8', "tuv");
        hm.put('9', "wxyz");
        System.out.println(letterCombinations(digits));
    }
}
