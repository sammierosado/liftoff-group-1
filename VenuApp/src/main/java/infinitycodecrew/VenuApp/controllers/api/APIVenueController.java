package infinitycodecrew.VenuApp.controllers.api;

import infinitycodecrew.VenuApp.models.Venue;

import infinitycodecrew.VenuApp.models.data.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/venues")
public class APIVenueController {

    @Autowired
    VenueRepository venueRepository;



    @GetMapping
    public ResponseEntity<List<Venue>> getAllVenues(){
        List <Venue> venues = (List<Venue>) venueRepository.findAll();
        return new ResponseEntity<>(venues, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVenuesById(@PathVariable Integer id) {
        Optional<Venue> venueOptional = venueRepository.findById(id);
        if (venueOptional.isPresent()) {
            return new ResponseEntity<>(venueOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
