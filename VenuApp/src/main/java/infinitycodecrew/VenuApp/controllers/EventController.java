package infinitycodecrew.VenuApp.controllers;

import infinitycodecrew.VenuApp.models.Event;
import infinitycodecrew.VenuApp.models.data.EventRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @GetMapping
    public String index(Model model) {
        model.addAttribute("events", eventRepository.findAll());
        return "events/eventindex";
    }

    @GetMapping("/add")
    public String createEventForm(Model model) {
        model.addAttribute("event", new Event());
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
}