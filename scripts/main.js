const showCatBtn = document.getElementById("showCatBtn");
const changeCatBtn = document.getElementById("changeCatBtn");
const cat = document.getElementById("cat");
const catImage = document.getElementsByClassName("cat-image");
const meowSound = document.getElementById("meowSound");

window.addEventListener("load", () => {
	cat.classList.toggle("show");
});

showCatBtn.addEventListener("click", () => {
	if (cat.classList.contains("show")) {
		showCatBtn.textContent = "Ver un gatito 😸";
		cat.classList.toggle("show");
		cat.classList.toggle("hide");
	} else {
		showCatBtn.textContent = "No ver un gatito 😿";
		cat.classList.toggle("show");
		cat.classList.toggle("hide");
	}
});
changeCatBtn.addEventListener("click", () => {
	catImage[0].src =
		"https://cataas.com/cat/says/Feliz%20san%20Valentin?size=35&color=purple&type=md&tag=black" +
		new Date();
	meowSound.play();
});
