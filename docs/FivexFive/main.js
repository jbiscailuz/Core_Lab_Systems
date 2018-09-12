
///////////////image slides///////////////
//https://snook.ca/archives/javascript/simplest-jquery-slideshow
/////////////////////////////////////////

$(function() {
  $('.PP2 img:gt(0)').hide();
  setInterval(function() {
      $('.PP2 :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.PP2');
    },
    3000);

  $('.PP3 img:gt(0)').hide();
  setInterval(function() {
      $('.PP3 :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.PP3');
    },
    3000);

  $('.PP4 img:gt(0)').hide();
  setInterval(function() {
      $('.PP4 :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.PP4');
    },
    3000);

  $('.PP5 img:gt(0)').hide();
  setInterval(function() {
      $('.PP5 :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.PP5');
    },
    3000);
});

////////different scrolling speeds////////
//https://codepen.io/JTParrett/pen/BkDie
/////////////////////////////////////////

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});
