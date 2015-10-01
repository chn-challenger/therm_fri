console.log('Weather!');


$(document).ready(function() {

  $.ajax({
    url : "http://api.wunderground.com/api/549637f16227567b/geolookup/conditions/forecast/q/autoip.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      console.log(parsed_json);
      $('#weather_display').text("Current temperature in " + location + " is: " + temp_c + "℃");

      var forecast_image = parsed_json['current_observation']['icon_url'];
      $('#forecast_image').html(function() {
        return '<img src=' + forecast_image + '>'; });

      var forecast1 = parsed_json['forecast']['txt_forecast']['forecastday'][2]['fcttext_metric'];
      var forecast_day1 = parsed_json['forecast']['txt_forecast']['forecastday'][2]['title'];
      $('#forecast1').text(forecast_day1 + ': ' + forecast1);

      var forecast_image1 = parsed_json['forecast']['txt_forecast']['forecastday'][2]['icon_url'];
      $('#forecast_image1').html(function() {
        return '<img src=' + forecast_image1 + '>'; });

      var forecast2 = parsed_json['forecast']['txt_forecast']['forecastday'][4]['fcttext_metric'];
      var forecast_day2 = parsed_json['forecast']['txt_forecast']['forecastday'][4]['title'];
      $('#forecast2').text(forecast_day2 + ': ' + forecast2);

      var forecast_image2 = parsed_json['forecast']['txt_forecast']['forecastday'][4]['icon_url'];
      $('#forecast_image2').html(function() {
        return '<img src=' + forecast_image2 + '>'; });
    }

  });

});
