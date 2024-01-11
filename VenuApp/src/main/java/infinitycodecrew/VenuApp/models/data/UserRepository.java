package infinitycodecrew.VenuApp.models.data;


import infinitycodecrew.VenuApp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

   Optional<User> findByUsername(String username);
   Optional<User> findByEmail(String email);
}
