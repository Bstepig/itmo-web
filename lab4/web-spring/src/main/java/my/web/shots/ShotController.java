package my.web.shots;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Tim Danilov
 */

@RestController
@RequestMapping("/shots")
public class ShotController {

    @Autowired
    private ShotService shotService;

    @GetMapping("/")
    public List<Shot> getShots() {
        return shotService.findAll();
    }

    @PostMapping("/shoot")
    public String signUp(@RequestBody ShotDto shotDto) {
        shotService.createShot(shotDto);
        return "Shot signed up successfully";
    }
}

