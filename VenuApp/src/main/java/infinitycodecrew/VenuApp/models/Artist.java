package infinitycodecrew.VenuApp.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotBlank;

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
}
