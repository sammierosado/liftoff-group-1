package infinitycodecrew.VenuApp.controllers.api;


import infinitycodecrew.VenuApp.models.Event;
import infinitycodecrew.VenuApp.models.data.ArtistRepository;
import infinitycodecrew.VenuApp.models.data.EventRepository;
import infinitycodecrew.VenuApp.models.data.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

    @GetMapping("/flyer/{eventId}")
    public ResponseEntity<byte[]> getEventFlyer(@PathVariable int eventId) {
        Event event = eventRepository.findById(eventId).orElse(null);
        if (event != null && event.getFlyerImage() != null) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_PNG);
            return new ResponseEntity<>(event.getFlyerImage(), headers, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
