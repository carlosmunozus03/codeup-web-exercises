// START POSITION IN THE MAP
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 4 // starting zoom
});

// ADD MOVEMENT FROM NY TO FAVORITE RESTAURANT
setTimeout(function () {
    map.flyTo({
        center: [-98.4916, 29.4252],
        zoom: 10,
        speed: 1
    })
}, 1000);

// ADD ZOOM AND ROTATION CONTROLS TO THE MAP
map.addControl(new mapboxgl.NavigationControl());

// MARKER OBJECTS SET OPTIONS
var marker = new mapboxgl.Marker({
    color: "red",
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map)
    .setDraggable(true);

// INSTANTIATION OF POPUPS OBJECT
var popup = new mapboxgl.Popup()
    .setLngLat(marker.getLngLat())
    .setHTML("<h3>Im here</h3>")
    .setMaxWidth("100")
    .addTo(map);

//  SHOW THE COORDINATES
marker.on('dragend', function () {
    $('p').html(marker.getLngLat().toString());

    //  WHEN DRAG THE MOUSE, REMOVE THE POPUP
    marker.setPopup();
});

// MOVE THE TEXT ABOVE THE MARKER
marker.setPopup(popup);
popup.addClassName('popup-font')

// SHOW THE COORDINATES WHEN YOU PASS AN ADDRESS
geocode('San Antonio', MAPBOX_ACCESS_TOKEN).then(function (results) {
    console.log(results);
});

// SHOW THE ADDRESS COORDINATES
// reverseGeocode({lng: -96.79, Lat: 32.77}, MAPBOX_ACCESS_TOKEN).then(function (results) {
//     console.log(results);
// });

// HERE ENTER THE NAME IN A BUTTON FOR LOOKING FOR THE SPECIFIC ADDRESS

$("#find").click(function () {
    var userInput = $("#input").val();
    geocode(userInput, MAPBOX_ACCESS_TOKEN).then(function (info) {
        console.log(info);
        var newCenter = {
            lng: info[0],
            lat: info[1]
        };
        marker.setLngLat(newCenter);
        popup.setHTML('<h3 class="font">' + userInput + '</h3>');
        map.flyTo({center: newCenter});
    });
});


//HERE THE WEATHER


var coordinates = [29.4241, -98.4936];
$.get("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=hourly,minutely&appid=" + WEATHER_MAP_TOKEN)
    .done(function (resp) {
        console.log(resp);

//LOOP FOR 5 DAYS
        for (var i = 0; i < 5; i++) {
            var today = resp.daily[i];
            $('#section-1').append('<div class="card">' + today.temp.min + '&degF' + ' / ' + today.temp.max + '&degF' + ' <br> ' + 'Description: ' + today.weather[0].description + ' <br> ' + 'Humidity: ' + today.humidity + ' <br> ' + 'Wind: ' + today.wind_speed + ' <br> ' + 'UVI: ' + today.uvi + ' <br> ' + '</div>');
            var todayDate = new Date(today.dt * 1000);
        }
        //      var today = resp.daily[0];
        // $('#section-1').append(' <div class="card">' + today.temp.min + '</div>');
        // var todayDate = new Date(today.dt * 1000);

//SINGLE DAY
        $('#box-today').html('<div>' + today.temp.min + '&degF' + ' / ' + today.temp.max + '&degF' + ' <br> ' + 'Description: ' + today.weather[0].description + ' <br> ' + 'Humidity: ' + today.humidity + ' <br> ' + 'Wind: ' + today.wind_speed + ' <br> ' + 'UVI: ' + today.uvi + ' <br> ' + '</div>');
        console.log(today);
        console.log(today.temp.min);

        console.log(today.temp.max);
        console.log(today.humidity);
        console.log(today.uvi);
        console.log(today.weather[0].description);
        console.log(today.uvi);
        // $('#section-1').append(' <div class="card">' + today.temp.min + '</div>');
        // $('#section-1').append(' <div class="card">' + today.temp.min + '</div>');
    });
