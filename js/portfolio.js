function setupScrollFadeIn(){
	const scrollOffset = 200;

	const scrollElements = document.querySelectorAll(".scroll-fade-in");

	scrollElements.forEach((el) => {
		el.style.opacity = 0;
	});

	window.addEventListener('scroll', () => {
  		throttle(handleScrollAnimation, 250);
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