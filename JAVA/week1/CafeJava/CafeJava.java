public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffee = 3.2;
        double latte = 4.5;
        double cappucino = 4;
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //

        //Cindhuri ordered a coffee. Show her the correct status message.
        System.out.println(customer1+pendingMessage);
        //Noah ordered a cappucino. Check the status of his order and let him know. 
        //If it is ready, also tell him his total.
        if(isReadyOrder4)
            System.out.println(customer4+readyMessage+", "+displayTotalMessage+""+ cappucino);
        else
            System.out.println(customer4+pendingMessage);
        //Sam just order 2 lattes, and would like the total up front.
        //Also give them their order status.
        System.out.println(displayTotalMessage+(2*latte));
        if (isReadyOrder2) System.out.println(customer2+readyMessage);
        else System.out.println(customer2+pendingMessage);
        //Jimmy just realized he was charged for a coffee but had ordered a latte. 
        //Tell him his new total (what he owes) to make up the difference.
        double difference = latte-dripCoffee;
        System.out.println(customer3+", "+displayTotalMessage+ difference);
    }
}
