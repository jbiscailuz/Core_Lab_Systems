// image slide for concept map
// modified from https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = $(".mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// make divs draggable
$( function() {
    $( "#draggable" ).draggable();
      $( "#draggable2" ).draggable();
      $( "#draggable3" ).draggable();
      $( "#draggable4" ).draggable();
  } );
