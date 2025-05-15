const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function createOrReturnUser (email) {
    const user = await prisma.user.upsert({
        where: {
            email,
        },
        update: {},
        create: {
            email,
        },
        select: {
            id: true,
            email: true,
            role: true;
        },
    });

    return {
        id: user.id,
        email: user.email,
        role: user.role
    }
}

module.exports = {
    createOrReturnUser,
}