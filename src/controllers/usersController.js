const registrationSchema = require("../model/registrationSchema");

// User FindAll
let usersList = async (req, res) => {
  let data = await registrationSchema.find({});
  res.send(data);
};
// User FindOne
let findUser = async (req, res) => {
  let data = await registrationSchema.findOne({
    _id: "68bc2dcd4fe8ad8677016d28",
  });
  res.send(data);
};

// User Update By Id
const userUpdateById = async (req, res) => {
  let data = await registrationSchema.findByIdAndUpdate(
    {
      _id: "68bc1744e786c8bb10018a0c",
    },
    {
      username: "Tusuka Group",
    },
    { new: true }
  );
  res.send(data);
};

// User Delete By Id
const userDeleteById = async (req, res) => {
  let data = await registrationSchema.findByIdAndDelete({
    _id: "68bc3021f61685f809783835",
  });
  res.send(data, console.log("first"));
};

module.exports = { usersList, findUser, userUpdateById, userDeleteById };
