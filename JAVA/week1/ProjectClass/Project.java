public class Project {
    private String description;
    private String name;
    private double initialCost = 0;
    public Project(){
        this.name = "default";
        this.description = "default";
    }
    public Project(String name) {
        this.name = name;
        this.description = "default";
    }
    public Project(String name, String description) {
        this.name = name;
        this.description = description;

    }
    public Project(String name, String description, double initialCost) {
        this.name = name;
        this.description = description;
        this.initialCost = initialCost;
    }
    //getters
    public String getName(){
        return name;
    }
    public String getDescription(){
        return description;
    }
    public double getInitialCost(){
        return initialCost;
    }
    //setters
    public void setName(String name){
        this.name = name;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public void setInitialCost(double initialCost){
        this.initialCost = initialCost;
    }
    
    public String elevatorPitch(){
        return name+"("+initialCost+"):"+description;
    }
}
