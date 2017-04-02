function Line1(callback){

}

function SortCategory(){
  document.getElementById("SkillLevel").disabled = false;
  document.getElementById("SkillCategory").disabled = true;
  console.log("SC")
  // $(".")
  $("#Line1").html("Line1 Sort by Category")

}
function SortProficiency(){
  document.getElementById("SkillLevel").disabled = true;
  document.getElementById("SkillCategory").disabled = false;
  console.log("SP")
  $("#Line1").html("Line1 Sort by Proficiency")
}
