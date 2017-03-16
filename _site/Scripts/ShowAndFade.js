$(function(){
  setTimeout(function(){
    $(".gridV2").css('display','inline-block');
    console.log("inline-block display done after delay!")
    console.log("change?")
  }, 10000);

  $(".gridV2").css('visibility','hidden');
});
