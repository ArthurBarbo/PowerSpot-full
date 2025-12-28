# PowerSpot-full

PowerSpot-full é um projeto Full Stack com **React** no front-end e **Node.js** no back-end com utilização da **API do Google maps** incluindo uso da localização do usuário, para gerenciar usuários, favoritos e exibir carregadores dinâmicamente de forma modular.

---

## Deploy

🌐 [Acessar aplicação](https://powerspot.allok.in/)

---

## Tecnologias

- **Front-end:** React, Vite, React Router, CSS, API REST Google Maps
- **Back-end:** Node.js, Express, Joi, JWT, MongoDB

---

## Estrutura do Projeto

PowerSpot-full/
├── front
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ ├── src
│ │ ├── components
│ │ ├── env
│ │ ├── images
│ │ └── main.jsx
│ ├── styles
│ └── vendor
└── back
├── controllers
├── middlewares
├── models
├── package.json
├── routes
└── server.js

## Instalação

### 1. Clone o repositório

```bash

git clone https://github.com/ArthurBarbo/PowerSpot-full.git
cd PowerSpot-full

2. Back-end
cd /back
npm install
npm run dev

3. Front-end
cd /front
npm install
npm run dev

Contribuição
Fork o projeto

Crie uma branch: git checkout -b feature/nome-da-feature

Faça alterações e commit: git commit -m "Minha feature"

Push: git push origin feature/nome-da-feature

Abra um Pull Request
```

### Licença

Todos os direitos reservados © Arthur Barbosa

### Segredos e Easter Eggs 🕵️‍♂️

O front possui uma rota secreta que você pode acessar para descobrir uma mensagem especial:

Basta digitar https://powerspot.allok.in/secret no navegador.
lembrando que tem estar logado.

É um pequeno easter egg que adiciona diversão e uma mensagem diretamente a quem testa o projeto 😉
