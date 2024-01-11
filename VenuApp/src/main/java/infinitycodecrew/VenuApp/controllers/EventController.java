package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.models.Event;
import infinitycodecrew.VenuApp.models.data.ArtistRepository;
import infinitycodecrew.VenuApp.models.data.EventRepository;
import infinitycodecrew.VenuApp.models.data.VenueRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

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
    public String createEvent(@ModelAttribute @Valid Event event, Errors errors) {
        if (errors.hasErrors()) {
            return "events/add";
        } else {
            eventRepository.save(event);
            return "redirect:/events";
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


}