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

async function getShotsFromSession(req, res) {
    const sessionId = parseInt(req.params.sessionId);
    const shotData = await shotDb.getShotsFromSession(sessionId);
    return res.status(201).json({
        message: 'All shots retrieved successfully',
        shots: shotData
    });
}

async function getMostRecentShot(req, res) {
    const sessionId = parseInt(req.params.sessionId);
    const shotData = await shotDb.getMostRecentShot(sessionId);
    return res.status(201).json({
        message: 'Shot retrieved successfully',
        shot: shotData
    });
}

async function removeShotFromSession(req, res) {

}

module.exports = {
    addShotToSession,
    getShotsFromSession,
    getMostRecentShot
}