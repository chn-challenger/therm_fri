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

  var urlCity = window.location.search.replace('?city=', '');

  $.ajax({
    url : "http://api.wunderground.com/api/549637f16227567b/geolookup/conditions/forecast/q/autoip.json",
    dataType : "jsonp",
    success : function(parsed_json) {
      var location = parsed_json['location']['city'];
      var temp_c = parsed_json['current_observation']['temp_c'];
      $('#weather_display').text("Current temperature in " + location + " is: " + temp_c + "℃");
      var forecast_image = parsed_json['current_observation']['icon_url'];
      $('#forecast_image').html(function() {
        return '<img src=' + forecast_image + '>';
      });

      var forecast1 = parsed_json['forecast']['txt_forecast']['forecastday'][2]['fcttext_metric'];
      var forecast_day1 = parsed_json['forecast']['txt_forecast']['forecastday'][2]['title'];
      $('#forecast1').text(forecast_day1 + ': ' + forecast1);
      var forecast_image1 = parsed_json['forecast']['txt_forecast']['forecastday'][2]['icon_url'];
      $('#forecast_image1').html(function() {
        return '<img src=' + forecast_image1 + '>';
      });

      var forecast2 = parsed_json['forecast']['txt_forecast']['forecastday'][4]['fcttext_metric'];
      var forecast_day2 = parsed_json['forecast']['txt_forecast']['forecastday'][4]['title'];
      $('#forecast2').text(forecast_day2 + ': ' + forecast2);
      var forecast_image2 = parsed_json['forecast']['txt_forecast']['forecastday'][4]['icon_url'];
      $('#forecast_image2').html(function() {
        return '<img src=' + forecast_image2 + '>';
      });

      var forecast3 = parsed_json['forecast']['txt_forecast']['forecastday'][6]['fcttext_metric'];
      var forecast_day3 = parsed_json['forecast']['txt_forecast']['forecastday'][6]['title'];
      $('#forecast2').text(forecast_day3 + ': ' + forecast2);
      var forecast_image3 = parsed_json['forecast']['txt_forecast']['forecastday'][6]['icon_url'];
      $('#forecast_image3').html(function() {
        return '<img src=' + forecast_image3 + '>';
      });

      if (urlCity) {

      } else {
        $('#userLocationTemp').html(temp_c + '℃');
        $('#userLocation').html(location);
      };
    }
  });

  $.ajax('http://api.openweathermap.org/data/2.5/weather?q={' + urlCity + '}', {
   success: function(data) {
     if (urlCity)  {
       var weathertemp = (data.main.temp - 273.15).toFixed(1);
       var weathername = data.name;
       var lati = data.coord.lat;
       var long = data.coord.lon;
       var pos = {lat: lati, lng: long};

       var map1 = new google.maps.Map(document.getElementById('map'), {
         center: {lat: lati, lng: long},
         zoom: 17
       });

         var infoWindow = new google.maps.InfoWindow({map: map1});
         infoWindow.setPosition({lat: lati, lng: long});
         infoWindow.setContent('Found');
         map1.setCenter(pos);

         $('#userLocationTemp').html(weathertemp + '℃');
         $('#userLocation').html(weathername);

     } else {
         var map1 = new google.maps.Map(document.getElementById('map'), {
           center: {lat: -34.397, lng: 150.644},
           zoom: 15
         });
         var infoWindow = new google.maps.InfoWindow({map: map1});

          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Found');
            map1.setCenter(pos);
          });
     };
   }
 });

  // $.ajax('http://api.openweathermap.org/data/2.5/weather?q={'+ urlCity +'}', {
  //   success: function(data) {
  //     if (urlCity) {
  //       console.log('HELLO');
  //       var weatherTemp = (data.main.temp - 273.15).toFixed(0) + '℃';
  //       var weatherName = data.name;
  //       var lati = data.coord.lat;
  //       var long = data.coord.lon;
  //       var pos = {lat: lati, lng: long};
  //
  //       var map1 = new google.maps.Map(document.getElementById('map'), {
  //         center: {lat: lati, lng: long},
  //         zoom: 7
  //       });
  //
  //       var infoWindow = new google.maps.InfoWindow({map: map1});
  //       infoWindow.setPosition({lat: lati, lng: long});
  //       infoWindow.setContent('Found');
  //       map1.setCenter(pos);
  //       $('#userLocationTemp').html(weatherTemp);
  //       $('#userLocation').html(weatherName);
  //     } else {
  //       var map1 = new google.maps.Map(document.getElementById('map'), {
  //         center: {lat: -34.397, lng: 150.644},
  //         zoom: 19
  //       });
  //
  //       var infoWindow = new google.maps.InfoWindow({map: map1});
  //
  //       navigator.geolocation.getCurrentPosition(function(position) {
  //         var pos = {
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         };
  //         infoWindow.setPosition(pos);
  //         infoWindow.setContent('Found');
  //         map1.setCenter(pos);
  //        });
  //     };
  //   }
  // });
});
