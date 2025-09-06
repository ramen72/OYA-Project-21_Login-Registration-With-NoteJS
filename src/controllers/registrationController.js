const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const registrationSchema = require("../model/registrationSchema");

let registrationController = async (req, res) => {
  let { username, email, password, confirmPassword } = req.body;

  // **********************************
  // Create a test account or replace with real credentials.
  let verificationCode = Math.floor(Math.random() * 1000000);

  // **********************************

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

  let hash = await bcrypt.hash(password, 10);

  // *****************************************************

  if (
    errors.username === "" &&
    errors.email === "" &&
    errors.password === "" &&
    errors.confirmPassword === ""
  ) {
    const transporter = nodemailer.createTransport({
      host: "mail.devsramen.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "erp@devsramen.com",
        pass: "utYn[UX41-kcs02~",
      },
    });

    const info = await transporter.sendMail({
      from: "TODO APP",
      to: email,
      subject: "Verify your Email",
      text: "Hello", // plain‑text body
      html: `<h2>Your Verification Code is ${verificationCode}</h2> <br> <a href='#'>Click</a>`, // HTML body
    });

    console.log("Message sent:", info.messageId);

    // res.send({ success: "Your Registration is done successfully" });
    let data = new registrationSchema({
      username: username,
      email: email,
      password: password,
    });
    data.save();
    res.send(data);
  } else {
    res.send({ Errors: errors });
  }
};
module.exports = registrationController;

// Read up = class-78 (All)
