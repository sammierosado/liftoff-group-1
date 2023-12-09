package infinitycodecrew.VenuApp.models;



import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;


import java.util.Objects;

@MappedSuperclass
public abstract class AbstractEntity {

    @Id
    private int id;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractEntity entity = (AbstractEntity) o;
        return id == entity.id;
    }
}
