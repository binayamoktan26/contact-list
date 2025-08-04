const apiEp = "https://randomuser.me/api?results=3";
let userlist = [];
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

const fetchUser = async (url) => {
  //appling fetch API to get data
  // promise method
  // fetch(url)
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //async / await methd
  const response = await fetch(url);
  const data = await response.json();
  userList = data.results;
  console.log(userList);
};
fetchUser(apiEp);
