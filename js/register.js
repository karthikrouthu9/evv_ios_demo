
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
		document.getElementById('device_model').value=device_model;
		document.getElementById('device_platform').value=device_platform;
		document.getElementById('device_version').value=device_version;

   
			}


function makeCorsRequest_register(username,password,pin) {

 var username=username;
 var password=password;

var device_uuid = document.getElementById("device_uuid");
var device_name = document.getElementById("device_name");
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
				$('#pin1').prop('disabled', true);
	
  
		   
        $.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
          type:"get",
          dataType:"text",
           crossDomain: true,
           timeout:20000,
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
 
  
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/?q=m_service/m_resources/register_device',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: { username:encodeURIComponent(username),password:encodeURIComponent(password),pin:encodeURIComponent(pin),device_uuid:encodeURIComponent(device_uuid.value), device_name:encodeURIComponent(device_name.value),device_model:encodeURIComponent(device_model.value),device_platform:encodeURIComponent(device_platform.value), device_version:encodeURIComponent(device_version.value), device_already_registered:encodeURIComponent("0")}, 
              dataType: "json",
              crossDomain: true,
              timeout:20000,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			  $('#submit_button').prop('disabled', false);
			  $('#username1').prop('disabled', false);
			  $('#password1').prop('disabled', false);
			  $('#pin1').prop('disabled', false);
			  $('#submit_button').html('Register');
			 bootbox.dialog({
			 closeButton: false,
  message: "Invalid Username or Password.",
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
             
			    //window.location='./security_questions.html?user_id='+data;
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
          $('#submit_button').prop('disabled', false);
            $('#username1').prop('disabled', false);
			$('#password1').prop('disabled', false);
			 $('#pin1').prop('disabled', false);
		$('#submit_button').html('Register');
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
			 $('#pin1').prop('disabled', false);
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
	return false;
}

 
 function onBackKeyDown(e) {
	 
		navigator.app.exitApp();
	 
	}
function formValidation()  
{ 

  
  
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
               
                window.location='./first_screen.html';
                return true;
    }


var username = document.getElementById("username1");

var password = document.getElementById("password1");
var pin = document.getElementById("pin1");


    
    
   
    	if(check(username.value))
    	{
    		
    			if(checkpassword(password.value))
    			{

    				if(checkloginpin(pin.value))
    					{
    				var login_verify=makeCorsRequest_register(username.value,password.value,pin.value);
    				if(login_verify)
    					{return true;}
    					else{ return false;}
    				}
    				
    				else
    				{
    					return false;
    				}
    			}
    			else
    			{
    				return false;
    			}
    	}
    			else
				{
					return false;
				}
			
    			
    		
    		
    	
    
    
    
















function check(username) 
{

if (username == "") 
{





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

return true;
}
else
{

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

}
}

function checkloginpin(loginpin1) 
{

//var loginpin = /^\d{4}$/; 
var loginpin = /^(?!(.)\1{3})(?!0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)\d{4}$/; 

if (loginpin.test(loginpin1)) 
{

return true;
}
else
{
if(loginpin1=="")
{
	bootbox.dialog({
	closeButton: false,
  message: "Please enter Log-In PIN.",
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
  message: "The Log-In PIN must contain 4 digits. Please do not use same 4 digits or sequential digits.",
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
}
}
}

