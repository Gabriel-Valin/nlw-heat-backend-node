import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayloadToken {
    sub: string
}

export function ensureAuth (request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if (!authToken) {
        response.status(401).json({ message: 'Invalid token' })
    }

    const [, token] = authToken .split(' ')

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayloadToken
        request.user_id = sub
        return next()

    } catch (error) {
        response.status(401).json({ message: 'Expired token' })
    }
}