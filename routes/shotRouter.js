const { Router } = require("express");
const shotRouter = Router();
const shotController = require('../controllers/shotController');

shotRouter.post('/addShot', shotController.addShotToSession);

module.exports = shotRouter;