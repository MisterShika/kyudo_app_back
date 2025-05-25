const { Router } = require("express");
const sessionRouter = Router();
const sessionController = require('../controllers/sessionController');

sessionRouter.post('/startSession', sessionController.startSession);
sessionRouter.post('/endSession', sessionController.endSession);
sessionRouter.get('/getSession/:sessionId', sessionController.getSessionSingle);

module.exports = sessionRouter;