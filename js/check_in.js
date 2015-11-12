	
$(document).ready(function(){
	


	$("#pageLoader").show(); 
	$("#form_id").hide(); 
	$("#button_id").hide();
	
	
	
	var nua = navigator.userAgent
	  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
	  if (isAndroid) {
	    $('select.form-control').removeClass('form-control').css('width', '100%')
	  }
	
	document.addEventListener("deviceready",onDeviceReady,false);  
    
	
});




    function onDeviceReady() 
    {
    	 /* var options =  { maximumAge: 3000, timeout: 1000, enableHighAccuracy: true };
    	  navigator.geolocation.getCurrentPosition(ShowPosition, ShowError, options);*/
    	document.addEventListener("backbutton", onBackKeyDown, false);
    	
     
     var element = document.getElementById('deviceProperties');
 	 var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
    	window.location='./first_screen.html';
        return true;
    }
    else
    {
    	
		var visit_uuid = getURLParameters('visit_uuid');
		var visit_type_id = getURLParameters('visit_type_id');
		var patient_uuid = getURLParameters('patient_uuid');
		var user_id = getURLParameters('user_id');
		var sch_uuid = getURLParameters('sch_uuid');
		
	
  sch_uuid=sch_uuid;
  
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
		  	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
      $.ajax({
              url: 'http://183.82.96.212:8080/m_service/m_resources/get_visit_details',
              type: "post",
      		  data: 'sch_uuid='+sch_uuid,
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
              
			  error: function (jqXHR, textStatus, errorThrown) {
				 
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
			                	$("#pageLoader").hide(); 
			              	  $("#form_id").show(); 
			              	 $("#button_id").show(); 
		 var json = data;
 var patient_name = json.patientdata[0].patient_name;
 var visit_type = json.patientdata[0].visit_type;
 var scheduled_time = json.patientdata[0].sch_start_timestamp+' - '+json.patientdata[0].sch_end_timestamp;
 

  $("#exampleInputpatientname1").html(patient_name);
  $("#exampleInputvisittype1").html(visit_type);
  $("#exampleInputscheduledtime1").html(scheduled_time);
  	  
										  }
            });
  
  
  }
			
}); 
  
  
  
  
 
	
  return false;
}	   
        navigator.geolocation.getCurrentPosition(function(position)
	{
    	// just to show how to access latitute and longitude
  
	},
	function(error)
	{
	//  error getting GPS coordinates

		navigator.app.exitApp();      
	}, 
	{ 
		enableHighAccuracy: true, maximumAge: 3000, timeout: 1000 });
        return false;
	}
	


		var isSign = false;
		var leftMButtonDown = false;
		
		jQuery(function(){
			//Initialize sign pad
			init_Sign_Canvas();
		});
		
		function fun_submit() 
		{
			var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
    	
    	window.location='./first_screen.html';
        return true;
    }
    else
    {
    	
			if(isSign) 
			{
				var canvas = $("#canvas").get(0);
				var imgData = canvas.toDataURL();
				var canvas = $("#canvas").get(0);
				var imgData = canvas.toDataURL();
			
				
	
	var device_uuid = device.uuid;
	var latitude=$('input#latitude').val();
	var longitude=$('input#longitude').val();
	var sch_uuid = getURLParameters('sch_uuid');
	var patient_uuid = getURLParameters('patient_uuid');
	var employee_uuid = getURLParameters('employee_uuid');
	var business_uuid = getURLParameters('business_uuid');
	var visit_type_id = getURLParameters('visit_type_id');
	var visit_date = getURLParameters('visit_date');
	var check_in_time = getURLParameters('check_in_time');
	var expenses=$('input#expenses1').val();
	var mileage=$('input#mileage1').val();
	var patient_availability_status =$('input[name="my-checkbox"]').is(":checked");
	if(patient_availability_status=='1')
	{
	transaction_type='1';
	}
	else
	{
	transaction_type='3';
	}
	var reason_codes=$('#reason_codes').val();
	var visit_duration=$('input#exampleInputminutesspent').val();
	event.preventDefault();
	/*      
	if(visit_date=="2015-08-24"&&check_in_time==""&&expenses==""&&mileage==""&&reason_codes==""&&duration=="")
	{
		visit_date=="";
		check_in_time=="";
		expenses=="";
		mileage=="";
		reason_codes=="";
		duration=="";
	}
		*/
		var pos=initialize();
		
		
		
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/employee_visit_check_in',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {transaction_type: transaction_type, imgData:imgData, device_unique_id:device_uuid,latitude:latitude,longitude:longitude,sch_uuid:sch_uuid,patient_uuid:patient_uuid,employee_uuid:employee_uuid,business_uuid:business_uuid,visit_date:visit_date,visit_type_id:visit_type_id,check_in_time:check_in_time,expenses:expenses,mileage:mileage,reason_codes:reason_codes,visit_duration:visit_duration},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			
			 
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
 	return false;
               
              },
              success: function (data) {
            
				var obj=data;

if(patient_availability_status)
		{ 
			
		

			 bootbox.dialog({
				 closeButton: false,
  message: obj.response_message,
  title: "Information",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
      var visit_uuid = getURLParameters('visit_uuid');
		var visit_type_id = getURLParameters('visit_type_id');
		var patient_uuid = getURLParameters('patient_uuid');
		var user_id = getURLParameters('user_id');
		var sch_uuid = getURLParameters('sch_uuid');
      window.location= "check-in_summary.html?sch_uuid="+sch_uuid+'&visit_uuid='+visit_uuid+'&visit_type_id='+visit_type_id+'&patient_uuid='+patient_uuid+'&visit_date='+obj.visit_date+'&employee_uuid='+obj.employee_uuid+'&business_uuid='+obj.business_uuid+'&user_id='+user_id;
      
      
      }
    
    }
    
    
  }
});
 	}
 	
 	else
 	{
		
		
		
			 bootbox.dialog({
				 closeButton: false,
  message: "Check-In Successful when patient was not available.",
  title: "Information",
  buttons: {
    success: {
      label: "OK",
      className: "btn-success",
      callback: function() {
      var visit_uuid = getURLParameters('visit_uuid');
		var visit_type_id = getURLParameters('visit_type_id');
		var patient_uuid = getURLParameters('patient_uuid');
		var user_id = getURLParameters('user_id');
		var sch_uuid = getURLParameters('sch_uuid');
      window.location= "patient_availability_summary.html?sch_uuid="+sch_uuid+'&visit_uuid='+visit_uuid+'&visit_type_id='+visit_type_id+'&patient_uuid='+patient_uuid+'&visit_date='+obj.visit_date+'&employee_uuid='+obj.employee_uuid+'&business_uuid='+obj.business_uuid+'&user_id='+user_id;
      
      
      }
    
    }
    
    
  }
});
		
		
		 	
 	}
 	document.getElementById("bootstrap").innerHTML = "<div class='alert alert-success' role='alert'></div>";
		window.location=url;
	      return false;
      
}
				});
				
			}
			}); 
			}
			
			else {
				$('#check_in_time').html('Loading...');
				$('#check_in_time').prop('disabled', false);
				$('#expenses1').prop('disabled', false);
				$('#mileage1').prop('disabled', false);
				$('#exampleInputminutesspent').prop('disabled', false);

				$('#check_in_time').html('Check-In');
				bootbox.dialog({
					closeButton: false,
  message: "Employee Signature is required.",
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
	

		function onBackKeyDown(e) {

			  e.preventDefault();
			 
			}
		
		
		function init_Sign_Canvas() 
		{
			isSign = false;
			leftMButtonDown = false;
			
			//Set Canvas width
			var sizedWindowWidth = $(window).width();
			if(sizedWindowWidth > 700)
				sizedWindowWidth = $(window).width() / 2;
			else if(sizedWindowWidth > 400)
				sizedWindowWidth = sizedWindowWidth - 100;
			else
				sizedWindowWidth = sizedWindowWidth - 50;
			 
			 $("#canvas").width(299);
			 $("#canvas").height(125);
			 $("#canvas").css("border","1px solid #000");
			
			 var canvas = $("#canvas").get(0);
			
			 canvasContext = canvas.getContext('2d');

			 if(canvasContext)
			 {
				 canvasContext.canvas.width  = sizedWindowWidth;
				 canvasContext.canvas.height = 200;

				 canvasContext.fillStyle = "#fff";
				 canvasContext.fillRect(0,0,sizedWindowWidth,200);
				 
				 canvasContext.moveTo(50,150);
				 canvasContext.lineTo(sizedWindowWidth-50,150);
				 canvasContext.stroke();
				
				 canvasContext.fillStyle = "#000";
				 canvasContext.font="20px Arial";
				 canvasContext.fillText("x",40,155);
			 }
			 // Bind Mouse events
			 $(canvas).on('mousedown', function (e) {
				 if(e.which === 1) { 
					 leftMButtonDown = true;
					 canvasContext.fillStyle = "#000";
					 var x = e.pageX - $(e.target).offset().left;
					 var y = e.pageY - $(e.target).offset().top;
					 canvasContext.moveTo(x, y);
				 }
				 e.preventDefault();
				 return false;
			 });
			
			 $(canvas).on('mouseup', function (e) {
				 if(leftMButtonDown && e.which === 1) {
					 leftMButtonDown = false;
					 isSign = true;
				 }
				 e.preventDefault();
				 return false;
			 });
			
			 // draw a line from the last point to this one
			 $(canvas).on('mousemove', function (e) {
				 if(leftMButtonDown == true) {
					 canvasContext.fillStyle = "#000";
					 var x = e.pageX - $(e.target).offset().left;
					 var y = e.pageY - $(e.target).offset().top;
					 canvasContext.lineTo(x,y);
					 canvasContext.stroke();
				 }
				 e.preventDefault();
				 return false;
			 });
			 
			 //bind touch events
			 $(canvas).on('touchstart', function (e) {
				leftMButtonDown = true;
				canvasContext.fillStyle = "#000";
				var t = e.originalEvent.touches[0];
				var x = t.pageX - $(e.target).offset().left;
				var y = t.pageY - $(e.target).offset().top;
				canvasContext.moveTo(x, y);
				
				e.preventDefault();
				return false;
			 });
			 
			 $(canvas).on('touchmove', function (e) {
				canvasContext.fillStyle = "#000";
				var t = e.originalEvent.touches[0];
				var x = t.pageX - $(e.target).offset().left;
				var y = t.pageY - $(e.target).offset().top;
				canvasContext.lineTo(x,y);
				canvasContext.stroke();
				
				e.preventDefault();
				return false;
			 });
			 
			 $(canvas).on('touchend', function (e) {
				if(leftMButtonDown) {
					leftMButtonDown = false;
					isSign = true;
				}
			 
			 });
		}
		
		var map;
		function initialize() 
		{
  			var mapOptions = {
    		zoom: 15
  		};
  		map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

  		// Try HTML5 geolocation
  		if(navigator.geolocation) 
  		{
    		navigator.geolocation.getCurrentPosition(function(position) {
      		var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			var infowindow = new google.maps.InfoWindow({
        	map: map,
        	position: pos,
        	content: 'You are Here'
      });
      
latitude = position.coords.latitude;
longitude = position.coords.longitude;
$('input#latitude').val(latitude);
$('input#longitude').val(longitude);

      map.setCenter(pos);
      return pos;
    }, function() 
    {
      handleNoGeolocation(true);
    });
  } else 
  {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

		
function handleNoGeolocation(errorFlag) 
{
  if (errorFlag) 
  {
    var content = 'Error: The Geolocation service failed.';
  } 
  else 
  {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);


window.onload = function(){date()}, setInterval(function(){date()}, 1000);
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
	function date() 
	{
		    var time = new Date();
		    var hours = addZero(time.getHours());
		    var minutes = addZero(time.getMinutes());
		    var current_time = hours + ":" + minutes;
    $('#time').html(current_time);
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
		
    $("#check_in_form").submit(function(event)
	{
    	
    	$('#check_in_time').html('Loading...');
		$('#check_in_time').prop('disabled', true);
		$('#expenses1').prop('disabled', true);
		$('#mileage1').prop('disabled', true);
		$('#exampleInputminutesspent').prop('disabled', true);

	
		var latitude=$('input#latitude').val();
		var longitude=$('input#longitude').val();
		var imgData=$('input#imgData').val();
	
	
		var visit_uuid = getURLParameters('visit_uuid');
		var visit_type_id = getURLParameters('visit_type_id');
		var patient_uuid = getURLParameters('patient_uuid');
		var user_id = getURLParameters('user_id');
		var patient_availability_status =$('input[name="my-checkbox"]').is(":checked");
		var device_uuid = device.uuid;
	
		if(patient_availability_status)
		{ 
			return fun_submit();
		}
		else
		{
			
			
			var expenses1=$("#expenses1").val();
			if(expenses1 == "")
			{
				$('#check_in_time').html('Loading...');
				$('#check_in_time').prop('disabled', false);
				$('#expenses1').prop('disabled', false);
				$('#mileage1').prop('disabled', false);
				$('#exampleInputminutesspent').prop('disabled', false);

				$('#check_in_time').html('Check-In');
				bootbox.dialog({
					closeButton: false,
  				message: "Please enter Expenses.",
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
		var result = validateEmail(expenses);
		if(result==true)
			{
			$('#check_in_time').html('Loading...');
			$('#check_in_time').prop('disabled', false);
			$('#expenses1').prop('disabled', false);
			$('#mileage1').prop('disabled', false);
			$('#exampleInputminutesspent').prop('disabled', false);

			$('#check_in_time').html('Check-In');
			bootbox.dialog({
				closeButton: false,
  				message: "Please enter valid value.",
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
	
			}
	}
	
	var mileage1=$("#mileage1").val();
	if(mileage1 == "")
	{
		$('#check_in_time').html('Loading...');
		$('#check_in_time').prop('disabled', false);
		$('#expenses1').prop('disabled', false);
		$('#mileage1').prop('disabled', false);
		$('#exampleInputminutesspent').prop('disabled', false);

		$('#check_in_time').html('Check-In');
	 	bootbox.dialog({
	 		closeButton: false,
  		message: "Please enter Mileage.",
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
	}

	var exampleInputminutesspent=$("#exampleInputminutesspent").val();
	  
	if(exampleInputminutesspent== "")
	{
		$('#check_in_time').html('Loading...');
		$('#check_in_time').prop('disabled', false);
		$('#expenses1').prop('disabled', false);
		$('#mileage1').prop('disabled', false);
		$('#exampleInputminutesspent').prop('disabled', false);

		$('#check_in_time').html('Check-In');
		bootbox.dialog({
			closeButton: false,
 	 	message: "Please enter Number of minutes spent.",
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
	return fun_submit();
		if(!isSign)
		{
			$('#check_in_time').html('Loading...');
			$('#check_in_time').prop('disabled', false);
			$('#expenses1').prop('disabled', false);
			$('#mileage1').prop('disabled', false);
			$('#exampleInputminutesspent').prop('disabled', false);

			$('#check_in_time').html('Check-In');
		bootbox.dialog({
			closeButton: false,
 	 	message: "Employee Signature is required.",
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
	
		
		return transaction_function();
						
		}
		
	}
	var reason_codes=$('select#reason_codes').val();
	var expenses=$('input#exampleInputexpenses1').val();
	var miledge=$('input#exampleInputmiledge1').val();
	var number_of_minutes_spent=$('input#exampleInputminutesspent').val();
	var latitude=$('input#latitude').val();
	var longitude=$('input#longitude').val();
	var imgData=$('input#imgData').val();
}
  		var canvas = $("#canvas").get(0);
		var imgData = canvas.toDataURL();
	
			});
});

		
		$(document).ready(function () {
  //called when key is pressed in textbox
  $("#exampleInputmiledge1").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("").show().fadeOut("slow");
               return false;
    }
   });
});

		$(document).ready(function () {
  //called when key is pressed in textbox
  $("#exampleInputexpenses1").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("").show().fadeOut("slow");
               return false;
    }
   });
});



		 $("[name='my-checkbox']").bootstrapSwitch();

		 $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
		   if(!state)
		   {
		   
		 $('#patient_availability').removeClass('hide').show();
		 $('#gobtn').html("Check-In/Out");
		   }
		   else{
		   
		 $('#patient_availability').addClass('hide').hide();
		 $('#gobtn').html("Check-In");
		   }
		 });

		 function validateEmail(expenses) {
			
			 
			    var regex = /(0\.((0[1-9]{1})|([1-9]{1}([0-9]{1})?)))|(([1-9]+[0-9]*)(\.([0-9]{1,2}))?)/;
			    return regex.test(expenses);
			}
		 function ShowPosition(position) {
			return true;
			    
			}
		 function ShowError(error) {
			window.MainActivity.showSettingsAlert();
			
			}
/*
function successCallback()
{
	alert("Gps is enabled, Success Call Back Function");
}



function errorCallback()
{
	alert("Gps is not enabled, Error Call Back Function");
	cordova.plugins.diagnostic.switchToLocationSettings();
	alert("After the navigation switchToLocationSettings code");
}

*/