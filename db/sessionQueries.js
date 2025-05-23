const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function createSession(userId, locationId) {
    const temporaryId = 1;
    const session = await prisma.session.create({
        data: {
            startTime: new Date(),
            userId: userId,
            locationId: temporaryId
        },
        select: {
            id: true,
            startTime: true
        }
    });
    return session;
}

async function endSession(sessionId){
    await prisma.session.update({
        where: { id: sessionId },
        data: {
            endTime: new Date(),
            status: 'COMPLETED'
        },
    });
}

module.exports = {
    createSession,
    endSession
}