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
    if (elementInView(el, 1.3)) {
      displayScrollElement(el);
    }
  })
}

const sketchSrcs = [
  "/imgs/sketches/sketch2.jpg",
  "/imgs/sketches/sketch.jpeg",
  "/imgs/sketches/sketch3.jpg",
  "/imgs/sketches/sketch4.jpg",
  "/imgs/sketches/sketch5.jpg",
  "/imgs/sketches/sketch6.jpg",
  ];
var sketchIndex = 0;

function sketchLeftOnClick() {
  sketchIndex -= 1;
  if (sketchIndex < 0) {
    sketchIndex += sketchSrcs.length
  }
  setSketchIndex(sketchIndex);
}

function sketchRightOnClick() {
  sketchIndex += 1;
  if (sketchIndex >= sketchSrcs.length) {
    sketchIndex -= sketchSrcs.length
  }
  setSketchIndex(sketchIndex);
}

function setSketchIndex(index) {
  sketchIndex = index;
  const sketchImg = document.getElementById("sketch");
  const indexBadges = document.querySelectorAll(".sketch-index-badge");

  sketchImg.src = sketchSrcs[index];
  indexBadges.forEach((badge, badgeIndex) => {
    if (badgeIndex != index) {
      badge.classList.remove("active");
    } else {
      badge.classList.add("active");
    }
  })
}