let registrationController = (req, res) => {
  let { username, email, password, confirmPassword } = req.body;
  let errors = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // *****************************
  //   Input Fill validation
  // *****************************
  if (!username) {
    errors.username = "Username Required";
  }
  if (!email) {
    errors.email = "Email Required";
  } else if (!pattern.test(email)) {
    errors.email = "Please enter a valid Email";
  }
  if (!password) {
    errors.password = "Password Required";
  }
  if (!confirmPassword) {
    errors.confirmPassword = "ConfirmPassword Required";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "ConfirmPassword Not match !";
  }
  // *****************************************************

  if (
    errors.username === "" &&
    errors.email === "" &&
    errors.password === "" &&
    errors.confirmPassword === ""
  ) {
    res.send({ success: "Registration is successfully" });
  } else {
    res.send({ Errors: errors });
  }
};
module.exports = registrationController;

// Read up = 18:10
