var arrGugunList = [
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"강남구"		,"gugunEng":"gangnam"	    ,"x":"37.48883"     ,"y":"127.049209"      ,"code":"11680"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"강동구"		,"gugunEng":"gandong"	    ,"x":"37.542611"    ,"y":"127.146172"      ,"code":"11740"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"강북구"		,"gugunEng":"gangbuk"	    ,"x":"37.6395"	    ,"y":"127.0000"        ,"code":"11305"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"강서구"		,"gugunEng":"gangseo"	    ,"x":"37.55"	    ,"y":"126.84"          ,"code":"11500"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"관악구"		,"gugunEng":"gwanak"	    ,"x":"37.4622"	    ,"y":"126.95"          ,"code":"11620"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"광진구"		,"gugunEng":"gwangjin"	    ,"x":"37.5362"	    ,"y":"127.0813"        ,"code":"11215"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"구로구"		,"gugunEng":"guro"		    ,"x":"37.49"		,"y":"126.88"          ,"code":"11530"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"금천구"		,"gugunEng":"geumchun"	    ,"x":"37.462201"	,"y":"126.896563"      ,"code":"11545"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"노원구"		,"gugunEng":"nowon"		    ,"x":"37.657691"	,"y":"127.0735"        ,"code":"11350"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"도봉구"		,"gugunEng":"dobong"	    ,"x":"37.66"		,"y":"127.0293"        ,"code":"11320"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"동대문구"	,"gugunEng":"dongdaemoon"   ,"x":"37.577472"	,"y":"127.057718"      ,"code":"11230"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"동작구"		,"gugunEng":"dongjak"	    ,"x":"37.498811"	,"y":"126.938461"      ,"code":"11590"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"마포구"		,"gugunEng":"mapo"		    ,"x":"37.55"		,"y":"126.91"          ,"code":"11440"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"서대문구"	,"gugunEng":"seodaemun"	    ,"x":"37.57"		,"y":"126.93"          ,"code":"11410"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"서초구"		,"gugunEng":"seocho"	    ,"x":"37.479109"	,"y":"127.011225"      ,"code":"11650"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"성동구"		,"gugunEng":"sungdong"	    ,"x":"37.549374"	,"y":"127.0390"        ,"code":"11200"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"성북구"		,"gugunEng":"sungbuk"	    ,"x":"37.602103"	,"y":"127.00589"       ,"code":"11290"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"송파구"		,"gugunEng":"songpa"	    ,"x":"37.5000"	 	,"y":"127.11865"       ,"code":"11710"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"양천구"		,"gugunEng":"yangchun"	    ,"x":"37.5150"	 	,"y":"126.86"          ,"code":"11470"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"영등포구"	,"gugunEng":"youngdeungpo"  ,"x":"37.5128"  	,"y":"126.9019"        ,"code":"11560"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"용산구"		,"gugunEng":"yongsan"	    ,"x":"37.525945" 	,"y":"126.984282"      ,"code":"11170"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"은평구"		,"gugunEng":"eunpyung"	    ,"x":"37.611094" 	,"y":"126.929058"      ,"code":"11380"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"종로구"		,"gugunEng":"jongro"	    ,"x":"37.6071" 		,"y":"126.9642"        ,"code":"11110"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"중구"		,"gugunEng":"jung"		    ,"x":"37.5500" 		,"y":"126.99998"       ,"code":"11140"},
{   "sido":"서울특별시"    ,"sidoEng":"seoul"        ,"gugun":"중랑구"		,"gugunEng":"jungrang"	    ,"x":"37.59431" 	,"y":"127.0909"        ,"code":"11260"},
{	"sido":"인천광역시"   ,"sidoEng":"incheon"	     ,"gugun":"강화군"		,"gugunEng":"kang"      	,"x":"37.68"		,"y":"126.46"          ,"code":"28710"},
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"계양구"		,"gugunEng":"gye"       	,"x":"37.56"		,"y":"126.73"          ,"code":"28245"}, 
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"남구"		,"gugunEng":"nam"       	,"x":"37.45"		,"y":"126.66"          ,"code":"28170"},/*** 인천 남구 -> 미추홀구로 변경 **/
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"남동구"		,"gugunEng":"namdong"   	,"x":"37.44"		,"y":"126.73"          ,"code":"28200"},
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"동구"		,"gugunEng":"dong"      	,"x":"37.48"		,"y":"126.64"          ,"code":"28140"},
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"부평구"		,"gugunEng":"bu"        	,"x":"37.50"		,"y":"126.72"          ,"code":"28237"},
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"서구"		,"gugunEng":"seo"       	,"x":"37.55"		,"y":"126.64"          ,"code":"28260"},
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"연수구"		,"gugunEng":"yeonsu"    	,"x":"37.41"		,"y":"126.64"          ,"code":"28185"},
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"옹진군"		,"gugunEng":"ong"       	,"x":"37.21"		,"y":"126.17"          ,"code":"28720"},
{	"sido":"인천광역시"   ,"sidoEng":"incheon"      ,"gugun":"중구"		,"gugunEng":"jung"      	,"x":"37.47"		,"y":"126.62"          ,"code":"28110"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"강서구"	    ,"gugunEng":"gangseo"	    ,"x":"35.16"		,"y":"128.92"          ,"code":"26440"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"금정구"	    ,"gugunEng":"geumjeong"	    ,"x":"35.24"	    ,"y":"129.09"          ,"code":"26410"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"기장군"	    ,"gugunEng":"gijang"	    ,"x":"35.31"	    ,"y":"129.20"          ,"code":"26710"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"남구"	    	,"gugunEng":"nam"		    ,"x":"35.13"	,"y":"129.08"          ,"code":"26290"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"동구"	    	,"gugunEng":"dong"		    ,"x":"35.13"	,"y":"129.04"          ,"code":"26170"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"동래구"	    ,"gugunEng":"dongrae"	    ,"x":"35.21"	    ,"y":"129.08"          ,"code":"26260"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"부산진구"		,"gugunEng":"busanjin"	    ,"x":"35.16"	 	,"y":"129.05"          ,"code":"26230"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"북구"	   		,"gugunEng":"buk"		    ,"x":"35.22"	    ,"y":"129.02"      ,"code":"26320"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"사상구"	    ,"gugunEng":"sasang"	    ,"x":"35.16"	    ,"y":"128.98"          ,"code":"26530"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"사하구"	    ,"gugunEng":"saha"		    ,"x":"35.095"	    ,"y":"128.97"          ,"code":"26380"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"서구"	    	,"gugunEng":"seo"		    ,"x":"35.075"	    ,"y":"129.009"     ,"code":"26140"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"수영구"	    ,"gugunEng":"suyeong"	    ,"x":"35.16"	    ,"y":"129.11"          ,"code":"26500"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"연제구"	    ,"gugunEng":"yeonje"	    ,"x":"35.185"	    ,"y":"129.08"          ,"code":"26470"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"영도구"	    ,"gugunEng":"youngdo"	    ,"x":"35.08"	    ,"y":"129.06"          ,"code":"26200"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"중구"	    	,"gugunEng":"jung"		    ,"x":"35.095"	    ,"y":"129.0266"    ,"code":"26110"},
{	"sido":"부산광역시"	 ,"sidoEng":"busan"        ,"gugun":"해운대구"		,"gugunEng":"haewundae"	    ,"x":"35.19"	,"y":"129.15"              ,"code":"26350"},
{	"sido":"대전광역시"	 ,"sidoEng":"daejeon"      ,"gugun":"대덕구"	    ,"gugunEng":"dae"           ,"x":"36.3935"	,"y":"127.4376"            ,"code":"30230"},
{	"sido":"대전광역시"	 ,"sidoEng":"daejeon"      ,"gugun":"동구"	        ,"gugunEng":"dong"	        ,"x":"36.260"	,"y":"127.4705"        ,"code":"30110"},
{	"sido":"대전광역시"	 ,"sidoEng":"daejeon"      ,"gugun":"서구"	    	,"gugunEng":"seo"	        ,"x":"36.2965"	,"y":"127.3543"        ,"code":"30170"},
{	"sido":"대전광역시"	 ,"sidoEng":"daejeon"      ,"gugun":"유성구"	    ,"gugunEng":"yu"            ,"x":"36.3790"	,"y":"127.3292"            ,"code":"30200"},
{	"sido":"대전광역시"	 ,"sidoEng":"daejeon"      ,"gugun":"중구"	    	,"gugunEng":"junggu"	    ,"x":"36.2873"	,"y":"127.4099"        ,"code":"30140"},
{   "sido":"대구광역시"    ,"sidoEng":"daegu"        ,"gugun":"남구"	    ,"gugunEng":"nam"	  	    ,"x":"35.83"	,"y":"128.59"              ,"code":"27200"},
{   "sido":"대구광역시"    ,"sidoEng":"daegu"        ,"gugun":"달서구"      ,"gugunEng":"dalseo"  	    ,"x":"35.83"	,"y":"128.53"              ,"code":"27290"},
{   "sido":"대구광역시"    ,"sidoEng":"daegu"        ,"gugun":"달성군"      ,"gugunEng":"dalseong"	    ,"x":"35.75"	,"y":"128.50"              ,"code":"27710"},
{   "sido":"대구광역시"    ,"sidoEng":"daegu"        ,"gugun":"동구"	    ,"gugunEng":"dong"	  	    ,"x":"35.93"	,"y":"128.69"              ,"code":"27140"},
{   "sido":"대구광역시"    ,"sidoEng":"daegu"        ,"gugun":"북구"	    ,"gugunEng":"buk"	  	    ,"x":"35.93"	,"y":"128.58"              ,"code":"27230"},
{   "sido":"대구광역시"    ,"sidoEng":"daegu"        ,"gugun":"서구"	    ,"gugunEng":"seo"	  	    ,"x":"35.88"	,"y":"128.55"              ,"code":"27170"},
{   "sido":"대구광역시"    ,"sidoEng":"daegu"        ,"gugun":"수성구"      ,"gugunEng":"suseong" 	    ,"x":"35.84"	,"y":"128.66"              ,"code":"27260"},
{   "sido":"대구광역시"    ,"sidoEng":"daegu"        ,"gugun":"중구"	    ,"gugunEng":"jung"	  	    ,"x":"35.86"	,"y":"128.60"              ,"code":"27110"},
{	"sido":	"광주광역시"   ,"sidoEng":"gwangju"	   	 ,"gugun":"광산구"		,"gugunEng":"gwangsan"	    ,"x":"35.15"	,"y":"126.74"              ,"code":"29200"},
{	"sido":	"광주광역시"   ,"sidoEng":"gwangju"	   	 ,"gugun":"남구"			,"gugunEng":"nam"		    ,"x":"35.09"	,"y":"126.89"          ,"code":"29155"},
{	"sido":	"광주광역시"   ,"sidoEng":"gwangju"	   	 ,"gugun":"동구"			,"gugunEng":"dong"		    ,"x":"35.10"	,"y":"126.95"          ,"code":"29110"},
{	"sido":	"광주광역시"   ,"sidoEng":"gwangju"	  	 ,"gugun":"북구"			,"gugunEng":"buk"		    ,"x":"35.20"	,"y":"126.91"          ,"code":"29170"},
{	"sido":	"광주광역시"   ,"sidoEng":"gwangju"	   	 ,"gugun":"서구"			,"gugunEng":"seo"		    ,"x":"35.13"	,"y":"126.85"          ,"code":"29140"},
{   "sido":"울산광역시"    ,"sidoEng":"ulsan"	       ,"gugun":"남구"	    ,"gugunEng":"nam"		    ,"x":"35.52"	,"y":"129.32"          ,"code":"31140"},
{   "sido":"울산광역시"    ,"sidoEng":"ulsan"		   ,"gugun":"동구"	    ,"gugunEng":"dong"		    ,"x":"35.52"	,"y":"129.43"          ,"code":"31170"},
{   "sido":"울산광역시"    ,"sidoEng":"ulsan"		   ,"gugun":"북구"	    ,"gugunEng":"buk"		    ,"x":"35.60"	,"y":"129.39"          ,"code":"31200"},
{   "sido":"울산광역시"    ,"sidoEng":"ulsan"		   ,"gugun":"울주군"    ,"gugunEng":"ulju"		    ,"x":"35.54"	,"y":"129.19"              ,"code":"31710"},
{   "sido":"울산광역시"    ,"sidoEng":"ulsan"		   ,"gugun":"중구"	    ,"gugunEng":"jung"		    ,"x":"35.565"	,"y":"129.31"          ,"code":"31110"},
{	"sido":	"경기도"	     ,"sidoEng":"gyeonggi"	   ,"gugun":"가평군"	    ,"gugunEng":"gapyeong"	    ,"x":"37.83"	,"y":"127.42"          ,"code":"41820"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"고양시"		,"gugunEng":"goyang"	    ,"x":"37.63"	,"y":"126.83"      ,"code":"41280"},  /**/
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"과천시"		,"gugunEng":"gwacheon"	    ,"x":"37.47"	,"y":"127.00"          ,"code":"41290"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"광명시"		,"gugunEng":"gwangmyeong"   ,"x":"37.45"	,"y":"126.86"          ,"code":"41210"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"광주시"		,"gugunEng":"gwangju"	    ,"x":"37.38"	,"y":"127.25"          ,"code":"41610"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"구리시"		,"gugunEng":"guri"		    ,"x":"37.59"	,"y":"127.12"          ,"code":"41310"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"군포시"		,"gugunEng":"gunpo"		    ,"x":"37.36"	,"y":"126.90"          ,"code":"41410"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"김포시"		,"gugunEng":"gimpo"		    ,"x":"37.6683"	,"y":"126.5953"        ,"code":"41570"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"남양주시"	    ,"gugunEng":"namyangju"	    ,"x":"37.66"	,"y":"127.21"          ,"code":"41360"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"동두천시"	    ,"gugunEng":"dongducheon"   ,"x":"37.9"		,"y":"127.06"          ,"code":"41250"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"부천시"		,"gugunEng":"bucheon"	    ,"x":"37.48"	,"y":"126.80"          ,"code":"41190"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"성남시"		,"gugunEng":"sungnam"	    ,"x":"37.3964"	,"y":"127.0700"        ,"code":"41130"},  /**/
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"수원시"		,"gugunEng":"suwon"		    ,"x":"37.26"	,"y":"126.98"          ,"code":"41110"},  /**/
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"시흥시"		,"gugunEng":"siheung"	    ,"x":"37.38"	,"y":"126.80"          ,"code":"41390"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"안산시"		,"gugunEng":"ansan"		    ,"x":"37.30"	,"y":"126.81"          ,"code":"41270"},  /**/
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"안성시"		,"gugunEng":"anseong"	    ,"x":"37.047"	,"y":"127.27"          ,"code":"41550"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"안양시"		,"gugunEng":"anyang"	    ,"x":"37.41"	,"y":"126.92"          ,"code":"41170"},  /**/
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"양주시"		,"gugunEng":"yangju"	    ,"x":"37.80"	,"y":"127.02"          ,"code":"41630"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"양평군"		,"gugunEng":"yangpyeong"    ,"x":"37.49"	,"y":"127.57"          ,"code":"41830"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"여주시"		,"gugunEng":"yeoju"		    ,"x":"37.26"	,"y":"127.63"          ,"code":"41670"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"연천군"		,"gugunEng":"yeoncheon"	    ,"x":"38.09"	,"y":"127.03"          ,"code":"41800"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"오산시"		,"gugunEng":"osan"		    ,"x":"37.14"	,"y":"127.07"          ,"code":"41370"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"용인시"		,"gugunEng":"yongin"	    ,"x":"37.24"	,"y":"127.18"          ,"code":"41460"},  /**/
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"의왕시"		,"gugunEng":"euiwang"	    ,"x":"37.34"	,"y":"126.98"          ,"code":"41430"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"의정부시"	    ,"gugunEng":"euijeongbu"    ,"x":"37.72"	,"y":"127.06"          ,"code":"41150"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"이천시"		,"gugunEng":"icheon"	    ,"x":"37.20"	,"y":"127.43"          ,"code":"41500"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"파주시"		,"gugunEng":"paju"		    ,"x":"37.80"	,"y":"126.75"          ,"code":"41480"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"평택시"		,"gugunEng":"pyeongtaek"    ,"x":"36.99"	,"y":"126.98"          ,"code":"41220"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"포천시"		,"gugunEng":"pocheon"	    ,"x":"37.94"	,"y":"127.20"          ,"code":"41650"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"하남시"		,"gugunEng":"hanam"		    ,"x":"37.50"	,"y":"127.21"          ,"code":"41450"},
{	"sido":	"경기도"		 ,"sidoEng":"gyeonggi"     ,"gugun":"화성시"		,"gugunEng":"hwaseong"	    ,"x":"37.17"	,"y":"126.83"          ,"code":"41590"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"강릉시"		,"gugunEng":"kang"  	    ,"x":"37.72"	,"y":"128.87"          ,"code":"42150"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"고성군"		,"gugunEng":"go"  		    ,"x":"38.38"	,"y":"128.37"          ,"code":"42820"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"동해시"		,"gugunEng":"dong"  	    ,"x":"37.50"	,"y":"129.05"          ,"code":"42170"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"삼척시"		,"gugunEng":"sam"  		    ,"x":"37.24"	,"y":"129.16"          ,"code":"42230"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"속초시"		,"gugunEng":"sokcho"  	    ,"x":"38.18"    ,"y":"128.50"          ,"code":"42210"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"양구군"		,"gugunEng":"yang"  	    ,"x":"38.13"    ,"y":"127.98"          ,"code":"42800"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"양양군"		,"gugunEng":"yangyang"      ,"x":"38.02"	,"y":"128.60"          ,"code":"42830"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"영월군"		,"gugunEng":"young"  	    ,"x":"37.21"	,"y":"128.46"          ,"code":"42750"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"원주시"		,"gugunEng":"won"  		    ,"x":"37.30"	,"y":"127.91"          ,"code":"42130"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"인제군"		,"gugunEng":"inje"  	    ,"x":"38.06"	,"y":"128.25"          ,"code":"42810"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"정선군"		,"gugunEng":"jeong"  	    ,"x":"37.38"	,"y":"128.66"          ,"code":"42770"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"철원군"		,"gugunEng":"cheor"  	    ,"x":"38.24"	,"y":"127.31"          ,"code":"42780"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"춘천시"		,"gugunEng":"chun"  	    ,"x":"37.93"	,"y":"127.73"          ,"code":"42110"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"태백시"		,"gugunEng":"tae"  		    ,"x":"37.16"	,"y":"128.96"          ,"code":"42190"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"평창군"		,"gugunEng":"pyeong"  	    ,"x":"37.53"	,"y":"128.38"          ,"code":"42760"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"홍천군"		,"gugunEng":"hong"  	    ,"x":"37.73"	,"y":"127.99"          ,"code":"42720"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"화천군"		,"gugunEng":"hwa"  		    ,"x":"38.11"	,"y":"127.70"          ,"code":"42790"},
{	"sido":	"강원도"		 ,"sidoEng":"gangwon"      ,"gugun":"횡성군"		,"gugunEng":"hoeng"  	    ,"x":"37.51"	,"y":"128.10"          ,"code":"42730"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"	   ,"gugun":"괴산군"		,"gugunEng":"goesan" 	    ,"x":"36.81"	,"y":"127.80"          ,"code":"43760"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"단양군"		,"gugunEng":"dan" 	        ,"x":"36.98"	,"y":"128.36"          ,"code":"43800"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"보은군"		,"gugunEng":"bo" 	        ,"x":"36.48"	,"y":"127.72"          ,"code":"43720"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"영동군"		,"gugunEng":"young" 	    ,"x":"36.17"	,"y":"127.78"          ,"code":"43740"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"옥천군"		,"gugunEng":"ok" 	        ,"x":"36.30"	,"y":"127.68"          ,"code":"43730"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"음성군"		,"gugunEng":"eum" 	        ,"x":"36.94"	,"y":"127.60"          ,"code":"43770"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"제천시"		,"gugunEng":"je" 	        ,"x":"37.08"	,"y":"128.17"          ,"code":"43150"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"증평군"		,"gugunEng":"jeung" 	    ,"x":"36.78"	,"y":"127.63"          ,"code":"43745"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"진천군"		,"gugunEng":"jin" 	        ,"x":"36.82"	,"y":"127.43"          ,"code":"43750"},
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"청주시"		,"gugunEng":"cheongju" 	    ,"x":"36.61"	,"y":"127.45"          ,"code":"43110"},  /**/
{	"sido":	"충청북도"	 	,"sidoEng":"chungbuk"     ,"gugun":"충주시"		,"gugunEng":"chungju" 	    ,"x":"36.99"	,"y":"127.92"          ,"code":"43130"},
{	"sido":	"충청남도"		,"sidoEng":"chungnam"	   ,"gugun":"계룡시"		,"gugunEng":"gye"           ,"x":"36.27"	,"y":"127.24"          ,"code":"44250"},
{	"sido":	"충청남도"		,"sidoEng":"chungnam"	   ,"gugun":"공주시"		,"gugunEng":"gong"          ,"x":"36.44"	,"y":"127.11"          ,"code":"44150"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"금산군"		,"gugunEng":"geum"          ,"x":"36.10"	,"y":"127.48"          ,"code":"44710"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"논산시"		,"gugunEng":"nonsan"        ,"x":"36.18"	,"y":"127.13"          ,"code":"44230"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"당진시"		,"gugunEng":"dang"          ,"x":"36.89"	,"y":"126.73"          ,"code":"44270"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"보령시"		,"gugunEng":"bo"            ,"x":"36.33"	,"y":"126.61"          ,"code":"44180"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"부여군"		,"gugunEng":"bu"            ,"x":"36.25"	,"y":"126.88"          ,"code":"44760"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"서산시"		,"gugunEng":"seo"           ,"x":"36.78"	,"y":"126.45"          ,"code":"44210"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"서천군"		,"gugunEng":"seocheong"     ,"x":"36.08"	,"y":"126.69"          ,"code":"44770"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"아산시"		,"gugunEng":"asan"          ,"x":"36.79"	,"y":"127.00"          ,"code":"44200"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"예산군"		,"gugunEng":"yesan"         ,"x":"36.68"	,"y":"126.82"          ,"code":"44810"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"천안시"		,"gugunEng":"cheonan"       ,"x":"36.81"	,"y":"127.21"          ,"code":"44130"},  /**/
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"청양군"		,"gugunEng":"cheongyang"    ,"x":"36.43"	,"y":"126.80"          ,"code":"44790"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"태안군"		,"gugunEng":"tae"           ,"x":"36.74"	,"y":"126.29"          ,"code":"44825"},
{	"sido":	"충청남도"	 	,"sidoEng":"chungnam"	   ,"gugun":"홍성군"		,"gugunEng":"hong"          ,"x":"36.57"	,"y":"126.66"          ,"code":"44800"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"고창군"		,"gugunEng":"gochang"	    ,"x":"35.43"	,"y":"126.62"          ,"code":"45790"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"군산시"		,"gugunEng":"gunsan"	    ,"x":"35.93"	,"y":"126.73"          ,"code":"45130"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"김제시"		,"gugunEng":"gimje"		    ,"x":"35.85"	,"y":"126.88"          ,"code":"45210"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"남원시"		,"gugunEng":"namwon"	    ,"x":"35.41"	,"y":"127.46"          ,"code":"45190"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"무주군"		,"gugunEng":"muju"	        ,"x":"35.91"	,"y":"127.70"          ,"code":"45730"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"부안군"		,"gugunEng":"buan"	        ,"x":"35.68"	,"y":"126.69"          ,"code":"45800"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"순창군"		,"gugunEng":"sunchang"	    ,"x":"35.41"	,"y":"127.13"          ,"code":"45770"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"완주군"		,"gugunEng":"wanju"	        ,"x":"35.94"	,"y":"127.24"          ,"code":"45710"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"익산시"		,"gugunEng":"iksan"	        ,"x":"35.99"	,"y":"127.02"          ,"code":"45140"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"임실군"		,"gugunEng":"imsil"	        ,"x":"35.58"	,"y":"127.22"          ,"code":"45750"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"장수군"		,"gugunEng":"jangsu"	    ,"x":"35.64"	,"y":"127.56"          ,"code":"45740"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"전주시"		,"gugunEng":"jeonju"	    ,"x":"35.80"	,"y":"127.14"          ,"code":"45110"},  /**/
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"정읍시"		,"gugunEng":"jeongeub"	    ,"x":"35.63"	,"y":"126.89"          ,"code":"45180"},
{	"sido":	"전라북도"	 	,"sidoEng":"jeonbuk"	   ,"gugun":"진안군"		,"gugunEng":"jinan"	        ,"x":"35.79"	,"y":"127.42"          ,"code":"45720"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"강진군"	    ,"gugunEng":"gangjin"	    ,"x":"34.64"	,"y":"126.76"          ,"code":"46810"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"고흥군"	    ,"gugunEng":"goheung"       ,"x":"34.596"	,"y":"127.299"         ,"code":"46770"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"곡성군"	    ,"gugunEng":"gokseong"      ,"x":"35.20"	,"y":"127.30"          ,"code":"46720"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"광양시"	    ,"gugunEng":"gwangyang"     ,"x":"35.009"	,"y":"127.687"         ,"code":"46230"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"구례군"	    ,"gugunEng":"gurye"   	    ,"x":"35.20"	,"y":"127.52"          ,"code":"46730"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"나주시"	    ,"gugunEng":"naju"   	    ,"x":"34.98"	,"y":"126.71"          ,"code":"46170"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"담양군"	    ,"gugunEng":"damyang"       ,"x":"35.27"	,"y":"126.987"         ,"code":"46710"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"목포시"	    ,"gugunEng":"mokpo"   	    ,"x":"34.81"	,"y":"126.35"          ,"code":"46110"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"무안군"	    ,"gugunEng":"muan"   	    ,"x":"34.91"	,"y":"126.46"          ,"code":"46840"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"보성군"	    ,"gugunEng":"boseong"       ,"x":"34.81"	,"y":"127.18"          ,"code":"46780"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"순천시"	    ,"gugunEng":"suncheon"      ,"x":"34.95"	,"y":"127.41"          ,"code":"46150"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"신안군"	    ,"gugunEng":"sinan"   	    ,"x":"34.862"	,"y":"126.25"          ,"code":"46910"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"여수시"	    ,"gugunEng":"yeosu"   	    ,"x":"34.76"	,"y":"127.66"          ,"code":"46130"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"영광군"	    ,"gugunEng":"yeonggwang"    ,"x":"35.27"	,"y":"126.451"         ,"code":"46870"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"영암군"	    ,"gugunEng":"yeongam"       ,"x":"34.77"	,"y":"126.59"          ,"code":"46830"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"완도군"	    ,"gugunEng":"wando"         ,"x":"34.35"	,"y":"126.695"         ,"code":"46890"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"장성군"	    ,"gugunEng":"jangseong"     ,"x":"35.30"	,"y":"126.78"          ,"code":"46880"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"장흥군"	    ,"gugunEng":"jangheung"     ,"x":"34.74"	,"y":"126.90"          ,"code":"46800"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"진도군"	    ,"gugunEng":"jindo"         ,"x":"34.48"	,"y":"126.26"          ,"code":"46900"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"함평군"	    ,"gugunEng":"hampyeong"     ,"x":"35.13"	,"y":"126.550"         ,"code":"46860"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"해남군"	    ,"gugunEng":"haenam"        ,"x":"34.52"	,"y":"126.57"          ,"code":"46820"},
{	"sido":	"전라남도"	 	,"sidoEng":"jeonnam"      ,"gugun":"화순군"	    ,"gugunEng":"hwasun"        ,"x":"34.98"	,"y":"127.02"          ,"code":"46790"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"경산시"		,"gugunEng":"gyeong"        ,"x":"35.80"	,"y":"128.78"          ,"code":"47290"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"경주시"		,"gugunEng":"gyeongju"      ,"x":"35.85"	,"y":"129.22"          ,"code":"47130"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"고령군"		,"gugunEng":"go"   			,"x":"35.71"	,"y":"128.26"          ,"code":"47830"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"구미시"		,"gugunEng":"gumi"  		,"x":"36.16"	,"y":"128.34"          ,"code":"47190"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"군위군"		,"gugunEng":"gunwi" 	    ,"x":"36.12"	,"y":"128.66"          ,"code":"47720"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"김천시"		,"gugunEng":"gim"           ,"x":"36.08"	,"y":"128.11"          ,"code":"47150"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"문경시"		,"gugunEng":"mun"           ,"x":"36.69"	,"y":"128.18"          ,"code":"47280"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"봉화군"		,"gugunEng":"bonghwa"       ,"x":"36.93"	,"y":"128.85"          ,"code":"47920"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"상주시"		,"gugunEng":"sangju"        ,"x":"36.41"	,"y":"128.11"          ,"code":"47250"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"성주군"		,"gugunEng":"seongju"       ,"x":"35.91"	,"y":"128.23"          ,"code":"47840"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"안동시"		,"gugunEng":"an"            ,"x":"36.615"	,"y":"128.72"          ,"code":"47170"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"영덕군"		,"gugunEng":"yeongdeok"     ,"x":"36.41"	,"y":"129.33"          ,"code":"47770"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"영양군"		,"gugunEng":"yeongyang"     ,"x":"36.66"	,"y":"129.11"          ,"code":"47760"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"영주시"		,"gugunEng":"yeongju"       ,"x":"36.80"	,"y":"128.62"          ,"code":"47210"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"영천시"		,"gugunEng":"yeongcheon"    ,"x":"35.97"	,"y":"128.93"          ,"code":"47230"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"예천군"		,"gugunEng":"ye"            ,"x":"36.63"	,"y":"128.45"          ,"code":"47900"},
/*{	"sido":	"경상북도"	 ,"sidoEng":"gyeongbuk"    ,"gugun":"울릉군"		,"gugunEng":"hapcheon"      ,"x":"37.48"	,"y":"130.90"},*/
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"울진군"		,"gugunEng":"uljin"         ,"x":"36.99"	,"y":"129.32"          ,"code":"47930"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"의성군"		,"gugunEng":"uiseong" 		,"x":"36.35"	,"y":"128.69"          ,"code":"47730"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"청도군"		,"gugunEng":"cheongdo" 		,"x":"35.64"	,"y":"128.73"          ,"code":"47820"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"청송군"		,"gugunEng":"cheong" 	    ,"x":"36.40"	,"y":"129.07"          ,"code":"47750"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"칠곡군"		,"gugunEng":"chilgok"  		,"x":"35.98"	,"y":"128.40"          ,"code":"47850"},
{	"sido":	"경상북도"	 	,"sidoEng":"gyeongbuk"    ,"gugun":"포항시"		,"gugunEng":"pohang"   		,"x":"36.10"	,"y":"129.27"          ,"code":"47110"},  /**/
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"거제시"	    ,"gugunEng":"geoje"		    ,"x":"34.85"	,"y":"128.62"          ,"code":"48310"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"거창군"	    ,"gugunEng":"geochang"	    ,"x":"35.77"	,"y":"127.87"          ,"code":"48880"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"고성군"	    ,"gugunEng":"goseong"	    ,"x":"34.97"	,"y":"128.26"          ,"code":"48820"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"김해시"	    ,"gugunEng":"gimhae"	    ,"x":"35.27"	,"y":"128.88"          ,"code":"48250"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"남해군"	    ,"gugunEng":"namhae"	    ,"x":"34.78"	,"y":"127.91"          ,"code":"48840"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"밀양시"	    ,"gugunEng":"milyang"	    ,"x":"35.46"	,"y":"128.74"          ,"code":"48270"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"사천시"	    ,"gugunEng":"sacheon"	    ,"x":"35.03"	,"y":"128.087"         ,"code":"48240"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"산청군"	    ,"gugunEng":"sancheong"	    ,"x":"35.38"	,"y":"127.87"          ,"code":"48860"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"양산시"	    ,"gugunEng":"yangsan"	    ,"x":"35.39"	,"y":"129.05"          ,"code":"48330"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"의령군"	    ,"gugunEng":"uiryeong"	    ,"x":"35.38"	,"y":"128.26"          ,"code":"48720"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"진주시"	    ,"gugunEng":"jinju"		    ,"x":"35.24"	,"y":"128.10"          ,"code":"48170"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"창녕군"	    ,"gugunEng":"changnyeong"	,"x":"35.56"	,"y":"128.49"          ,"code":"48740"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"창원시"	    ,"gugunEng":"changwon"	    ,"x":"35.29"	,"y":"128.62"          ,"code":"48120"},  /**/
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"통영시"	    ,"gugunEng":"tongyeong"	    ,"x":"34.85"	,"y":"128.43"          ,"code":"48220"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"하동군"	    ,"gugunEng":"hadong"	    ,"x":"35.09"	,"y":"127.79"          ,"code":"48850"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"함안군"	    ,"gugunEng":"haman"		    ,"x":"35.32"	,"y":"128.46"          ,"code":"48730"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"함양군"	    ,"gugunEng":"hamyang"	    ,"x":"35.51"	,"y":"127.72"          ,"code":"48870"},
{   "sido":	"경상남도"	 	,"sidoEng":"gyeongnam"	  ,"gugun":"합천군"	    ,"gugunEng":"hapcheon"	    ,"x":"35.56"	,"y":"128.16"          ,"code":"48890"},
{   "sido":"제주특별자치도" ,"sidoEng":"jeju"	      ,"gugun":"서귀포시"	,"gugunEng":"seogwipo"	    ,"x":"33.30"	,"y":"126.51"          ,"code":"50130"},
{   "sido":"제주특별자치도" ,"sidoEng":"jeju"	      ,"gugun":"제주시"		,"gugunEng":"jeju"		    ,"x":"33.437"	,"y":"126.472"         ,"code":"50110"},
{   "sido":"세종특별자치시" ,"sidoEng":"sejong"	   	  ,"gugun":"세종시"		,"gugunEng":"sejong"		,"x":"36.59"	,"y":"127.25"          ,"code":"36110"},
{   "sido":"울릉도"		,"sidoEng":"ulleung"	  ,"gugun":"울릉도"		,"gugunEng":"ulleung"		,"x":"37.51"	,"y":"130.86"          ,"code":"47940"}
];


var arrSidoList = [ 
	{"sido":"서울특별시"	, "x":"37.56", "y":"126.97", "zcode":"11"},
	{"sido":"부산광역시"	, "x":"35.18", "y":"129.07", "zcode":"26"},
	{"sido":"대구광역시"	, "x":"35.86", "y":"128.60", "zcode":"27"},
	{"sido":"인천광역시"	, "x":"37.47", "y":"126.62", "zcode":"28"},
	{"sido":"광주광역시"	, "x":"35.16", "y":"126.85", "zcode":"29"},
	{"sido":"대전광역시"	, "x":"36.35", "y":"127.38", "zcode":"30"},
	{"sido":"울산광역시"	, "x":"35.58", "y":"129.36", "zcode":"31"},
	{"sido":"세종특별자치시", "x":"36.56", "y":"127.26", "zcode":"36"},
	{"sido":"경기도"		, "x":"37.26", "y":"127.02", "zcode":"41"},
	{"sido":"강원도"		, "x":"37.88", "y":"127.73", "zcode":"42"},
	{"sido":"충청북도"		, "x":"36.64", "y":"127.48", "zcode":"43"},
	{"sido":"충청남도"		, "x":"36.60", "y":"126.66", "zcode":"44"},
	{"sido":"전라북도"		, "x":"35.82", "y":"127.14", "zcode":"45"},
	{"sido":"전라남도"		, "x":"34.81", "y":"126.46", "zcode":"46"},
	{"sido":"경상북도"		, "x":"36.87", "y":"128.60", "zcode":"47"},
	{"sido":"경상남도"		, "x":"35.22", "y":"128.68", "zcode":"48"},
	{"sido":"제주특별자치도", "x":"33.38", "y":"126.53", "zcode":"50"}
	/*,{"sido":"울릉도"		, "x":"37.47", "y":"130.80", "zcode":"47940"}*/
];

var cities= ["시도","서울특별시","부산광역시","대구광역시","인천광역시",
			"광주광역시","대전광역시","울산광역시","세종특별자치시","경기도",
			"강원도","충청북도","충청남도","전라북도","전라남도","경상북도",
			"경상남도","제주특별자치도"]


var seoul = ["시군구","강남구","강동구","강북구","강서구",
						"관악구","광진구","구로구","금천구","노원구",
						"도봉구","동대문구","동작구","마포구","서대문구",
						"서초구","성동구","성북구","송파구","양천구",
						"영등포구","용산구","은평구","종로구","중구",
						"중랑구"];
var e_seoul = ["sigun", "gangnam", "gangdong", "gangbuk", "gangseo",
	"gwanak", "gwangjin", "guro", "geumcheon", "nowon",
	"dobong", "dongdaemun", "dongjak", "mapo", "seodaemun",
	"seocho", "seongdong", "seongbuk", "songpa", "yangcheon",
	"yeongdeungpo", "yongsan", "eunpyeong", "jongno", "jung",
	"jungnang"];

var busan = ["시군구","강서구","금정구","기장군","남구","동구",
						"동래구","부산진구","북구","사상구","사하구","서구",
						"수영구","연제구","영도구","중구","해운대구"];

var e_busan = ["sigun", "gangseo", "geumjeong", "gijang", "nam", "east",
	"dongnae", "busanjin", "buk", "sasang", "saha", "western",
	"sooyoung", "yeonje", "yeongdo", "jung", "haeundae"];


var daegu = ["시군구","남구","달서구","달성군","동구","북구",
						"서구","수성구","중구"];

var e_daegu = ["sigun", "nam", "dalseo", "dalseong", "east", "north",
	"western", "susong", "jung"];

var incheon = ["시군구","강화군","계양구","남구","남동구","동구",
							"부평구","서구","연수구","옹진군","중구"];
var e_incheon = ["sigun", "ganghwa", "gyeyang", "nam", "namdong", "dong",
	"bupyeong", "western", "yeonsu", "ongjin", "jung"];

var gwangju= ["시군구","광산구","남구","동구","북구","서구"];

var e_gwangju = ["sigun", "gwangsan", "nam", "east", "north", "western"];

var daejeon = ["시군구","대덕구","동구","서구","유성구","중구"];

var e_daejeon = ["sigun", "daedeok", "dong", "western", "yooseong", "jung"];

var ulsan = ["시군구","남구","동구","북구","울주군","중구"];

var e_ulsan = ["sigun", "nam", "east", "north", "ulju", "jung"];

var sejong = ["시군구","세종시"];

var e_sejong = ["sigun", "sejong"];

var gyeonggi = ["시군구","가평군","고양시","과천시","광명시",
								"광주시","구리시","군포시","김포시","남양주시",
								"동두천시","부천시","성남시","수원시","시흥시",
								"안산시","안성시","안양시","양주시","양평군",
								"여주시","연천군","오산시","용인시","의왕시",
								"의정부시","이천시","파주시","평택시","포천시",
								"하남시","화성시"];

var e_gyeonggi = ["sigun", "gapyeong", "goyang", "gwacheon", "gwangmyeong",
	"gwangju", "guri", "gunpo", "gimpo", "namyangju",
	"dongducheon", "bucheon", "seongnam", "suwon", "siheung",
	"ansan", "anseong", "anyang", "yangju", "yangpyeong",
	"yeoju", "yeoncheon", "osan", "yongin", "uiwang",
	"uijeongbu", "icheon", "paju", "pyeongtaek", "pocheon",
	"hanam", "hwaseong"];

var gangwon = ["시군구","강릉시","고성군","동해시","삼척시",
								"속초시","양구군","양양군","영월군","원주시",
								"인제군","정선군","철원군","춘천시","태백시",
								"평창군","홍천군","화천군","횡성군"];

var e_gangwon = ["sigun", "gangneung", "goseong", "donghae", "samcheok",
	"sokcho", "yanggu", "yangyang", "yeongwol", "wonju",
	"inje", "jeonseon", "cheorwon", "chuncheon", "taebaek",
	"pyeongchang", "hongcheon", "hwacheon", "hoengseong"];

var chungbuk = ["시군구","괴산군","단양군","보은군","영동군",
								"옥천군","음성군","제천시","증평군","진천군",
								"청주시","충주시"];
var e_chungbuk = ["sigun", "goesan", "danyang", "boeun", "yeongdong",
	"okcheon", "eumseong", "jecheon", "jeungpyeong", "jincheon",
	"cheongju", "chungju"];

var chungnam= ["시군구","계룡시","공주시","금산군","논산시",
								"당진시","보령시","부여군","서산시","서천군",
								"아산시","예산군","천안시","청양군","태안군",
								"홍성군"];

var e_chungnam = ["sigun", "gyeryong", "gongju", "geumsan", "nonsan",
	"dangjin", "boryeong", "buyeo", "Seosan-si", "seocheon",
	"asan", "budget", "cheonan", "cheongyang", "taean",
	"hongseong"];


var jeonbuk = ["시군구","고창군","군산시","김제시","남원시",
							"무주군","부안군","순창군","완주군","익산시",
							"임실군","장수군","전주시","정읍시","진안군"];

var e_jeonbuk = ["sigun", "gochang", "gunsan", "gimje", "namwon",
	"muju", "buan", "sunchang", "wanju", "iksan",
	"imsil", "jangsu", "jeonju", "jungeup", "jinan"];

var jeonnam = ["시군구","강진군","고흥군","곡성군","광양시",
								"구례군","나주시","담양군","목포시","무안군",
								"보성군","순천시","신안군","여수시","영광군",
								"영암군","완도군","장성군","장흥군","진도군",
								"함평군","해남군","화순군"];

var e_jeonnam = ["sigun", "gangjin", "goheung", "gokseong", "gwangyang",
	"gurye", "naju", "damyang", "mokpo", "muan",
	"boseong", "suncheon", "sinan", "yeosu", "yeonggwang",
	"yeongam", "wando", "jangseong", "jangheung", "jindo",
	"hampyeong", "haenam", "hwasun"];

var gyeongbuk = ["시군구","경산시","경주시","고령군","구미시",
									"군위군","김천시","문경시","봉화군","상주시",
									"성주군","안동시","영덕군","영양군","영주시",
									"영천시","예천군","울진군","의성군","청도군",
									"청송군","칠곡군","포항시","울릉도"];

var e_gyeongbuk = ["sigun", "gyeongsan", "gyeongju", "aged", "gumi",
	"gunwi", "gimcheon", "mungyeong", "bonghwa", "sangju",
	"seongju", "andong-", "yeongdeok", "yeongyang", "youngju",
	"yeongcheon", "yecheon", "uljin", "uiseong", "cheongdo",
	"cheongsong", "chilgok", "pohang", "ulleungdo"];



var gyeongnam = ["시군구","거제시","거창군","고성군","김해시",
									"남해군","밀양시","사천시","산청군","양산시",
									"의령군","진주시","창녕군","창원시","통영시",
									"하동군","함안군","함양군","합천군"];

var e_gyeongnam = ["sigun", "geoje", "geochang", "goseong", "gimhae",
	"namhae", "milyang", "sacheon", "sancheong", "yangsan",
	"uiryeong", "jinju", "changnyeong", "changwon", "tongyeong",
	"hadong", "haman", "hamyang", "hapcheon"];

var jeju = ["시군구","서귀포시","제주시"];

var e_jeju = ["sigun", "seogwipo", "jeju"];

var all  = ["시군구"];

var e_all  = ["sigun"];
