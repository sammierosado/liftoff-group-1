package infinitycodecrew.VenuApp.models.data;


import infinitycodecrew.VenuApp.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);
}
