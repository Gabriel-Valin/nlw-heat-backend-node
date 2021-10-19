import { prismaClient } from "../prisma";

export class CreateMessageService {
    async execute (msgContent: string, user_id: string) {
        const messageContent = await prismaClient.message.create({
            data: {
                msgContent,
                user_id
            },
            include: {
                user: true
            }
        })

        return messageContent
    }
}