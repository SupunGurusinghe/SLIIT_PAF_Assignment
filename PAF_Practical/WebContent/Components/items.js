function onItemSaveComplete(response, status) 
{ 
	if (status == "success") 
	{ 
		var resultSet = JSON.parse(response); 
		if (resultSet.status.trim() == "success") 
		{ 
			$("#alertSuccess").text("Successfully saved."); 
			$("#alertSuccess").show(); 
			$("#divItemsGrid").html(resultSet.data); 
	 	} 
		else if (resultSet.status.trim() == "error") 
	 	{ 
			$("#alertError").text(resultSet.data); 
			$("#alertError").show(); 
		} 
	} 
	else if (status == "error") 
	{ 
		$("#alertError").text("Error while saving."); 
		$("#alertError").show(); 
	} 
	else
	{ 
		$("#alertError").text("Unknown error while saving.."); 
		$("#alertError").show(); 
	}
	$("#hidItemIDSave").val(""); 
	$("#formItem")[0].reset(); 
}

$(document).ready(function() 
{ 
	if ($("#alertSuccess").text().trim() == "") 
	{ 
		$("#alertSuccess").hide(); 
	} 
	$("#alertError").hide(); 
}); 

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
	// Clear alerts---------------------
	$("#alertSuccess").text(""); 
	$("#alertSuccess").hide(); 
	$("#alertError").text(""); 
	$("#alertError").hide(); 
	// Form validation-------------------
	var status = validateItemForm(); 
	if (status != true) 
	{ 
		$("#alertError").text(status); 
		$("#alertError").show(); 
		return; 
	} 
	// If valid------------------------
	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
	$.ajax( 
	{ 
		url : "BillAutomationAPI", 
		type : type, 
		data : $("#formItem").serialize(), 
		dataType : "text", 
		complete : function(response, status) 
		{ 
			onItemSaveComplete(response.responseText, status); 
		} 
	});  
}); 


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) 
{ 
	$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val()); 
	$("#itemCode").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#itemName").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#itemPrice").val($(this).closest("tr").find('td:eq(2)').text()); 
	$("#itemDesc").val($(this).closest("tr").find('td:eq(3)').text()); 
}); 


// CLIENT-MODEL================================================================
function validateItemForm() 
{ 
	// TYPE
	if ($("#type").val().trim() == "") 
	{ 
		return "Insert Type."; 
	} 


	// KWH
	if ($("#kwh").val().trim() == "") 
	{ 
		return "Insert KWH Charge."; 
	} 
	
	// is numerical value
	var kwhCharge = $("#kwh").val().trim(); 
	if (!$.isNumeric(kwhCharge)) 
	{ 
		return "Insert a numerical value for KWH charge."; 
	} 
	// convert to decimal price
	$("#kwh").val(parseFloat(kwhCharge).toFixed(2));

	// FIXED
	if ($("#fixed").val().trim() == "") 
	{ 
		return "Insert Fixed Charge."; 
	} 
	
	// is numerical value
	var fixedCharge = $("#fixed").val().trim(); 
	if (!$.isNumeric(fixedCharge)) 
	{ 
		return "Insert a numerical value for fixed charge."; 
	} 
	// convert to decimal price
	$("#fixed").val(parseFloat(fixedCharge).toFixed(2));
	
	// FUEL
	if ($("#fuel").val().trim() == "") 
	{ 
		return "Insert Fuel Charge."; 
	} 
	
	// is numerical value
	var fuelCharge = $("#fuel").val().trim(); 
	if (!$.isNumeric(fuelCharge)) 
	{ 
		return "Insert a numerical value for fuel charge."; 
	} 
	// convert to decimal price
	$("#fuel").val(parseFloat(fuelCharge).toFixed(2));
	
	// REBATE
	if ($("#rebate").val().trim() == "") 
	{ 
		return "Insert rebate."; 
	} 
	
	// is numerical value
	var rebate = $("#rebate").val().trim(); 
	if (!$.isNumeric(rebate)) 
	{ 
		return "Insert a numerical value for rebate."; 
	} 
	// convert to decimal price
	$("#rebate").val(parseFloat(rebate).toFixed(2));
	
	// TAX
	if ($("#tax").val().trim() == "") 
	{ 
		return "Insert tax."; 
	} 
	
	// is numerical value
	var taxAmount = $("#tax").val().trim(); 
	if (!$.isNumeric(taxAmount)) 
	{ 
		return "Insert a numerical value for tax."; 
	} 
	// convert to decimal price
	$("#tax").val(parseFloat(taxAmount).toFixed(2));
	
	// TOTAL
	if ($("#total").val().trim() == "") 
	{ 
		return "Insert total."; 
	} 
	
	// is numerical value
	var totalAmount = $("#total").val().trim(); 
	if (!$.isNumeric(totalAmount)) 
	{ 
		return "Insert a numerical value for total."; 
	} 
	// convert to decimal price
	$("#total").val(parseFloat(totalAmount).toFixed(2));
	
	return true; 
}





