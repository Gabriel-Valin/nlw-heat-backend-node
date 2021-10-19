import { Request, Response } from "express";
import { ProfileUserService } from "../services/profile-user-service";

export class ProfileUserController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { user_id } = request
        const service = new ProfileUserService()

        const result = await service.execute(user_id)

        return response.json(result)
    }
}