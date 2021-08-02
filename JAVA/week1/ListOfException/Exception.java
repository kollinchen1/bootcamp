import java.util.ArrayList;
class unsupportedCastException extends Exception{}
public class Exception {
    public static void main(String[] args){
        Exception test = new Exception();
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");
        test.cast(myList);
    }

    public void cast(ArrayList<Object> myList) {
        for(int i = 0; i < myList.size(); i++) {
            try{
                Integer castedValue = (Integer) myList.get(i);
                System.out.println(castedValue);
            }catch(ClassCastException e){
                System.out.println(myList.get(i) + " cannot cast");
            }
        }

    }
}
