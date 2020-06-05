package co.kr.DShelS.DShelS.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import co.kr.DShelS.DShelS.Service.AjaxMapService;
import co.kr.DShelS.DShelS.util.NameArray;

@RestController
@RequestMapping("/ajaxMap/*")
public class AjaxMapController {
	
	@Autowired
	private AjaxMapService ams;
	
	@GetMapping("getData/{Shelter}")
	public ResponseEntity<Map<String, Object>>  initSetup(@PathVariable("Shelter") String Shel) throws Exception{
		// 모든 대피소 정보 가져오기
		Map<String, Object> map = new HashMap<String, Object>();
		switch (Shel) {
			case  "EShelter":
				map.put("civil",ams.getCivilData());
			case "TShelter":
				map.put("tsunami",ams.getTsunamiData());
			case "CShelter":
				map.put("eq", ams.geteqData());
		}
		return !map.isEmpty()  ?new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK)
													: new ResponseEntity<Map<String,Object>>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("SearchData")
	public ResponseEntity<Map<String, Object>> SearchData(@RequestParam("city") Integer city, @RequestParam("shel") String shel,
																												@RequestParam("local") Integer local)throws Exception{
		NameArray na = new NameArray();
		String ct = na.CityCase(city);
		Map<String, Object> map = new HashMap<String, Object>();
		if(local == 0) {
			map.put("result",ams.ShelterSearchDataCity(ct,shel));
		}else {
			String lc = na.LocalCase(ct, local);
			map.put("result",ams.ShelterSearchData(ct,lc,shel));	
		}
		
		return !map.isEmpty()  ?new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK)
				: new ResponseEntity<Map<String,Object>>(HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
}

