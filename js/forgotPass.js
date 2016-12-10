


// --------- send email button functionality -------------
$(document).ready(function(){
   
   $('#sendEmailButton').on('click', function(e) {
       
        $(this).hide();
		$('#returnButton').show();
		
		$('#followMsg').show();
		$('#furtherMsg').hide();
		$('#forgotPass_email').hide();
		forgotPass_email
        return false
    });
});
