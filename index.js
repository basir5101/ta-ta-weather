function submitName () {
    function weather(){
        var key = '4c1a196e2ea32da268dc3a9aaaf90996';

        const cityName = document.getElementById('cityName').value;
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
           drawWeather(data); // Call drawWeather
        })

    }


    weather('dhaka');
}
function drawWeather(d){
    document.getElementById('temp').innerHTML = 'Temperature: ' + Math.round(d.main.temp - 273.15) + '&deg;' + 'C';
    document.getElementById('description').innerHTML ='Weather Condition: ' + d.weather[0].main;
    document.getElementById('location').innerHTML ='Current Location: ' + d.name + ', ' + d.sys.country;

 }


