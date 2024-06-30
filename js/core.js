function dropMenu() {
	var dropdownContent = document.getElementById("nav-links");
	var menuButton = document.getElementById("nav-menu-button");
	if (dropdownContent.classList.contains("active")) {
		dropdownContent.classList.remove("active");
		menuButton.src = "/imgs/menu.svg";
	} else {
		dropdownContent.classList.add("active");
		menuButton.src = "/imgs/exit-menu.svg";
	}
}

let throttleTimer = false;
const throttle = (callback, time) => {
    if (throttleTimer) return;
    
    throttleTimer = true;
    
    setTimeout(() => {
        callback();
        throttleTimer = false;
	}, time);
}

