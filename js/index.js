	$(document).ready(function(){
		
	
    document.addEventListener("deviceready",onDeviceReady,false);     

});
	
	function exit_app() {

		  navigator.app.exitApp();
		}
		 
	
/*	 function resolution_handling() 
	 {
	     //first way to implement
	     browser_width = $(window).width();
	     browser_height = $(window).height();
	     //alert('browser_width'+browser_width);
	     //alert('browser_height'+browser_height);
	 }
*/
		function onDeviceReady() {
		
			window.plugins.uniqueDeviceID.get(success, fail);
 		var element = document.getElementById('deviceProperties');
		//var device_uuid = device.uuid;
       
 	var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
     
        
     
                window.location='./first_screen.html';
                return true;
    }
    else
{
    	
    	
		
		
		
		
		
		$.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		$.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
          type:"get",
          dataType:"text",
          crossDomain: true,
          timeout: 20000,
          error:function (jqXHR, textStatus, errorThrown) {
        	  if(textStatus==="timeout") {
        		  bootbox.dialog({
        			  closeButton: false,
        			  message: "Problem connecting with server. Please try after sometime.",
        			  title: "Alert",
        			  buttons: {
        			    success: {
        			      label: "OK",
        			      className: "btn-danger",
        			      callback: function() {
        			    	  
        			    	  exit_app();
        			      }
        			    
        			    }
        			    
        			    
        			  }
        			});
		        } 
          },
          success: function (token) {   
		
   	//var device_uuid = device.uuid;
	//var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
	
		
    		is_device_registered();
   
 function is_device_registered()
{
	var device_uuid = globalVariable;
	alert("For Device Value");
	alert(device_uuid);
	             $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/is_device_registered',
              type: "post",
      		  data: {device_uuid:device_uuid},
              dataType: "json",
              timeout: 20000,
              crossDomain: true,
              
              
			  error: function (jqXHR, textStatus, errorThrown) {
				  if(textStatus==="timeout") {
					  bootbox.dialog({
						  closeButton: false,
	        			  message: "Problem connecting with server. Please try after sometime.",
	        			  title: "Alert",
	        			  buttons: {
	        			    success: {
	        			      label: "OK",
	        			      className: "btn-danger",
	        			      callback: function() {
	        			    	  
	        			    	  exit_app();
	        			      }
	        			    
	        			    }
	        			    
	        			    
	        			  }
	        			});
				  }
			        
             bootbox.dialog({
            	 closeButton: false,
  message: "Problem connecting with server. Please try after sometime.",
  title: "Alert",
  buttons: {
    success: {
      label: "OK",
      className: "btn-danger",
      callback: function() {
    	  
    	  exit_app();
      }
    
    }
    
    
  }
});
              },
	success: function (data) {
							
	//data.logindata[0].is_security_question_answered;
	if(data.is_security_question_answered==1 && data.logindata[0].count>=1)
      {
   	alert("Already Registered");
      window.location='./log-in.html';
      return false;
      }
      else if(data.is_security_question_answered==0 && data.logindata[0].count>=1)
      {
      	alert("Enter Security question and answer");
      window.location='./portal_security_questions.html?user_id='+data.user_id;
      return false;
      }
      else
      {
      	alert("Registration");
      window.location='./registration.html';
      return false;
      }
										  }
            });

  return false;

}
}
			});
}
}
    
    var globalVariable;			
     function success(uuid)		
{		
    alert(uuid);		
   		
		globalVariable=uuid;
		is_device_registered();
};		
function fail(uuid)		
{		
   		
    alert("failure function reg");		
};			
    			
    			
    			
    			
