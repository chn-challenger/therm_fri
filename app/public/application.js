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
    thermostat.resetTemp();
    $('#temperature_display').text(thermostat.temp);
    $('#temperature_display').css('color', thermostat.energyRateColour);
  });

  $('#power_saving_mode').on('change', function() {
    thermostat.powerSaverToggle();
    $('#temperature_display').text(thermostat.temp);
    $('#temperature_display').css('color', thermostat.energyRateColour);
  });





  var urlCity = window.location.search.replace('?city=', '') || 'london';

  $.ajax('http://api.openweathermap.org/data/2.5/weather?q={'+ urlCity +'}', {
    success: function(data) {
      // console.log(data);
      var weathertemp = (data.main.temp - 273.15).toFixed(0) + '℃';
      var weathername = data.name;
      var lati = data.coord.lat;
      var long = data.coord.lon;
      var pos = {lat: lati, lng: long};

      var map2 = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lati, lng: long},
        zoom: 7
      });

        var infoWindow = new google.maps.InfoWindow({map: map2});
        infoWindow.setPosition({lat: lati, lng: long});
        infoWindow.setContent('Found');
        map2.setCenter(pos);

        $('#userLocationTemp').html(weathertemp);
        $('#userLocation').html(weathername);
    }
  });





});
