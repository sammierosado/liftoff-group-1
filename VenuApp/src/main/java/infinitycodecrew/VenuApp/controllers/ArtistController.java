package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.models.Artist;
import infinitycodecrew.VenuApp.models.data.ArtistRepository;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/artists")
public class ArtistController {

    @Autowired
    private ArtistRepository artistRepository;


   @GetMapping
   public String displayArtistsPage(Model model){
       model.addAttribute("artists", artistRepository.findAll());
       return "artists/artistindex";
   }


    @GetMapping("/add")
    public String displayAddArtistForm(Model model){
        model.addAttribute("artist", new Artist());
        return "artists/add";
    }

    @PostMapping("/add")
    public String processAddArtistForm(@ModelAttribute @Valid Artist artist, Errors errors){
        if (errors.hasErrors()){
            return "artists/add";
        }else {
            artistRepository.save(artist);
            return "redirect:/artists";
        }
    }




}
