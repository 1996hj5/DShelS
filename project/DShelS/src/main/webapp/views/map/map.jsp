<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<body>
	<div id="allwrap">
		<div id="aside">
			<div id="lcontent">
				<div id="station" style="height:100%;">
					<div class="divi">
						<img alt="화살표이미지" src='<c:url value="/resources/images/util/h4_blit.png"></c:url>' style="float:left;">
						<span style="font-weight: bolder; float:left; padding-left: 5px;">지역 선택</span>
						<br>
						<select id="F_SI_DO1" style="width: 120px;" title="시도 선택" class="search_sel">
							<option value="all">시도</option>
							<option value="seoul">서울특별시</option>
							<option value="busan">부산광역시</option>
							<option value="daegu">대구광역시</option>
							<option value="incheon">인천광역시</option>
							<option value="gwangju">광주광역시</option>
							<option value="daejeon">대전광역시</option>
							<option value="ulsan">울산광역시</option>
							<option value="sejong">세종특별자치시</option>
							<option value="gyeonggi">경기도</option>
							<option value="gangwon">강원도</option>
							<option value="chungbuk">충청북도</option>
							<option value="chungnam">충청남도</option>
							<option value="jeonbuk">전라북도</option>
							<option value="jeonnam">전라남도</option>
							<option value="gyeongbuk">경상북도</option>
							<option value="gyeongnam">경상남도</option>
							<option value="jeju">제주특별자치도</option>
						</select>
						<select id="F_GU_GUN1" style="width: 120px;" title="시군구 선택" class="search_sel">
							<option value="">시군구</option>
						</select>
						<br>
						<img alt="화살표이미지" src='<c:url value="/resources/images/util/h4_blit.png"></c:url>' style="float:left;">
						<span style="font-weight: bolder; float:left; padding-left: 5px;"> 대피소 종류 </span>
						<br>
						<select id="DE_F_C1" style="width: 185px;" title="시도 선택" class="search_sel">
							<option value="EShelter">지진대피소</option>
							<option value="TShelter">지진해일대피소(쓰나미)</option>
							<option value="CShelter">민방위대피소</option>
						</select>
						<br>
						<div id="search_frm" style="padding-bottom: 10px;" class="btn_method">
							<a href="#" class="bt_spot_detail" style="background-color: #4C4C4C; color: white; top: 3px; left: 55px;" onclick="searchForData();">검색</a>
						</div>
						<div id="restart" style="padding-bottom: 10px;" class="btn_method">
							<a href="#" class="bt_spot_detail" style="background-color: #4C4C4C; color: white; top: 3px; left: 85px;">초기화</a>
						</div>
					</div>
					<p class="result" style="padding-bottom: 15px;margin: 10px 0px;height: 10px;">
						<span id="resultAddr"></span><a id="resultSearch"></a>
					</p>
					<p></p>
						<div class="follow1" id="followBlack">
							<div class="s_list01" id="statList">
								<span><dl style="padding-left: 70px; font: 13px 돋움; color: #4a4a4a;">검색 결과가 없습니다.</dl></span>
							</div>
						</div>
						
				</div>
			</div>
		</div>
		<div id="container">
		</div>
	</div>
	<div id="ajaxBusy" style="display: none;">
		<img id="ajaxBusy-image" src='<c:url value="/resources/images/util/ajax-loader.gif"></c:url>' alt="로딩 이미지">
	</div>
	
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=fb155688a81428643667401470f65d72"></script>
	<script type="text/javascript">

		//AJAX 통신 시작
		$(document).ajaxStart(function() {
			$('#ajaxBusy').show();
		});

		//AJAX 통신 종료 
		$(document).ajaxStop(function() {
			$('#ajaxBusy').fadeOut();
		});
		
	var container = document.getElementById("container");
	var options = {
			center: new kakao.maps.LatLng(37.502544,127.0226792), //지도의 중심좌표.
			level: 4 //지도의 레벨(확대, 축소 정도)
	}
	const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
	var zoomControl = new kakao.maps.ZoomControl();
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
	
	
	
			if (navigator.geolocation) {
		        //위치 정보를 얻기
		        navigator.geolocation.getCurrentPosition (function(pos){
		            var lat = pos.coords.latitude, // 위도
		            lon = pos.coords.longitude; // 경도
		            var locPosition = new kakao.maps.LatLng(lat, lon);
		            map.setCenter(locPosition);
		        }, function(err){
					console.log(err.message);
		        });
		    }; 
		    var ima = [];				// 이미지 마커 저장 배열
		    var ma = [];				// 마커 저장 배열
		    var mka = [];			
			initSetup();
			var nfHtml = "<span>"+
									"<dl style='padding-left: 70px; font: 13px 돋움; color: #4a4a4a;'>"+
									"검색 결과가 없습니다.</dl></span>";
			
			
			// func
			
			function initSetup(){
				var shelter = $('#DE_F_C1 option:selected').val();
				// DB에서 모든정보들 가져오기
				$.ajax({
					url: "/ajaxMap/getData/"+shelter,
					method: "GET",
					dataType:"json"
				})
				.done(function(res){
					
					var tsunami = res.tsunami;
					var eq = res.eq;
					var civil = res.civil;
					var tsunami_img = "/resources/images/marker/tsunami_m.png";
					var civil_img = "/resources/images/marker/civil_m.png";
					var eq_img = "/resources/images/marker/eq_m.png";
					
					// 지진 마커생성
					var 	imageSize  = new kakao.maps.Size(38, 38);
					var markerImage = new kakao.maps.MarkerImage(eq_img, imageSize);
					var eqHtml = "";
					$.each(eq,function(index, item){
						eqHtml = "<div id='info_wrap'>" +
										"<div class='middle_line'></div>"+
										"<div class='sub_group'>"+
										"<h3 class='tit3_info'>	"+
										item.title + "</h3>"+
										"<table class='table_02'>" +
										"<tbody>"+
										"<tr>" +
										"<th style='width: 70px;'>지번주소</th>"+
										"<td>"+item.addr + "</td>"+
										"</tr>"+
										"<tr>" +
										"<th>관리 책임자</th>"+
										"<td>"+item.md + "</td>"+
											"</tr>"+
										"<tr>" +
										"<th style='width: 80px;'>책임자 연락처</th>"+
										"<td>"+item.tel + "</td>"+
										"</tr>"+
										"<tr>" +
										"<th>수용가능면적</th>"+
										"<td>"+item.area + "</td>"+
										"</tr>"+
										"</tbody></table>"+
										"</div>" +
										"<div class='middle_line'></div>" +
										"</div>";
										
						var latlon = new kakao.maps.LatLng(item.lat, item.lon);
						var marker = new kakao.maps.Marker({
							map : map,
							position : latlon,
							title : item.title,
							image : markerImage,
							clickable: true
						});
						var infowindow = new kakao.maps.InfoWindow({
							content : eqHtml,
							removable : true
						});
						
						kakao.maps.event.addListener(marker,'click',function(){
							closeInfoWindow();
							infowindow.open(map,marker);
							map.setCenter(new kakao.maps.LatLng(item.lat, item.lon));
						});
						
						ima.push(infowindow);
						ma.push(marker);						
					});
					
					
				})
			}

			function closeInfoWindow() {
			    for(var idx=0; idx<ima.length; idx++){
			    	ima[idx].close();
			    }
			}
			
			function closeMarker(){
				for(var idx=0; idx<ma.length; idx++){
					ma[idx].setMap(null);	
				}
				ma = [];
			}
			
			function removeMarker(){
				for(var idx=0; idx<ima.length; idx++){
			    	ima = [];
			    }
			}
			
			 
			function searchForData(){
				if($('#F_SI_DO1 option:selected').val() === 'all'){
					alert("지역을 선택해 주세요.");
					return false;
				}else{
					var city = $('#F_SI_DO1 option:selected').index();
					var local = $('#F_GU_GUN1 option:selected').index();
					var shel = $('#DE_F_C1 option:selected').val();
					closeInfoWindow();
					removeMarker();
					closeMarker();
					$.ajax({
						url: "/ajaxMap/SearchData",
						method: "GET",
						dataType : "json",
						data : {"city" : city , "local" : local, "shel" : shel}
					})
					.done(function(res){
						if(res.result.length == 0){
							alert("검색한 결과에 대한 대피소가 없습니다.");
							resetListView();
							return false;
						}
						var ctitle = $('#F_SI_DO1 option:selected').text();		//지역이름
						var ltitle = $('#F_GU_GUN1 option:selected').text();	//시군구이름
						var result = res.result;			//결과값
						var xcode = 0;							//뿌려질 좌표값x
						var ycode = 0;							//뿌려질 좌표값y
						
						// 해당지역 좌표로 이동
						if(local === 0){
							$.each(arrSidoList,function(index,item){
								if(item.sido == ctitle){
									xcode = item.x;
									ycode = item.y;
								}
							});
							map.setLevel(7);
						}else{
							$.each(arrGugunList,function(index,item){
								if(item.sido == ctitle){
									if(item.gugun == ltitle){
										xcode = item.x;
										ycode = item.y;
									}
								}
							});
							map.setLevel(4);
						}
					    // 이동할 위도 경도 위치를 생성합니다 
					    var moveLatLon = new kakao.maps.LatLng(xcode,ycode);
					    // 지도 중심을 이동 시킵니다
					    map.setCenter(moveLatLon);
					    
						// 검색한 데이터를 다시 보여주게 하기
						ShelterMarker(shel,result);
						// 리스트뿌려주기
					    ShowListView(result,shel);
					});				
					
				}
			
			}			
			
			function ShelterMarker(sh,res){
				var tsunami_img = "/resources/images/marker/tsunami_m.png";
				var civil_img = "/resources/images/marker/civil_m.png";
				var eq_img = "/resources/images/marker/eq_m.png";
				var imageSize  = new kakao.maps.Size(38, 38);
				var bounds = new kakao.maps.LatLngBounds(); 
				if(sh == 'EShelter'){
					var markerImage = new kakao.maps.MarkerImage(eq_img, imageSize);
					var eqHtml = "";
					$.each(res,function(index, item){
						eqHtml = "<div id='info_wrap'>" +
										"<div class='middle_line'></div>"+
										"<div class='sub_group'>"+
										"<h3 class='tit3_info'>	"+
										item.title + "</h3>"+
										"<table class='table_02'>" +
										"<tbody>"+
										"<tr>" +
										"<th style='width: 70px;'>지번주소</th>"+
										"<td>"+item.addr + "</td>"+
										"</tr>"+
										"<tr>" +
										"<th>관리 책임자</th>"+
										"<td>"+item.md + "</td>"+
											"</tr>"+
										"<tr>" +
										"<th style='width: 80px;'>책임자 연락처</th>"+
										"<td>"+item.tel + "</td>"+
										"</tr>"+
										"<tr>" +
										"<th>수용가능면적</th>"+
										"<td>"+item.area + "</td>"+
										"</tr>"+
										"</tbody></table>"+
										"</div>" +
										"<div class='middle_line'></div>" +
										"</div>";
										
						var latlon = new kakao.maps.LatLng(item.lat, item.lon);
						var marker = new kakao.maps.Marker({
							map : map,
							position : latlon,
							title : item.title,
							image : markerImage,
							clickable: true
						});
						var infowindow = new kakao.maps.InfoWindow({
							content : eqHtml,
							removable : true
						});

						bounds.extend(latlon);
						
						kakao.maps.event.addListener(marker,'click',function(){
							closeInfoWindow();
							infowindow.open(map,marker);
							map.setCenter(new kakao.maps.LatLng(item.lat, item.lon));
						});
						ima.push(infowindow);
						ma.push(marker);
					});
					map.setBounds(bounds);
				}else if(sh == 'CShelter'){
					var markerImage = new kakao.maps.MarkerImage(civil_img, imageSize);
					var civilHtml = "";
					$.each(res,function(index, item){
						civilHtml = "<div id='info_wrap'>"+
							"<div class='middle_line'></div>"+
							"<div class='sub_group'>"+
							"<h3 class='tit3_info'>" + item.title + "</h3>"+
							"<table class='table_02'>"+
								"<tbody><tr>"+
								"<th style='width: 70px;'>도로명주소</th>"+
									"<td>" + item.nddr + "</td>"+
									"</tr>"+
									"<tr>"+
									"<th>지번주소</th>"+
									"<td>" + item.addr + "</td>"+
									"</tr>"+
									"<tr>"+
									"<th>관리기관</th>"+
										"<td>" + item.mname + "</td>"+
									"</tr>"+
									"<tr>"+
									"<th style='width:90px;'>관리기관 연락처</th>"+
									"<td>" + item.mtel + "</td>" + 
									"</tr>"+
									"<tr>"+
									"<th>수용가능 면적</th>"+
									"<td>" + item.area + "cm<sub>2</sub></td>"+
									"</tr>"+
									"<tr>"+ 
									"<th>수용가능 인원</th>"+
									"<td>" + item.person + "명</td>"+
									"</tr>"+
									"</tbody></table>"+
								"</div>"+
							"<div class='middle_line'></div>"+
							"</div>";
							
						var latlon = new kakao.maps.LatLng(item.lat, item.lon);
						var marker = new kakao.maps.Marker({
							map : map,
							position : latlon,
							title : item.title,
							image : markerImage,
							clickable: true
						});
						
						var infowindow = new kakao.maps.InfoWindow({
							content : civilHtml,
							removable : true
						});

						bounds.extend(latlon);
						
						kakao.maps.event.addListener(marker,'click',function(){
							closeInfoWindow();
							infowindow.open(map,marker);
							map.setCenter(new kakao.maps.LatLng(item.lat, item.lon));
						});
						ima.push(infowindow);
						ma.push(marker);
					});
					map.setBounds(bounds);					
				}else{
					var markerImage = new kakao.maps.MarkerImage(tsunami_img, imageSize);
					var tsHtml = "";
					$.each(res,function(index,item){
						tsHtml = "<div id='info_wrap'>"+
											"<div class='middle_line'></div>"+
											"<div class='sub_group'>"+
											"<h3 class='tit3_info'>" + item.title + "</h3>"+
											"<table class='table_02'>"+
											"<tbody><tr>"+
											"<th style='width: 70px;'>지번주소</th>"+
												"<td>" +  item.addr + "</td>" +
											"</tr>"+
											"<tr>"+
											"<th>관리기관</th>"+
											"<td>"  + item.mname  + "</td>"+
											"</tr>"+
											"<tr>"+
											"<th style='width:90px;'>관리기관 연락처</th>"+
											"<td>" + item.mtel + "</td>"+
											"</tr>"+
											"<tr>"+
												"<th>수용가능면적</th>"+
												"<td>" + item.area + "</td>"+
												"</tr>"+
												"<tr>"+ 
												"<th>수용가능인원</th>"+
												"<td>" + item.person + "</td>"+
												"</tr>"+
												"</tbody></table>"+
												"</div>"+
												"<div class='middle_line'></div>"+
												"</div>";
							
												
						var latlon = new kakao.maps.LatLng(item.lat, item.lon);
						var marker = new kakao.maps.Marker({
							map : map,
							position : latlon,
							title : item.title,
							image : markerImage,
							clickable: true
						});
						var infowindow = new kakao.maps.InfoWindow({
							content : tsHtml,
							removable : true
						});

						bounds.extend(latlon);
						
						kakao.maps.event.addListener(marker,'click',function(){
							closeInfoWindow();
							infowindow.open(map,marker);
							map.setCenter(new kakao.maps.LatLng(item.lat, item.lon));
						});
						
						ima.push(infowindow);
						ma.push(marker);
						
					});
					map.setBounds(bounds);	
				}
			}
			
			function ShowListView(res,sh){
				var ListHtml = "";
				var t_icon = "/resources/images/icon/t_icon.png";
				var c_icon = "/resources/images/icon/c_icon.png";
				var e_icon = "/resources/images/icon/e_icon.png";
				var talt = "지진해일로고";
				var calt = "민방위로고";
				var ealt ="지진로고";
				$('#statList > ').remove();
				
				$.each(res,function(index,item){
					ListHtml = "<div class='fw_path' onclick='javascript:StateView(" + item.lat + "," + item.lon + "," + index +")'>"+
										"<div class='thumb'>";
										if(sh == 'EShelter'){
											ListHtml += "<img src='" + e_icon  + "' alt='" + ealt + "'>";	
										}else if(sh == 'TShelter'){
											ListHtml += "<img src='" + t_icon  + "' alt='" + talt + "'>";
										}else {	
											ListHtml += "<img src='" + c_icon  + "' alt='" + calt + "'>";
										}
										ListHtml += "</div>"+
																"<div class='state'>"+
																"<p>"+
																"<strong>" + item.title  + "</strong>"+
																"</p>"+
																"</div>"+
																"</div>";
										
						$('#statList').append(ListHtml);						
				});
			}
			
			//  reset btn
			function resetListView(){
				$('#statList > ').remove();
				$('#statList').append(nfHtml);
				
			}
			
			// 클릭시 지도에 상세정보 띄우기
			function StateView(lat, lon, idx){
				closeInfoWindow();
				var moveLatLon = new kakao.maps.LatLng(lat,lon);
				map.setCenter(moveLatLon);
				ima[idx].open(map,ma[idx]);
			}
			
			//  local reset
			function resetMapLocation(){
		    var moveLatLon = new kakao.maps.LatLng(37.502544,127.0226792);
		    map.setCenter(moveLatLon);
			}
		</script>
	
</body>
</html>