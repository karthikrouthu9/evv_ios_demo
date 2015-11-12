	$(document).ready(function(){
				
    document.addEventListener("deviceready",onDeviceReady,false);       
});
		

				        
	 
	function onDeviceReady() {

 document.addEventListener("backbutton", onBackKeyDown, false);
	      
       		
        	
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
	   	$(document).ready(function(){
		
    $("#formoid").submit(function(event) {
    	
 var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
    	window.location='./first_screen.html';
        return true;
    }
    else
    {

			if(document.getElementById("issue_input").value == "")
					{
				 bootbox.dialog({
					 closeButton: false,
        			  message: "Please enter description.",
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
						$('#submit').html('Loading...');
				    	$('#submit').prop('disabled', true);
				    	$('#issue_input').prop('disabled', true);
							var device_uuid = device.uuid;
		       				var issue_input=$('#issue_input').val();
		        $.ajax({
		          url:"http://183.82.96.212:8080/services/session/token",
		          type:"get",
		          dataType:"text",
		          timeout: 20000,
		          crossDomain: true,
		          error:function (jqXHR, textStatus, errorThrown) {
		        
		        	  $('#submit').html('Loading...');
		          	$('#submit').prop('disabled', false);
		          	$('#issue_input').prop('disabled', false);
		          	 $('#submit').html('Submit');
		          	
					
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/save_device_issues',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		 data: { device_uuid:device_uuid,issues:issue_input},
              dataType: "json",
              timeout: 20000,
              crossDomain: true,
              
              
			  error: function (jqXHR, textStatus, errorThrown) {

				  	$('#submit').html('Loading...');
			    	$('#submit').prop('disabled', false);
			    	$('#issue_input').prop('disabled', false);
			    	 $('#submit').html('Submit');
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
              success: function (data) {
			  
			   bootbox.dialog({
				   closeButton: false,
  message: "Thank you for reporting.",
  title: "Message",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
    	 
    	    navigator.app.backHistory();  

      }
    
    }
    
    
  }
});
           }
			});
			
				}
					});

					}
					return false;
					}
					});
					});
  function onBackKeyDown(e) {

	  navigator.app.backHistory();  

}
 
  function onClose() {

  navigator.app.exitApp();
}
			
