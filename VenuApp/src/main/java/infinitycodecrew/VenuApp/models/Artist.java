package infinitycodecrew.VenuApp.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;

import java.util.Objects;

@Entity
public class Artist extends AbstractEntity {
    @NotBlank(message="Artist name is required.")
    private String artistName;

    @NotBlank(message = "Please enter a Genre.")
    private String genre;

    public Artist(){}

    public Artist(String artistName, String genre){
        this.artistName = artistName;
        this.genre = genre;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Artist artist = (Artist) o;
        return Objects.equals(artistName, artist.artistName) && Objects.equals(genre, artist.genre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), artistName, genre);
    }

    @Override
    public String toString(){
        return artistName;
    }
}
