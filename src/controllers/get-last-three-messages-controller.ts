import { Request, Response } from "express";
import { GetLastThreeMessagesService } from "../services/get-last-three-messages";

export class GetLastThreeMessagesController {
    async handle (request: Request, response: Response): Promise<Response> {
        const service = new GetLastThreeMessagesService()
        const result = await service.execute()

        return response.json(result)
    }
}