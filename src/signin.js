// Retrieve existing users from localStorage
let index = localStorage.getItem("users");
let userss = index ? JSON.parse(index) : []; // Handle case when userss is null or undefined
const name = document.querySelector("#name");
const gmail = document.querySelector("#gmail");
const password = document.querySelector("#curent-password");
const form = document.querySelector("#form");
const btn = document.querySelector(".log-btn");
const signBtn = document.querySelector("#sign-in");

function validate() {
  if (name.value.length < 3) {
    alert("Username must be at least three characters long.");
    return false;
  }
  if (name.value.trim() === "") {
    alert("Name cannot be empty.");
    return false;
  }
  if (gmail.value.trim() === "") {
    alert("Gmail cannot be empty.");
    return false;
  }
  if (password.value.trim() === "") {
    alert("Password cannot be empty.");
    return false;
  }
  let valid = gmail.value.includes("@gmail.com");
  if (!valid) {
    alert("Please enter a valid Gmail address.");
    return false;
  }
  if (password.value === "123") {
    alert("Password is too easy. Please choose a stronger password.");
    return false;
  }
  return true;
}

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let invalid = userss.some((element) => {
    return element.name === name.value;
  });

  let isValid = validate();
  if (!isValid) {
    return;
  }
  if (invalid) {
    alert("Username has already been used.");
    return;
  }

  let user = {
    name: name.value,
    gmail: gmail.value,
    password: password.value,
    role: "user",
  };
  userss.push(user);

  localStorage.setItem("users", JSON.stringify(userss));

  form.reset();
  alert("You have been registered.");

  
});

