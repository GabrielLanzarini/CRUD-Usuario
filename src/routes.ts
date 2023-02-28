import { Router } from "express"
import { CreatePessoa } from "./controller/CreatePessoa"
import { DeletePessoa } from "./controller/DeletePessoa"
import { ListPessoa } from "./controller/ListPessoa"
import { LoginPessoa } from "./controller/LoginPessoa"
import { LogoutPessoa } from "./controller/LogoutPessoa"
import { UpdatePassword } from "./controller/UpdatePassword"
import { JwtVerify } from "./middleware/JwtVerify"

const routes = Router()

routes.post("/create/pessoas", new CreatePessoa().create)
routes.post("/login", new LoginPessoa().login)
routes.post("/logout", new LogoutPessoa().logout)

routes.get("/pessoa/list", new JwtVerify().verify, new ListPessoa().list)

routes.put(
    "/pessoa/updatePassword",
    new JwtVerify().verify,
    new UpdatePassword().update
)

routes.delete(
    "/pessoa/delete",
    new JwtVerify().verify,
    new DeletePessoa().delete
)

export default routes
