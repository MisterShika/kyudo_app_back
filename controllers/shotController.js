const jwt = require('jsonwebtoken');
const shotDb = require("../db/shotQueries");
require('dotenv').config();

async function addShotToSession(req, res) {
    const {sessionId, userId, x, y, hit, kinteki} = req.body;
    const newShot = await shotDb.addShotToSession(sessionId, userId, x, y, hit, kinteki);
    return res.status(201).json({
        message: 'Shot created successfully',
        shot: newShot
    });
}

async function removeShotFromSession(req, res) {

}

module.exports = {
    addShotToSession
}