package infinitycodecrew.VenuApp;

import infinitycodecrew.VenuApp.Token.VerificationToken;
import infinitycodecrew.VenuApp.models.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<User> getUsers();
    User registerUser(RegistrationRequest request);
    Optional<User> findByEmail(String email);

    Optional<User> findById(int id);

    void saveUserVerificationToken(User theUser, String verificationToken);

    String validateToken(String theToken);
}
