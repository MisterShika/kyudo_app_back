const jwt = require('jsonwebtoken');
const db = require("../db/sessionQueries");
require('dotenv').config();

async function startSession(req, res) {
    const {userId} = req.body;
    const newSession = await db.createSession(userId);
    return res.status(201).json({
        message: 'Session created successfully',
        session: newSession
    });
}

async function endSession(req, res) {

}

async function getSessionSingle(req, res) {

}

async function getSessionMultiple(req, res) {

}

async function deleteSessionSingle(req, res) {

}

module.exports = {
    
}