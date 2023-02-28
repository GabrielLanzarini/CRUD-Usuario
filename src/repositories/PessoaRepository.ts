import { AppDataSource } from "../DataSource";
import { Pessoa } from "../model/Pessoa";

export const pessoaRepo = AppDataSource.getRepository(Pessoa);