function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener('wheel', transformScroll, { passive: false });

function hideRightArrow() {
  if ((document.documentElement.scrollLeft || document.body.scrollLeft) > 50) {
    document.getElementById("right-arrow").style.opacity = 0;
  }
}

element.addEventListener("wheel", () => {
  throttle(hideRightArrow, 250)
})