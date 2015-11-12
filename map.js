/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(17.427801, 78.405340);  // Default Location.
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 14,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});


$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'radio-choice-h-2b') {
            $('#header2').show();
            
      }

       else {
            $('#header2').hide();   
       }
   });
});





/** $(document).on('pagebeforeshow', '#map-page', 
 function()
  { 
    
    $(document).on('change','#radio-choice-h-2b', 
    function()
    {     
    alert('Change'); 
    $.mobile.navigate( "#header2", { transition : "slide"});
	});

    });
    
  **/
    
   