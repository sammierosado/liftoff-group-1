package infinitycodecrew.VenuApp.models;

import jakarta.persistence.Entity;

@Entity
public class Role extends AbstractEntity{
    private String name;

    public Role(String name){
        this.name=name;
    }
    public Role() {
    }
}
