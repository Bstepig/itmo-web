<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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

<%@ include file="components/header.jsp" %>
</body>
</html>

<div class="container">

<div class="wrapper">

<h2>
	Введите куда стреляем:
</h2>

<form action="AreaCheckServlet" method="POST">
	<div class="form-field" id="coordinateXCont">
		<label for="coordinateX">Координата X:</label>
		<div id="coordinateXCheckboxes" class="x-checkboxes"></div>
		<!-- <div id="coordinateXError" class="error"></div> -->
	</div>

	<div class="form-field" id="coordinateYCont">
		<label for="coordinateY">Координата Y:</label>
		<input id="coordinateY" name="coordinateY" type="text" maxlength="9">
		<!-- <div id="coordinateYError" class="error"></div> -->
	</div>

	<div class="form-field" id="radiusCont">
		<label for="radius">Радиус:</label>
		<select id="radius" name="radius"></select>
		<!-- <div id="radiusError" class="error"></div> -->
	</div>

	<button id="submitBtn" type="submit" disabled>Сабмит</button>
</form>

</div>

<script src="./assets/scripts/field.js"></script>
<script src="./assets/scripts/main.js"></script>

<%@ include file="components/chart.jsp" %>

<%@ include file="components/table.jsp" %>

</div>


<html>
<body>