window.onload = function () {
    initMap();
};
    
//Array containing latitude, longitude and info about the countries

var markers = [
    {
        "place": 'Italy',
        "latitude": '42.6384261',
        "longitude": '12.674297',
        "info": '<b>Italy</b><br>10th position. <br> Food waste per capita: 65.1 kg, <br> Pct. Food loss: 2.3%<br>'
    },
    {
        "place": 'Finland',
        "latitude": '63.2467777',
        "longitude": '25.9209164',
        "info": '<b>Finland</b><br>9th position. <br> Food waste per capita: 65.5 kg, <br> Pct. Food loss: 0.4%<br>'
    },
    {
        "place": 'France',
        "latitude": '46.603354',
        "longitude": '1.8883335',
        "info": '<b>France</b><br>8th position. <br> Food waste per capita: 67.2 kg, <br> Pct. Food loss: 1.8%<br>'
    },
    
    {
        "place": 'Lithuania',
        "latitude": '55.3500003',
        "longitude": '23.7499997',
        "info": '<b>Lithuania</b><br>7th position. <br> Food waste per capita:  68.5 kg, <br> Pct. Food loss: 1.5%<br>'
    },
    {
        "place": 'Denmark',
        "latitude": '55.670249',
        "longitude": '10.3333283',
        "info": '<b>Denmark</b><br>6th position. <br> Food waste per capita: 71.6 kg, <br> Pct. Food loss: 2.5%<br>'
    },
    {
       "place": 'Austria',
        "latitude": '47.2',
        "longitude": '13.2',
        "info": '<b>Austria</b><br>5th position. <br> Food waste per capita: 76.3 kg kg, <br> Pct. Food loss: 0.5% <br>'
     },
         
    {
       "place": 'Australia',
        "latitude": '-24.7761086',
        "longitude": '134.755',
        "info": '<b>Australia</b><br>4th position. <br> Food waste per capita: 65.1 kg, <br> Pct. Food loss: 2.3%<br>'
     },
    {
       "place": 'Canada',
        "latitude": '61.0666922',
        "longitude": '-107.991707',
        "info": '<b>Canada</b><br>3rd position. <br> Food waste per capita: 78.2 kg, <br> Pct. Food loss: 1.7%<br>'
     },
    {
       "place": 'Belgium',
        "latitude": '50.6402809',
        "longitude": '4.6667145',
        "info": '<b>Belgium</b><br>2nd position. <br> Food waste per capita: 87.1 kg, <br> Pct. Food loss: 2.3%<br>'
    },
    {   
       "place": 'United States',
        "latitude": '39.7837304',
        "longitude": '-100.4458825',
        "info": '<b>United States</b><br>1st position. <br> Food waste per capita: 95.1 kg, <br> Pct. Food loss: 0.8%<br>'
     }
        
];
    
  //Initial position, zoom and type of the map

    function initMap() {
        var StartingMap = {
            center: new google.maps.LatLng(markers[0].latitude, markers[0].longitude),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.SATELLITE 
        };
        var map = new google.maps.Map(document.getElementById("map"), StartingMap);
        
        var CountryInfo = new google.maps.InfoWindow();
        
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.place
            });
             
            // on click function to display countries' info
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    // Container to include the info of every country
                    CountryInfo.setContent("<div style = 'width:150px;min-height:50px'>" + data.info + "</div>");
                    CountryInfo.open(map, marker);
                });
            })(marker, data);
        }
}
    
