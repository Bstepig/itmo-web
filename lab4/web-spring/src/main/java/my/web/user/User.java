package my.web.user;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import my.web.model.BaseEntity;
import my.web.shots.Shot;

import java.util.ArrayList;
import java.util.List;

/**
 * JavaBean domain object representing a user.
 *
 * @author Tim Danilov
 */
@Entity
@Table(name = "users")
public class User extends BaseEntity {

    @Column(name = "username")
    @NotBlank
    private String username;

    @Column(name = "password")
    @NotBlank
    private String password;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "shooter_id")
    private List<Shot> shots = new ArrayList<>();


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Shot> getShots() {
        return shots;
    }

    public void setShots(List<Shot> shots) {
        this.shots = shots;
    }
}