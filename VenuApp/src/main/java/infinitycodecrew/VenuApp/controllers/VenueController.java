package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.models.Venue;
import infinitycodecrew.VenuApp.models.data.VenueRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/venues")
public class VenueController {

    @Autowired
    private VenueRepository venueRepository;


    @GetMapping
    public String displayVenuesPage(Model model){
        model.addAttribute("venues", venueRepository.findAll());
        return "venues/venueindex";
    }
    @GetMapping("/add")
    public String displayAddVenueForm(Model model){
        model.addAttribute("venue", new Venue());
        return "venues/add";
    }

    @PostMapping("/add")
    public String processAddArtistForm(@ModelAttribute @Valid Venue venue, Errors errors){
        if (errors.hasErrors()){
            return "venues/add";
        }else {
            venueRepository.save(venue);
            return "redirect:/venues";
        }
    }

    @GetMapping("/delete")
    public String displayVenueDeleteForm(Model model){
        model.addAttribute("venueList", venueRepository.findAll());
        return "venues/delete";
    }

    @PostMapping("/delete")
    public String processDeleteVenueForm(@RequestParam(required = false) int[] venueIds){
        for (int id : venueIds) {
            venueRepository.deleteById(id);
        }
        return "redirect:/venues";
    }

}
