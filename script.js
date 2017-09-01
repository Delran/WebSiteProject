
function mouriesMap()
{
    var mouries = {lat: 43.69, lng: 4.87166666667};
    var mapOptions = {center: mouries, zoom: 11, mapTypeId: google.maps.MapTypeId.HYBRID};
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({position: mouries, map: map});
}
