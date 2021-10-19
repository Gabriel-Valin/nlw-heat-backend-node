import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/auth-user-service";

export class AuthenticateUserController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { code } = request.body
        
        const service = new AuthenticateUserService()
        
        try {
            const result = await service.execute(code)
            return response.json(result)
        } catch (error) {
            return response.json(error.message)
        }
    }
}