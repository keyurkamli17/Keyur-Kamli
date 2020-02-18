document.querySelector("#formValid").addEventListener("submit", e => {
  let uname = e.target.username.value;
  let pass1 = e.target.password.value;
  let pass2 = e.target.confirmpassword.value;
  let email = e.target.email.value;
  let validator = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let spchar = /[^\w\.\-]/;
  let num = /^[0-9a-zA-Z]+$/;

  e.preventDefault();
  console.log(e.target.username.value);
  console.log(e.target.email.value);
  console.log(e.target.password.value);
  console.log(e.target.confirmpassword.value);

  e.target.username.value = "";
  e.target.email.value = "";
  e.target.password.value = "";
  e.target.confirmpassword.value = "";

  if (uname === "") {
    console.log("Enter name");
  } else if (uname.length < 3) {
    console.log("Enter valid name");
  } else if (num.test(uname)) {
    console.log("Numebers are not allowed");
  } else if (spchar.test(uname)) {
    console.log("Special Charactor is not allowed");
  } else if (email === "") {
    console.log("Enter Email");
  } else if (!validator.test(email)) {
    console.log("Enter valid email");
  } else if (pass1 === "") {
    console.log("Enter Password");
  } else if (pass1.length < 6) {
    console.log("Password must be 6 digits or long");
  } else if (pass1 !== pass2) {
    console.log("Password not match");
  } else {
    console.log(`Welcome ${uname}!`);
  }
});
