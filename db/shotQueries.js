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

async function getShotsFromSession(sessionId){
    const shots = await prisma.shot.findMany({
        where: {sessionId : sessionId},
        select: {
            id: true,
            x: true,
            y: true,
            hit: true,
            kinteki: true,
            tags: true
        }
    })
    return shots;
}

module.exports = {
    addShotToSession,
    getShotsFromSession
}