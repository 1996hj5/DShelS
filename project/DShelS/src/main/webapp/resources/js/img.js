$(document).ready(function(){
   $("#earthquake_year").css("display", "inline");
    $(document).on('change','.selectbox.mt-4',function(){
        $('.graph > img').hide();
        let name = "#" + $(this).children().val();
        $('.graph > img'+name).show();
     });
});