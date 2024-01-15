package infinitycodecrew.VenuApp.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Stars {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int starRating;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;


    public Stars() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getStarRating() {
        return starRating;
    }

    public void setStarRating(int starRating) {
        this.starRating = starRating;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stars that = (Stars) o;
        return starRating == that.starRating && Objects.equals(id, that.id) && Objects.equals(venue, that.venue);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, starRating, venue);
    }
}
