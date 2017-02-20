
function myFunction() {
  document.getElementById("test").innerHTML = "Paragraph changed.";
}

function responSquare(){
  // document.getElementByClassName("WallPhoto")
  var cn = "gridV2";
  var col = 4;
  var w = window.innerWidth;
  var h = window.innerHeight;
  var photos = document.getElementsByClassName(cn);
  var length = photos.length;
  var text = "";
  var newwidth;
  if(w >= 750){
    newwidth = w/col;
  }
  else{
    newwidth = w;
  }

  for(var i = 0; i < length; i++){
    photos[i].style.width = newwidth + 'px';
    photos[i].style.height = newwidth + 'px';
    var dummy = photos[i].getElementsByTagName('img').length;
    // for(var j = 0; j < length; i++){
    var childimg = photos[i].getElementsByTagName('img')[0];
    var imgwidth = childimg.clientWidth;
    var imgheight= childimg.clientHeight;
    if(w >= 750){
      if(imgwidth > imgheight){
        childimg.style.height = newwidth + 'px';
        childimg.style.width = newwidth * imgwidth/imgheight + 'px';
        childimg.style.position = "absolute";
        // childimg.style.marginLeft =
      }
      else{

      }
    }
    else{
      childimg.style.width = newwidth + 'px';
      childimg.style.height = imgheight + 'px';
    }
    // document.getElementsByClassName("grid")[i].setAttribute("style","width:" + text);
    // document.getElementsByClassName("grid")[i].setAttribute("style","height:"+ text);
  }
  console.log("imgwidth = "+ imgwidth);
  console.log("imgheight = "+ imgheight);
  console.log("w: "+w);
  return text;
}
// document.getElementById("HTMLBody").onload = function(){beforeLoad()};
// function beforeLoad(){
//
// }
