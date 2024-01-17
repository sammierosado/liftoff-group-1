package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.models.Event;
import infinitycodecrew.VenuApp.models.data.ArtistRepository;
import infinitycodecrew.VenuApp.models.data.EventRepository;
import infinitycodecrew.VenuApp.models.data.VenueRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private ArtistRepository artistRepository;
    @Autowired
    private VenueRepository venueRepository;

    @GetMapping
    public String index(Model model) {
        model.addAttribute("events", eventRepository.findAll());
        return "events/eventindex";
    }

    @GetMapping("/add")
    public String createEventForm(Model model) {
        model.addAttribute("event", new Event());
        model.addAttribute("artists", artistRepository.findAll());
        model.addAttribute("venues", venueRepository.findAll());
        return "events/add";
    }

    @PostMapping("/add")
    public String createEvent(@ModelAttribute @Valid Event event,
                              @RequestParam("flyer") MultipartFile flyer,
                              Errors errors,
                              Model model) {
        if (errors.hasErrors()) {
            return "events/add";
        } else {
            try {
                event.setFlyerImage(flyer.getBytes());
                event.setFlyerContentType(flyer.getContentType());
                eventRepository.save(event);
                return "redirect:/events";
            } catch (IOException e) {
                e.printStackTrace();

                model.addAttribute("errorMessage", "Error processing the flyer image. Please try again.");

                return "events/add";
            }
        }
    }

    @GetMapping("/delete")
    public String displayEventDeleteForm(Model model) {
        model.addAttribute("eventList", eventRepository.findAll());
        return "events/delete";
    }

    @PostMapping("/delete")
    public String processDeleteEventForm(@RequestParam(required = false) int[] eventIds) {
        for (int id : eventIds) {
            eventRepository.deleteById(id);
        }
        return "redirect:/events";
    }

    @PostMapping("/delete/{id}")
    public String processDelete(@PathVariable int id) {
        eventRepository.deleteById(id);
        return "redirect:/events";
    }

    @GetMapping("/update/{id}")
    public String showUpdateForm(@PathVariable int id, Model model) {
        Event event = eventRepository.findById(id).orElse(null);

        if (event == null) {
            return "redirect:/events";
        }

        model.addAttribute("event", event);
        model.addAttribute("artists", artistRepository.findAll());
        model.addAttribute("venues", venueRepository.findAll());
        return "events/update";
    }

    @PostMapping("/update/{id}")
    public String updateEvent(@PathVariable int id, @ModelAttribute @Valid Event updatedEvent, Errors errors) {
        if (errors.hasErrors()) {
            return "events/update";
        }

        Event existingEvent = eventRepository.findById(id).orElse(null);

        if (existingEvent == null) {

            return "redirect:/events";
        }

        existingEvent.setEventName(updatedEvent.getEventName());
        existingEvent.setPrice(updatedEvent.getPrice());
        existingEvent.setDate(updatedEvent.getDate());
        existingEvent.setArtist(updatedEvent.getArtist());
        existingEvent.setVenue(updatedEvent.getVenue());

        eventRepository.save(existingEvent);

        return "redirect:/events";
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