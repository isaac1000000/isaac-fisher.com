function setupBlogButtons() {
	// Doesn't display sidebar if javascript is disabled
	document.querySelector("aside").classList.add("active");

	document.getElementById("exit-tags-button").addEventListener("click", () => {
		document.querySelector("aside").classList.remove("active");
	})

	document.getElementById("open-tags-button").addEventListener("click", () => {
		document.querySelector("aside").classList.add("active");
	})

	const posts = document.querySelectorAll("article");
	// Map of all blog posts and their tags
	const postTags = new Map();
	posts.forEach((post) => {
		// Can you tell I write a lot of Python?
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


	// Resets all posts, then deletes the ones that don't share a tag with the active tags
	function handleTagClick() {
		results = posts.length;
		posts.forEach(post => {
			post.style.display = "block";
		})
		const activeTags = [...document.querySelectorAll("#tag-menu li button.active")].map(x => x.innerHTML);
		if (activeTags.length > 0) {
			results = 0;
			postTags.forEach((tags, post) => {
				// Checks if all active tags are in the post's tags. Short circuit for speed
				if ((tags.length < activeTags.length) || (tags.filter((tag) => activeTags.includes(tag))).length < activeTags.length) {
					document.querySelector("#"+post).style.display = "none";
				} else {
					results += 1;
				}
			});
		}
		resultCounter.innerText = generateResultsText(results);
	}
}

function generateResultsText(num) {
	return ("Results: " + num);
}