const express = require("express");
const router = express.Router();
const users = require("../../Users");
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  // res.send(req.params.id);
  let found = users.some((user) => user.id == req.params.id);
  if (found) {
    res.json(users.filter((user) => user.id == req.params.id));
  } else {
    res.status(400).json({ msg: "Not Found Users" });
  }

  // res.json(users.filter(user => user.id == req.params.id));
});

router.post("/", (req, res) => {
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
  };

  if (!newUser.email || !newUser.name) {
    return res.status(400).json({
      msg: "Place include a name & email",
    });
  }
  users.push(newUser);
//   res.json(users);
  res.redirect('/');
});

router.put("/:id", (req, res) => {
  let found = users.some((user) => user.id == req.params.id);
  if (found) {
    const updUser = req.body;
    users.forEach((user) => {
      if (user.id == req.params.id) {
        user.name = updUser ? updUser.name : user.name;
        user.email = updUser ? updUser.email : user.email;

        res.json({ msg: "User updated", user });
      } else {
        res
          .status(400)
          .json({ msg: `no user with the id of ${req.params.id}` });
      }
    });
  }
});

/* Delete User */
router.delete("/:id", (req, res) => {
  let found = users.some((user) => user.id == req.params.id);
  if (found) {
    res.json({
      msg: "Memeber Deleted",
      user: users.filter((user) => user.id != req.params.id)
    });
  } else {
    res.status(400).json({
      msg: `Not Found User Id`,
    });
  }
});

module.exports = router;
