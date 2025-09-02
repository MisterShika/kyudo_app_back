const { Router } = require("express");
const shotRouter = Router();
const shotController = require('../controllers/shotController');

shotRouter.post('/addShot', shotController.addShotToSession);
shotRouter.get('/getShotsFromSession/:sessionId', shotController.getShotsFromSession);
shotRouter.get('/getMostRecentShot/:sessionId', shotController.getMostRecentShot);

module.exports = shotRouter;