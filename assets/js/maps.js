window.onload = function () {
        initMap();
    }
var markers = [
    {
        "title": 'Italy',
        "lat": '42.6384261',
        "lng": '12.674297',
        "description": '<b>Italy</b><br>10th position. <br> Food waste per capita: 65.1 kg, <br> Pct. Food loss: 2.3%<br>'
    },
    {
        "title": 'Finland',
        "lat": '63.2467777',
        "lng": '25.9209164',
        "description": '<b>Finland</b><br>9th position. <br> Food waste per capita: 65.5 kg, <br> Pct. Food loss: 0.4%<br>'
    },
    {
        "title": 'France',
        "lat": '46.603354',
        "lng": '1.8883335',
        "description": '<b>France</b><br>8th position. <br> Food waste per capita: 67.2 kg, <br> Pct. Food loss: 1.8%<br>'
    },
    
    {
        "title": 'Lithuania',
        "lat": '55.3500003',
        "lng": '23.7499997',
        "description": '<b>Lithuania</b><br>7th position. <br> Food waste per capita:  68.5 kg, <br> Pct. Food loss: 1.5%<br>'
    },
    {
        "title": 'Denmark',
        "lat": '55.670249',
        "lng": '10.3333283',
        "description": '<b>Denmark</b><br>6th position. <br> Food waste per capita: 71.6 kg, <br> Pct. Food loss: 2.5%<br>'
    },
    {
       "title": 'Austria',
        "lat": '47.2',
        "lng": '13.2',
        "description": '<b>Austria</b><br>5th position. <br> Food waste per capita: 76.3 kg kg, <br> Pct. Food loss: 0.5% <br>'
     },
         
    {
       "title": 'Australia',
        "lat": '-24.7761086',
        "lng": '134.755',
        "description": '<b>Australia</b><br>4th position. <br> Food waste per capita: 65.1 kg, <br> Pct. Food loss: 2.3%<br>'
     }
    ,{
       "title": 'Canada',
        "lat": '61.0666922',
        "lng": '-107.991707',
        "description": '<b>Canada</b><br>3rd position. <br> Food waste per capita: 78.2 kg, <br> Pct. Food loss: 1.7%<br>'
     }
    ,{
       "title": 'Belgium',
        "lat": '50.6402809',
        "lng": '4.6667145',
        "description": '<b>Belgium</b><br>2nd position. <br> Food waste per capita: 87.1 kg, <br> Pct. Food loss: 2.3%<br>'
    },
    {
       "title": 'United States',
        "lat": '39.7837304',
        "lng": '-100.4458825',
        "description": '<b>United States</b><br>1st position. <br> Food waste per capita: 95.1 kg, <br> Pct. Food loss: 0.8%<br>'
     }
        
];
    
  
    function initMap() {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.SATELLITE 
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
            });
 
            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
}
    
