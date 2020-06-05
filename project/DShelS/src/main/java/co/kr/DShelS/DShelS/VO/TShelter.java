package co.kr.DShelS.DShelS.VO;

public class TShelter {
	private int t_index;
	private String t_pname;
	private String t_type;
	private String t_addr;
	private String t_lat;
	private String t_lon;
	private String t_area;
	private String t_person;
	private String t_tel;
	private String t_mname;
	private String t_mtel;
	
	public TShelter() {}
	public TShelter(int t_index, String t_pname, String t_type,
								String t_addr, String t_lat, String t_lon,
								String t_area, String t_person, String t_tel,
								String t_mname, String t_mtel) {
		this.t_index = t_index;
		this.t_pname = t_pname;
		this.t_type = t_type;
		this.t_addr = t_addr;
		this.t_lat  = t_lat;
		this.t_lon = t_lon;
		this.t_area = t_area;
		this.t_person = t_person;
		this.t_tel = t_tel;
		this.t_mname = t_mname;
		this.t_mtel = t_mtel;
	}
	public int getT_index() {
		return t_index;
	}
	public void setT_index(int t_index) {
		this.t_index = t_index;
	}
	public String getT_pname() {
		return t_pname;
	}
	public void setT_pname(String t_pname) {
		this.t_pname = t_pname;
	}
	public String getT_type() {
		return t_type;
	}
	public void setT_type(String t_type) {
		this.t_type = t_type;
	}
	public String getT_addr() {
		return t_addr;
	}
	public void setT_addr(String t_addr) {
		this.t_addr = t_addr;
	}
	public String getT_lat() {
		return t_lat;
	}
	public void setT_lat(String t_lat) {
		this.t_lat = t_lat;
	}
	public String getT_lon() {
		return t_lon;
	}
	public void setT_lon(String t_lon) {
		this.t_lon = t_lon;
	}
	public String getT_area() {
		return t_area;
	}
	public void setT_area(String t_area) {
		this.t_area = t_area;
	}
	public String getT_person() {
		return t_person;
	}
	public void setT_person(String t_person) {
		this.t_person = t_person;
	}
	public String getT_tel() {
		return t_tel;
	}
	public void setT_tel(String t_tel) {
		this.t_tel = t_tel;
	}
	public String getT_mname() {
		return t_mname;
	}
	public void setT_mname(String t_mname) {
		this.t_mname = t_mname;
	}
	public String getT_mtel() {
		return t_mtel;
	}
	public void setT_mtel(String t_mtel) {
		this.t_mtel = t_mtel;
	}
	
}
