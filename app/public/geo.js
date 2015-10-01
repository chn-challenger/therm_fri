console.log('Geo!');

var gpsurl = "http://api.wunderground.com/api/549637f16227567b/geolookup/conditions/q/";
// var gpslon = "/" + lng + ".json";

$(document).ready(function() {


//   $(function() {
//
//     navigator.geolocation.getCurrentPosition(success, error);
//
//
//   //Get the latitude and the longitude;
//   function success(position) {
//       var lat = position.coords.latitude;
//       var lng = position.coords.longitude;
//
//   }
//
//   function error(){
//       console.log("Geocoder failed");
//
//   }
// });

  $.ajax({
    url : "http://api.wunderground.com/api/549637f16227567b/geolookup/conditions/q/autoip.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      $('#weather_display').text("Current temperature in " + location + " is: " + temp_c + "℃");
    }

  });

});
