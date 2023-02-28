import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { pessoaRepo } from "../repositories/PessoaRepository"

export class ListPessoa {
    async list(req: Request, res: Response) {
        try {
            const { id } = req.params

            const pessoa = await pessoaRepo.find({
                select: {
                    first_name: true,
                    last_name: true,
                    username: true,
                    email: true,
                },
                where: {
                    id,
                },
            })

            return res.status(200).json({ pessoa })
        } catch (err) {
            return res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
