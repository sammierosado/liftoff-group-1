package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.RegistrationComplete;
import infinitycodecrew.VenuApp.RegistrationRequest;
import infinitycodecrew.VenuApp.Token.VerificationToken;
import infinitycodecrew.VenuApp.UserService;
import infinitycodecrew.VenuApp.models.User;
import infinitycodecrew.VenuApp.models.data.VerificationTokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class RegistrationController {
    private final UserService userService;
    private final ApplicationEventPublisher publisher;
    private final VerificationTokenRepository tokenRepository;


    @PostMapping
    public String registerUser(@RequestBody RegistrationRequest registrationRequest, final HttpServletRequest request){
        User user = userService.registerUser(registrationRequest);
        publisher.publishEvent(new RegistrationComplete(user, applicationUrl(request)));
        return "Successfully created new user. Please check your email to confirm your all access pass!";
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token){
        VerificationToken theToken = tokenRepository.findByToken(token);
        if (theToken.getUser().isEnabled()){
            return "Your account has already been verified. Please login to join the party!";
        }
        String verificationResult = userService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")){
            return "Your email has successfully been verified and you are officially welcomed to the party! Please login to get started with your musical adventure.";
        }
        return "Invalid verification token";
    }

    public String applicationUrl(HttpServletRequest request) {
        return "http://" +request.getServerName()+":"+request.getServerPort()+request.getContextPath();
    }

    public RegistrationController(UserService userService, ApplicationEventPublisher publisher, VerificationTokenRepository tokenRepository) {
        this.userService = userService;
        this.publisher = publisher;
        this.tokenRepository = tokenRepository;
    }
}
