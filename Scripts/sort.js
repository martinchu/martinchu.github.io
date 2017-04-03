function CBContentChange (tag, newContent ,callback){
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

}
function SortProficiency(){
  document.getElementById("SkillLevel").disabled = true;
  document.getElementById("SkillCategory").disabled = false;
  console.log("SP")
  $("#Line1").html("Line1 Sort by Proficiency")

}
