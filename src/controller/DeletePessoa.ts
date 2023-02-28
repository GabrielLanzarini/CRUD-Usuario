import { Request, Response } from "express"
import { pessoaRepo } from "../repositories/PessoaRepository"

export class DeletePessoa {
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            await pessoaRepo.delete({ id })

            res.status(202)
                .clearCookie("x-acess-token")
                .json({ message: "Usuário deletado com sucesso!" })
        } catch (err) {
            return res.status(404).json({ message: "Internal server error!" })
        }
    }
}
