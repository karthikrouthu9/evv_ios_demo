function check(username) 
{

if (username == "") 
{
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Username is Required</div>";



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

    //$.post( "http://192.168.0.99:8087/my_drupal_site/?q=my_services/m_resources/recover_forgotten_pin" , { device_uuid:device_uuid}, function( data ) {
 
 
 
 /*      	 bootbox.dialog({
  message: "New PIN created successfully",
  title: "Message",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
  
   
    
      }
    
    }
    
    
  }
}); */


       	 bootbox.dialog({
  message: "New PIN creation failed",
  title: "Message",
  buttons: {
    success: {
      label: "OK",
      className: "btn-danger",
      callback: function() {
  
     
    
      }
    
    }
    
    
  }
});





   	 // var json ='{"responseCode":"I-20011","result":"0","message": "New PIN created successfully"}';
				
		var json ='{"responseCode":"E-10010","result":"1","message": "New PIN creation failed"}';
		
		obj = JSON.parse(json);
			    
			 if(obj.result=='0')
			    {
				
					alert(obj.message);
					window.location='./log-in.html';
				}
				
				else
				{
					alert(obj.message);
					return false;
				}
    
      
       
     }

 var json ='{"result":"I-20001 :" ,"message": "Your Device Log-In PIN is sent to kkkkk@jjj.com Successfully.","result_id":"I-20002"}';

	obj = JSON.parse(json);
//document.getElementById("bootstrap").innerHTML = "<div class='alert alert-success' role='alert'>"+obj.message+"</div>";
	
	


bootbox.dialog({
  message: obj.message,
  title: "Message",
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





	return false;
}
else
{
document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Password is Required</div>";


return false;
}
}



function formValidation()  
{ 


var u = document.getElementById("username1");

var p = document.getElementById("password1");


    
    
   
    	if(check(u.value))
    	{
    		

    			if(checkpassword(p.value))
    			{
					return true;
    			}
    				else
    			{
    				return false;
    			}
    	
    			
			



}
return false;
}