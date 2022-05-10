package BillAutomate;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/BillAutomationAPI")
public class BillAutomationAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	BillAutomation itemObj = new BillAutomation();   

    public BillAutomationAPI() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String output = itemObj.insertPerUnit(request.getParameter("type"),
												request.getParameter("kwh"),
												request.getParameter("fixed"),
												request.getParameter("fuel"),
												request.getParameter("rebate"),
												request.getParameter("tax"),
												request.getParameter("total"));
		response.getWriter().write(output); 
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
}
