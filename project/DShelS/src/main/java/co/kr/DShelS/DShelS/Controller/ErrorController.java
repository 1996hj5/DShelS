package co.kr.DShelS.DShelS.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/error/*")
public class ErrorController {
	
	@RequestMapping("error")
	public String error(Model model) throws Exception{
		return "errors";
	}
	
		
}
