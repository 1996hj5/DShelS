<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href='<c:url value="/resources/css/bootstrap.min.css"></c:url>'>
<link rel="stylesheet" href='<c:url value="/resources/css/main.css"></c:url>'/>
<link rel="stylesheet" href='<c:url value="/resources/css/error.css"></c:url>'/>
<link rel="icon" type="image/x-icon" href='<c:url value="/resources/images/logo/favicon.png"></c:url>'>
<link rel="shortcut icon" type="image/x-icon" href='<c:url value="/resources/images/logo/favicon.png"></c:url>'>

<script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script></head>
<body>
	<jsp:include page="../header.jsp"/>
   <div id="error">
      <div class="sect-error">
         <img src='<c:url value ="/resources/images/error/error.gif"></c:url>' alt="error.gif">
      </div>
      <div class="sect-error">
         <h2>이용에 불편을 드려 죄송합니다.</h2>
         <p>
            방문하시려는 웹 페이지의 주소가 잘못 입력되었거나 변경 또는 삭제되어 요청하신 페이지를 찾을 수 없습니다.
            <br>
            입력하신 주소가 정확한지 다시 한 번 확인해 주시기 바랍니다. 감사합니다.
         </p>
         <br>
         <button type="button" href="javascript:history.back()" class="btn btn-danger">이전 페이지 이동</button>
         <button type="button" href="<%=request.getContextPath() %>/" class="btn btn-danger">DShelS 홈으로 이동</button>
      </div>
   </div>
</body>
</html>