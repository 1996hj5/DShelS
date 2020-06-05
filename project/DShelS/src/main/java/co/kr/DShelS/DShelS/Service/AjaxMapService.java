package co.kr.DShelS.DShelS.Service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.kr.DShelS.DShelS.DAO.AjaxMapDAO;

@Service
public class AjaxMapService {

	@Autowired
	private AjaxMapDAO amd;
	
	public List<Map<String, Object>> getCivilData() throws Exception{
		return amd.getCivilData();
	}
	
	public List<Map<String, Object>> getTsunamiData() throws Exception{
		return amd.getTsunamiData();
	}
	
	public List<Map<String, Object>> geteqData() throws Exception{
		return amd.geteqData();
	}

	public List<Map<String, Object>> ShelterSearchData(String city, String local, String shel) {
		switch(shel) {
		case "EShelter":
			return amd.ESearch(city,local);
		case "CShelter":
			return amd.CSearch(city,local);
		case "TShelter":
			return amd.TSearch(city,local);
		}
		return null; 
	}

	public List<Map<String, Object>> ShelterSearchDataCity(String city, String shel) {
		switch(shel) {
		case "EShelter":
			return amd.ESearchCity(city);
		case "CShelter":
			return amd.CSearchCity(city);
		case "TShelter":
			return amd.TSearchCity(city);
		}
		return null; 
	}
	
	
}
