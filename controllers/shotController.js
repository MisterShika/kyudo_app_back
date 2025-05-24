const jwt = require('jsonwebtoken');
const shotDb = require("../db/shotQueries");
require('dotenv').config();

async function addShotToSession(req, res) {
    const {sessionId, x, y} = req.body;
    const newShot = await shotDb.addShotToSession(sessionId, x, y);
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