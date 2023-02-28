import { Request, Response } from "express"

export class LogoutPessoa {
    async logout(req: Request, res: Response) {
        try {
            return res
                .clearCookie("x-acess-token")
                .status(204)
                .json({ message: "Logout realizado com sucesso!" })
        } catch (err) {
            return res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
