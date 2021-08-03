public class Project {
    public String description;
    public String name;
    public double initialCost;
    public Project(){

    }
    public Project(String name) {
        this.name = name;
    }
    public Project(String name, String description) {
        this.name = name;
        this.description = description;
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
