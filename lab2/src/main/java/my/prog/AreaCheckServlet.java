package my.prog;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        var out = resp.getWriter();
        printHead(out);
        req.getRequestDispatcher("/components/header.jsp").include(req, resp);
        printOpen(out);

        long startTime = System.nanoTime();
        Date now = new Date();

        try {
            var coordinateXRaw = req.getParameter("coordinateX");
            var coordinateYRaw = req.getParameter("coordinateY");
            var radiusRaw = req.getParameter("radius");
            if (coordinateXRaw == null || coordinateYRaw == null || radiusRaw == null) {
                resp.setStatus(400);
                out.println("<div>Oiiiubka: �� �� ���������</div>");
                return;
            }
            var coordinateX = Float.parseFloat(coordinateXRaw);
            var coordinateY = Float.parseFloat(coordinateYRaw);
            var radius = Float.parseFloat(radiusRaw);
            var hit = this.containsCoordinate(coordinateX, coordinateY, radius);

            String errorMsg = validate(coordinateX, coordinateY, radius);
            if (errorMsg != null) {
                resp.setStatus(400);
                out.println(("<div>������: " + errorMsg + "</div>"));
            } else {
                long elapsedTime = (System.nanoTime() - startTime) / 1000;
                var shot = new Shot(coordinateX, coordinateY, radius, hit, now, elapsedTime);
                pushShot(req, shot);

                if (hit) {
                    out.println("<div>���� ���������</div>");
                } else {
                    out.println("<div>��� ���������</div>");
                }

                printRow(out, shot);
            }

        } catch (NumberFormatException e) {
            resp.setStatus(400);
            out.println(("<div>������: " + e.getMessage() + "</div>"));
        }

        printFoot(out);
    }

    /**
     * @return ���������� ������. null ���� ��� �������.
     */
    private String validate(float x, float y, float radius) {
        if (radius < 0) return "������ ������ ���� ������ ����.";
        if (radius > 500) return "������ ������ ���� �� ������ 500.";
        if (x < -radius * 2) return "���������� x ��������� �� ����� ���� ����� ��� � ��� ���� ������ �������.";
        if (y < -radius * 2) return "���������� y ��������� �� ����� ���� ����� ��� � ��� ���� ������ �������.";
        if (x > radius * 2) return "���������� x �� ����� ���� ����� ��� � ��� ���� ������ �������.";
        if (y > radius * 2) return "���������� y �� ����� ���� ����� ��� � ��� ���� ������ �������.";
        return null;
    }

    private void pushShot(HttpServletRequest req, Shot shot) {
        Rifle rifle = (Rifle) req.getSession().getAttribute("rifle");
        if (rifle == null) {
            rifle = new Rifle();
            req.getSession().setAttribute("rifle", rifle);
        }
        rifle.addShot(shot);
    }

    private void printRow(PrintWriter out, Shot shot) {
        out.println("<table class=\"wrapper\">");
        out.println("<tr>");
        out.println("<th>�</th>");
        out.println("<th>�</th>");
        out.println("<th>������</th>");
        out.println("<th>���������</th>");
        out.println("<th>���������</th>");
        out.println("<th>���������</th>");
        out.println("</tr>");
        out.println("<tr>");
        out.println("<td>" + shot.x() + "</td>");
        out.println("<td>" + shot.y() + "</td>");
        out.println("<td>" + shot.radius() + "</td>");
        if (shot.hit()) {
            out.println("<td>����</td>");
        } else {
            out.println("<td>���</td>");
        }
        out.println("<td>" + shot.executionTime() + "</td>");
        out.println("<td>" + shot.date() + "</td>");
        out.println("</tr>");
        out.println("</table>");
    }

    private void printHead(PrintWriter out) throws IOException {
        out.print("""
                <!doctype html>
                <html lang="ru">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport"
                          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="stylesheet" href="./assets/styles/global.css">
                    <link rel="stylesheet" href="./assets/styles/shoot.css">
                    <link rel="stylesheet" href="./assets/styles/index.css">
                    <title>Web</title>
                </head>
                <body>
                """);
    }

    private void printOpen(PrintWriter out) throws IOException {
        out.print("""
                <div class="container">
                    <div class="wrapper">
                """);
    }

    private void printFoot(PrintWriter out) throws IOException {
        out.print("""
                    </div class="wrapper">
                </div class="container">
                </body>
                </html>
                """);
    }

    private boolean containsCoordinate(float x, float y, float radius) {
        // I Square [R x R/2]
        if (x >= 0 && y >= 0) {
            return x <= radius && y <= radius / 2;
        }

        // II Triangle [R/2 x R/2]
        if (x <= 0 && y >= 0) {
            return (-x) + y <= (radius / 2);
        }

        // III 1/4 Circle [R/2 x R/2]
        if (x <= 0 && y <= 0) {
            return 4 * (x * x + y * y) <= radius * radius; // (x^2 + y^2) <= R^2 / 4
        }

        return false;
    }
}
