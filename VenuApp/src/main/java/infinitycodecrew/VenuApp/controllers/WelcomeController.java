package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.models.User;
import infinitycodecrew.VenuApp.models.data.UserRepository;
import infinitycodecrew.VenuApp.models.dto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@Controller
public class WelcomeController {



    @GetMapping("/")
    public String welcome() {
        return "welcome/welcomePage.html";
    }

}
