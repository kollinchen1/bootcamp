import java.util.ArrayList;
public class Portfolio {
    public ArrayList<Project> Projects;
    public Portfolio(){
        this.Projects = new ArrayList<Project>();

    }
    public void Add(Project p){
        Projects.add(p);
    }
    public double getPortfolioCost(){
        double total = 0;
        for(Project p : Projects){
            total += p.getInitialCost();
        }
        return total;
    }
    public void showPortfolio(){
        double total = 0;
        for(Project p : Projects){
            total += p.getInitialCost();
            System.out.println(p.elevatorPitch());
        }
        System.out.println("Total Coast: "+total);
    }
}
