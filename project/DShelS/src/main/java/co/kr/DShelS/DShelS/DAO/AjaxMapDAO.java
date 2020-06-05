package co.kr.DShelS.DShelS.DAO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AjaxMapDAO {

	
	private SqlSessionFactory sqlSessionFactory;
	
	private static final String nameSpace = "mybatis.MapDAO.";
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}
	
	
	// 민방위 데이터 긁어오기
	public List<Map<String, Object>> getCivilData()throws Exception{
		SqlSession sqlSession = sqlSessionFactory.openSession();
		List<Map<String, Object>> map = null;
		try {
			map = sqlSession.selectList(nameSpace + "CivilData");
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			sqlSession.close();
		}
		return map;
	}
	
	// 지진해일 데이터 긁어오기
		public List<Map<String, Object>> getTsunamiData()throws Exception{
			SqlSession sqlSession = sqlSessionFactory.openSession();
			List<Map<String, Object>> map = null;
			try {
				map = sqlSession.selectList(nameSpace + "tsunamiData");
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				sqlSession.close();
			}
			return map;
		}
	
		// 지진해일 데이터 긁어오기
		public List<Map<String, Object>> geteqData()throws Exception{
			SqlSession sqlSession = sqlSessionFactory.openSession();
			List<Map<String, Object>> map = null;
			try {
				map = sqlSession.selectList(nameSpace + "earthData");
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				sqlSession.close();
			}
			return map;
		}


		public List<Map<String, Object>> ESearch(String city, String local) {
			SqlSession sqlSession = sqlSessionFactory.openSession();
			Map<String, Object> input = new HashMap<String, Object>();
			List<Map<String, Object>> map = null;
			input.put("city", city);
			input.put("local", local);
			try {
				map = sqlSession.selectList(nameSpace + "ESearch",input);
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				sqlSession.close();
			}
			return map;
		}

		public List<Map<String, Object>> CSearch(String city, String local) {
			SqlSession sqlSession = sqlSessionFactory.openSession();
			Map<String, Object> input = new HashMap<String, Object>();
			List<Map<String, Object>> map = null;
			input.put("city", city);
			input.put("local", local);
			try {
				map = sqlSession.selectList(nameSpace + "CSearch",input);
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				sqlSession.close();
			}
			return map;
		}

		
		public List<Map<String, Object>> TSearch(String city, String local) {
			SqlSession sqlSession = sqlSessionFactory.openSession();
			Map<String, Object> input = new HashMap<String, Object>();
			List<Map<String, Object>> map = null;
			input.put("city", city);
			input.put("local", local);
			try {
				map = sqlSession.selectList(nameSpace + "TSearch",input);
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				sqlSession.close();
			}
			return map;
		}


		public List<Map<String, Object>> ESearchCity(String city) {
			SqlSession sqlSession = sqlSessionFactory.openSession();
			List<Map<String, Object>> map = null;
			try {
				map = sqlSession.selectList(nameSpace + "ESearchCity",city);
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				sqlSession.close();
			}
			return map;
		}

		public List<Map<String, Object>> TSearchCity(String city) {
			SqlSession sqlSession = sqlSessionFactory.openSession();
			List<Map<String, Object>> map = null;
			try {
				map = sqlSession.selectList(nameSpace + "TSearchCity",city);
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				sqlSession.close();
			}
			return map;
		}		
		
		public List<Map<String, Object>> CSearchCity(String city) {
			SqlSession sqlSession = sqlSessionFactory.openSession();
			List<Map<String, Object>> map = null;
			try {
				map = sqlSession.selectList(nameSpace + "CSearchCity",city);
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				sqlSession.close();
			}
			return map;
		}
}
