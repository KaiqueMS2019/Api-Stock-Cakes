<h1 align="center">
    API-LIBRARY
</h1>

## Description

  A **API-Stock-Cakes** é uma API-REST criada com NODE.js e NEST.JS e Typescript. A API se trata de um CRUD, para uma loja de bolos, permitindo o cadastro de um materia com a sua respectiva quantidade e qual usuario fez, como, nome: farinha, quantidade: 1, usuario: Ciclano. Possibilitanto tambem para um maior controle, pesquisar um material pelo ID ou nome, pesquisar o usuario e alterar a quantidade que foi usada pelo ID do material.

  ---

  ## 🚀Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Nodejs](https://nodejs.org)
- [Nestjs](https://docs.nestjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Mongose](https://www.npmjs.com/package/mongoose)
- [Typescript](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)
- [Robo 3T](https://robomongo.org/download)
- [Class-Validator](https://www.npmjs.com/package/class-validator)
  
---

## 📁 Como baixar o projeto
```bash

$ git clone https://github.com/KaiqueMS2019/Api-Library.git

$ cd stock-cakes
```

## Instalação

```bash
$ npm install
# ou
$ yarn add
```

## Rodar o programa

```bash
# 1°
$ npm run start
#ou
$ yarn run start

# 2° 
$ npm run start:dev
#ou
$ yarn run start:dev
```
## Conectando ao banco de dados

  É necessario que instale o banco de dados MongoDB. Nessa aplicação foi usada a interface Robo 3T,crie uma coneção nele, mude a rota de conexão no app.module para o sistema encontrar o banco e se comunicar. E no primmeiro acesso ele cria o banco caso não exista.
  
---

