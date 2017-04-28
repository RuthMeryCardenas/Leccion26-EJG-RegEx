var data = document.getElementsByClassName("data");
data[7].addEventListener("blur", function () {
  password = data[6].value;
  confirmPassword = data[7].value;
  if (password == confirmPassword) {
    data[8].focus();
  }else {
    data[7].focus();
  }
});
