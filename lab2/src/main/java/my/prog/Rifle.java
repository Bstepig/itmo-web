package my.prog;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Rifle implements Serializable {
    private final List<Shot> shots = new ArrayList<>();

    public List<Shot> getShots() {
        return shots;
    }

    public void addShot(Shot shot) {
        shots.add(shot);
    }

    public void clearShots() {
        shots.clear();
    }
}
