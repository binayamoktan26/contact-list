const apiEp = "https://randomuser.me/api?results=10";
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

const displayContactScreen = () => {
  //hide app  screen
  document.querySelector(".appScreen").remove();
  // display app screen
  document.querySelector(".contactListScreen").style.display = "block";
  fetchUser(apiEp);
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

  // hide the spinner

  document.querySelector(".showSpinner").style.display = "none";
  //  show the user list
  displayContactList(userList);
};

//display contact list

const displayContactList = (userList) => {
  document.getElementById("list").style.display = "block";

  let str = "";

  userList.map((item, i) => {
    str += `<div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse${i}"
                      aria-expanded="false"
                      aria-controls="collapse${i}"
                    >
                      <img
                        src="${item.picture.large}"
                        class="rounded-circle"
                        width="50px"
                        alt=""
                      />
                      <div class="ms-2">
                        <div class="fw-bolder">${item.name.title} ${item.name.first} ${item.name.last}</div>
                        <small>${item.location.street.name} ${item.location.street.number}</small>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapse${i}"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      class="accordion-body d-flex flex-column align-items-center"
                    >
                      <img
                        src="${item.picture.large}"
                        class="rounded-circle"
                        width="150px"
                        alt=" Kakashi Hatake"
                      />

                      <div>
                        <div class="fw-bolder">
                          <i class="bi bi-person-circle"></i>
                          ${item.name.first} ${item.name.last}
                        </div>
                        <div class="color-black text-decoration-none">
                          <a href="tel:+9779869011942">
                            <i class="bi bi-telephone-fill"></i>
                            ${item.phone}</a
                          >
                        </div>
                        <div>
                          <a href="mailto:hatakekakashi26@gmail.com"
                            ><i class="bi bi-envelope"></i>
                          ${item.email}</a
                          >
                        </div>
                        <div>
                          <a
                            href="https://www.google.com/maps/place/${item.location.city}+${item.location.country}+${item.location.postcode}+${item.location.street.name}+${item.location.street.number}+${item.location.state}"
                            target="_blank"
                          >
                              <i class="bi bi-geo-alt"></i> ${item.location.street.name} ${item.location.street.number}${item.location.state}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
  });

  document.getElementById("userAccordion").innerHTML = str;
  document.getElementById("userCount").innerText = userList.length;
};

// search contact

document.getElementById("search").addEventListener("keyup", (e) => {
  const { value } = e.target;
  console.log(value);

  const filteredUser = userList.filter((item) => {
    const name = (item.name.first + "" + item.name.last).toLowerCase();
    return name.includes(value.toLowerCase());
  });
  console.log(filteredUser);
  displayContactList(filteredUser);
});
