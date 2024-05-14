# Quality Technical Case

Projeto feito com Next.js, Typescript, Cypress, Next-Auth, Prisma, MongoDB e Styled Components.

## 🎉 Vídeos do projeto em funcionamento

Home page

https://github.com/BrunoCarvalhoFeitosa/quality-technical-case/assets/46093815/a52c5c36-c0e4-4188-9938-e0defe4cae51

Login com GitHub

https://github.com/BrunoCarvalhoFeitosa/quality-technical-case/assets/46093815/857e2e01-b45e-4169-8e3b-004e0d905e8b

Login com Google

https://github.com/BrunoCarvalhoFeitosa/quality-technical-case/assets/46093815/fb182f4d-f621-4ba9-8e46-6ef6922ee7cb

Validação de Sessão

https://github.com/BrunoCarvalhoFeitosa/quality-technical-case/assets/46093815/432dd59a-6b5f-4a30-83f8-78efac557264


## 🚀 Começando

Siga as instruções abaixo para clonar este projeto.

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/quality-technical-case.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
3. Crie um banco de dados MongoDB e defina a variável DATABASE_URL em um arquivo .env na raiz do projeto,
   isso fará com que seu projeto conecte-se com o banco de dados e cadastre os novos usuários:
   ```sh
   https://www.mongodb.com
   ```
4. Crie um projeto no Google Developer Console e defina as variáveis GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET
   em um arquivo .env na raiz do projeto, isso fará com que o login com o Google funcione:
   ```sh
   https://console.cloud.google.com
   ```
5. Crie um projeto no Google Developer Console e defina a variável GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET
 em um arquivo .env na raiz do projeto, isso fará com que o login com o GitHub funcione:
   ```sh
   https://github.com
   ```
6. Crie uma conta no EmailJS e defina a variável NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
   NEXT_PUBLIC_EMAILJS_API_KEY em um arquivo .env na raiz do projeto, isso fará com que o formulário de contato envie
   os dados para o seu Gmail:
   ```sh
   https://www.emailjs.com
   ```
7. Crie a variável NEXTAUTH_SECRET e defina o mesmo valor para ela:
   ```sh
   NEXTAUTH_SECRET
   ``` 
9. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   

### 📋 Pré-requisitos
Inicialmente será necessário ter o Node.js instalado na sua máquina, para isso copie e cole o link abaixo para 
fazer o download e instalação.

```
https://nodejs.org/en 
```

## ⚙️ Executando os testes

Foram criados testes automatizados com Cypress, os testes envolvem as funcionalidades de cadastro de usuário, login de usuário,
validação da sessão do usuário para as páginas de pessoas e imagens geradas pela api [JSON Placeholder](https://jsonplaceholder.typicode.com/photos)
e consequentemente se os dados foram retornados pela api e estão sendo visíveis nas respectivas páginas.

Executar na web:
```
npm run cypress:web ou yarn cypress:web
```
Executar no terminal:
```
npm run cypress:headless ou yarn cypress:headless
```

## 🛠️ Construído com

Este projeto foi feito com:

* [Next.js](https://nextjs.org) - Biblioteca baseada no React.js.
* [Typescript](https://www.typescriptlang.org) - Linguagem de programação tipada.
* [Cypress](https://rometools.github.io/rome/) - Framework para testes.
* [Next-Auth](https://next-auth.js.org) - Solução Next.js para autenticação de usuários.
* [Prisma](https://www.prisma.io) - ORM que integra aplicações Javascript e Typescript com banco de dados.
* [MongoDB](https://www.mongodb.com) - Banco de dados não relacional.
* [Styled Components](https://styled-components.com) - Solução para estilização de componentes React.js.

## ✒️ Autores

Desenvolvido por:

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/).

## 📄 Licença

Este projeto não possui nenhuma licença.
