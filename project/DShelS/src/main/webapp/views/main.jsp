<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!-- Banner -->
<section id="banner">
   <div class="content">
      <div class="back">
         <h1>Welcome to DShelS</h1>
         <pre>
전국에 있는 모든 재난 대피소들을 보여주는 지도를 제공하고,
재난 발생현황, 재난 발생시 행동요령 등 재난 관련 정보들을
시각자료를 통해 보기 쉽게 제공해주는 사이트입니다.
         </pre>
         <div id="table">
            <table>
               <tbody>
                  <tr>
                     <td><a href="#one" class="button scrolly">About Us</a></td>
                     <td><a href='<c:url value="/map"></c:url>' target="_blank" class="button scrolly">대피소 찾기</a></td>
                  </tr>
                  <tr style="padding-bottom: 5%;">
                     <td><a href="#two" class="button scrolly">발생현황</a></td>
                     <td><a href="#three" class="button scrolly">행동요령</a></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</section>

<!-- One -->
<section id="one" class="wrapper">
	<div class="inner align-center">
		<h1>About Us</h1>
	</div>
	<div class="inner flex flex-3 mt-5">
		<div class="flex-item left">
			<div style="width: 100%">
				<h3>Choi Hyun Jong</h3>
				<p>총괄</p>
				<p>웹 개발</p>
			</div>
			<div style="width: 100%">
				<h3>Kim Ye Rin</h3>
				<p>웹 개발</p>
				<p>자료 조사</p>
			</div>
		</div>
		<div class="flex-item image fit round">
			<img
				src='<c:url value="/resources/images/util/strongarm.jpg"></c:url>'
				alt="strongarm" />
		</div>
		<div class="flex-item right">
			<div>
				<h3>Baek Jae In</h3>
				<p>빅데이터 처리 가공</p>
				<p>문서 작성</p>
			</div>
			<div>
				<h3>Jeong Jin Sol</h3>
				<p>웹 개발</p>
				<p>문서 작성</p>
			</div>
		</div>
	</div>
</section>

<!-- Two -->
<section id="two" class="wrapper style1 special">
	<div class="inner">
		<h1>Graph</h1>
		<div class="selectbox mt-4">
			<select>
				<option value="earthquake_year" selected>연도별 지진 발생 횟수</option>
				<option value="earthquake_lsize">리히터규모별 지진 발생 횟수</option>
				<option value="earthquake_size">규모별 지진 발생 횟수</option>
				<option value="earthquake_land">지역별 지진 발생 횟수</option>
				<option value="storm">연도별 태풍 발생 횟수</option>
			</select>
		</div>
		<div class="graph">
			<img src='<c:url value="/resources/images/graph/earthquake_year.png"></c:url>'
				id="earthquake_year" alt="earthquake_year.png"> 
			<img src='<c:url value="/resources/images/graph/earthquake_lsize.png"></c:url>'
				id="earthquake_lsize" alt="earthquake_lsize.png"> 
			<img src='<c:url value="/resources/images/graph/earthquake_size.png"></c:url>'
				id="earthquake_size" alt="earthquake_size.png"> 
			<img src='<c:url value="/resources/images/graph/earthquake_land.png"></c:url>'
				id="earthquake_land" alt="earthquake_land.png"> 
			<img src='<c:url value="/resources/images/graph/storm.png"></c:url>'
				id="storm" alt="storm.png">
		</div>
	</div>
</section>

<!-- Three -->
<section id="three" class="wrapper">
	<div class="inner align-center">
		<h1>How to ?</h1>
		<div id="how_to" class="carousel slide" data-ride="carousel">
		
			<!-- Indicators -->
			<ul class="carousel-indicators">
				<li data-target="#how_to" data-slide-to="0" class="active"></li>
				<li data-target="#how_to" data-slide-to="1"></li>
				<li data-target="#how_to" data-slide-to="2"></li>
				<li data-target="#how_to" data-slide-to="3"></li>
			</ul>

			<!-- The slideshow -->
			<div class="carousel-inner mt-5">
				<div class="carousel-item active">
					<img src='<c:url value="/resources/images/util/HOW_EQ.png"></c:url>'
						alt="HOW_EQ.png">
				</div>
				<div class="carousel-item">
					<img src='<c:url value="/resources/images/util/HOW_TSUNAMI.png"></c:url>'
						alt="HOW_TSUNAMI.png">
				</div>
				<div class="carousel-item">
					<img src='<c:url value="/resources/images/util/HOW_CIVIL.png"></c:url>'
						alt="HOW_CIVIL.png">
				</div>
				<div class="carousel-item">
					<img src='<c:url value="/resources/images/util/HOW_TYPHOON.png"></c:url>'
						alt="HOW_TYPHOON.png">
				</div>
			</div>

			<!-- Left and right controls -->
			<a class="carousel-control-prev" href="#how_to" data-slide="prev">
				<i id="icon_l" class="far fa-arrow-alt-circle-left"></i>
			</a> <a class="carousel-control-next" href="#how_to" data-slide="next">
				<i id="icon_r" class="far fa-arrow-alt-circle-right"></i>
			</a>
		</div>
	</div>
</section>