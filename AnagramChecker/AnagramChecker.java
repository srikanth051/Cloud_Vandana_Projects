import java.util.Arrays;
import java.util.Scanner;

public class AnagramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input two strings as a single input separated by a comma
        System.out.print("Enter two strings separated by a comma (e.g., \"hello, world\"): ");
        String input = scanner.nextLine();

        // Split the input into two strings
        String[] parts = input.split(",");
        if (parts.length != 2) {
            System.out.println("Invalid input. Please enter two strings separated by a comma.");
            return;
        }

        // Trim any extra spaces around the strings
        String str1 = parts[0].trim();
        String str2 = parts[1].trim();

        // Check if they are anagrams
        boolean result = areAnagrams(str1, str2);

        // Output the result
        System.out.println(result);
    }

    public static boolean areAnagrams(String str1, String str2) {
        // Remove all whitespace and convert to lowercase
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        // If lengths are different, they cannot be anagrams
        if (str1.length() != str2.length()) {
            return false;
        }

        // Convert strings to character arrays
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();

        // Sort the character arrays
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        // Compare the sorted arrays
        return Arrays.equals(charArray1, charArray2);
    }
}