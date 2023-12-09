package infinitycodecrew.VenuApp.models;

import jakarta.persistence.Entity;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Objects;

@Entity
public class Venue extends AbstractEntity{

    @NotBlank(message = "Venue Name is Required")
    private String venueName;

    @NotBlank(message = "Venue Street Address is Required")
   @Size(min = 1, max = 8)
    private Integer venueStreetNumber;

    @NotBlank(message = "Venue Street Name is Required")
    private String venueStreetName;

    @NotBlank(message = "Venue City is Required")
    private String venueCity;

    @NotBlank(message = "Venue State is Required")
    private String venueState;

    @NotBlank(message = "5 Digit Venue Zip Code is Required")
    @Size(min = 5, max = 5)
    private Integer venueZip;

    public String getVenueName() {
        return venueName;
    }

    public void setVenueName(String venueName) {
        this.venueName = venueName;
    }

    public Integer getVenueStreetNumber() {
        return venueStreetNumber;
    }

    public void setVenueStreetNumber(Integer venueStreetNumber) {
        this.venueStreetNumber = venueStreetNumber;
    }

    public String getVenueStreetName() {
        return venueStreetName;
    }

    public void setVenueStreetName(String venueStreetName) {
        this.venueStreetName = venueStreetName;
    }

    public String getVenueCity() {
        return venueCity;
    }

    public void setVenueCity(String venueCity) {
        this.venueCity = venueCity;
    }

    public String getVenueState() {
        return venueState;
    }

    public void setVenueState(String venueState) {
        this.venueState = venueState;
    }

    public Integer getVenueZip() {
        return venueZip;
    }

    public void setVenueZip(Integer venueZip) {
        this.venueZip = venueZip;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Venue venue = (Venue) o;
        return Objects.equals(venueName, venue.venueName) && Objects.equals(venueStreetNumber, venue.venueStreetNumber) && Objects.equals(venueStreetName, venue.venueStreetName) && Objects.equals(venueCity, venue.venueCity) && Objects.equals(venueState, venue.venueState) && Objects.equals(venueZip, venue.venueZip);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), venueName, venueStreetNumber, venueStreetName, venueCity, venueState, venueZip);
    }
}
