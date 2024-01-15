package infinitycodecrew.VenuApp;

import infinitycodecrew.VenuApp.Exception.UserAlreadyExistsException;
import infinitycodecrew.VenuApp.Token.VerificationToken;
import infinitycodecrew.VenuApp.models.Role;
import infinitycodecrew.VenuApp.models.User;
import infinitycodecrew.VenuApp.models.data.UserRepository;
import infinitycodecrew.VenuApp.models.data.VerificationTokenRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final VerificationTokenRepository tokenRepository;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, VerificationTokenRepository tokenRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenRepository = tokenRepository;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }


    @Override
    public User registerUser(RegistrationRequest registration) {
        var user = new User(registration.getUsername(),
                registration.getEmail(),
                passwordEncoder.encode(registration.getPassword()),
                Arrays.asList(new Role("ROLE_USER")));
        return userRepository.save(user);
    }


//@Override
//public User registerUser(RegistrationRequest registration) {
//        Optional<User> user = this.findByEmail(registration.getEmail());
//        if (user.isPresent()){
//            throw new UserAlreadyExistsException("A user with the email " +registration.getEmail()+ "already exists!");
//        }
//    var newUser = new User();
//        newUser.setUsername(registration.getUsername());
//        newUser.setPassword(passwordEncoder.encode(registration.getPassword()));
//        newUser.setEmail(registration.getEmail());
//        newUser.setRoles(registration.getRoles());
//        return userRepository.save(newUser);
//}

//    @Override
//    public Optional<User> findByEmail(String email) {
//        return Optional.ofNullable(userRepository.findByEmail(email))
//                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//    }
//@Override
//public Optional<User> findByEmail(String email) {
//    return Optional.ofNullable(userRepository.findByEmail(email));
//}

    @Override
    public Optional<User> findByEmail(String email) {
        return Optional.ofNullable(userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found")));
    }

    @Override
    public Optional<User> findById(int id) {
        return userRepository.findById(id);
    }

    @Override
    public void saveUserVerificationToken(User theUser, String token) {
        var verificationToken = new VerificationToken(token, theUser);
        tokenRepository.save(verificationToken);
    }

    @Override
    public String validateToken(String theToken) {
        VerificationToken token = tokenRepository.findByToken(theToken);
        if (token == null){
            return "Invalid verification token.";
        }
        User user = token.getUser();
        Calendar calendar = Calendar.getInstance();
        if ((token.getExpirationTime().getTime() - calendar.getTime().getTime()) <= 0){
            tokenRepository.delete(token);
            return "This verification token has expired. Please try to register again!";
        }
        user.setEnabled(true);
        userRepository.save(user);
        return "valid";
    }
}
