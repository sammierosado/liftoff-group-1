package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.models.Artist;
import infinitycodecrew.VenuApp.models.data.ArtistRepository;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
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

    @GetMapping("/delete")
    public String displayDeleteArtistForm(Model model) {
       model.addAttribute("artistList", artistRepository.findAll());
       return "artists/delete";
    }

    @PostMapping("/delete")
    public String processDeleteArtistForm(@RequestParam(required = false) int[] artistIds) {
       for (int id : artistIds) {
           artistRepository.deleteById(id);
       }
       return "redirect:/artists";
    }




}
