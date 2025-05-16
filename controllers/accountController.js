const jwt = require('jsonwebtoken');
const db = require("../db/accountQueries");
require('dotenv').config();

async function getUserSingle(req, res) {
    const {email} = req.body;
    res.json(db.createOrReturnUser(email));
}

module.exports = {
    getUserSingle,
}