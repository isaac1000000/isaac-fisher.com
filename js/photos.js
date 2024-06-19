function setupPicViewer() {
  const picViewer = document.getElementById("pic-viewer");
  picViewer.style.backgroundImage = "url('" + document.querySelector('.focused img').src + "')";
  const picBoxElements = document.getElementsByClassName("pic-box");
  var focusedPic = picBoxElements[0];
  var scrollDebounce = true;
  var scrollEndDebounce = true;

  picViewer.addEventListener("scroll", function(){
    if (scrollEndDebounce) {
      scrollEndDebounce = false;
      focusedPic.classList.remove("focused");
    }
  });

  picViewer.addEventListener("scrollend", function(){
    scrollEndDebounce = false;
    setTimeout(function() {scrollEndDebounce = true; }, 500);
    if (scrollDebounce) {
      var picWidth = picBoxElements[1].offsetWidth;
      scrollDebounce = false;
      // Distance from the left + the padding on the left of the boxes, selects from middle then divides to get index of pic
      focusedIndex = Math.floor((picViewer.scrollLeft + (picViewer.offsetWidth / 2) - picWidth) / picWidth);
      if (picViewer.scrollLeft < 100){
        focusedIndex = 0;
      }
      focusedPic = picBoxElements[focusedIndex];
      focusedPic.classList.add("focused");
      picViewer.style.backgroundImage = "url('" + document.querySelector('.focused img').src + "')";
      setTimeout(function() {scrollDebounce = true; }, 500);
    }
  }); 
}