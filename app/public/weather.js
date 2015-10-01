console.log('Weather!');


$(document).ready(function() {

  $.ajax({
    url : "http://api.wunderground.com/api/549637f16227567b/geolookup/conditions/forecast/q/autoip.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      $('#weather_display').text("Current temperature in " + location + " is: " + temp_c + "℃");
      console.log(parsed_json);
      var forecast = parsed_json['forecast']['txt_forecast']['forecastday'][1]['fcttext_metric'];
      $('#forecast').text("Tomorrow: " + forecast);

    }

  });

});
