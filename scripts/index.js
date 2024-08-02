const form = document.querySelector(".form");
const login_page_button = document.querySelector(".login_page_button");
const signup_page_button = document.querySelector(".signup_page_button");
const inputs = document.getElementsByClassName("main_input");

function signup_page() {
  var mediaQuery = window.matchMedia("(max-width:700px)");
  form.innerHTML =
    '<input class="main_input" id="user" placeholder="Enter Username" required /><input class="main_input" id="email" placeholder="Enter Email" required /><input type="button" class="login_button" value="Sign Up" onclick="signup_button()" />';
  signup_page_button.style.backgroundColor = "red";
  signup_page_button.style.color = "white";
  login_page_button.style.backgroundColor = "white";
  login_page_button.style.color = "red";
  if (mediaQuery.matches) {
    form.setAttribute("style", "height:80%");
  } else {
    form.setAttribute("style", "height:45%");
  }
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("style", "height:25%");
  }
}
function login_page() {
  var mediaQuery = window.matchMedia("(max-width:700px)");
  form.innerHTML =
    '<input class="main_input" id="user" placeholder="Enter Username" required /><input class="main_input" id="password" type="password" placeholder="Enter Password" required /><input type="button" class="login_button" value="Login" />';
  signup_page_button.style.backgroundColor = "white";
  signup_page_button.style.color = "red";
  login_page_button.style.backgroundColor = "red";
  login_page_button.style.color = "white";
  if (mediaQuery.matches) {
    form.setAttribute("style", "height:80%");
  } else {
    form.setAttribute("style", "height:45%");
  }
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("style", "height:25%");
  }
}
function signup_button() {
  var mediaQuery = window.matchMedia("(max-width:700px)");
  form.innerHTML =
    '<input class="main_input" id="college" placeholder="Enter College Name" required /><input class="main_input" id="year" placeholder="Enter Year in Integer" required/><input class="main_input" id="password_signup" placeholder="Enter Password" type="password" required/><input class="main_input" id="password_confirm_signup" placeholder="Confirm Password" type="password"/><input id="get_otp" type="button" value="Get OTP" class="login_button" />';
  if (mediaQuery.matches) {
    form.setAttribute("style", "height:85%");
  } else {
    form.setAttribute("style", "height:55%");
  }
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute("style", "height:15%");
  }
}
