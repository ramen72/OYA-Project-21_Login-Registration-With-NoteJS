const express = require("express");
const registrationController = require("./src/controllers/registrationController");
const loginController = require("./src/controllers/loginController");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/login", loginController);
app.post("/registration", registrationController);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
