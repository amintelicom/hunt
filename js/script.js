var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
   if(window.pageYOffset > 100){
    nav.classList.add('bg-dark','shadow');
}else{
    nav.classList.remove('bg-dark','shadow');
}

if($(window).scrollTop() >200){
  $(".btt").fadeIn() 
}else{
  $(".btt").fadeOut()
}    

});







$(".btt").click(function(){
     $("html, body").animate({
     scrollTop:0
   },1000)
})






$('.port-slider').slick({
    slidesToShow:4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});



$('.venobox').venobox(); 



$('.service-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  centerMode:true,
  centerPadding:"0",
  prevArrow: '<i class="fas fa-chevron-up prev-2"></i>',
  nextArrow: '<i class="fas fa-chevron-down next-2"></i>',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
        
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        vertical:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});





    
$(".testi-img-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
   vertical:true,
   autoplay:true,
   centerMode:true,
   centerPadding:"0",
   asNavFor: ".textimonial-slider", 
   prevArrow: '<i class="fas fa-chevron-up prev-3"></i>',
   nextArrow: '<i class="fas fa-chevron-down next-3"></i>',

 
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        vertical:false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        vertical:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});





$(".textimonial-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay:true,
   arrows:false,
   asNavFor: ".testi-img-slider",
   fade:true,

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        vertical:false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
}) 
    






$('.counter').counterUp({
                delay: 10,
                time: 5000,

 });




$('.team-slider').slick({
    slidesToShow:4,
    arrows:false,


         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.sponsor-slider').slick({
    slidesToShow:5,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,


     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        vertical:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});




    
