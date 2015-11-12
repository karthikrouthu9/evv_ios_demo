
$(document).ready(function(){
	$('body').attr('id', 'body_test');
	$("#pageLoader").show(); 
	$("#form_id").hide(); 
	
		
	var nua = navigator.userAgent
	  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
	  if (isAndroid) {
	    $('select.form-control').removeClass('form-control').css('width', '100%')
	  }
    document.addEventListener("deviceready",onDeviceReady,false);       
});


    function onDeviceReady() {
    	 document.addEventListener("backbutton", onBackKeyDown, false);
    
		var element = document.getElementById('deviceProperties');
		var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
 			window.location='./first_screen.html';
                return false;
    }
    else
    {
    							
    }

   
	var device_uuid = device.uuid;
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
        			    	  
        			    	  exit_app();
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/get_registered_emails',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			
				  bootbox.dialog({
					  closeButton: false,
					  message: "Retrieving registered emails failed. Please try after sometime.",
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
            	  $("#pageLoader").hide(); 
            	  $("#form_id").show(); 
          			$('body').attr('id', '');
            		  
         				  
var dropdown = document.getElementById("registered_emails");

for (var i = 0; i < data.emails.length; ++i) {
   
    email=data.emails[i].email;
    dropdown[dropdown.length] = new Option(email, email);
}
	return false;
 
}
            
       });
}
});

        var device_uuid = device.uuid;
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
        			    	  
        			    	  exit_app();
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/get_portal_security_questions',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
				  bootbox.dialog({
					  closeButton: false,
					  message: "Retrieving security questions failed. Please try after sometime.",
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
            	 if(data.user_uuid=="no")
				 {
            		 bootbox.dialog({
            			 closeButton: false,
       				  message: "No active Users registered with this device. Please register your device to use this option.",
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
					 
					

					 var user_uuid = data.user_uuid;
					 $("#user_uuid").val(user_uuid);
 
    	var dropdown = document.getElementById("security_question");
    	for (var i = 0; i < data.questions.length; ++i) {
        question=data.questions[i].question;
        question_id=data.questions[i].question_id;
        dropdown[dropdown.length] = new Option(question, question_id);
        
    	}
    				
    	 } 
    }
     
});
}
});
}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$(document).ready(function(){
	
		
		$('#send_email').click(function(event) {
		
		event.preventDefault();
		var email_validation = document.getElementById('registered_emails').value;
		var security_question_validation = document.getElementById('security_question').value;
				
			if(email_validation==-1)
			{
			
			bootbox.dialog({
				closeButton: false,
				  message: "Please choose Email.",
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
			if(security_question_validation==-1)
			{
				bootbox.dialog({
					closeButton: false,
					  message: "Please choose Security Question.",
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
			if(document.getElementById("security_answer").value == "")
			{
			
			bootbox.dialog({
				closeButton: false,
				  message: "Please provide a Security Answer.",
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
			var email=$('select#registered_emails').val();
			var device_uuid=device.uuid;
			var security_question = $('select#security_question').val();
			var security_answer = $('input#security_answer').val();
			var user_uuid = $('#user_uuid').val();
			
			
			

			
			 $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

			 $('#send_email').html('Verifying...');
			 $('#send_email').prop('disabled', true);
			 $('#security_answer').prop('disabled', true);

			

		   
        $.ajax({
          url:"http://183.82.96.212:8080/services/session/token",
          type:"get",
          dataType:"text",
          timeout:20000,
           crossDomain: true,
          error:function (jqXHR, textStatus, errorThrown) {
        	  $('#send_email').prop('disabled', false);
      		$('#security_answer').prop('disabled', false);
      		$('#send_email').html('Regenerate PIN');
      	
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
			
   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
    
    
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/send_email',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {device_uuid:device_uuid,email_id:email,question_id:security_question,answer:security_answer,user_uuid:user_uuid},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
				  $('#send_email').prop('disabled', false);
					$('#security_answer').prop('disabled', false);
					$('#send_email').html('Regenerate PIN');
				
			 bootbox.dialog({
				 closeButton: false,
		  message: "Retrieving PIN failed. Please try after sometime.",
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
               
              },
              success: function (data) {
						
						if(data.response=='0')
    	  			    	
      				  	{
    						bootbox.dialog({
    							closeButton: false,
    	      					  message: data.response_message,
    	      					  title: "Information",
    	      					  buttons: {
    	      					    success: {
    	      					      label: "OK",
    	      					      className: "btn-success",
    	      					      callback: function() {
    	      					  
    	      					    	 window.location="log-in.html";   
    	      					    
    	      					      }
    	      					    
    	      					    }
    	      					    
    	      					    
    	      					  }
    	      					});
    						
      					}
      				  else
      					
      				  	{
      					
      					bootbox.dialog({
      						closeButton: false,
      					  message: data.response_message,
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


	
});
			
		}
		});
		}
			}
			}
			
		
 }
});
	});
		
		
				
			function send_pin(event)
			{
			
			
			
	
				var email_validation = document.getElementById('registered_emails').value;
				var security_question_validation = document.getElementById('security_question').value;
				
			if(email_validation==-1)
			{
			
			document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please select email</div>";
			return false;
			}
			else
			{
			if(security_question_validation==-1)
			{
				document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please select security question</div>";
				return false;
			}
			else{
			if(document.getElementById("security_answer").value == "")
			{
			document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please enter security answer</div>";
			
    				
    				return false;
			}
			else
			{
			var email=$('select#registered_emails').val();
			var device_uuid=device.uuid;
			var security_question = $('select#security_question').val();
			var security_answer = $('input#security_answer').val();



		$.post( "http://183.82.96.212:8080/m_service/m_resources/send_email" , {device_uuid:device_uuid,email_id:email,question_id:security_question,answer:security_answer}, function( data ) {


			 bootbox.dialog({
				 closeButton: false,
  message: data.response_message,
  title: "Information",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
 
    window.location="log-in.html";
    
      }
    
    }
    
    
  }
});
 	
 	
	      return false;
      
}, "json").fail(function() {

		
		return false;
});
			
			}
			}
			}
			
			}
			
			
			
			
			
			
			function alert_admin()
			{
			 var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
    	window.location='./first_screen.html';
        return true;
    }
    else
    {
			var device_uuid = device.uuid;
			
			
			
			
			
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
        			    	  
        			    	  exit_app();
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/alert_admin',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			
               bootbox.dialog({
            	   closeButton: false,
		  message: "Sending an alert to admin failed. Please try after sometime.",
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
  message: data.response_message,
  title: "Information",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
 
    window.location="log-in.html";
    
      }
    
    }
    
    
  }
});
 	
 	
	      return false;
    
            }
			});
			}
			});
			
		return false;
		}
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
var username = document.getElementById("username1").value;

var password = document.getElementById("password1").value;

var device_uuid = device.uuid;
	

    
    
   
    	if(check(username))
    	{
    		
    			if(checkpassword(password))
    			{
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
        	  $('#submit_button').html('Verifying...');
      		$('#submit_button').prop('disabled', false);
      		$('#username1').prop('disabled', false);
      		$('#password1').prop('disabled', false);
      		$('#submit_button').html('Submit');
      		
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
				
   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/check_user_valid',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {username:username,password:password,device_uuid:device_uuid},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			
				  $('#submit_button').html('Verifying...');
					$('#submit_button').prop('disabled', false);
					$('#username1').prop('disabled', false);
					$('#password1').prop('disabled', false);
					$('#submit_button').html('Submit');
					
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
				if(data.response=='0')
    	  			    	
      				  	{
    						
    						window.location='./create_pin.html';	   
    					}
      				  else
      					
      				  	{
      					 $('#submit_button').html('Verifying...');
     					$('#submit_button').prop('disabled', false);
     					$('#username1').prop('disabled', false);
     					$('#password1').prop('disabled', false);
     					$('#submit_button').html('Submit');
     					
      					bootbox.dialog({
      						closeButton: false,
      					  message: data.response_message,
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
    					
    					
    					
    				
    			});
    				
    	
    			
			}
			});
    
	
	}
		else
    			{
    				return false;
    			}
	}
	return false;
	}
	}
	
		
	
function getURLParameters(paramName)
{
	var sURL = window.document.URL.toString();
	if (sURL.indexOf("?") > 0)
	{
    	var arrParams = sURL.split("?");
    	var arrURLParams = arrParams[1].split("&");
    	var arrParamNames = new Array(arrURLParams.length);
    	var arrParamValues = new Array(arrURLParams.length);
		var i = 0;
    	for (i = 0; i<arrURLParams.length; i++)
    	{
        	var sParam =  arrURLParams[i].split("=");
        	arrParamNames[i] = sParam[0];
        	if (sParam[1] != "")
            	arrParamValues[i] = unescape(sParam[1]);
        	else
            	arrParamValues[i] = "No Value";
    	}

    	for (i=0; i<arrURLParams.length; i++)
    	{
        	if (arrParamNames[i] == paramName)
        {
            //alert("Parameter:" + arrParamValues[i]);
            return arrParamValues[i];
        }
    }
    return "No Parameters Found";
}
}

	
    