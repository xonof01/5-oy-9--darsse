const name = document.querySelector(".name");
const password = document.querySelector(".password");
const btn = document.querySelector(".log-btn");
let index = localStorage.getItem("users");
userss = JSON.parse(index);
btn.addEventListener("click", (event) => {
  userss.forEach((value) => {
    if (value.name == name.value) {
      if (value.password == password.value) {
        alert("succes");
      } else {
        alert("password is wrong");
      }
    } else {
      alert("user not found");
    }
  });
});
