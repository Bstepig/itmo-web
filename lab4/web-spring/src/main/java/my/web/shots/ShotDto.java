package my.web.shots;

import java.util.Date;

public class ShotDto {
    private float x;
    private float y;
    private float radius;
    private boolean hit;
    private Date date;
    private long executionTime;

    public ShotDto() {
    }

    public ShotDto(float x, float y, float radius, boolean hit, Date date, long executionTime) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.hit = hit;
        this.date = date;
        this.executionTime = executionTime;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getRadius() {
        return radius;
    }

    public void setRadius(float radius) {
        this.radius = radius;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public long getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(long executionTime) {
        this.executionTime = executionTime;
    }
}