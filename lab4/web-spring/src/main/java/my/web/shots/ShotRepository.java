package my.web.shots;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Repository class for <code>User</code> domain objects.
 *
 * @author Tim Danilov
 */
public interface ShotRepository extends Repository<Shot, Integer> {


    /**
     * Retrieve an {@link Shot} from the data store by id.
     *
     * @param id the id to search for
     * @return the {@link Shot} if found
     */
    @Query("SELECT user FROM User user WHERE user.id =:id")
    @Transactional(readOnly = true)
    Shot findById(@Param("id") Integer id);

    /**
     * Retrieve {@link Shot} from the data store by username.
     *
     * @param username Value to search for
     * @return the {@link Shot} if found
     */

    @Query("SELECT DISTINCT user FROM User user WHERE user.username =: username ")
    @Transactional(readOnly = true)
    Shot findByUsername(@Param("username") String username);

    /**
     * Save an {@link Shot} to the data store, either inserting or updating it.
     *
     * @param shot the {@link Shot} to save
     */
    void save(Shot shot);

    /**
     * Returns all the users from data store
     **/
    @Query("SELECT shot FROM Shot shot")
    @Transactional(readOnly = true)
    List<Shot> findAll();

}