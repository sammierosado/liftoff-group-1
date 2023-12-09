package infinitycodecrew.VenuApp.models.data;

import infinitycodecrew.VenuApp.models.Artist;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface ArtistRepository extends CrudRepository<Artist, Integer> {
}
