<h4 align="center"> 
	✅ Concluído ✅
</h4>

<h1 align="center">
    🔑 API Login 🔒 
</h1>

# Índice
<!--ts-->
   * [Sobre](#sobre)
   * [Tecnologias](#tecnologias)
   * [Rodando a aplicação](#rodando-a-aplicação)
   * [Rotas da API e funções](#rotas-da-api-e-funções)
<!--te-->

# Sobre
Aplicação desenvolvida com a finalidade de aprofundar os conhecimentos da integração de uma API com o Banco de Dados PostgreSQL utilizando uma ORM e um token JWT.

# Tecnologias 
- [Node.JS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Postgres](https://www.pgadmin.org/)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [Express](https://expressjs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [nodemon](https://www.npmjs.com/package/nodemon)

# Rodando a aplicação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PgAdmin](https://www.pgadmin.org/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Instalando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/GabrielLanzarini/MVC-usuario

# Acesse a pasta do projeto no terminal/cmd
$ cd MVC-usuario

# Instale as dependências
$ npm install
```

#### Defina as variáveis de ambiente em um arquivo .env da seguinte forma.
```env
DB_HOST = "Host do Banco de dados"
DB_PORT = "Porta do Banco de dados"
DB_USER = "Usuário do Banco de dados" 
DB_PASS = "Senha do Banco de dados"
DB_DATA = "Nome do Banco de dados"

SECRET_KEY = "Chave Secreta para geração do JWT"

PORT = 3000
``` 

```env
# Rode a migração para a criação da tabela no Banco de Dados
$ npm run migration:run

$ npm run dev
# O servidor vai rodar na porta 3000 no endereço http://localhost:3000
```


# Rotas da API e funções 
## Rotas sem login
- **`POST /create/pessoas`**: A rota deve receber `first_name`, `last_name`, `username`, `password` e `email` dentro do corpo da requisição.
- Ela deve ser armazenada dentro de um objeto com o formato como o seguinte:
```JSON
{
	"first_name": string,
	"last_name": string,
	"username": string,
	"password": string,
	"email": string
}
```

- **`POST /login`**
- A rota deve receber `username` e `password` dentro do corpo da requisição.
- Com o login bem sucedido ele armazenará um JWT nos cookies da sessão.
- Ela deve ser armazenada dentro de um objeto com o formato como o seguinte:
```JSON
{
	"username": string,
	"password": string,
}
```
>  Para o login ser bem sucedido o usuário deve existir no banco de dados.

## Rotas com o usuário logado

- **`POST /logout`**
- A rota apaga o cookie JWT armazenado.

- **`GET /pessoa/list`**
- A rota retorna as informações do usuário logado.
```JSON
{
	"pessoa": [
		{
			"first_name": string,
			"last_name": string,
			"username": string,
			"email": string,
		}
	]
}
```

- **`PUT /pessoa/updatePassword`**
- A rota deve receber `password` e `newPassword` dentro do corpo da requisição da seguinte forma:
```JSON
{
	"password":  string,
	"newPassword":  string
}
``` 
- **`DELETE /pessoa/delete`**
- A rota deve deleta o usuário logado do banco de dados:

---

Desenvolvido por [Gabriel Henrique Antonelli Lanzarini](https://www.linkedin.com/in/gabriel-henrique-antonelli-lanzarini-16b522209/)
