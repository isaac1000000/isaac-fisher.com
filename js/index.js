var corrected = 0;

function titleOnClick(){
	title = document.getElementById("name-title");
	title.style.textDecoration = "none";
	title.innerHTML = "isaac";
	corrected = 1;
	title.style.backgroundColor = "transparent";
	title.style.cursor = "auto"
}
function titleOnHover(){
	if (corrected == 0) {
		title = document.getElementById("name-title");
		title.style.backgroundColor = "#ffa187";
		title.style.cursor = "pointer";
	}
}
function titleOnLeave(){
	title = document.getElementById("name-title");
	title.style.backgroundColor = "transparent";
}