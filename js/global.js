    $(document).ready(function(){
				

    
});
		

function internet_handling()
{
	
var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
        window.location='./first_screen.html';
       
    }
    else
    {
    	
    	return true;
	}
}


function logout()
{

bootbox.dialog({
	closeButton: false,
	  message: "Are you sure you want to Logout ?",
	  title: "Alert",
	  buttons: {
	    success: {
	      label: "Confirm",
	      className: "btn-primary",
	      callback: function() {
	    	  window.location='./logout.html';
	      }
	    },
	    danger: {
	      label: "Cancel",
	      className: "btn-warning",
	      callback: function() {
	        
	      }
	    }
	    
	  }
	});

}	
	
	
	

function exit_app() {

	  navigator.app.exitApp();
	}
	 
	
	
	
	
	
	
	
	
	