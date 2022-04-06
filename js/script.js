var img = document.getElementById('saco2');
var amarillo = document.getElementById("amarillo");
var azul = document.getElementById("azul");
var gris = document.getElementById("gris");

amarillo.onclick = function (){
  img.src = "img/productos/saco2.png"
}

azul.onclick = function (){
  img.src = "img/productos/saco2azul.png"
}

gris.onclick = function (){
  img.src = "img/productos/saco2gris.png"
}

$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});