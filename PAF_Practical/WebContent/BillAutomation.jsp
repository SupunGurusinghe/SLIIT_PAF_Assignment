<%@page import="BillAutomate.BillAutomation"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/BillAutomation.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/items.js"></script>
</head>
<body>

		<!---------------------- Navigation bar ------------------------------>
		
		<header>
        <div class="navbar">
            <div class="brand-title">Electro Grid</div>
            <p href="#" class="toggle-button">
                <i id="navbar-icon" class="fas fa-bars"></i>
            </p>
            <div class="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#"><i class="fas fa-sign-out-alt"></i> Log Out</a></li>
                </ul>
            </div>
        </div>
    	</header>
		
		<!---------------------- End of Navigation bar ------------------------------>
		
	

	<div class="container"><div class="row"><div class="col-sm">
	<div style="margin-top: 30px;"></div>
	  	<div class="card" style="padding: 30px; background: rgba(0, 0, 0, 0.2);">
		<h1>Per Unit Details for Each Bill Type</h1>
		<hr>
		<br>
		
		<form id="formItem" name="formItem">
			<div class="row">
				<div class="col-sm">
					Type: 
					<input type="text" id="type" name="type" class="form-control form-control-sm">
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					KWH Charge: 
					<input type="text" id="kwh" name="kwh" class="form-control form-control-sm">
				</div>
				<div class="col-sm">
					Fixed Charge: 
					<input type="text" id="fixed" name="fixed" class="form-control form-control-sm">
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					Fuel Cost: 
					<input type="text" id="fuel" name="fuel" class="form-control form-control-sm">
				</div>
				<div class="col-sm">
					Rebate: 
					<input type="text" id="rebate" name="rebate" class="form-control form-control-sm">
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					Tax Amount: 
					<input type="text" id="tax" name="tax" class="form-control form-control-sm">
				</div>
				<div class="col-sm">
					Total: 
					<input type="text" id="total" name="total" class="form-control form-control-sm">
				</div>
			</div>			
			
			
			<br>
			<input type="hidden" id="hidItemIDSave" name="hidItemIDSave">
			<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">			
		</form>
		<br>
		
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
		
		<br>
		
		<div id="divItemsGrid">
			<%
				BillAutomation itemObj = new BillAutomation(); 
				out.print(itemObj.readPerUnit()); 
			%>
		</div></div>
	</div></div></div>
</body>
</html>