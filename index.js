const express = require("express");
const mongoose = require("mongoose");
const registrationController = require("./src/controllers/registrationController");
const loginController = require("./src/controllers/loginController");
const usersController = require("./src/controllers/usersController");
const app = express();
const PORT = 3000;

// Mongodb Connection
mongoose
  .connect(
    "mongodb+srv://ramen:k6fptL17QZvCSO9G@oya.ecqa0f3.mongodb.net/oyaTodoList?retryWrites=true&w=majority&appName=OYA"
  )
  .then(() => {
    console.log("Mongodb Connected");
  });

app.use(express.json());

app.post("/login", loginController);
app.post("/registration", registrationController);
app.get("/usersList", usersController.usersList);
app.get("/findUser", usersController.findUser);
app.put("/userUpdate", usersController.userUpdateById);
app.delete("/userDelete", usersController.userDeleteById);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// read: Class-79 37:17
