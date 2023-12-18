package my.web.shots;

import my.web.area.TargetAreaCircle;
import my.web.area.TargetAreaRectangle;
import my.web.area.TargetAreaTriangle;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class Rifle {

    private final Input coordinateXInput = new Input(InputType.inputText, 20, 50);
    private final Input coordinateYInput = new Input(InputType.pSlider, 0, 10, 0.25);
    private final Input radiusInput = new Input(InputType.pSpinner, 0, 10, 0.25);

    private final Target target = new Target();

    {
        target.setQuadrant1(new TargetAreaCircle(1f));
        target.setQuadrant2(new TargetAreaRectangle(0.5f, 1f));
        target.setQuadrant3(new TargetAreaCircle(0.5f));
        target.setQuadrant4(new TargetAreaTriangle(1f, 0.5f));
    }

    public Target getTarget() {
        return target;
    }


    public boolean validate(float coordinateX, float coordinateY, float radius) {
        var resX = coordinateXInput.validate(coordinateX);
        var resY = coordinateYInput.validate(coordinateY);
        var resR = radiusInput.validate(radius);
        return resX == null && resY == null && resR == null;
    }

    public Shot createShot(float coordinateX, float coordinateY, float radius, String shooter) {
        long startTime = System.nanoTime();
        Date now = new Date();

        var hit = this.containsCoordinate(coordinateX, coordinateY, radius);

        long elapsedTime = (System.nanoTime() - startTime) / 1000;
        return new Shot(coordinateX, coordinateY, radius, hit, now, elapsedTime, shooter);
    }


    private boolean containsCoordinate(float x, float y, float radius) {
        return target.containsCoordinate(x, y, radius);
    }

    public Input getCoordinateXInput() {
        return coordinateXInput;
    }

    public Input getCoordinateYInput() {
        return coordinateYInput;
    }

    public Input getRadiusInput() {
        return radiusInput;
    }

}
