$(window).resize(function () {
  if($(window).width() < 1024){
    $(".nav-tools__connect popup__toggle").html('<span><svg class="icon"><use xlink:href="#search"/></svg></span>');
  };
});



$(".nav-tools__search").on("click", function () {
  $(".nav-tools__search-block_click").toggleClass(
    "nav-tools__search-block_click-show"
  );
  $(".nav-tools__search").toggleClass("nav-tools-close");
  // $('.header').toggleClass('header-onclick-search_and_burg');

  if ($(".nav-tools__search-block_click-show")) {
    $(".nav-tools__burger").removeClass("nav-tools__burger-open");
    $(".burger-menu__block").removeClass("burger-menu__block-show");
  }
});

$(".nav-tools__burger").on("click", function () {
  $(".nav-tools__burger").toggleClass("nav-tools__burger-open");
  $(".burger-menu__block").toggleClass("burger-menu__block-show");
  
  if ($(".burger-menu__block-show")) {
    $(".nav-tools__search-block_click").removeClass(
      "nav-tools__search-block_click-show"
    );
    $(".nav-tools__search").removeClass("nav-tools-close");
  }

});

var p = $(".popup__overlay");
$(".popup__toggle").click(function () {
  p.addClass("popup_open");
});
p.click(function (event) {
  e = event || window.event;
  if (e.target == this) {
    $(p).removeClass("popup_open");
  }
});
$(".popup__close").click(function () {
  p.removeClass("popup_open");
});
$(function () {
  $(".popup__toggle").bind("click", function (e) {
    e.preventDefault();
  });
});

$("#textArea-connect").on("keydown keyup", function () {
  this.style.height = "1px";
  this.style.height = this.scrollHeight + "px";
  this.style.transition = "height .3s ease";
});



$(document).ready(function () {

  var searchBlock =  $(".nav-tools__search-block_click");
  var menuBlock = $(".burger-menu__block");
  
  if ($("body").hasClass("home")) {
    $(window).scroll(function () {
      
      
      if ($(document).scrollTop() > 70 && $(document).scrollTop() <= 600) {
        if(searchBlock.hasClass(
          "nav-tools__search-block_click-show"
        ) || menuBlock.hasClass("burger-menu__block-show")) {
          $(".header").css({'display' : 'flex'});
        } else {
          $(".header").addClass('header-visibility-none')
        };
      } else {
        $(".header").removeClass('header-visibility-none');
      }
      if ($(document).scrollTop() >= 600) {
     
          $(".header").addClass("black-header");
        
      } else {
        $(".header").removeClass("black-header");
      }
    });
  }  
});

// Top-site slider functions 

let sliderNavBlock = $(".slider-nav__block");
let dot = $(".dot");
let leftArrow = $(".nav-bar__prev");
let rightArrow = $(".nav-bar__next");

// Function for desktop slider
sliderNavBlock.click(function() {  
  $(".slider-for__container").hide().eq( $(this).index()).fadeIn();  
  $('.slider-nav__block').removeClass('active-block');
  $(this).addClass('active-block');  
});
// End of Desktop slider

// Mobile slider
dot.click(function() { 
  // let sliderBlock = $(".slider-for__container"); 
  $(".dot").removeClass('dot-active');
  $(this).addClass('dot-active');  
  $(".slider-for__container").removeClass('content-active').hide().eq( $(".dot-active").index()).addClass('content-active').fadeIn();   
  
  let currentColor = $('.content-active').children(".slider-nav__block-top").children(".nav__block-top__category").css('background-color');

  console.log($('.content-active').children(".slider-nav__block-top").children(".nav__block-top__category").css('background-color'));

  $(".dot").css({"background-color" : "#9d9d9d"});
  $(this).css({"background-color" : currentColor});
});

leftArrow.click(function() {  
  let activeDot = $(".dot-active");
  let indexOfDot = $(".dot-active").index();
  let sliderBlock = $(".slider-for__container");

  activeDot.removeClass("dot-active");

  $(".dot").eq(indexOfDot - 1).addClass("dot-active");
  sliderBlock.removeClass('content-active').hide().eq( $(".dot-active").index()).addClass('content-active').fadeIn();
  let currentColor = $('.content-active').children(".slider-nav__block-top").children(".nav__block-top__category").css('background-color');

  $(".dot-active").css({"background-color" : currentColor});
  if($(".dot-active").index() === 3) {
    $(".dot").eq(0).css({"background-color" : "#9d9d9d"});    
  }
  $(".dot").eq($(".dot-active").index() + 1).css({"background-color" : "#9d9d9d"});

});


rightArrow.click(function() {  
  var activeDot = $(".dot-active");
  var indexOfDot = $(".dot-active").index();
  var sliderBlock = $(".slider-for__container");

  activeDot.removeClass("dot-active");

  if(indexOfDot === 3) {
    $(".dot").eq(0).addClass("dot-active");    
  } else{
    $(".dot").eq(indexOfDot + 1).addClass("dot-active");    
  }
  
  sliderBlock.removeClass('content-active').hide().eq( $(".dot-active").index()).addClass('content-active').fadeIn();
  let currentColor = $('.content-active').children(".slider-nav__block-top").children(".nav__block-top__category").css('background-color');

  $(".dot-active").css({"background-color" : currentColor});
  $(".dot").eq($(".dot-active").index() - 1).css({"background-color" : "#9d9d9d"});

// console.log($('.content-active').children(".slider-nav__block-top").children(".nav__block-top__category").css('background-color'));
});
// End of mobile slider

// End of top-site slider functions


$(".hidden-block__open").on("click", function() {
  $(".text-block__half-hidden").css("max-height", "800px");
  $(".hidden-block__open").hide(1500);
  $(".text-block__half-hidden").css("box-shadow" , "none");
  $(".hidden-block__about-link").animate();
})
  




