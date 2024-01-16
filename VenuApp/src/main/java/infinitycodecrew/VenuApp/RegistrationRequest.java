package infinitycodecrew.VenuApp;


import infinitycodecrew.VenuApp.models.Role;
import lombok.Data;

import java.util.List;


@Data
public class RegistrationRequest{
       private String username;
       private String email;
       private String password;
       private List<Role> roles;

       public RegistrationRequest(String username, String email, String password, List<Role> roles) {
              this.username = username;
              this.email = email;
              this.password = password;
              this.roles = roles;
       }

       public RegistrationRequest() {
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

       public List<Role> getRoles() {
              return roles;
       }

       public void setRoles(List<Role> roles) {
              this.roles = roles;
       }
}
