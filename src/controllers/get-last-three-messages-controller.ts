import { Request, Response } from "express";
import { GetLastThreeMessagens } from "../services/get-last-three-messages";

export class GetLastThreeMessagesController {
    async handle (request: Request, response: Response): Promise<Response> {
        const service = new GetLastThreeMessagens()
        const result = await service.execute()

        return response.json(result)
    }
}