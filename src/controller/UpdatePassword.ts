import { Request, Response } from "express"
import { pessoaRepo } from "../repositories/PessoaRepository"
import bcrypt from "bcrypt"
import { AppDataSource } from "../DataSource"
import { Pessoa } from "../model/Pessoa"

export class UpdatePassword {
    async update(req: Request, res: Response) {
        try {
            const { password, newPassword } = req.body
            const { id } = req.params

            const pessoa = await pessoaRepo.findOneByOrFail({ id })

            const passwordComp = await bcrypt.compare(password, pessoa.password)

            console.log(passwordComp)

            if (!passwordComp)
                return res.status(204).json({ message: "Senha incorreta!" })

            const salt = await bcrypt.genSalt(12)
            const hashPass = await bcrypt.hash(newPassword, salt)

            await AppDataSource.createQueryBuilder()
                .update(Pessoa)
                .set({ password: hashPass })
                .where({ id })
                .execute()

            res.status(201).json({ message: "Senha alterada com sucesso!" })
        } catch (err) {
            res.status(404).json({ message: "Internal server error!" })
        }
    }
}
