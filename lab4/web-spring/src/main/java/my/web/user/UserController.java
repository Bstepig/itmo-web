package my.web.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author Tim Danilov
 */

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signUp(@RequestBody UserDto userDto) {
        userService.saveUser(userDto);
        return "User signed up successfully";
    }

    @PostMapping("/signin")
    public String signIn(@RequestBody UserDto userDto) {
        if (userService.validateUser(userDto.getUsername(), userDto.getPassword())) {
            // create and return a session token
            return "Session token";
        } else {
            return "Invalid username or password";
        }
    }

    @PostMapping("/signout")
    public String signOut(@RequestHeader("Authorization") String token) {
        // invalidate the session using the token
        return "User signed out successfully";
    }
}

