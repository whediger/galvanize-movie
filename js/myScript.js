$(document).ready(function(){
  $.get('https://api.themoviedb.org/3/movie/now_playing?api_key=b2c319d64cba3280f7ee6977b9a470e0', function(data){
    console.log(data.results);
  });
});
