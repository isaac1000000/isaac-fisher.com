function dropMenu() {
	var dropdownContent = document.getElementsByClassName("menu-content")[0];
	var dropdownDisplay = window.getComputedStyle(dropdownContent, null).display;
	if (dropdownDisplay == "none") {
		dropdownContent.style.display = "block";
	} else {
		dropdownContent.style.display = "none";
	}
}