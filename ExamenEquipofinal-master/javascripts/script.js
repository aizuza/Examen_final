function iniciarMap(){
    var coord = {lat:28.630005,lng:-106.070634};
    var coord2 = {lat:28.650381,lng:-106.084152};
    var coord3 = {lat:28.651549,lng:-106.112304};
    var coord4 = {lat:28.624878,lng:-106.075679};

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });

    var marker2 = new google.maps.Marker({
      position: coord2,
      map: map
    });

    var marker3 = new google.maps.Marker({
      position: coord3,
      map: map
    });

    var marker4 = new google.maps.Marker({
      position: coord4,
      map: map
    });
}