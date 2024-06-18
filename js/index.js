function onPageLoad(){
	if (localStorage.getItem("corrected") != "1") {
		title = document.getElementById("name-title");
		title.style.textDecoration = "underline";
		title.style.textDecorationThickness = ".25rem";
		title.style.textDecorationStyle = "wavy";
		title.style.textDecorationColor = "red";
		title.innerHTML = "issac";
	}
}
function titleOnClick(){
	title = document.getElementById("name-title");
	title.style.textDecoration = "none";
	title.innerHTML = "isaac";
	localStorage.setItem("corrected", "1");
	title.style.backgroundColor = "transparent";
	title.style.cursor = "auto"
}
function titleOnHover(){
	if (localStorage.getItem("corrected") != "1") {
		title = document.getElementById("name-title");
		title.style.backgroundColor = "#ffa187";
		title.style.cursor = "pointer";
	}
}
function titleOnLeave(){
	title = document.getElementById("name-title");
	title.style.backgroundColor = "transparent";
}
function setupScrollFadeIn(){
	const scrollOffset = 200;

	const scrollElements = document.querySelectorAll(".scroll-fade-in");

	scrollElements.forEach((el) => {
		el.style.opacity = 0;
	});

	window.addEventListener('scroll', () => {
  		handleScrollAnimation();
	});
}


const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutOfView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  const scrollElements = document.querySelectorAll(".scroll-fade-in");
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutOfView(el)){
      hideScrollElement(el)
    }
  })
}