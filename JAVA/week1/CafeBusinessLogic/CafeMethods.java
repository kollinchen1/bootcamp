import java.util.ArrayList;
public class CafeMethods {
    //Write a method that prints all the numbers from 0 to 23.
    public void militaryHoursTest(){
        int i = 0;
        while(i<=23){
            System.out.println(i);
            i++;
        }
    }
    //Starting at 0 and ending after 23, for every hour in the day, print out each hour as a string
    public void coffeeNotification(){
        int i = 0;
        while(i<=23){
            System.out.println(String.format("It's %d:00 hours, do you need a coffee break?",i));
            i++;
        }
    }
    /*
        Starting at 6 and ending at 15, iterate through each number, representing an hour, 
        if the hour is a multiple of 3, print "Buy one get one free for the next 15 minutes!" 
        Otherwise, print "Stay tuned for deals announced throughout the day."
    */
    public void specialsAlert(){
        int i = 6;
        while(i<=15){
            if(i%3==0)
                System.out.println("Buy one get one free for the next 15 minutes!");
            else
                System.out.println("Stay tuned for deals announced throughout the day.");
            i++;
        }
    }
    /*
    The sales reps at Cafe Java have a competitive rewards system in place. 
    Each day, they must increase their leads to 1 more than the day before. Or net the same amount at the end of 10 days.
    Starting with 1, sum together all the numbers from 1 to 10. 
    This will calculate how many leads a sales rep needs to have after 10 days to get the reward for that period. 
    Return the sum after it has been calculated.
    */
    public int leadsAtDay10(){
        int sum = 0, i = 1;
        while(i<=10){
            sum+=i;
            i++;
        }
        return sum;
    }

    public void displayMenu(String [] menu){
        int i = 0;
        while(i<menu.length){
            System.out.println(menu[i]);
            i++;
        }
    }

    public double getOrderTotal(double[] list){
        double sum = 0;
        for(double i:list){
            sum+= i;
        }
        return sum;
    }

    public double getHighestPrice(double[] list){
        double temp = list[0];
        for(double i:list){
            if(i > temp){
                temp = i;
            }
        }
        return temp;
    }

    public ArrayList<String> getRaffleWinners(String[] list){
        ArrayList<String> myArray = new ArrayList<String>();
        int i = 1;
        while(i<list.length){
            if(i%4 ==0){
                myArray.add(list[i-1]);
            }
            i++;
        }
        return myArray;
    }
}
