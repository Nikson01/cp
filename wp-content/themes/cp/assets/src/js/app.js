$(".nav-tools__search").on("click", function () {
  $(".nav-tools__search-block_click").toggleClass(
    "nav-tools__search-block_click-show"
  );
  $(".nav-tools__search").toggleClass("nav-tools-close");
});

$(".nav-tools__burger").on("click", function () {
  $(".nav-tools__burger").toggleClass("nav-tools__burger-open");
  $(".burger-menu__block").toggleClass("burger-menu__block-show");
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
});
