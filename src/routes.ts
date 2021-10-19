import { Router } from 'express'
import { AuthenticateUserController } from './controllers/auth-user-controllers'
import { CreateMessageController } from './controllers/create-message-controller'
import { GetLastThreeMessagesController } from './controllers/get-last-three-messages-controller'
import { ensureAuth } from './middleware/ensure-auth'

export const routes = Router()

routes.post('/auth', new AuthenticateUserController().handle)

routes.post('/messages', ensureAuth, new CreateMessageController().handle)

routes.get('/messages/last3', new GetLastThreeMessagesController().handle)