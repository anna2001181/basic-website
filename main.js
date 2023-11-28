const popupOverlay = document.querySelector(".popup-overlay");
const skipButton = document.querySelector(".popup-container .skip-button");

let remainingTime = 5;
let allowedToSkip = false;
let popupTime;

const showAd = () => {

    popupOverlay.classList.add("active");
    popupTimer = setInterval(() => {
        console.log("remainingTime");
        skipButton.innerHTML = `Skip in ${remainingTime}s`;
        remainingTime--;

        if (remainingTime < 0) {
            allowedToSkip = true;
            skipButton.innerHTML = "Skip";
            clearInterval(popupTimer);
        }
    }, 1000);
};

const skipAd = () => {
    popupOverlay.classList.remove("active");
};

skipButton.addEventListener("click", () => {
    if (allowedToSkip) {
        skipAd();
    }
});

const startTimer = () => {
    if (window.scrollY > 100) {
        showAd();
        window.removeEventListener("scroll", startTimer);
    }
};

window.addEventListener("scroll", startTimer);
