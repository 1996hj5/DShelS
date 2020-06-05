package co.kr.DShelS.DShelS.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String Main(Model model)throws Exception{
		return "main";
	}
	
	@RequestMapping("/map")
	public String Map(Model model)throws Exception{
		return "map";
	}
	
	@RequestMapping("/t1")
	public String t1(Model model)throws Exception{
		return "info";
	}
	
}
