const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addShotToSession(sessionId, userId, x, y, hit, kinteki){
    const shot = await prisma.shot.create({
        data: {
            userId: userId,
            sessionId: sessionId,
            timestamp: new Date(),
            x: x,
            y: y,
            hit: hit,
            kinteki: kinteki
        },
    });
    return shot;
}

module.exports = {
    addShotToSession
}