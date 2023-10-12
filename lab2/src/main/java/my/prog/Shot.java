package my.prog;

import java.util.Date;

public record Shot(float x, float y, float radius, boolean hit, Date date, long executionTime) { }
