package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.RegistrationComplete;
import infinitycodecrew.VenuApp.RegistrationRequest;
import infinitycodecrew.VenuApp.Token.VerificationToken;
import infinitycodecrew.VenuApp.UserService;
import infinitycodecrew.VenuApp.models.User;
import infinitycodecrew.VenuApp.models.data.VerificationTokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/")
public class RegistrationController {
    private final UserService userService;
    private final ApplicationEventPublisher publisher;
    private final VerificationTokenRepository tokenRepository;

    @GetMapping("registration/register")
    public String showRegistrationForm (Model model){
        model.addAttribute("user", new RegistrationRequest());
        return "/registration";
    }

    @PostMapping("registration/register")
    public String registerUser(@ModelAttribute("user") RegistrationRequest registration, HttpServletRequest request){
        User user = userService.registerUser(registration);
        publisher.publishEvent(new RegistrationComplete(user, applicationUrl(request)));
        return "redirect:/registration/register?success";
        //return "Successfully created new user. Please check your email to confirm your all access pass!";
    }

    @GetMapping("registration/verifyEmail")
    public String verifyEmail(@RequestParam("token") String token){
        VerificationToken theToken = tokenRepository.findByToken(token);
        if (theToken.getUser().isEnabled()){
            return "redirect:/login?verified";
        }
        String verificationResult = userService.validateToken(token);
        if (verificationResult.equalsIgnoreCase("valid")){
            return "redirect:/login?valid";
        }
        return "redirect:/error?invalid";
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
