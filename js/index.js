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
