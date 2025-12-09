import "@fortawesome/fontawesome-free/js/all.js";

document.addEventListener("DOMContentLoaded", function (event) {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function () {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function () {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  // replace TweenLite logic with vanilla JS
  window.addEventListener("mousemove", function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      cursor.style.opacity = "1";
      initCursor = true;
    }

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  window.addEventListener("mouseout", function (e) {
    cursor.style.opacity = "0";
    initCursor = false;
  });
});
