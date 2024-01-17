package infinitycodecrew.VenuApp.Listener;

import infinitycodecrew.VenuApp.RegistrationComplete;
import infinitycodecrew.VenuApp.Token.VerificationToken;
import infinitycodecrew.VenuApp.UserService;
import infinitycodecrew.VenuApp.models.User;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
import java.util.UUID;

@Slf4j
@Component
public class RegistrationCompleteEventListener
        implements ApplicationListener<RegistrationComplete> {
    private final UserService userService;

    @Autowired
    private final JavaMailSender mailSender;
    private User theUser;


    public RegistrationCompleteEventListener(UserService userService, JavaMailSender mailSender) {
        this.userService = userService;
        this.mailSender = mailSender;
    }

    @Override
    public void onApplicationEvent(RegistrationComplete event) {
        theUser = event.getUser();
        String verificationToken = UUID.randomUUID().toString();
        userService.saveUserVerificationToken(theUser, verificationToken);
        String url = event.getApplicationUrl() + "/registration/verifyEmail?token=" + verificationToken;
        System.out.println("Click the link to verify your registration and join the party: " + url);
        try {
            sendVerificationEmail(url);
        } catch (MessagingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }

        public void sendVerificationEmail(String url) throws MessagingException, UnsupportedEncodingException {
            //props.put("mail.smtp.starttls.enable", "true");
            String subject = "Welcome to the Party!";
            String senderName = "The VENU Team";
            String mailContent = "<p> Hi, "+ theUser.getUsername()+ ", </p>"+
                    "<p>Thank you for registering with us,"+"" +
                    "Please, follow the link below to complete your registration.</p>"+
                    "<a href=\"" +url+ "\">Verify your email to activate your account and get your all access pass.</a>"+
                    "<p> Thank you <br> The VENU Team";
            MimeMessage message = mailSender.createMimeMessage();
            var messageHelper = new MimeMessageHelper(message);
            messageHelper.setFrom("mdurham86@gmail.com", senderName);
            messageHelper.setTo(theUser.getEmail());
            messageHelper.setSubject(subject);
            messageHelper.setText(mailContent, true);
            mailSender.send(message);
        }
    }

