document.querySelector(".myform").addEventListener("submit", e => {
  e.preventDefault();
  console.log(e.target.username.value);
  console.log(e.target.lastname.value);
  e.target.username.value = "";
  e.target.lastname.value = "";
});
