const express = require("express");
const contentController = require("../controller/contentController");

const router = express.Router();

// --------------------- Welcome ---------------------
router.get("/", (req, res) => {
  res.json("Welcome to ASHU Api");
});

router.post("/content/add",contentController.create);
router.get("/content/all",contentController.getAll);
router.get("/content/:id",contentController.getById);
router.put("/content/update/:id",contentController.update);
router.delete("/content/delete/:id",contentController.delete);


module.exports = router;
