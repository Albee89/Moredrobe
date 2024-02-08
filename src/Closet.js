const topCarousel = document.getElementById("topCarousel").children[0].children;
const bottomCarousel = document.getElementById("bottomCarousel").children[0]
	.children;
const carouselBtnDiv = document.querySelectorAll(".carouselBtnDiv");
const dressMeBtn = document.getElementById("dressMeBtn");
const popUpDiv = document.getElementById("popUpDiv");
const popUp = document.getElementById("popUp");

let currentTop = topCarousel[3];
let currentBottom = bottomCarousel[3];

const clickSound = new Audio(
	"https://github.com/praxeds/codepen-chers-closet/blob/f5947469f008c723b9b2aa5be51f2a8cfac0c66a/assets/audio/lclick-13694.mp3?raw=true"
);
const wrongSound = new Audio(
	"https://github.com/praxeds/codepen-chers-closet/blob/f5947469f008c723b9b2aa5be51f2a8cfac0c66a/assets/audio/mixkit-wrong-long-buzzer-954.wav?raw=true"
);
const correctSound = new Audio(
	"https://github.com/praxeds/codepen-chers-closet/blob/f5947469f008c723b9b2aa5be51f2a8cfac0c66a/assets/audio/mixkit-winning-chimes-2015.wav?raw=true"
);

for (const btnDiv of carouselBtnDiv) {
	btnDiv.addEventListener("click", function (e) {
		if (e.target.classList.contains("top")) {
			if (e.target.classList.contains("next")) {
				nextImg(topCarousel);
			} else {
				prevImg(topCarousel);
			}
		} else {
			if (e.target.classList.contains("next")) {
				nextImg(bottomCarousel);
			} else {
				prevImg(bottomCarousel);
			}
		}
		clickSound.play();
		clickSound.currentTime = 0;
	});
}

dressMeBtn.addEventListener("click", function (e) {
	if (currentTop.classList[0] === currentBottom.classList[0]) {
		popUpDiv.classList.toggle("noDisplay");
		popUp.innerText = "IT'S A MATCH!";
		correctSound.play();
		correctSound.currentTime = 0;
	} else {
		popUpDiv.classList.toggle("noDisplay");
		popUp.innerText = "MIS-MATCH!";
		wrongSound.play();
		wrongSound.currentTime = 0;
	}
	setTimeout(closePopUp, 1000);
});

function closePopUp() {
	popUpDiv.classList.toggle("noDisplay");
}

// !need to improve this code asap lol
function nextImg(element) {
	switch (true) {
		case !element[0].classList.contains("noDisplay"):
			element[0].classList.toggle("noDisplay");
			element[1].classList.toggle("noDisplay");
			break;
		case !element[1].classList.contains("noDisplay"):
			element[1].classList.toggle("noDisplay");
			element[2].classList.toggle("noDisplay");
			break;
		case !element[2].classList.contains("noDisplay"):
			element[2].classList.toggle("noDisplay");
			element[3].classList.toggle("noDisplay");
			break;
		case !element[3].classList.contains("noDisplay"):
			element[3].classList.toggle("noDisplay");
			element[0].classList.toggle("noDisplay");
			break;
	}

	if (element[0].classList.contains("top")) {
		for (let i = 0; i < topCarousel.length; i++) {
			const element = topCarousel[i];
			if (!element.classList.contains("noDisplay")) {
				currentTop = element;
			}
		}
	} else {
		for (let i = 0; i < bottomCarousel.length; i++) {
			const element = bottomCarousel[i];
			if (!element.classList.contains("noDisplay")) {
				currentBottom = element;
			}
		}
	}
}

function prevImg(element, currentOutfit) {
	switch (true) {
		case !element[0].classList.contains("noDisplay"):
			element[0].classList.toggle("noDisplay");
			element[3].classList.toggle("noDisplay");
			currentOutfit = 4;
			break;
		case !element[1].classList.contains("noDisplay"):
			element[1].classList.toggle("noDisplay");
			element[0].classList.toggle("noDisplay");
			currentOutfit = 1;
			break;
		case !element[2].classList.contains("noDisplay"):
			element[2].classList.toggle("noDisplay");
			element[1].classList.toggle("noDisplay");
			currentOutfit = 2;
			break;
		case !element[3].classList.contains("noDisplay"):
			element[3].classList.toggle("noDisplay");
			element[2].classList.toggle("noDisplay");
			currentOutfit = 3;
			break;
	}

	if (element[0].classList.contains("top")) {
		for (let i = 0; i < topCarousel.length; i++) {
			const element = topCarousel[i];
			if (!element.classList.contains("noDisplay")) {
				currentTop = element;
			}
		}
	} else {
		for (let i = 0; i < bottomCarousel.length; i++) {
			const element = bottomCarousel[i];
			if (!element.classList.contains("noDisplay")) {
				currentBottom = element;
			}
		}
	}
}