package infinitycodecrew.VenuApp.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.NaturalId;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User extends AbstractEntity {


    private String username;
    @NaturalId(mutable = true)
    private String email;
    private String password;
    private String role;
    private boolean isEnabled = false;

    public User() {}

    public User(String username, String email, String password, String role, boolean isEnabled) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isEnabled = isEnabled;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }
}
