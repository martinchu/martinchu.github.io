function startPage(){
  var w = window.outerWidth;
  document.getElementsByClassName("grid").style.width = w/4 + 'px';
  document.getElementsByClassName("grid").style.width = w/4 + 'px';
}



function myFunction() {
  document.getElementById("test").innerHTML = "Paragraph changed.";
}

function responSquare(){
  // document.getElementByClassName("WallPhoto")
  var w = window.outerWidth;
  var h = window.outerHeight;
  var length = document.getElementsByClassName("grid").length;
  var text = "";
  if(w < 750){
    text = w + 'px';
  }
  else{
    text = w/4 + 'px';
  }
  for(var i = 0; i < length; i++){
    document.getElementsByClassName("grid")[i].style.width = text;
    document.getElementsByClassName("grid")[i].style.height = text;
    // document.getElementsByClassName("grid")[i].setAttribute("style","width:" + text);
    // document.getElementsByClassName("grid")[i].setAttribute("style","height:"+ text);
  }
  console.log("reponSquare loaded");
  return text;
}
// document.getElementById("HTMLBody").onload = function(){beforeLoad()};
// function beforeLoad(){
//
// }
