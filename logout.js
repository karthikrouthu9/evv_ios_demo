function logout()
{	

	alert("Log_out alert");

	  $.ajaxSetup({
	        xhrFields: {
	            withCredentials: true
	        }
	    });

    // Obtain session token.
	  
	   
    $.ajax({
      url:"http://183.82.96.212:8080/services/session/token",
      type:"get",
      dataType:"text",
      error:function (jqXHR, textStatus, errorThrown) {
		alert("Token Fail Function");
      },
      success: function (token) {   
    	  alert("Success Token alert");
    	  alert(token);
	
	$.ajax({
	 url:"http://183.82.96.212:8080/m_service/user/logout",
	 type:"POST",
	 dataType:"json",	
	 success:function(data)
	 {
		alert("Logout Success Function");
	 	window.location='./log-in.html';
	 },
	 error:function(jqXHR,textStatus,errorThrown)
	 {
		 alert("Logout Fail Function");
	 	var error = "<div class='alert alert-danger' role='alert'>"+errorThrown+"</div>";
	 	alert(error);
	 }
	});
      }
    });
}