function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:3,
  };
  var map=new google.maps.Map(document.getElementById("GoogleMap"),mapProp);
  var myCenter = new google.maps.LatLng(51.508742,-0.120850);
  var image = {
    url:'logo-black-small.png',
    size: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0)
  }
  var marker = new google.maps.Marker({
    position: myCenter
    // animation:google.maps.Animation.BOUNCE,
    // icon: image
  });
  marker.setMap(map);
  var currentLocation = new google.maps.InfoWindow({
    content: "My Current Location"
  });
  currentLocation.open(map,marker);
}

function dropdown(){
  $("#myDropdown").toggle();
  console.log("done")
}

function responSquare(){
  // document.getElementByClassName("WallPhoto")
  var cn = "grid";
  var col = 4;
  var w = window.document.body.clientWidth;
  var h = window.document.body.clientHeight;
  var photos = document.getElementsByClassName(cn);
  var length = photos.length;
  var text = "";
  var newwidth;
  if(w >= 750){
    newwidth = w/col - 5;
  }
  else{
    newwidth = w;
  }

  for(var i = 0; i < length; i++){
    photos[i].style.width = newwidth + 'px';
    photos[i].style.height = newwidth + 'px';
    var dummy = photos[i].getElementsByTagName('img').length;
    // for(var j = 0; j < length; i++){
    var childimg = photos[i].getElementsByTagName('img')[0]
    var imgwidth = childimg.clientWidth
    var imgheight = childimg.clientHeight

    if(imgwidth > imgheight){
      childimg.style.height = newwidth + 'px'
      childimg.style.width = newwidth * imgwidth / imgheight + 'px'
      childimg.style.position = 'absolute'
      // childimg.style.marginLeft =
    } else {
      childimg.style.width = newwidth + 'px'
    }

    // document.getElementsByClassName("grid")[i].setAttribute("style","width:" + text);
    // document.getElementsByClassName("grid")[i].setAttribute("style","height:"+ text);
  }
  console.log('imgwidth = ' + imgwidth)
  console.log('imgheight = ' + imgheight)
  console.log('w: ' + w)
  return text;
}
// document.getElementById("HTMLBody").onload = function(){beforeLoad()};
// function beforeLoad(){
//
// }
