const jwt = require('jsonwebtoken');
const accountDb = require("../db/accountQueries");
require('dotenv').config();

async function getUserSingle(req, res) {
    const {email} = req.body;
    const accountData = await accountDb.createOrReturnUser(email);
    const token = jwt.sign(accountData, process.env.ACCESS_TOKEN_SECRET);
    res.json(token);
}

async function checkUserSession(req, res) {
    const {userId} = req.body;
    const accountData = await accountDb.getUserSession(userId);
    return res.status(201).json({
        sessionId: accountData
    });
}

module.exports = {
    getUserSingle,
    checkUserSession
}