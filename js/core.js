function dropMenu() {
	var dropdownContent = document.getElementsByClassName("menu-content")[0];
	var dropdownDisplay = window.getComputedStyle(dropdownContent, null).display;
	var menuButton = document.querySelector(".menu-btn img");
	if (dropdownDisplay == "none") {
		dropdownContent.style.display = "block";
		menuButton.src = "/imgs/exit-menu.svg";
	} else {
		dropdownContent.style.display = "none";
		menuButton.src = "/imgs/menu.svg";
	}
}