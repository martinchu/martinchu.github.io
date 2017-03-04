$(function(){

  for(var i = 1; i < 2; i++){

    // jQuery methods go here...
    $("#photo"+i).prepend('<img src = \"https://scontent.cdninstagram.com/t51.2885-15/e35/16230458_168394810319730_8836914199570415616_n.jpg?ig_cache_key=MTQ0MzcyNTE2NjI3MzI3Nzc2MA%3D%3D.2\" />')
    $("#photo1").delay(i*1000).css('visibility','visible');
  }
});

// var rows = data.split('\n');
