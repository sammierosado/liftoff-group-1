package infinitycodecrew.VenuApp;

import org.hibernate.annotations.NaturalId;

public record RegistrationRequest(
        String username,
        String email,
        String password,
        String role) {
}
