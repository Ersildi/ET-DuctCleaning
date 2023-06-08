const gallery = document.querySelectorAll(".gallery");
const test = document.querySelectorAll("test");

// remove all .active classes when clicked anywhere
hide = true;
$("body").on("click", function () {
  if (hide) $(".panel").removeClass("active");
  hide = true;
});

// add and remove .active
$("body").on("click", ".panel", function () {
  var self = $(this);

  if (self.hasClass("active")) {
    $(".panel").removeClass("active");
    return false;
  }

  $(".panel").removeClass("active");

  self.toggleClass("active");
  hide = false;
});

const test2 = document.querySelector(".test2");
const navLink = document.querySelector(".nav__link");

test2.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
