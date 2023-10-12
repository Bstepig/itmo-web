<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<header class="header">

<div class="container">

<a class="header_link" href="index.jsp"> Стрельбище </a>
<button class="header_button" onclick="clearShots()"> Clear Shots </button>

<div id="time" class="header_time"></div>
<div class="header_group">P3234</div>
<div class="header_student">Данилов Тимофей Николаевич</div>

</div>

</header>

<style>

.header {
	height: 80px;
	padding-top: 20px;
	padding-bottom: 20px;
	background: #eee;
	background: #1b1e21;
	color: #6a6b6d;
	margin-bottom: 40px;
}

.header_link {
	display: inline-block;
	float: left;
	margin-right: 20px;
	line-height: 40px;
}

.header_button {
	float: left;
	margin-right: 20px;
	margin-top: 5px;
}

.header_student {
	display: inline-block;
	float: right;
	margin-right: 20px;
	line-height: 40px;
}

.header_group {
	display: inline-block;
	float: right;
	margin-right: 20px;
	line-height: 40px;
	font-weight: 500;
}

.header_time {
	display: inline-block;
	float: right;
	line-height: 40px;
	font-weight: 500;
}


</style>


<script src="./assets/scripts/timer.js"></script>
<script src="./assets/scripts/clear-shots.js"></script>
