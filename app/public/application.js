var thermostat = new Thermostat();

$(document).ready(function() {
  $('#temperature_display').text(thermostat.temp);

  $('#temperature_display').css('color', thermostat.energyRateColour);

  $('#increase_button').on('click', function() {
    thermostat.turnUpTemp();
    $('#temperature_display').text(thermostat.temp);
    $('#temperature_display').css('color', thermostat.energyRateColour);
  });

  $('#decrease_button').on('click', function() {
    thermostat.turnDownTemp();
    $('#temperature_display').text(thermostat.temp);
    $('#temperature_display').css('color', thermostat.energyRateColour);
  });

  $('#reset_button').on('click', function() {
    thermostat.reset();
    $('#temperature_display').text(thermostat.temp);
    $('#temperature_display').css('color', thermostat.energyRateColour);
  });

  $('#power_saving_mode').on('change', function() {
    thermostat.powerSaverToggle();
    $('#temperature_display').text(thermostat.temp);
    $('#temperature_display').css('color', thermostat.energyRateColour);
  });
});
