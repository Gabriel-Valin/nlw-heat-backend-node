import { Router } from 'express'
import { AuthenticateUserController } from './controllers/auth-user-controllers'

export const routes = Router()

routes.post('/auth', new AuthenticateUserController().handle)