const { Router } = require("express");
const accountRouter = Router();
const accountController = require('../controllers/accountController');

accountRouter.post('/', accountController.getUserSingle);
accountRouter.post('/getSession', accountController.checkUserSession);

module.exports = accountRouter;