package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.models.data.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/venues")
public class VenueController {

    @Autowired
    private VenueRepository venueRepository;

    @GetMapping
}
