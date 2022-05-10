<%@page import="BillAutomate.BillAutomation"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/items.js"></script>
</head>
<body>
	<div class="container"><div class="row"><div class="col-6">
		<h1>Per Unit Details for Each Bill Type</h1>
		<hr>
		
		<form id="formItem" name="formItem">
			Type: 
			<input type="text" id="type" name="type" class="form-control form-control-sm">
			KWH Charge: 
			<input type="text" id="kwh" name="kwh" class="form-control form-control-sm">
			Fixed Charge: 
			<input type="text" id="fixed" name="fixed" class="form-control form-control-sm">
			Fuel Cost: 
			<input type="text" id="fuel" name="fuel" class="form-control form-control-sm">
			Rebate: 
			<input type="text" id="rebate" name="rebate" class="form-control form-control-sm">
			Tax Amount: 
			<input type="text" id="tax" name="tax" class="form-control form-control-sm">
			Total: 
			<input type="text" id="total" name="total" class="form-control form-control-sm">
			
			<br>
			<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
			<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
		</form>
		
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
		
		<br>
		<div id="divItemsGrid">
			<%
				BillAutomation itemObj = new BillAutomation(); 
				out.print(itemObj.readPerUnit()); 
			%>
		</div>	
	</div></div></div>
</body>
</html>