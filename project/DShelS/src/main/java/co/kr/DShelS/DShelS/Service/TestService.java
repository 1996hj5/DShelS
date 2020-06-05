package co.kr.DShelS.DShelS.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.opencsv.CSVReader;

import co.kr.DShelS.DShelS.DAO.TestDAO;
import co.kr.DShelS.DShelS.VO.CShelter;
import co.kr.DShelS.DShelS.VO.EShelter;
import co.kr.DShelS.DShelS.VO.TShelter;

@Service
public class TestService {
	
	@Autowired
	private TestDAO tdao;
	
	public void getParser() throws Exception{
		
		for(int i = 1; i<=51; i++) {
			String apiURL = "http://apis.data.go.kr/1741000/EarthquakeIndoors/getEarthquakeIndoorsList?serviceKey=W4ujQrb%2FcRRZomw0iKvbHIwn1GZtrAYxVQquSItmW1PybTVYHs0ca7HJTcnIA6%2FlRjJ2cjhPofShGLLYe7mr6A%3D%3D" + "&pageNo=" + i + "&numOfRows=100" + "&type=json&flag=Y&";
			try {
				URL url = new URL(apiURL);
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setRequestMethod("GET");
				int responseCode = con.getResponseCode();
				BufferedReader br;
				if(responseCode == 200) {
					br = new BufferedReader(new InputStreamReader(con.getInputStream()));
	            }else {
	            	br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
	            }
				StringBuilder sb = new StringBuilder();
				String read;
				while((read = br.readLine()) != null) {
					sb.append(read + "\n");
				}
				br.close();
				con.disconnect();
				String data = sb.toString();
				JSONParser p = new JSONParser();
				JSONObject jo = (JSONObject) p.parse(data);
				System.out.println("data = " + jo.toJSONString());
				JSONArray jResult = (JSONArray) jo.get("EarthquakeIndoors");
				JSONObject jResult2 = (JSONObject)jResult.get(1);
				JSONArray rows = (JSONArray)jResult2.get("row");
				for(int j = 0; j<rows.size(); j++) {
					JSONObject col = (JSONObject) rows.get(j);
					String jname = (String) col.get("vt_acmdfclty_nm");	//장소명
					String jaddr = (String) col.get("dtl_adres");  //주소
					String jarea = (String) col.get("fclty_ar").toString(); //면적
					String jlat = (String) col.get("ycord").toString(); //위도
					String jlon = (String) col.get("xcord").toString(); //경도
					String jmd = (String) col.get("mngps_nm"); // 관리부서
					String jtel = (String) col.get("mngps_telno"); // 관리번호
					
					EShelter es = new EShelter(
								0,
								jname,
								jaddr,
								jarea,
								jlat,
								jlon,
								jmd,
								jtel);
							
					if(tdao.EShelterParser(es)) {
						System.out.println("성공" + j);
					}else{
						System.out.println("실패"  + j + "번째");
					};
					
					} 
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public void CsvTsunami() throws Exception{
		// 지진해일대피소
		String line = null;
		String filepath = "/data/tsunami.csv";
		ClassPathResource cpr = new ClassPathResource(filepath);
		if(cpr.exists() == false){
		    throw new IllegalArgumentException();
		}
		 try{
	         InputStreamReader is = new InputStreamReader(cpr.getInputStream(), "EUC-KR");
	         CSVReader reader = new CSVReader(is);
	         List<String[]> list = reader.readAll();
	         
	         for(String[] str : list) {
	        	 TShelter ts = new TShelter(
	        			0,
	        			str[0],
	        			str[3],
	        			str[4],
	        			str[6],
	        			str[7],
	        			str[8],
	        			str[9],
	        			str[11],
	        			str[24],
	        			str[25]
	        	 );
	        	 tdao.TShelterParser(ts);
	         }
	         
	         
		 }catch(Exception e) {
			 e.printStackTrace();
		 }
	}
		
	public void CsvCivil() throws Exception{
		// 민방위 대피소
		String line = null;
		String filepath = "/data/civil.csv";
		ClassPathResource cpr = new ClassPathResource(filepath);
		if(cpr.exists() == false){
		    throw new IllegalArgumentException();
		}
		 try{
	         InputStreamReader is = new InputStreamReader(cpr.getInputStream(), "EUC-KR");
	         CSVReader reader = new CSVReader(is);
	         List<String[]> list = reader.readAll();
	         for(String[] str : list) {
	        	 CShelter cs = new CShelter(
	        			 0,
	        			 str[0],
	        			 str[1],
	        			 str[2],
	        			 str[3],
	        			 str[4],
	        			 str[5],
	        			 str[6],
	        			 str[7],
	        			 str[11],
	        			 str[10]
	        	 );
	        	 tdao.CShelterParser(cs);
	         }
	         
		 }catch(Exception e) {
			 e.printStackTrace();
		 }
	         
	}
}
