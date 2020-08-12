function submitName () {
        weather('dhaka');
        document.getElementById("cityName").value = '';

    }

function interKey(){
    var input = document.getElementById("cityName");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   //event.preventDefault();
   document.getElementById("btn").click();
  }
});
}
interKey();

function weather(){
        var key = '4c1a196e2ea32da268dc3a9aaaf90996';

        const cityName = document.getElementById('cityName').value;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
           drawWeather(data); // Call drawWeather
        })
    
}
function drawWeather(d){
    document.getElementById('temp').innerHTML = 'Temperature: ' + Math.round(d.main.temp - 273.15) + '&deg;' + 'C';
    document.getElementById('description').innerHTML ='Weather Condition: ' + d.weather[0].main;
    document.getElementById('location').innerHTML ='Current Location: ' + d.name + ', ' + d.sys.country;

 }

 

setInterval(function timeNow(){
    const currentTime = new Date();
    let hours = currentTime.getHours();
    
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    if ( hours == 12){
        document.getElementById('time').innerText = hours + ' : ' + minutes + ' : ' + seconds + ' pm'
    }
    else if(hours > 12){
        hours = hours - 12;
       document.getElementById('time').innerText = hours + ' : ' + minutes + ' : ' + seconds + ' pm '
    }
    else if(hours < 10){
        document.getElementById('time').innerText = '0' + hours + ' : ' + minutes + ' : ' + seconds
    }
    else{
   document.getElementById('time').innerText = hours + ' : ' + minutes + ' : ' + seconds + ' am '

    }
}, 1000);
