//<![CDATA[
	(function($){
		$(function(){

			$('#restart > a').click(function(){
				$('#F_SI_DO1 option:eq(0)').prop("selected",true);
				$('#F_GU_GUN1 option:eq(0)').prop("selected",true);
				$('#DE_F_C1 option:eq(0)').prop("selected",true);
				resetListView();
				resetMapLocation();
				closeInfoWindow();
				removeMarker();
				closeMarker();
				initSetup();
				
			});
			
			$(document).on('change','#F_SI_DO1',function(){
				$('#F_GU_GUN1 option').detach();
				var $this = $(this).val();
				var name = "e_"+$this;
				var value;
				$.each(eval(name),function(index, item){
					value = eval($this);
					var optionHtml = "<option value='" + item +"'>" + value[index] +"</option>";
					$('#F_GU_GUN1').append(optionHtml);
				});
			});
			
			
		});
	})(jQuery);
//]]>
			