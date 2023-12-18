package my.web.shots;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShotService {
    @Autowired
    private ShotRepository shotRepository;
    @Autowired
    private Rifle rifle;

    public void createShot(ShotDto shotDto) {
        var isValid = rifle.validate(shotDto.getX(), shotDto.getY(), shotDto.getRadius());
        if (!isValid) {
            throw new IllegalArgumentException("Неверные данные для выстрела.");
        }

        var shot = rifle.createShot(shotDto.getX(), shotDto.getY(), shotDto.getRadius(), "Shooter");
        shotRepository.save(shot);
    }

    public List<Shot> findAll() {
        return shotRepository.findAll();
    }
}
