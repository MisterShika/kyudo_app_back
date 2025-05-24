const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addShotToSession(sessionId, x, y){
    const shot = await prisma.shot.create({
        data: {
            sessionId: sessionId,
            timestamp: new Date(),
            x: x,
            y: y
        },
    });
    return shot;
}

module.exports = {
    addShotToSession
}