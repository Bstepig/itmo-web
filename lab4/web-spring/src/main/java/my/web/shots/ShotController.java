package my.web.shots;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

/**
 * @author Tim Danilov
 */

@RestController
@RequestMapping("/shots")
@Api(tags = {"shots"})
public class ShotController {

    @Autowired
    private ShotService shotService;

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    @ApiOperation(value = "Get list of shots.")
    public List<Shot> getShots() {
        return shotService.findAll();
    }

    @PostMapping("/shoot")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Make a shot.")
    public String shoot(@RequestBody ShotDto shotDto) {
        shotService.createShot(shotDto);
        return "Shot signed up successfully";
    }
}

