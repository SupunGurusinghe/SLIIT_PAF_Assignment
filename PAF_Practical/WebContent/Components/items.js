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


function onItemDeleteComplete(response, status) 
{ 
	if (status == "success") 
	{ 
		var resultSet = JSON.parse(response); 
		if (resultSet.status.trim() == "success") 
		{ 
			$("#alertSuccess").text("Successfully deleted."); 
			$("#alertSuccess").show(); 
			$("#divItemsGrid").html(resultSet.data); 
		} else if (resultSet.status.trim() == "error") 
		{ 
			$("#alertError").text(resultSet.data); 
			$("#alertError").show(); 
		} 
	} else if (status == "error") 
	{ 
		$("#alertError").text("Error while deleting."); 
		$("#alertError").show(); 
	} else
	{ 
		$("#alertError").text("Unknown error while deleting.."); 
		$("#alertError").show(); 
	} 
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
	$("#type").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#kwh").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#fixed").val($(this).closest("tr").find('td:eq(2)').text()); 
	$("#fuel").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#rebate").val($(this).closest("tr").find('td:eq(4)').text()); 
	$("#tax").val($(this).closest("tr").find('td:eq(5)').text()); 
	$("#total").val($(this).closest("tr").find('td:eq(6)').text()); 
	$("#hidItemIDSave").val($(this).closest("tr").find('td:eq(0)').text()); 
}); 


// REMOVE==========================================
$(document).on("click", ".btnRemove", function(event) 
{ 
	$.ajax( 
	{ 
		url : "BillAutomationAPI", 
		type : "DELETE", 
		data : "type=" + $(this).data("itemid"),
		dataType : "text", 
		complete : function(response, status) 
		{ 
			onItemDeleteComplete(response.responseText, status); 
		} 
	}); 
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
	
	return true; 
}





