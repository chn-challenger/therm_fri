console.log('Hello!');

var thermostat = new Thermostat();
var gpsurl = "http://api.wunderground.com/api/549637f16227567b/geolookup/conditions/q/";
var gpslat = "UK";
var gpslon = "/" + "London" + ".json";

$(document).ready(function() {

  $('#temperature_display').text(thermostat.temperature);
  $('#temperature_display').css('color', thermostat.colour);

  $('#increase_button').on('click', function() {
    thermostat.increaseTemp();
    $('#temperature_display').text(thermostat.temperature);
    $('#temperature_display').css('color', thermostat.colour);
  });

  $('#decrease_button').on('click', function() {
    thermostat.decreaseTemp();
    $('#temperature_display').text(thermostat.temperature);
    $('#temperature_display').css('color', thermostat.colour);
  });

  $('#reset_button').on('click', function() {
    thermostat.reset();
    $('#temperature_display').text(thermostat.temperature);
    $('#temperature_display').css('color', thermostat.colour);
  });

  $('#power_saving_mode').on('change', function() {
    if (this.checked) {
      thermostat.powerSavingOn();
    } else {
      thermostat.powerSavingOff();
    }
    $('#temperature_display').text(thermostat.temperature);
    $('#temperature_display').css('color', thermostat.colour);
  });

  $.ajax({
  url : gpsurl + gpslat + gpslon,
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_c = parsed_json['current_observation']['temp_c'];
  $('#weather_display').text("Current temperature in " + location + " is: " + temp_c + "℃");
  }
  });
});
