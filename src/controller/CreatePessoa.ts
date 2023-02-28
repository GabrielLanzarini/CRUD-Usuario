import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { pessoaRepo } from "../repositories/PessoaRepository"

export class CreatePessoa {
    async create(req: Request, res: Response) {
        try {
            const { first_name, last_name, username, password, email } =
                req.body

            const usuarioConfirm = await pessoaRepo.findOneBy({ username })
            const emailConfirm = await pessoaRepo.findOneBy({ email })

            if (usuarioConfirm)
                return res
                    .status(400)
                    .json({ message: "Usuário já cadastrado!" })

            if (emailConfirm)
                return res
                    .status(400)
                    .json({ message: "E-mail já cadastrado!" })

            if (password.length < 6)
                return res.status(400).json({
                    message: "Insira uma senha com pelo menos 6 caracteres!",
                })

            const salt = await bcrypt.genSalt(12)
            const hashPass = await bcrypt.hash(password, salt)

            const newPessoa = pessoaRepo.create({
                first_name,
                last_name,
                username,
                password: hashPass,
                email,
            })

            await pessoaRepo.save(newPessoa)

            return res
                .status(201)
                .json({ message: "Nova pessoa criada com sucesso" })
        } catch (err) {
            return res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
