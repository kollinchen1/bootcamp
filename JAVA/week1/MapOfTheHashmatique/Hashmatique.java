import java.util.HashMap;
import java.util.Set;

public class Hashmatique{
    public static void main(String[]  args){
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put(
            "I Knew You Were Trouble",
            "I think - I think when it's all over,It just comes back in flashes, you know?"
            );
        trackList.put(
            "Beautiful Now",
            "I see what you're wearing, there's nothing beneath it Forgive me for staring, forgive me for breathing"
            );
        trackList.put(
            "All Time Low",
            "I, was the knight in shining armor in your movie"
        );
        trackList.put(
            "Counting Stars",
            "Lately, I've been, I've been losing sleep"
        );
        System.out.println(trackList.get("Beautiful Now"));
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println(key+": "+trackList.get(key));
        }
    }
}