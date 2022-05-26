module.exports = app => {
  const dragonController = require("../controllers/dragon.controller.js");

  app.get("/dragon", dragonController.findAll);
  app.get("/dragon/:id", dragonController.findById);
  app.post("/dragon", dragonController.create);
  app.put("/dragon/:id", dragonController.update);
  app.delete("/dragon/:id", dragonController.delete);
};
