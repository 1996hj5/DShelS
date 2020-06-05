package co.kr.DShelS.DShelS.DAO;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.kr.DShelS.DShelS.VO.CShelter;
import co.kr.DShelS.DShelS.VO.EShelter;
import co.kr.DShelS.DShelS.VO.TShelter;

@Repository
public class TestDAO {
	
	private SqlSessionFactory sqlSessionFactory;
	private static final String nameSpace = "mybatis.TestDAO.";
	@Autowired
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
	}
	
	public boolean EShelterParser(EShelter es)throws Exception{
		SqlSession sqlSession = sqlSessionFactory.openSession();
		try {
			sqlSession.insert(nameSpace + "EShelterParser",es);
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}finally {
			sqlSession.close();
		}
		return true;
	}
	
	public boolean TShelterParser(TShelter ts) throws Exception{
		SqlSession sqlSession = sqlSessionFactory.openSession();
		try {
			sqlSession.insert(nameSpace + "TShelterParser",ts);
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}finally {
			sqlSession.close();
		}
		return true;
	}
	
	public boolean CShelterParser(CShelter cs) throws Exception{
		SqlSession sqlSession = sqlSessionFactory.openSession();
		try {
			sqlSession.insert(nameSpace + "CShelterParser",cs);
		}catch(Exception e) {
			e.printStackTrace();
			return false;
		}finally {
			sqlSession.close();
		}
		return true;
	}
	
}
