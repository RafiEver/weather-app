function search(event) {
    event.preventDefault(); // Prevent the default form submission

    var searchText = $('.form-control').val();
    let searchTextWithPlus = searchText.replace(" ", "+");
    getWeather(searchTextWithPlus);

    $("h2").html("Showing Results for " + searchText);
  }

  function getWeather(city) {
    const apiKey = '551cdf059dmsha4588561e4c3f44p160e16jsn619ce2561001';
    let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;

    $.ajax({
      url: url,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      },
      success: function (result) {
        console.log(result);
        $('#temp').html(result.temp + '°');
        $('#aor').html(result.cloud_pct);
        $('#ws').html(result.wind_speed + 'km/h');
      },
      error: function (error) {
        console.error(error);
        $("h2").html("sorry we cannot proceses it");
      }
    });
  }