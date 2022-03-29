import users from "./users.js";

const userController = (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:uid", findUserById);
  app.post("/api/users", createUser);
  app.delete("/api/users/:uid", deleteUser);
  app.put("/api/users/:uid", updateUser);
};

const createUser = (req, res) => {
  const newUser = req.body;
  newUser._id = new Date().getTime() + "";
  users.push(newUser);
  res.json(newUser);
};

const deleteUser = (req, res) => {
  const userId = req.params["uid"];
  const usersIndex = users.findIndex((u) => u._id === userId);
  users.splice(usersIndex, 1);
  res.sendStatus(200);
};

const updateUser = (req, res) => {
  const userId = req.params["uid"];
  const updatedUser = req.body;
  const usersIndex = users.findIndex((u) => u._id === userId);
  users.splice(usersIndex, 1, updatedUser);
  res.sendStatus(200);
};

const findAllUsers = (req, res) => {
  const type = req.query.type;
  if (type) {
    res.json(findUsersByType(type));
    return;
  }

  res.json(users);
};

const findUsersByType = (type) => {
  return users.filter((user) => user.type === type);
};

const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users.find((u) => u._id === userId);
  res.json(user);
};

export default userController;
