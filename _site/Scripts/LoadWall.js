$(function(){
  $(".grid").css('visibility','hidden');
  $.get( "Scripts/instagramPost.txt", function( data ) {
    var rows = data.split('\n');
    var imgNum = rows.length;
    for(var i = 0; i < imgNum; i++){
      var newimg = $("<img class = \"grid\" id=\"photo"+i+"\">")
      newimg.attr('src',rows[i])
      $("#PhotoWall").append(newimg)
    }
    for(var j = 0; j < imgNum; j++){
      $("#photo"+j).delay(j*1000).css('visibility','visible');
    }
  }, "text").done(
    responSquare();
  )
});
