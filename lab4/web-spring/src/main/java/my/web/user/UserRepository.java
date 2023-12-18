package my.web.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

/**
 * Repository class for <code>User</code> domain objects.
 *
 * @author Tim Danilov
 */
public interface UserRepository extends Repository<User, Integer> {


    /**
     * Retrieve an {@link User} from the data store by id.
     *
     * @param id the id to search for
     * @return the {@link User} if found
     */
    @Query("SELECT user FROM User user LEFT JOIN user.shots WHERE user.id =:id")
    @Transactional(readOnly = true)
    User findById(@Param("id") Integer id);

    /**
     * Retrieve {@link User} from the data store by username.
     *
     * @param username Value to search for
     * @return the {@link User} if found
     */

    @Query("SELECT DISTINCT user FROM User user LEFT JOIN user.shots WHERE user.username =: username ")
    @Transactional(readOnly = true)
    User findByUsername(@Param("username") String username);

    /**
     * Save an {@link User} to the data store, either inserting or updating it.
     *
     * @param user the {@link User} to save
     */
    void save(User user);

    /**
     * Returns all the users from data store
     **/
    @Query("SELECT user FROM User user")
    @Transactional(readOnly = true)
    Page<User> findAll(Pageable pageable);

}