function cbContentChange (tag, newContent ,callback){
  callback(tag,newContent)
}
function ContentChange(tag, newContent){
  $(tag).html(newContent)
}

function SortCategory(){
  document.getElementById("SkillLevel").disabled = false;
  document.getElementById("SkillCategory").disabled = true;
  console.log("SC")
  // $(".")
  var subtitle =['Backend','Web','Others']
  var language =['C++, C, Java, Python']
  $("#Line1").html("Line1 Sort by Category")
  // Fadeout Line1 -> ChangeLine1 -> FadeInLine1
  for(i = 0; i<subtitle.length;i++){
    cbContentChange(subtitle[i],language[i],myFadeOhut)
  }
}
function SortProficiency(){
  document.getElementById("SkillLevel").disabled = true;
  document.getElementById("SkillCategory").disabled = false;
  console.log("SP")
  $("#Line1").html("Line1 Sort by Proficiency")

}

/*
DRAFT:
$(Button1).out(1000).html("dafsn").in(1000)

$(button1).fadeout(1000, function(){

});

$('#join').fadeOut(400, function() {
  $(this).html('Success').fadeIn(3000, function() {
    $(this).fadeOut(3000, function(){
      $(this).html('Sign UP').fadeIn();
    })
  })
});


*/
