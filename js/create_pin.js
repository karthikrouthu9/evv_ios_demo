$(document).ready(function(){
				

    document.addEventListener("deviceready",onDeviceReady,false);       
});

function onBackKeyDown(e) {
	 
	navigator.app.backHistory();
 
}



      function onDeviceReady() {
    			
    document.addEventListener("backbutton", onBackKeyDown, false);
    var element = document.getElementById('deviceProperties');


 
       var device_uuid = device.uuid;
           
document.getElementById('device_uuid').value=device_uuid;

    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
 
	           window.location='./first_screen.html';
                return false;
  }
    else
    {
	}
	}
	function device_pin_validation(new_device_pin)
			{

		if(document.getElementById("new_device_pin").value == "")
			{
			bootbox.dialog({
				closeButton: false,
				  message: "Please enter new Log-In PIN.",
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
			
			
			var pattern = /^(?!(.)\1{3})(?!0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)\d{4}$/; 
			var new_device_pin = document.getElementById("new_device_pin");

			if (pattern.test(new_device_pin.value)) 
			{
				
				if(document.getElementById("confirm_device_pin").value == "")
			{
			bootbox.dialog({
				closeButton: false,
				  message: "Please Re-enter New Log-In PIN.",
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
    			confirmPass();
       			return false;
        	}
				

			}
			else
			{
			
			bootbox.dialog({
				closeButton: false,
				  message: "Log-In PIN must have 4 digits. For security reasons, create a Log-In PIN which should not contain all same 4 digits and sequential numbers.",
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
			
		}   	
			   	function confirmPass() {
        var pass = document.getElementById("new_device_pin").value
        var confPass = document.getElementById("confirm_device_pin").value
        if(pass != confPass) {
        
        	bootbox.dialog({
        		closeButton: false,
				  message: "PIN doesn't match.",
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
		 var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
    	window.location='./first_screen.html';
        return true;
    }
    else
    {
		var new_device_pin=$('input#new_device_pin').val();
		var confirm_device_pin=$('input#confirm_device_pin').val();
		var device_uuid = device.uuid;
	
       			
		var pin = document.getElementById("new_device_pin").value;
		
		
		
		 $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		 $('#submit_button').html('Loading...');
		 $('#submit_button').prop('disabled', true);
		 $('#new_device_pin').prop('disabled', true);
		 $('#confirm_device_pin').prop('disabled', true);

		   
		   
		   
		  
		   
        $.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
          type:"get",
          dataType:"text",
          timeout:20000,
           crossDomain: true,
          error:function (jqXHR, textStatus, errorThrown) {
        	  $('#submit_button').prop('disabled', false);
				$('#new_device_pin').prop('disabled', false);
				$('#confirm_device_pin').prop('disabled', false);
				$('#submit_button').html('Create PIN');
      	  
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
        	  
				$('#submit_button').prop('disabled', false);
				$('#new_device_pin').prop('disabled', false);
				$('#confirm_device_pin').prop('disabled', false);
				$('#submit_button').html('Create PIN');
        	  
					
					}
          },
          success: function (token) {   
 
  
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/create_new_pin',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {device_uuid:device_uuid,pin:pin},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
				  	$('#submit_button').html('Loading...');
					$('#submit_button').prop('disabled', false);
					$('#new_device_pin').prop('disabled', false);
					$('#confirm_device_pin').prop('disabled', false);
					$('#submit_button').html('Create PIN');
	 bootbox.dialog({
		 	  closeButton: false,
			  message: "Problem connecting with server. Please try after sometime.",
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
			  
			   bootbox.dialog({
				   		closeButton: false,
      					  message: "New PIN created successfully.",
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
			});
			}
			});
		
		
		
		
		
}
        }
    }