$(document).ready(function(){ 
  if (typeof Calendar != 'undefined') {
    Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
  }
  
  //slick-slider for block Works  
  $('#multi-slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.left-control'),
    nextArrow: $('.right-control'),
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  
  //slick-slider for block Testimonials
  $('#single-slick-slider').slick({
    infinite: true,
    slidesToShow: 1,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dots: true
  });
  
  //slick-slider for post on the page02
  $('#slides-gallery').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    prevArrow: $('.left-control'),
    nextArrow: $('.right-control')
  });
  
  //set current anchor li as active
  $('#menu-trigger').click(function(){
    var anchor = window.location.hash;
    $('nav#mobile-menu').toggle();
    $('ul#mobile-menu-list a.active-link').each(function(){
      $(this).removeClass('active-link');
    });
    if(anchor == '') {
      $('ul#mobile-menu-list a[href="#"]').addClass('active-link');
    } else {
      $('a[href="'+ anchor +'"]').addClass('active-link');
    }
  });
  
  //close menu nav on li click
  $('ul#mobile-menu-list li').click(function(){
    $('nav#mobile-menu').toggle();
  });
  
  
  $('#load-more').click(function(e){
    e.preventDefault();
    $('ul.about-us-list').append(
      '<li>'+
        '<div>' +
          '<span class="beginning-icon"></span>' +
          '<h3>the beginning</h3>' +
          '<p>Quisque ut convallis diam, id pulvinar leo. Integer consequat vulputate orci sit amet consequat</p>' +
        '</div>' +
        '<hr>' +
        '<span class="year-dot"><span></span>2009</span>' +
      '</li>'
    );
  });


        


});

$(window).scroll(function(){  //scrolling effect for header 
  if ($(window).scrollTop() > 680) {
    $('header').addClass('scroll');
  }
  else {
    $('header').removeClass('scroll')
  }
});

