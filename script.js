// slide to next page
const sliderEle = document.getElementById("mySlider");

sliderEle.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");

  if (value > 80) {
    label.textContent = "";
    displayAppScreen();
  } else {
    label.textContent = "Slide To Unlock";
  }
});

const displayAppScreen = () => {
  //hide home screen
  document.querySelector(".homeScreen").remove();
  // display app screen
  document.querySelector(".appScreen").style.display = "block";
};
