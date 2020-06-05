<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href='<c:url value="/resources/css/map.css"></c:url>'>
<link rel="stylesheet" href='<c:url value="/resources/css/reset.css"></c:url>'>
<link rel="icon" type="image/x-icon" href='<c:url value="/resources/images/logo/favicon.png"></c:url>'>
<link rel="shortcut icon" type="image/x-icon" href='<c:url value="/resources/images/logo/favicon.png"></c:url>'>
<!-- Scripts -->
<script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src='<c:url value="/resources/js/jquery.min.js"></c:url>'></script>
<script src='<c:url value="/resources/js/map.js"></c:url>'></script>
<script src='<c:url value="/resources/js/map.info.js"></c:url>'></script>
<title>지도</title>
</head>
<body>
	<tiles:insertAttribute name="body"/>
</body>
</html>