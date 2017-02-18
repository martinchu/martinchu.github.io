function myFunction() {
   document.getElementById("test").innerHTML = "Paragraph changed.";
}

function responSquare(){
  // document.getElementByClassName("WallPhoto")
  var w = window.outerWidth;
  document.getElementByClassName("grid").style.width = w/4 + 'px';
  document.getElementByClassName("grid").style.width = w/4 + 'px';
}
document.getElementById("HTMLBody").onload = function(){beforeLoad()};
function beforeLoad(){

}
