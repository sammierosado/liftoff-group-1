package infinitycodecrew.VenuApp.models;

import jakarta.persistence.*;
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

    @Lob
    @Column(name = "flyer_image", columnDefinition = "LONGBLOB")
    private byte[] flyerImage;

    @Column(name = "flyer_content_type")
    private String flyerContentType;


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

    public byte[] getFlyerImage() {
        return flyerImage;
    }

    public void setFlyerImage(byte[] flyerImage) {
        this.flyerImage = flyerImage;
    }

    public String getFlyerContentType() {
        return flyerContentType;
    }

    public void setFlyerContentType(String flyerContentType) {
        this.flyerContentType = flyerContentType;
    }
}
