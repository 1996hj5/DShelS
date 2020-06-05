package co.kr.DShelS.DShelS.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import co.kr.DShelS.DShelS.Service.TestService;

@Controller
@RequestMapping("/Test/*")
public class TestController {

	@Autowired
	private TestService testService;
	
	@RequestMapping("Api")
	public String GetData()throws Exception{
		// open api 지진실내 대피소 파싱
		testService.getParser();
		return "main";
	}
	
	@RequestMapping("Tsunami")
	public String CsvTsunami()throws Exception{
		// open api 지진실내 대피소 파싱
		testService.CsvTsunami();
		return "main";
	}
	
	@RequestMapping("civil")
	public String CsvCivil()throws Exception{
		// open api 지진실내 대피소 파싱
		testService.CsvCivil();
		return "main";
	}
}
