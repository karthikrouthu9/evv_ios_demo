
$(document).ready(function(){
	  $('body').attr('id', 'body_test');
  	$("#pageLoader").show(); 
  	$("#formoid").hide(); 
  	$("#link_id").hide(); 

	var nua = navigator.userAgent
	  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
	  if (isAndroid) {
	    $('select.form-control').removeClass('form-control').css('width', '100%')
	  }
    document.addEventListener("deviceready",onDeviceReady,false);       
});
		
function onBackKeyDown(e) {
	 
	navigator.app.exitApp();

}

    function onDeviceReady() {
    	
    document.addEventListener("backbutton", onBackKeyDown, false);
    var element = document.getElementById('deviceProperties');

         //var device_uuid = '8dc6cf319947e729';
       	 var d = document.getElementById("device_uuid");
		 var device_uuid = device.uuid;

    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
	    navigator.app.exitApp();
        return false;
  }
    else
    {
    	get_security_questions(device_uuid);
    function get_security_questions(device_uuid)
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
 
   	var device_uuid = device.uuid;
	var d = document.getElementById("device_uuid");
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/get_security_questions',
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
            	  
            	  $("#pageLoader").hide(); 
            	  $('body').attr('id', '');
            	  $("#formoid").show(); 
            	  $("#link_id").show(); 
		
            	  
			  var dropdown = document.getElementById("security_question");
	for (var i = 0; i < data.questions.length; ++i) {
    question=data.questions[i].question;
    question_id=data.questions[i].question_id;
    dropdown[dropdown.length] = new Option(question, question_id);
	}
            }
			})
			}
			});
	
	
	
	
	
	

    }}
		
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
    
    
    
    
    
    
		
		$(document).ready(function(){
		
    $("#formoid").submit(function(event) {

	if(document.getElementById("security_answer").value == "")
			{
		
		bootbox.dialog({
			closeButton: false,
			  message: "Please enter security answer.",
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
      
      
      				var device_uuid = device.uuid;
       				var security_question=$('#security_question').val();
					var security_answer=$('input#security_answer').val();
					event.preventDefault();
	      
		  
		  
		  
		  
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/save_security_questions',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: { device_uuid:device_uuid,question_id:security_question, answer:security_answer},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
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
			
			  
			  		   $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		    
		  var user_id = getURLParameters('user_id');
    	
		   
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
			  window.location='./log-in.html';
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
      
      });
});
			