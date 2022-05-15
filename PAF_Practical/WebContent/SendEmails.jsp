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
                    <li><a href="#">Bill Automation</a></li>
                    <li><a href="#"><i class="fas fa-sign-out-alt"></i> Log Out</a></li>
                </ul>
            </div>
        </div>
    	</header>
		
		<!---------------------- End of Navigation bar ------------------------------>
		
		
	<div class="container"><div class="row"><div class="col-sm">
	<div style="margin-top:210px;"></div>
	<div class="card" style="padding: 30px; background: rgba(0, 0, 0, 0.2);">
	<h1>Send Bills</h1>
	<hr>
	<br>
	<form id="formItem" name="formItem">
	<div class="row">
		<div class="col-sm form-inline">	
			<label>Single Send &nbsp;</label><br>
			<input class="form-control mr-sm-2" type="search" name="search" id="search" placeholder="Search" aria-label="Search">
			<input id="btnSend" name="btnSend" type="submit" value="Send" class="btn btn-outline-success my-2 my-sm-0">	
		</div>
		<div class="col-sm">
			<label>Bulk Send &nbsp;</label>
			<input id="btnBulkSend" name="btnBulkSend" type="submit" value="Send" class="btn btn-outline-primary my-2 my-sm-0">
		</div>
	</div>	
	</form>
	
	<%
		Email itemObj = new Email(); 
		out.print(itemObj.sendEmailToAll()); 
		String accNo = "";
		accNo = request.getParameter("search");
		if(accNo != ""){
			out.print(itemObj.sendEmail(accNo)); 
		}
	%>
	</div>
	</div></div></div>	
</body>
</html>