const jwt = require('jsonwebtoken');
const db = require("../db/accountQueries");
require('dotenv').config();

async function getUserSingle(req, res) {
    const {email} = req.body;
    const accountData = await db.createOrReturnUser(email);
    const token = jwt.sign(accountData, process.env.ACCESS_TOKEN_SECRET);
    res.json(token);
}

module.exports = {
    getUserSingle,
}