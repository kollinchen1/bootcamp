import java.util.ArrayList;

import java.util.Random;
public class TestPuzzleJava {
    public static void main(String[] args) {
        Puzzling generator = new Puzzling();
        // PuzzleJava generator = new PuzzleJava();
        ArrayList<Integer> randomRolls = generator.getTenRolls();
        System.out.println(randomRolls);
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        System.out.println(generator.getRandomLetter(alphabet));
        System.out.println(generator.generatePassword(alphabet));
        ArrayList<String> a = generator.getNewPasswordSet(10);
        System.out.println(a);
        System.out.println(generator.shuffleArray(a));
        
    }

}
