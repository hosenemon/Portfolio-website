$(document).ready(function(){

//wol carousel

$('.service-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:4
      }
  }
});

$('.client-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});


// mixitup



var containerEl = document.querySelector('.gallery');
    var mixer = mixitup(containerEl, {
        selectors: {
            control: '[data-mixitup-control]'
        },
    });


});//document end


