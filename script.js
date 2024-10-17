const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Disable 'No' button temporarily to avoid double tap
let noBtnDisabled = false;

// Change the position of 'No' button when hovered
noBtn.addEventListener("mouseover", () => {
  if (!noBtnDisabled) {
    const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
    const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }
});

// Disable the 'No' button for a short time after a tap
noBtn.addEventListener("click", () => {
  if (!noBtnDisabled) {
    noBtnDisabled = true;
    setTimeout(() => {
      noBtnDisabled = false; // Re-enable after 2 seconds or your preferred time
    }, 2000);
  }
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
