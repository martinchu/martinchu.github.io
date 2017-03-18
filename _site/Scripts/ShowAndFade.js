$(function(){
  setTimeout(function(){
    $(".gridV2").css('display','inline-block');
    console.log("inline-block display done after delay!")
    console.log("change?")
  }, 5000);
  setTimeout(function(){
    $(".gridV2").css('visibility','visible');
    console.log("inline-block display done after delay!")
    console.log("change?")
  }, 5000);

});
