package infinitycodecrew.VenuApp;

import infinitycodecrew.VenuApp.models.User;
import org.springframework.context.ApplicationEvent;

public class RegistrationComplete extends ApplicationEvent {
    private User user;
    private String applicationUrl;

    public RegistrationComplete(User user, String applicationUrl) {
        super(user);
        this.user = user;
        this.applicationUrl = applicationUrl;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getApplicationUrl() {
        return applicationUrl;
    }

    public void setApplicationUrl(String applicationUrl) {
        this.applicationUrl = applicationUrl;
    }
}
