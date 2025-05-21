const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function createSession (userId, locationId) {
    return await prisma.session.create({
        data: {
            startTime: new Date(),
            userId: userId,
            //EXAMPLE LOCATION USED
            //CHANGE ID LATER
            locationId: 1
        }
    });
}

module.exports = {
    createSession
}