
$(document).ready(function(){

	
			$("#pageLoader").hide();
			

    document.addEventListener("deviceready",onDeviceReady,false);   
    
        
});


    function onDeviceReady() {

		window.plugins.uniqueDeviceID.get(success, fail);
		document.addEventListener("backbutton", onBackKeyDown, false);
        var element = document.getElementById('deviceProperties');
 


       var device_uuid = device.uuid;
       document.getElementById('device_uuid').value=device_uuid;
        	var device_version =  device.version;  
        	document.getElementById('device_version').value=device_version;
        	
       
       
          
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
      window.location='./first_screen.html';
      return true;
               
    }
 }
 
 logout();	
 
			
	function add_new_user()
	{
			var networkState = navigator.connection.type;
    			if (networkState == Connection.NONE)
    				{
  
  						window.location='./first_screen.html';
    return false;
    }
    else
    {
    	}
		location.href="register_new_user.html";
			}
	
	function forgot_pin()
		{
		
			var networkState = navigator.connection.type;
    		if (networkState == Connection.NONE)
    			{
  					window.location='./first_screen.html';
               		return false;
    			}
    		else
    		{
    		}
			location.href="forgot_pin.html";
			}
			


function checkloginpassword()
    {
	
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
       			window.location='./first_screen.html';
                return true;
               
    }
   
    var c = document.getElementById("registrationcode1");
    return checkloginpin(c.value)
   


}


function onBackKeyDown(e) {

  navigator.app.exitApp();
}
 


function logout()
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
          error:function (jqXHR, textStatus, errorThrown) {
			
          },
          success: function (token) {   
 
   
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
    
	$.ajax({
		 url:"http://183.82.96.212:8080/m_service/user/logout",		 
		 type:"POST",
		 dataType:"json",	
		 success:function(data)
		 {
		
		
		 	
		 	
		 },
		 error:function(jqXHR,textStatus,errorThrown)
		 {
		 	
		
		 
		 }
		});
		}
		});
	
	
	}





    function checkloginpin(loginpin1) 
{


$('#button').html('Loading...');
$('#button').prop('disabled', true);
$('#registrationcode1').prop('disabled', true);
	

var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
    	window.location='./first_screen.html';
        return true;
    }
    else
    {

/*
        $.blockUI({ 
            message:  '<div id="pageLoader"><div><img src="images/loading.gif" class="img-responsive img-center" alt="gif icon" style="margin-left: 25px;"/></div></div>', 
            css: { 
                top:  ($(window).height() - 100) /2 + 'px', 
                left: ($(window).width() - 100) /2 + 'px', 
                width: '50px',
                backgroundColor: 'transparent',
                border:'none' 
            } 
        }); */
  
    
    
    

//var d = document.getElementById("device_uuid");

var loginpin = /^\d{4}$/; 

	if (loginpin.test(loginpin1)) 
		{
		
	 	 $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });
	
	
	var device_uuid = globalVariable;
	alert("For Device Value login");
	alert(device_uuid);
	alert("Login Value");
	alert(loginpin1);
	
	$.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
          type:"get",
          dataType:"text",
          timeout: 10000,
           crossDomain: true,
          error:function (jqXHR, textStatus, errorThrown) {
          	$('#button').html('Loading...');
			$('#button').prop('disabled', false);
			 $('#registrationcode1').prop('disabled', false);
			$('#button').html('Log-In');
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
		 url:"http://183.82.96.212:8080/m_service/user/login",
		 data:{username:device_uuid, password:loginpin1},
		 type:"POST",
		 dataType:"json",	
		 success:function(data)
		 {
		
		   //var  device_uuid=d.value;
		   
		   
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
           timeout: 10000,
          error:function (jqXHR, textStatus, errorThrown) {
          	$('#button').html('Loading...');
			$('#button').prop('disabled', false);
			 $('#registrationcode1').prop('disabled', false);
			$('#button').html('Log-In');
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
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/evv_enabled_login',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {device_uuid:device_uuid},
              dataType: "json",
              crossDomain: true,
             timeout: 10000,
			  error: function (jqXHR, textStatus, errorThrown) {
			$('#button').html('Loading...');
			$('#button').prop('disabled', false);
			 $('#registrationcode1').prop('disabled', false);
			$('#button').html('Log-In');
               
			   bootbox.dialog({
               closeButton: false,
		  message: "Your user is not active. Please contact your admin.",
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
			
			  window.location='./patient_selection.html';
			  }
			  else
			  {
			$('#button').html('Loading...');
			$('#button').prop('disabled', false);
			 $('#registrationcode1').prop('disabled', false);
			$('#button').html('Log-In'); 
				
				bootbox.dialog({
				closeButton: false,
        	message: "For security reasons this User Log-In is blocked. Please contact the site administrator.",
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
			  });
			  }
			  });
		   
		   
		   
		   
		   
		   
		   
		   
		   
			
		 	
		 },
		 error:function(jqXHR,textStatus,errorThrown)
		 {
		 	
		$('#button').html('Loading...');
		$('#button').prop('disabled', false);
		 $('#registrationcode1').prop('disabled', false);
		$('#button').html('Log-In');
  
		 	bootbox.dialog({
		 	closeButton: false,
        	message: "Invalid Log-In PIN.",
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
		});
		}
		});
		return false;
		}
else
{
if(loginpin1=="")
{
		$('#button').html('Loading...');
		$('#button').prop('disabled', false);
		 $('#registrationcode1').prop('disabled', false);
			$('#button').html('Log-In');
	
	bootbox.dialog({
	closeButton: false,
        	message: "Please enter your Log-In PIN.",
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
		$('#button').html('Loading...');
		$('#button').prop('disabled', false);
		 $('#registrationcode1').prop('disabled', false);
		$('#button').html('Log-In');  
		
		bootbox.dialog({
		closeButton: false,
        	message: "Please enter your 4 digit Log-In PIN.",
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

}				return false;

}
}
}

function validate(){
        x=document.myForm
        txt=x.go.value
        if (txt>=1 && txt<=4) {
            return true
        }else{
           
            return false
        }
}



function calcTime(city, offset) {

    // create Date object for current location
    d = new Date();
    
    // convert to msec
    // add local time zone offset 
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    
    // return time as a string
    //return "The local time in " + city + " is " + nd.toLocaleString();
     return nd.toLocaleString();
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





