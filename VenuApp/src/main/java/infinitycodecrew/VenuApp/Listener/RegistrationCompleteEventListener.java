package infinitycodecrew.VenuApp.Listener;

import infinitycodecrew.VenuApp.RegistrationComplete;
import infinitycodecrew.VenuApp.UserService;
import infinitycodecrew.VenuApp.models.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Slf4j
@Component
public class RegistrationCompleteEventListener
        implements ApplicationListener<RegistrationComplete> {
    private final UserService userService;

    public RegistrationCompleteEventListener(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void onApplicationEvent(RegistrationComplete event) {
        User theUser = event.getUser();
        String verificationToken = UUID.randomUUID().toString();
        userService.saveUserVerificationToken(theUser, verificationToken);
        String url = event.getApplicationUrl()+"/register/verifyEmail?token="+verificationToken;
        System.out.println("Click the link to verify your registration and join the party: " + url);
    }
}
