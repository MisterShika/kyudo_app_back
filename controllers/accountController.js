const jwt = require('jsonwebtoken');
require('dotenv').config();

async function getUserSingle(req, res) {
    console.log(`getUserSingle fired`);
    res.json('InteractionSuccess');
}

module.exports = {
    getUserSingle,
}