const { Router } = require("express");
const sessionRouter = Router();
const sessionController = require('../controllers/sessionController');

sessionRouter.post('/startSession', sessionController.startSession);

module.exports = sessionRouter;