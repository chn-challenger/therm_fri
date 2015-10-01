console.log('Hello!');

var thermostat = new Thermostat();

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
});
