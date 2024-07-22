const form = document.querySelector(".form");
const login_page_button = document.querySelector(".login_page_button");
const signup_page_button = document.querySelector(".signup_page_button");

function signup_page() {
  form.innerHTML =
    '<input id="user" placeholder="Enter Username" required /><input id="email" placeholder="Enter Email" required /><input type="button" class="login_button" value="Sign Up" />';
  signup_page_button.style.backgroundColor = "red";
  signup_page_button.style.color = "white";
  login_page_button.style.backgroundColor = "white";
  login_page_button.style.color = "red";
}
function login_page() {
  form.innerHTML =
    '<input id="user" placeholder="Enter Username" required /><input id="password" type="password" placeholder="Enter Password" required /><input type="button" class="login_button" value="Login" />';
  signup_page_button.style.backgroundColor = "white";
  signup_page_button.style.color = "red";
  login_page_button.style.backgroundColor = "red";
  login_page_button.style.color = "white";
}
