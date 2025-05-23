const { Router } = require("express");
const sessionRouter = Router();
const sessionController = require('../controllers/sessionController');

sessionRouter.post('/startSession', sessionController.startSession);
sessionRouter.post('/endSession', sessionController.endSession);

module.exports = sessionRouter;