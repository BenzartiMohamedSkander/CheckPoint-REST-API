const connectDB = require("./connectDB");
const User = require('./models/User')
const express = require("express");


const app = express();
app.use(express.json());

connectDB();

//@Api http:localhost:8000/api/users
//@desc Add new User
//@access public
app.post("/api/users", (req, res) => {
    const newUser = new User({ ...req.body });
    newUser
      .save()
      .then((user) => res.status(200).json(user))
      .catch((err) => res.send(err));

   
  });

 

//@Api http:localhost:8000/api/users
//@desc Get All Users
//@access public
app.get("/api/users", (req, res) => {
    User.find()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.send(err));
  });


//@Api http:localhost:8000/api/users/:_id
//@desc Get User by name
//@access public

  app.get("/api/users/:name", (req, res) => {
   
    User.findOne( req.params )
      .then((doc) => res.send(doc))
      .catch((err) => res.send(err));
  });


//@Api http:localhost:8000/api/users/:_id
//@desc Update User By Id
//@access public
app.put("/api/users/:_id", (req, res) => {
    let { _id } = req.params;
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("User has been updated"))
      .catch((err) => res.send(err));
  });
  

//@Api http:localhost:8000/api/users/:_id
//@desc Delete User By Id
//@access public
app.delete("/api/users/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndDelete({ _id })
    .then(() => res.send("Contact has been deleted"))
    .catch((err) => res.send(err));
});









  // run server
const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port http://localhost:${port}`);
});

