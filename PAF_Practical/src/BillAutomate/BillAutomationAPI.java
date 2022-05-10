package BillAutomate;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap; 
import java.util.Map; 
import java.util.Scanner;



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
		Map paras = getParasMap(request); 
		String output = itemObj.updatePerUnit(paras.get("type").toString(), 
												paras.get("kwh").toString(), 
												paras.get("fixed").toString(), 
												paras.get("fuel").toString(), 
												paras.get("rebate").toString(), 
												paras.get("tax").toString(), 
												paras.get("total").toString()); 
		response.getWriter().write(output); 
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map paras = getParasMap(request); 
		String output = itemObj.deletePerUnit(paras.get("type").toString()); 
		response.getWriter().write(output); 
	}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request) { 
		Map<String, String> map = new HashMap<String, String>(); 
		try { 
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
			String queryString = scanner.hasNext() ? 
			scanner.useDelimiter("\\A").next() : ""; 
			scanner.close(); 
			String[] params = queryString.split("&"); 
			for (String param : params) {
				String[] p = param.split("="); 
				map.put(p[0], p[1]); 
			} 
		} catch (Exception e) 
		{ 
		
		} 
		return map; 
	}
	
}
