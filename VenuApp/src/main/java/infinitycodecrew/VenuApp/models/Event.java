package infinitycodecrew.VenuApp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Entity
public class Event extends AbstractEntity {

    private String eventName;

    private double price;

    @ManyToOne
    @JoinColumn(name="artist_id")
    private Artist artist;

    @ManyToOne
    @JoinColumn(name="venue_id")
    private Venue venue;


    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate date;

    public Event() {

    }
//    public Event(String eventName, double price, LocalDate date) {
//        this.eventName = eventName;
//        this.price = price;
//        this.date = date;
//    }

    public Event(String eventName, double price, Artist artist, Venue venue, LocalDate date) {
        this.eventName = eventName;
        this.price = price;
        this.artist = artist;
        this.venue = venue;
        this.date = date;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }
}
