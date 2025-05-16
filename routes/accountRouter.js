const { Router } = require("express");
const accountRouter = Router();
const accountController = require('../controllers/accountController');

accountRouter.post('/', accountController.getUserSingle);

module.exports = accountRouter;