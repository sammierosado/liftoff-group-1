package infinitycodecrew.VenuApp.models.data;

import infinitycodecrew.VenuApp.models.Event;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, Integer> {
}
