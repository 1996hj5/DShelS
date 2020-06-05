package co.kr.DShelS.DShelS.VO;

public class CShelter {
	private int c_index;
	private String c_name;
	private String c_div;
	private String c_naddr;
	private String c_addr;
	private String c_lat;
	private String c_lon;
	private String c_area;
	private String c_person;
	private String c_mname;
	private String c_mtel;
	
	public CShelter() {}
	public CShelter(int c_index, String c_name, String c_div, String c_naddr,
								String c_addr, String c_lat, String c_lon, String c_area,
								String c_person, String c_mname, String c_mtel) {
		this.c_index = c_index;
		this.c_name = c_name;
		this.c_div = c_div;
		this.c_naddr = c_naddr;
		this.c_addr = c_addr;
		this.c_lat = c_lat;
		this.c_lon = c_lon;
		this.c_area = c_area;
		this.c_person = c_person;
		this.c_mname = c_mname;
		this.c_mtel = c_mtel;
	}
	public int getC_index() {
		return c_index;
	}
	public void setC_index(int c_index) {
		this.c_index = c_index;
	}
	public String getC_name() {
		return c_name;
	}
	public void setC_name(String c_name) {
		this.c_name = c_name;
	}
	public String getC_div() {
		return c_div;
	}
	public void setC_div(String c_div) {
		this.c_div = c_div;
	}
	public String getC_naddr() {
		return c_naddr;
	}
	public void setC_naddr(String c_naddr) {
		this.c_naddr = c_naddr;
	}
	public String getC_addr() {
		return c_addr;
	}
	public void setC_addr(String c_addr) {
		this.c_addr = c_addr;
	}
	public String getC_lat() {
		return c_lat;
	}
	public void setC_lat(String c_lat) {
		this.c_lat = c_lat;
	}
	public String getC_lon() {
		return c_lon;
	}
	public void setC_lon(String c_lon) {
		this.c_lon = c_lon;
	}
	public String getC_area() {
		return c_area;
	}
	public void setC_area(String c_area) {
		this.c_area = c_area;
	}
	public String getC_person() {
		return c_person;
	}
	public void setC_person(String c_person) {
		this.c_person = c_person;
	}
	public String getC_mname() {
		return c_mname;
	}
	public void setC_mname(String c_mname) {
		this.c_mname = c_mname;
	}
	public String getC_mtel() {
		return c_mtel;
	}
	public void setC_mtel(String c_mtel) {
		this.c_mtel = c_mtel;
	}
	
	
}
