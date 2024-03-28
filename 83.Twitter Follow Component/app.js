let body = document.body;
let themer = document.querySelector(".themer");
const followButton = document.querySelectorAll(".follow-button");

themer.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    themer.innerHTML = "Light";
  } else {
    body.className = "light-theme";
    themer.innerHTML = "Dark";
  }
}

followButton.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnFollow(e.target));
});

function followUnFollow(button) {
  button.classList.toggle("followed");
  if (button.innerText == "Follow") {
    button.innerText = "Unfollow";
  } else {
    button.innerText = "Follow";
  }
}
