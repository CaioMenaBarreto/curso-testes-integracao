import prisma from "database";

export async function createUser(email: string, password: string) {
    return await prisma.user.create({
        data: {
            email,
            password
        }
    })
}

type UserInput = {
    email: string;
    password: string;
}

export async function createUsers(userList: UserInput[]) {
    return await prisma.user.createMany({
        data: userList
    })
}