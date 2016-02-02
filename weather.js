$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    var markup = "The current weather forecast in Chicago is " + data.currently.summary + " with a current temperature of " + data.currently.apparentTemperature +
    " (F). Tomorrow's high will be " + data.daily.data[0].apparentTemperatureMax + " with a low of " + data.daily.data[0].apparentTemperatureMin + " and " + data.daily.data[0].summary +
    " The following day will be a high of " + data.daily.data[1].apparentTemperatureMax + " with a low of " + data.daily.data[1].apparentTemperatureMin + " and " + data.daily.data[1].summary +
    " The next day will be a high of " + data.daily.data[2].apparentTemperatureMax + " with a low of " + data.daily.data[2].apparentTemperatureMin + " and " + data.daily.data[2].summary +
    "<h3>STAY CLASSY, CHICAGO!</h3>"

// SCRATCHPAD
    // var temp = "Current Temperature: " + data.currently.apparentTemperature;
    // var tempb = "Tomorrow's Forecast: " + data.daily.data[1].summary ": " +data.daily.data[1].temperatureMax + " / " +data.daily.data[1].temperatureMin;
    // var tempc = "Two-Day Forecast: " + data.daily.data[2].summary ": " +data.daily.data[2].temperatureMax + " / " +data.daily.data[2].temperatureMin;
    // var tempd = "Three-Day Forecast: " + data.daily.data[3].summary ": " +data.daily.data[3].temperatureMax + " / " +data.daily.data[3].temperatureMin;

    // $('.current-temp').html(temp);
    // $('.tomorrow-weather').html(tempb);
    // $('.2day-weather').html(tempc);
    // $('.3day-weather').html(tempd);

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
