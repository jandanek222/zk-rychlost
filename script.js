var image = document.images[0]
var bigImage = document.createElement("img")

bigImage.onload = function() {
     image.src = this.src
}

setTimeout(function(){

    bigImage.src = "images/work 01.png";
    bigImage.src = "images/work 02.png";
    bigImage.src = "images/work 12.png";
    bigImage.src = "images/work 05.png";
    bigImage.src = "images/work 14.png";
    bigImage.src = "images/work 03.png";
    bigImage.src = "images/cas02.png";
    bigImage.src = "images/cas07.png";
    bigImage.src = "images/cas01.png";
    bigImage.src = "images/work 14.png";
    bigImage.src = "images/cas08.png";
    bigImage.src = "images/cas12.jpg";
    bigImage.src = "images/cas10.png";
    bigImage.src = "images/danek05.png";
    bigImage.src = "images/danek02.png";
    bigImage.src = "images/danek01.jpg";
    bigImage.src = "images/danek07.png";
    bigImage.src = "images/danek06.png";
    bigImage.src = "images/danek04.png";
    bigImage.src = "images/danek08.svg";
    bigImage.src = "images/work 01.png";
    bigImage.src = "images/hame01.png";
    bigImage.src = "images/hame02.png";
    bigImage.src = "images/work 02.png";
    bigImage.src = "images/work 15.png";
    bigImage.src = "images/work 16.png";
    bigImage.src = "images/NS02.png";
    bigImage.src = "images/NS01.png";
    bigImage.src = "images/plakat07.png";
    bigImage.src = "images/plakat06.png";
    bigImage.src = "images/plakat10.png";
    bigImage.src = "images/plakat05.png";
    bigImage.src = "images/plakat11.png";
    bigImage.src = "images/plakat04.png";
    bigImage.src = "images/plakat08.png";
    bigImage.src = "images/plakat09.png";
    bigImage.src = "images/plakat02.png";
    bigImage.src = "images/plakat01.png";
    bigImage.src = "images/plakat03.png";
    bigImage.src = "images/thomuver.png";
    bigImage.src = "images/tutti01.png";
    bigImage.src = "images/tutti03.png";
    bigImage.src = "images/tutti04.png";
    bigImage.src = "images/tutti02.png";
    bigImage.src = "images/tutti14.png";
    bigImage.src = "images/tutti05.png";
    bigImage.src = "images/tutti06.png";
    bigImage.src = "images/tutti16.svg";
    bigImage.src = "images/theoff01.png";
    bigImage.src = "images/theoff02.png";
    bigImage.src = "images/theoff05.png";
    bigImage.src = "images/theoff03.png";
    bigImage.src = "images/theoff04.png";
    bigImage.src = "images/theoff06.png";
    bigImage.src = "images/logos.png";

},50) 

    
$('#video_id').on('loadstart', function (event) {
    $(this).addClass('loading');
  });
  $('#video_id').on('canplay', function (event) {
    $(this).removeClass('loading');
    $(this).attr('poster', '');
  });

  