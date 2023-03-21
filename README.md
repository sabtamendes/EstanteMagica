# Estante Mágica 📚💭✨

<details>
  <summary><strong>Instalação 🛠️</strong></summary>

  ## 💻 Instalação 
Para rodar o projeto, primeiro clone este repositório usando o comando:

``` bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
```
Em seguida, instale as dependências usando o gerenciador npm:   
``` bash
npm i
```
Crie um arquivo <span style="color: yellow"> .env.development </span> e <span style="color: yellow"> .env.test </span> na raiz do projeto e defina as variáveis usando o  <span style="color: yellow"> .env.example </span>
</details>

<details>
<summary><strong>Utilização 📝</strong></summary>
  
 ## 🚀💡 Utilização
  - <strong>Seguindo a ordem de execução:</strong>

1. Para gerar uma nova migração de banco de dados com base no estado atual do schema:

```bash
npm run migration:generate
```

2. Para preencher o banco de dados com dados iniciais usando as variáveis de ambiente necessárias para a execução do projeto:

```bash
npm run dev:seed
```

3. Para rodar o back-end em um servidor de desenvolvimento, execute o seguinte comando no terminal: 

```bash
npm run dev
```

</details>

<details>
<summary><strong>Testes 🕵️‍♀️</strong></summary>
  
 ## 🚀💡 Testes 
  
Para rodar os testes unitários do projeto, execute o seguinte comando no terminal:

``` bash
npm run test:unit
```

</details>

<details>
  <summary><strong>Tecnologias Utilizadas 🌐</strong></summary>
   
  ## 🔧📦 Principais Tecnologias
  
- Node.js 14.0.0
- Express 4.18.2
- Typecript 4.4.4
- PostgreSQL 4.4.10
- Prisma (ORM) 4.11.0
- Visual Studio Code
- Git e GitHub

  O projeto foi desenvolvido em Node, Express, Typescript e foi utlizado o Prisma como ORM para mapear o Postresql. Para o desenvolvimento, utilizei o Visual Studio Code como IDE e o Git para controle de versão e o GitHub como repositório remoto.

Links úteis:
- [Visual Studio Code](https://code.visualstudio.com/docs)
- [Git](https://git-scm.com/doc)
- [GitHub](https://docs.github.com/) 
</details>

<details>
  <summary><strong>Estrutura das Pastas 📂</strong></summary>

## 🌳📂 A estrutura do projeto é organizada da seguinte maneira:
```bash
- `prisma/`: contém as configurações e migrações do Prisma.

  - `migrations/`: contém as migrações do banco de dados.

  - `schema.prisma`: arquivo principal de configuração do Prisma.

  - `seed.ts`: arquivo para popular o banco de dados com dados iniciais.

- `controllers/`: contém os controladores da aplicação.

    - `book-controller.ts`: controlador para livros.

  - `config/`: contém as configurações da aplicação.
    - `database.ts`: arquivo de conexão com o banco de dados.

    - `envs.ts`: arquivo de configuração das variáveis de ambiente.

    - `index.ts`: arquivo principal de configuração.

  - `errors/`: contém as definições de erros da aplicação.

  - `middlewares/`: contém os middlewares da aplicação.

  - `repositories/`: contém os repositórios da aplicação.

  - `routers/`: contém os roteadores da aplicação.

  - `schemas/`: contém os esquemas do banco de dados.
    - `schema.prisma`: esquema do banco de dados.

  - `services/`: contém os serviços da aplicação.

  - `app.ts`: arquivo principal que inicializa a aplicação.

  - `protocols.ts`: contém as definições de protocolos da aplicação.

  - `server.ts`: arquivo que inicializa o servidor.

- `tests/`: contém os testes da aplicação.

  - `unit/`: contém os testes unitários da aplicação.
    - `book.test.ts`: testes para o controlador de livros.

    - `setup-envs.ts`: arquivo para configuração dos testes.

- `README.md`: arquivo de documentação do projeto.

- `jest.config.js`: arquivo de configuração do Jest.

- `package-lock.json`: arquivo gerado automaticamente pelo npm para controle de versão das dependências.

- `package.json`: arquivo de configuração do projeto e suas dependências.

- `tsconfig.build.json`: arquivo de configuração do TypeScript para compilação do projeto.

- `tsconfig.json`: arquivo de configuração do TypeScript para o projeto
``` 
</details>
