import java.util.Random;
import java.util.ArrayList;

public class Puzzling{
    Random random = new Random();
    char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
    public ArrayList<Integer> getTenRolls(){
        ArrayList<Integer> myArray = new ArrayList<Integer>();
        int i = 0;
        while(i<10){
            myArray.add(random.nextInt(21));
            i++;
        }
        return myArray;
    }
    // public int [] getTenRolls(){
    //     int[] myArray = new int[10];
    //     int i = 0;
    //     while(i<10){
    //         myArray[i] = random.nextInt(21);
    //         i++;
    //     }
    //     return myArray;
    // }
    public char getRandomLetter(char[] list){
        return list[random.nextInt(26)];
    }

    public String generatePassword(char[] list){
        int i = 0;
        String pw = "";
        while (i<8){
            pw+=getRandomLetter(list);
            i++;
        }
        return pw;
    }
    public String generatePassword(){
        int i = 0;
        String pw = "";
        while (i<8){
            pw+=getRandomLetter(alphabet);
            i++;
        }
        return pw;
    }

    public ArrayList<String> getNewPasswordSet(int length){
        ArrayList<String> myArray = new ArrayList<String>();
        int i = 0; 
        while (i<length){
            myArray.add(generatePassword());
            i++;
        }
        return myArray;
    }

    public ArrayList<String> shuffleArray(ArrayList<String> a){
        ArrayList<String> copy = new ArrayList<String>();
        for(String stuff:a){
            copy.add(stuff);
        }
        ArrayList<String> myArray = new ArrayList<String>();
        int i = 0,randIndex = 0;
        while(i<a.size()){
            randIndex = random.nextInt(copy.size());
            // System.out.println("i "+i);
            // System.out.println("R "+randIndex);
            myArray.add(copy.get(randIndex));
            copy.remove(randIndex);
            i++;
        }
        return myArray;
    }
}
