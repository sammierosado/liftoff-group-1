package infinitycodecrew.VenuApp.models;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Stars {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "star_rating")
    private int starRating;

    @Column(name = "venue_id")
    private int venueId;


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

    public int getVenueId() {
        return venueId;
    }

    public void setVenueId(int venueId) {
        this.venueId = venueId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stars that = (Stars) o;
        return starRating == that.starRating && Objects.equals(id, that.id) && Objects.equals(venueId, that.venueId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, starRating, venueId);
    }
}
