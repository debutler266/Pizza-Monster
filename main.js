// Ripple effects show only once the dom is ready/loaded
  // $(document).ready(function () {
//ripples
  // $("#header, .info").ripples({
  // dropRadius: 25,
  // perturbance: 0.6,
//  });

// });

//toggler button
$('.navbar-toggler').click(function(){
  $('.navbar-toggler').toggleClass('change')
})

//sticky navbar with reduced padding
$(window).scroll(function(){

  let position = $(this).scrollTop();

  if(position>= 718){
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  } else {
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
  }
});

//Smooth scroll effect
$('.nav-item a, .header-link, #back-to-top').click(function(link){
  link.preventDefault();

  let target = $(this).attr('href');

  $('html, body').stop().animate({ //.stop previous anmation will stop running
    scrollTop: $(target).offset().top - 25
  },3000); //3000 take effect at 3 seconds

})

//Back to top button
$(window).scroll(function(){

  let position = $(this).scrollTop();

  if(position>= 718){
    $('#back-to-top').addClass('scrollTop'); //treats parent container like a 'body', scrollTop used in CSS to replace #back-to-top

  } else {
    $('#back-to-top').removeClass('scrollTop');
  }
});



$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',

  gallery:{
    enabled: true
  }
  // other options
});
