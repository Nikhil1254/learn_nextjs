console.log('loading file...');

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else{
        console.log('geolocation not supported by browser');
    }
  }
  
  function showPosition(position) {
    console.log(position);
  }

  getLocation();