import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

const secret = process.env.SECRET_KEY as string

export class JwtVerify {
    async verify(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.cookies["x-acess-token"]

            jwt.verify(token, secret, (err: any, decoded: any) => {
                if (err) {
                    return res.status(404).json({
                        message: "Realize o login para continuar!",
                    })
                }
                req.params.id = decoded.id
                next()
            })
        } catch (err) {
            res.status(404).json({ message: "Internar server error!" })
        }
    }
}
