function initMap() {
  // Map options
  var options = {
    zoom: 8,
    center: { lat: 13.217096, lng: 79.100677 }
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function (event) {
    // Add marker
    addMarker({ coords: event.latLng });
  });

  // Array of markers
  var markers = [
    {
      coords: { lat: 13.2001608, lng: 79.0863945 },
      iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h1>Gayathri Nagar Colony</h1>'
    },
    {
      coords: { lat: 13.6287557, lng: 79.4191795 },
      content: '<h1>Tirupati</h1>'
    },
    {
      coords: { lat: 13.1990798, lng: 78.7469436 }
    }
  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      //icon:props.iconImage
    });

    // Check for customicon
    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });
    }
  }
}