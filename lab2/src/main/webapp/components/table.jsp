<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<table class="wrapper">
	<thead>
	    <tr>
		<!-- <th>Индексируем <i>прибыль</i></th> -->
		<th>ИКС</th>
		<th>ИГРеК</th>
		<th>РАДьОС'</th>
		<th>Есть 🔫 пробитие</th>
		<th>А Времечко?</th>
		<th>А Другое?</th>
	    </tr>
    </thead>
    <tbody id="tbody">
        <%@ page import="java.util.*, java.io.*" %>
        <%@ page import="my.prog.Shot" %>

        <c:forEach var="shot" items="${shots}">
                <tr>
                    <td class="coord-x">${shot.x()}</td>
                    <td class="coord-y">${shot.y()}</td>
                    <td class="radius">${shot.radius()}</td>
                    <td class="hit">
                        <c:if test="${shot.hit()}">
                            ✅ Так точно
                        </c:if>
                        <c:if test="${!shot.hit()}">
                            ❌ Никак нет
                        </c:if>
                    </td>
                    <td class="time">${shot.date()}</td>
                    <td class="time">${shot.executionTime()}</td>
                </tr>
        </c:forEach>

    </tbody>
</table>

<script>
<c:forEach var="shot" items="${shots}">
dots.push({
    x: ${shot.x()},
    y: ${shot.y()},
    hit: ${shot.hit()},
});
</c:forEach>
</script>