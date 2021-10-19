import { prismaClient } from "../prisma";
import { io } from '../app'

export class CreateMessageService {
    async execute (msgContent: string, user_id: string) {
        const message = await prismaClient.message.create({
            data: {
                msgContent,
                user_id
            },
            include: {
                user: true
            }
        })

        const infoMessage = { 
            text: message.msgContent,
            user_id: message.user_id,
            created_at: message.created_at,
            user: {
                name: message.user.name,
                avatar_url: message.user.avatar_url
            }
        }

        io.emit('new_message', infoMessage)

        return message
    }
}