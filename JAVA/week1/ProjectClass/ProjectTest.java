public class ProjectTest {
    public static void main(String[] args){
        Project ed = new Project("ed","eddddd");
        Project ko = new Project("Ko");
        Project empty = new Project();
        ed.setInitialCost(20.1);
        ko.setInitialCost(10.1);
        empty.setInitialCost(10);
        System.out.println(ed.elevatorPitch());
        System.out.println(ko.elevatorPitch());
        System.out.println(empty.elevatorPitch());
    }
}
