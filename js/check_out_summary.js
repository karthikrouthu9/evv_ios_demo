 


    $(document).ready(function(){
    	 $('body').attr('id', 'body_test');

    	$("#pageLoader").show(); 
    	$("#form_id").hide(); 
    	$("#link_id").hide(); 
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
   
    var sch_uuid = getURLParameters('sch_uuid');
  
  
  
  
  
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
              url: 'http://183.82.96.212:8080/m_service/m_resources/get_check_out_summary_details',
              type: "POST",
	  		  //data: 'device_uuid='+'8dc6cf319947e729',
      		  data: {sch_uuid:sch_uuid},
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
            	  $('body').attr('id', '');
            	  $("#form_id").show(); 
            	  $("#link_id").show(); 
 patient_name=data.check_out_data[0].patient_name;
 visit_type=data.check_out_data[0].visit_type;
 scheduled_time=data.check_out_data[0].sch_start_timestamp+' - '+data.check_out_data[0].sch_end_timestamp;
 checked_in_time=data.check_out_data[0].checked_in_time;
 checked_out_time=data.check_out_data[0].checked_out_time;
 duration_time=data.check_out_data[0].checked_in_time_diff;
 
 
 

 
 $("#exampleInputpatientname1").html(patient_name);
 $("#exampleInputvisittype1").html(visit_type);
 $("#exampleInputscheduledtime1").html(scheduled_time);
 $("#checked_in_time").html(checked_in_time);
 $("#checked_out_time").html(checked_out_time);
 $("#duration_time").html(duration_time);
 var json = data;
 
 


  //$("#checked_in_time").val(json.checkin_data[0].checked_in_time);
	
 
  	  
}

	



  });

	}
			
			});
			
			}
			}
		
		
		
			window.onload = function(){date()}, setInterval(function(){date()}, 1000);

function date() {
    var now = new Date(),
        now = now.getHours()+':'+now.getMinutes();
    $('#time').html(now);
     $('#time1').html(now);
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
			
		
		
//var start = document.getElementById("checked_in_time").value;
//var end = document.getElementById("time").value;

function diff(checked_in_time, time) {
    checked_in_time = checked_in_time.split(":");
    time = time.split(":");
    var checked_in_timeDate = new Date(0, 0, 0, start[0], start[1], 0);
    var timeDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = timeDate.getTime() - checked_in_timeDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
    
    return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
}

//document.getElementById("diff").value = diff(start, end);
								

function onBackKeyDown(e) {
	 
	 e.preventDefault();

}

function go_to_schedules(){
	
	$('#check_out_summary_button').prop('disabled', true);
	window.location='./patient_selection.html';
	
}
function exitFromApp()
       {
            navigator.app.exitApp();
       }


			