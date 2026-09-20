function setupBlogButtons() {
	const posts = document.querySelectorAll("article");
	const postTags = new Map();
	posts.forEach((post) => {
		postTags.set(post.id, [...document.querySelectorAll("#" + post.id + " .tags li")].map(x => x.innerHTML));
	});

	const buttons = document.querySelectorAll("#tag-menu li button");
	buttons.forEach((button) => {
		button.addEventListener("click", function() {
			button.classList.toggle("active");
			handleTagClick();
		});
	});

	var resultCounter = document.getElementById("results-counter");
	var results = posts.length;
	resultCounter.innerText = generateResultsText(results);

	function handleTagClick() {
		results = posts.length;
		posts.forEach(post => {
			post.style.display = "block";
		})
		const activeTags = [...document.querySelectorAll("#tag-menu li button.active")].map(x => x.innerHTML);
		const appliedCount = document.getElementById("applied-tags-count-label")
		appliedCount.innerText = activeTags.length > 1 ? `${activeTags.length} tags applied` : activeTags.length === 1 ? '1 tag applied' : ''
		if (activeTags.length > 0) {
			results = 0;
			postTags.forEach((tags, post) => {
				if ((tags.length < activeTags.length) || (tags.filter((tag) => activeTags.includes(tag))).length < activeTags.length) {
					document.querySelector("#"+post).style.display = "none";
				} else {
					results += 1;
				}
			});
		}
		resultCounter.innerText = generateResultsText(results);
	}

	const urlParams = new URLSearchParams(window.location.search);
	const passedTags = urlParams.getAll('tags');
	passedTags.forEach((tag) => {
		document.querySelectorAll("#tag-menu li button").forEach((button) => {
			if (button.innerHTML == tag) {
				button.classList.add("active");
				handleTagClick()
			}
		})
	});
}

function generateResultsText(num) {
	return ("Results: " + num);
}
