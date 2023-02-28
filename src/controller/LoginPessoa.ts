import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { pessoaRepo } from "../repositories/PessoaRepository"

const secret = process.env.SECRET_KEY as string

export class LoginPessoa {
    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body

            const pessoa = await pessoaRepo.findOneBy({ username })
            if (!pessoa)
                return res
                    .status(404)
                    .json({ message: "Usuário não encontrado!" })

            const passCompare = await bcrypt.compare(password, pessoa.password)

            if (!passCompare)
                return res.status(401).json({ message: "Senha incorreta!" })

            const token = jwt.sign({ id: pessoa.id }, secret, {
                expiresIn: 60000,
            })

            return res
                .cookie("x-acess-token", token)
                .status(200)
                .json({ message: "Login realizado com sucesso!" })
        } catch (err) {
            console.log(err)

            return res.status(404).json({ message: "Internal Server Error!" })
        }
    }
}
