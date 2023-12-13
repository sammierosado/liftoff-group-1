package infinitycodecrew.VenuApp.models;

import jakarta.persistence.Entity;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Entity
public class Event extends AbstractEntity {
    private String eventName;
    private double price;

    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private LocalDate date;

    public Event() {

    }
    public Event(String eventName, double price, LocalDate date) {
        this.eventName = eventName;
        this.price = price;
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

}
