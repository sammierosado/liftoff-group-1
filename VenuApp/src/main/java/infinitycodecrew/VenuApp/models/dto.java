package infinitycodecrew.VenuApp.models;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class dto {

    public static class LoginFormDTO {

        @NotNull
        @NotBlank
        @Size(min=6, max=20, message = "Invalid username! Must be between 6 and 20 characters.")
        private String username;

        @NotNull
        @NotBlank
        @Size(min=10, max=30, message= "Invalid password! Must be between 10 and 30 characters.")
        private String password;

        public String getUsername() {return username;}

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {return password;}

        public void setPassword(String password){
            this.password = password;
        }
    }

    public static class RegisterFormDTO extends LoginFormDTO {
        private String verifyPassword;

        public String getVerifyPassword() {return verifyPassword;}

        public void setVerifyPassword(String verifyPassword) {
            this.verifyPassword=verifyPassword;
        }
    }


}
