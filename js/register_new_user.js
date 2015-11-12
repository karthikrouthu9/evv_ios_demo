$(document).ready(function(){
				

    document.addEventListener("deviceready",onDeviceReady,false);       
});



 
 
	function onDeviceReady() 
	{
	document.addEventListener("backbutton", onBackKeyDown, false);
 
        var element = document.getElementById('deviceProperties');
		var device_uuid = device.uuid;
       	var device_name  = device.name;
       	var device_model  = device.model;
       	var device_platform =  device.platform;                        
       	var device_version =  device.version;  
       	
       	
       
document.getElementById('device_uuid').value=device_uuid;
document.getElementById('device_name').value='no device';
document.getElementById('device_model').value=device_model;
document.getElementById('device_platform').value=device_platform;
document.getElementById('device_version').value=device_version;


    	var networkState = navigator.connection.type;
    	if (networkState == Connection.NONE)
    	{
			navigator.app.exitApp();
         	return false;
  		}
    	else
    	{
			
		}
	}







function check(username) 
{

		
if (username == "") 
{
$('#submit_button').prop('disabled', false);
		$('#submit_button').html('Register');
bootbox.dialog({
closeButton: false,
  message: "Please enter your Username.",
  title: "Alert",
  buttons: {
    success: {
      label: "OK",
      className: "btn-danger",
      callback: function() {
  
     
    
      }
    
    }
    
    
  }
});

return false;
}
else
{
	
return true;
}
}

function checkpassword(password1) 
{


if (password1) 
{

	var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
     	window.location='./first_screen.html';
                return false;
    }
    else
    {
		return true;
    }
	 
    }
 
else
{
$('#submit_button').prop('disabled', false);
		$('#submit_button').html('Register');
bootbox.dialog({
closeButton: false,
  message: "Please enter your Password.",
  title: "Alert",
  buttons: {
    success: {
      label: "OK",
      className: "btn-danger",
      callback: function() {
  
     
    
      }
    
    }
    
    
  }
});


return false;
}
}

    function onBackKeyDown(e) {
	 
		navigator.app.backHistory();
	 
	}

function formValidation()  
{ 
  
  
 var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
    	window.location='./first_screen.html';
        return true;
    }
    else
    {

var username = document.getElementById("username1");

var password = document.getElementById("password1");


    
    
   
    	if(check(username.value))
    	{
    		
    			if(checkpassword(password.value))
    			{
    
   makeCorsRequest_register(username.value,password.value);
   				return false;
    			}
    				else
    			{
    				return false;
    			}
    	
}
return false;




}

}




    
    function makeCorsRequest_register(username,password)
     {
     
 
 var username=username;
 var password=password;

var device_uuid = document.getElementById("device_uuid");
var device_name = document.getElementById('device_name');
var device_model = document.getElementById("device_model");
var device_platform = document.getElementById("device_platform");
var device_version = document.getElementById("device_version");



 $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		    $('#submit_button').html('Verifying...');
				$('#submit_button').prop('disabled', true);
				$('#username1').prop('disabled', true);
		  		$('#password1').prop('disabled', true);
		  		
		  		
        $.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
          type:"get",
          dataType:"text",
           timeout:20000,
           crossDomain: true,
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
	        			    	  
	        			    	  onBackKeyDown();
	        			      }
	        			    
	        			    }
	        			    
	        			    
	        			  }
	        			});
						
						}
						
						
          },
          success: function (token) {   
 
   
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/?q=m_service/m_resources/register_device',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: { username:encodeURIComponent(username),password:encodeURIComponent(password),pin:encodeURIComponent(""),device_uuid:encodeURIComponent(device_uuid.value), device_name:encodeURIComponent(""),device_model:encodeURIComponent(""),device_platform:encodeURIComponent(""), device_version:encodeURIComponent(""), device_already_registered:encodeURIComponent("1")},
              dataType: "json",
              crossDomain: true,
               timeout:20000,
			  error: function (jqXHR, textStatus, errorThrown) {
		$('#submit_button').html('Verifying...');
		$('#submit_button').prop('disabled', false);
		$('#username1').prop('disabled', false);
		$('#password1').prop('disabled', false);
		$('#submit_button').html('Register');
		
		if(jqXHR.statusText.trim()==": The username has already registered on this device")
		{
		
	var res=jqXHR.statusText;
		   bootbox.dialog({
		   closeButton: false,
  message:"The username has already been registered on this device.",
  title: "Alert",
  buttons: {
    success: {
      label: "OK",
      className: "btn-danger",
      callback: function() {
      
      
  }
  }
  }
}); 
		}
		else{
		
		
			   bootbox.dialog({
			   closeButton: false,
  message:"Invalid username or password.",
  title: "Alert",
  buttons: {
    success: {
      label: "OK",
      className: "btn-danger",
      callback: function() {
      
      
  }
  }
  }
}); 
}
},
              success: function (data) {
			  $('#submit_button').html('Verifying...');
			  $('#submit_button').prop('disabled', true);
			  $('#username1').prop('disabled', true);
			  $('#password1').prop('disabled', true);
			  
			  var user_id = data;
			  	  
			  		   $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		    
		   
        $.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
          type:"get",
          dataType:"text",
          timeout:20000,
           crossDomain: true,
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
        			    	  
        			    	  onBackKeyDown();
        			      }
        			    
        			    }
        			    
        			    
        			  }
        			});
        	  }
          },
          success: function (token) {   
 
   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/portal_answer_exists',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: { uid:user_id},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			  $('#submit_button').prop('disabled', false);
			   $('#username1').prop('disabled', false);
			    $('#password1').prop('disabled', false);
		$('#submit_button').html('Register');
		
			 bootbox.dialog({
			 closeButton: false,
  message: "Security question and answer saving failed. Please try after sometime.",
  title: "Alert",
  buttons: {
    success: {
      label: "OK",
      className: "btn-danger",
      callback: function() {
  
   
    
      }
    
    }
    
    
  }
});
               
              },
              success: function (data) {
              		  if(data.response)
			  {
			  
			  	bootbox.dialog({
			  	closeButton: false,
  message: "Registration Successful.",
  title: "Information",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {

		
  
   window.location='./log-in.html';
    
      }
    
    }
    
    
  }
});
			  
			  }
			  else
			  {
			  
			  window.location='./portal_security_questions.html?user_id='+user_id;
			
			  }
			  
}
});
}
});
			  
			  
			  
			  
			  
			  
   
            }
			});
			}
			});



}