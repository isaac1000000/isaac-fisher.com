function makeExpandable() {
  var coll = document.getElementsByClassName("pic-box");
  var i;


  for (i = 0; i < coll.length; i++) {
    var defaultWidth = coll[i].style.width;
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      if (this.classList.contains("active")){
        this.style.width = "100%";
      } else {
        this.style.width = defaultWidth;
      }
    });
  }
}