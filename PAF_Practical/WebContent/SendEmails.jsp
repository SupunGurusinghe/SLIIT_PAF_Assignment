<%@page import="BillAutomate.Email"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/BillAutomation.css">
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/emails.js"></script>
</head>
<body>
	<div class="container"><div class="row"><div class="col-sm">
	<div style="margin-top:250px;">
	
	</div>
	<h1>Send Bills</h1>
	<hr>
	<br>
	<form id="formItem" name="formItem">
	<div class="row">
		<div class="col-sm">
			<label>Bulk Send &nbsp;</label>
			<input id="btnBulkSend" name="btnBulkSend" type="button" value="Send" class="btn btn-outline-primary my-2 my-sm-0">
		</div>
		<div class="col-sm form-inline">	
			<label>Single Send &nbsp;</label><br>
			<input class="form-control mr-sm-2" type="search" name="search" id="search" placeholder="Search" aria-label="Search">
			<input id="btnSend" name="btnSend" type="button" value="Send" class="btn btn-outline-success my-2 my-sm-0">	
		</div>
	</div>	
	</form>
	
	<br>		
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>		
	<br>
	
	</div></div></div>	
</body>
</html>