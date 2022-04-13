import {
  findAllTuitsDao,
  createTuitDao,
  updateTuitDao,
  deleteTuitDao,
} from "../tuit-dao.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await createTuitDao(newTuit);
  res.json(insertedTuit);
};

const findAllTuits = async (req, res) => {
  const tuits = await findAllTuitsDao();
  res.json(tuits);
};

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await updateTuitDao(tuitdIdToUpdate, updatedTuit);
  res.send(status);
};

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await deleteTuitDao(tuitdIdToDelete);
  res.send(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findAllTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
