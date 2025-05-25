const jwt = require('jsonwebtoken');
const sessionDb = require("../db/sessionQueries");
const accountDb = require("../db/accountQueries");
require('dotenv').config();

async function startSession(req, res) {
    const {userId} = req.body;

    const user = accountDb.getUserSession(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    if (user.currentSessionId) {
        return res.status(400).json({ message: 'User already has an active session' });
    }

    const newSession = await sessionDb.createSession(userId);
    accountDb.setCurrentSession(userId, newSession.id);
    return res.status(201).json({
        message: 'Session created successfully',
        session: newSession
    });
}

async function endSession(req, res) {
    const {userId} = req.body;

    const user = await accountDb.getUserSession(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!user.currentSessionId) {
        return res.status(404).json({ message: 'User does not have active session' });
    }

    sessionDb.endSession(user.currentSessionId);
    accountDb.setCurrentSession(userId, null);

    return res.status(201).json({
        message: 'Session ended successfully',
    });
}

async function getSessionSingle(req, res) {
    const sessionId = parseInt(req.params.sessionId);
    const theSession = await sessionDb.getSessionSingle(sessionId);
    return res.status(201).json({
        message: 'Session retrieved successfully',
        session: theSession
    });
}

async function getSessionMultiple(req, res) {

}

async function deleteSessionSingle(req, res) {

}

module.exports = {
    startSession,
    endSession,
    getSessionSingle
}