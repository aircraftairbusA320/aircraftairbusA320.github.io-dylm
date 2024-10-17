const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Disable 'No' button temporarily to avoid double tap
let noBtnDisabled = false;

// Change the position of 'No' button when hovered or touched
const moveNoButton = () => {
  if (!noBtnDisabled) {
    const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
    const newY = Math.floor(Math.random() * questionContainer.offsetHeight);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }
};

// Event listener for hovering on desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Event listener for touch on mobile
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Prevent any unwanted default behavior on mobile
  moveNoButton();

  // Temporarily disable the "No" button to prevent double-tap
  if (!noBtnDisabled) {
    noBtnDisabled = true;
    setTimeout(() => {
      noBtnDisabled = false;
    }, 2000); // Adjust the timeout as needed
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
