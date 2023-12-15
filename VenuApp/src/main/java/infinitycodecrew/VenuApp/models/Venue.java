package infinitycodecrew.VenuApp.models;

import jakarta.persistence.Entity;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.Objects;

@Entity
public class Venue extends AbstractEntity{

    @NotBlank(message = "Venue Name is Required")
    private String venueName;

    @NotBlank(message = "Venue Street Address is Required")
   @Size(min = 1, max = 35)
    private String venueAddress;

    @NotBlank(message = "Venue City is Required")
    private String venueCity;

    @NotBlank(message = "Venue State is Required")
    private String venueState;

    @Size(min= 5, message= "Must be a valid zipcode i.e. XXXXX or XXXXX-XXXX")
    private String venueZip;

    private boolean wheelchairAccessible;
    private boolean ADABathrooms;
    private boolean ADASeating;
    private boolean busStopClose;
    private boolean signLanguage;
    private boolean clearPathways;
    private boolean descriptiveAudio;
    private boolean elevators;
    private boolean multiLevel;




    public String getVenueName() {
        return venueName;
    }

    public void setVenueName(String venueName) {
        this.venueName = venueName;
    }

    public String getVenueAddress() {
        return venueAddress;
    }

    public void setVenueAddress(String venueAddress) {
        this.venueAddress = venueAddress;
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

    public String getVenueZip() {
        return venueZip;
    }

    public void setVenueZip(String venueZip) {
        this.venueZip = venueZip;
    }

    public boolean isWheelchairAccessible() {
        return wheelchairAccessible;
    }

    public void setWheelchairAccessible(boolean wheelchairAccessible) {
        this.wheelchairAccessible = wheelchairAccessible;
    }

    public boolean isADABathrooms() {
        return ADABathrooms;
    }

    public void setADABathrooms(boolean ADABathrooms) {
        this.ADABathrooms = ADABathrooms;
    }

    public boolean isADASeating() {
        return ADASeating;
    }

    public void setADASeating(boolean ADASeating) {
        this.ADASeating = ADASeating;
    }

    public boolean isBusStopClose() {
        return busStopClose;
    }

    public void setBusStopClose(boolean busStopClose) {
        this.busStopClose = busStopClose;
    }

    public boolean isSignLanguage() {
        return signLanguage;
    }

    public void setSignLanguage(boolean signLanguage) {
        this.signLanguage = signLanguage;
    }

    public boolean isClearPathways() {
        return clearPathways;
    }

    public void setClearPathways(boolean clearPathways) {
        this.clearPathways = clearPathways;
    }

    public boolean isDescriptiveAudio() {
        return descriptiveAudio;
    }

    public void setDescriptiveAudio(boolean descriptiveAudio) {
        this.descriptiveAudio = descriptiveAudio;
    }

    public boolean isElevators() {
        return elevators;
    }

    public void setElevators(boolean elevators) {
        this.elevators = elevators;
    }

    public boolean isMultiLevel() {
        return multiLevel;
    }

    public void setMultiLevel(boolean multiLevel) {
        this.multiLevel = multiLevel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Venue venue = (Venue) o;
        return wheelchairAccessible == venue.wheelchairAccessible && ADABathrooms == venue.ADABathrooms && ADASeating == venue.ADASeating && busStopClose == venue.busStopClose && signLanguage == venue.signLanguage && clearPathways == venue.clearPathways && descriptiveAudio == venue.descriptiveAudio && elevators == venue.elevators && multiLevel == venue.multiLevel && Objects.equals(venueName, venue.venueName) && Objects.equals(venueAddress, venue.venueAddress) && Objects.equals(venueCity, venue.venueCity) && Objects.equals(venueState, venue.venueState) && Objects.equals(venueZip, venue.venueZip);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), venueName, venueAddress, venueCity, venueState, venueZip, wheelchairAccessible, ADABathrooms, ADASeating, busStopClose, signLanguage, clearPathways, descriptiveAudio, elevators, multiLevel);
    }

    @Override
    public String toString() {
        return venueName;
    }
}
