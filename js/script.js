$('#myCarousel').carousel({
   interval: 3000
})
$('#myCarousel2').carousel({
   interval: 3000
})
// $('.btn2').on('click', function(e) {
//   e.preventDefault()
//   $('#myCarousel1').carousel('prev')
//   $('#myCarousel2').carousel('next')
// })
// $('.btn').on('click', function(e) {
//   e.preventDefault()
//   $('.carousel').carousel('next')
// })

$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel("pause");
  $("#myCarousel2").carousel("pause");

  // Go to the previous item
  $(".btn2").click(function(){
    $("#myCarousel").carousel("prev");
    $("#myCarousel2").carousel("next");
  });

  // Go to the next item
  $(".btn").click(function(){
    $("#myCarousel").carousel("next");
    $("#myCarousel2").carousel("prev");
  });
    
  
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

var box = document.getElementById('expl'),
    colors = ['#ff4d4d','#006666',
    '#00aaff'];

expl.onclick = function () {
    color = colors.shift();
    colors.push(color);
    
    box.style.backgroundColor = color;
};