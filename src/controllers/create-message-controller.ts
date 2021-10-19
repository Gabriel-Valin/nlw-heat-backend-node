import { Request, Response } from "express";

export class CreateMessageController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { message } = request.body
    }
}