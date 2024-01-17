package infinitycodecrew.VenuApp.controllers.api;

import infinitycodecrew.VenuApp.models.Stars;
import infinitycodecrew.VenuApp.models.data.StarRatingRepository;
import infinitycodecrew.VenuApp.models.data.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/starratings")
public class APIStarRatingController {

    @Autowired
     StarRatingRepository starRatingRepository;
    @Autowired
    VenueRepository venueRepository;

    @GetMapping
    public ResponseEntity<List<Stars>> getAllRatings() {
        List<Stars> starRatings = (List<Stars>) starRatingRepository.findAll();
        return new ResponseEntity<>(starRatings, HttpStatus.OK);
    }

    @PostMapping("/rateVenue")
    public ResponseEntity<String> RateVenue(@RequestBody Stars stars){
        starRatingRepository.save(stars);
      return  new ResponseEntity<>("Rating Saved Successfully", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Stars>> getRatingsByVenueId(@Query) {
        List<Stars> starRatings = (List<Stars>) starRatingRepository.findAll();
        return new ResponseEntity<>(starRatings, HttpStatus.OK);
    }
}

