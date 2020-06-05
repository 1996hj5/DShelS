package co.kr.DShelS.DShelS.VO;

public class EShelter {
	private int e_index;
	private String e_name;				//지도명
	private String e_addr;				//장소
	private String e_area;				//면적
	private String e_lat;					//위도
	private String e_lon;					//경도
	private String e_md;					//관리부서
	private String e_tel;					//관리번호
	
	public EShelter() {}
	
	public EShelter(int e_index, String e_name, String e_addr, String e_area, String e_lat,
									String e_lon, String e_md, String e_tel) {
		this.e_index = e_index;
		this.e_name = e_name;
		this.e_addr = e_addr;
		this.e_area = e_area;
		this.e_lat = e_lat;
		this.e_lon = e_lon;
		this.e_md = e_md;
		this.e_tel = e_tel;
	}

	public int getE_index() {
		return e_index;
	}

	public void setE_index(int e_index) {
		this.e_index = e_index;
	}

	public String getE_name() {
		return e_name;
	}

	public void setE_name(String e_name) {
		this.e_name = e_name;
	}

	public String getE_addr() {
		return e_addr;
	}

	public void setE_addr(String e_addr) {
		this.e_addr = e_addr;
	}

	public String getE_area() {
		return e_area;
	}

	public void setE_area(String e_area) {
		this.e_area = e_area;
	}

	public String getE_lat() {
		return e_lat;
	}

	public void setE_lat(String e_lat) {
		this.e_lat = e_lat;
	}

	public String getE_lon() {
		return e_lon;
	}

	public void setE_lon(String e_lon) {
		this.e_lon = e_lon;
	}

	public String getE_md() {
		return e_md;
	}

	public void setE_md(String e_md) {
		this.e_md = e_md;
	}

	public String getE_tel() {
		return e_tel;
	}

	public void setE_tel(String e_tel) {
		this.e_tel = e_tel;
	}
	
	
	
}
