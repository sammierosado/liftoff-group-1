package infinitycodecrew.VenuApp.controllers.api;


import infinitycodecrew.VenuApp.models.Event;
import infinitycodecrew.VenuApp.models.data.ArtistRepository;
import infinitycodecrew.VenuApp.models.data.EventRepository;
import infinitycodecrew.VenuApp.models.data.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/events")
public class APIEventController {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private ArtistRepository artistRepository;

    @Autowired
    private VenueRepository venueRepository;

    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = (List<Event>) eventRepository.findAll();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEventsById(@PathVariable Integer id) {
        Optional<Event> eventOptional = eventRepository.findById(id);
        if (eventOptional.isPresent()) {
            return new ResponseEntity<>(eventOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
