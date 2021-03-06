const router = require("express").Router();
const cubeService = require("../services/cubeService");

const displayCreatePage = (req, res) => {
  res.render("create");
};

const displayDetailsPage = (req, res) => {
  cubeService
    .findById(req.params.cubeId)
    .then((cube) => {
      res.render("details", cube);
    })
    .catch((err) => {
      res.render("404", { err: err.message });
    });
};

const createCubeHandler = (req, res) => {
  const { name, description, imageUrl, difficulty } = req.body;
  if (name && description && imageUrl && difficulty) {
    cubeService
      .create(name, description, imageUrl, difficulty)
      .then((dbResponse) => {
        res.redirect("/");
      })
      .catch((err) => {
        res.render("create", { err: err.message });
      });
  } else {
    let err = "All fileds should be filled.";
    res.render("create", { err });
  }
};

router.get("/create", displayCreatePage);
router.post("/create", createCubeHandler);

router.get("/details/:cubeId", displayDetailsPage);

module.exports = router;
