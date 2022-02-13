showCatBtn = document.getElementById("showCatBtn");
changeCatBtn = document.getElementById("changeCatBtn");
cat = document.getElementById("cat");
catImage = document.getElementsByClassName("cat-image");

showCatBtn.addEventListener("click", () => {
	if (cat.style.display == "block") {
		cat.style.display = "none";
	} else {
		cat.style.display = "block";
	}
});
changeCatBtn.addEventListener("click", () => {
	catImage[0].src =
		"https://cataas.com/cat/says/Feliz%20san%20Valentin?size=35&color=purple&type=md&tag=black" +
		new Date();
});
