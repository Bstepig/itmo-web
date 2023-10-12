package my.prog;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HiddenFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        // Прячем от не админовчиков.
        if (!"admin".equals(httpRequest.getSession().getAttribute("role"))) {
            httpResponse.sendError(HttpServletResponse.SC_FORBIDDEN, "This page is empty idk.");
            return;
        }

        // Админчик добрый вечер.
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {

    }
}
