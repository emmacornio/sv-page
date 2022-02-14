const showCatBtn = document.getElementById("showCatBtn");
const changeCatBtn = document.getElementById("changeCatBtn");
const cat = document.getElementById("cat");
const catImage = document.getElementsByClassName("cat-image");

showCatBtn.addEventListener("click", () => {
	if (cat.style.visibility == "visible") {
		cat.style.visibility = "hidden";
		showCatBtn.textContent = "Ver un gatito 😸";
	} else {
		cat.style.visibility = "visible";
		showCatBtn.textContent = "No ver un gatito 😿";
	}
});
changeCatBtn.addEventListener("click", () => {
	catImage[0].src =
		"https://cataas.com/cat/says/Feliz%20san%20Valentin?size=35&color=purple&type=md&tag=black" +
		new Date();
});
