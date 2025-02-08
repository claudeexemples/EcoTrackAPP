## 🌍 EcoTrackAPP

**EcoTrack** é uma API sustentável que incentiva ações relacionadas ao **ODS 12 - Consumo e Produção Sustentáveis**, permitindo que os usuários registrem, acompanhem e sejam recompensados por ações sustentáveis.  

---

## 📌 Funcionalidades  

✅ **Autenticação JWT** – Registro e login de usuários com segurança.  
✅ **CRUD Completo** – Criar, listar, atualizar e deletar ações sustentáveis.  
✅ **Sistema de Pontuação** – Usuários ganham pontos ao cadastrar ações.  
✅ **Documentação Swagger** – API documentada para facilitar o uso.  
✅ **Interface Web Minimalista** – Frontend simples para testar a API.  
✅ **Deploy Online** – API e frontend hospedados para testes.  

---

## 🚀 Tecnologias  

- **Backend:** Node.js, Express.js  
- **Banco de Dados:** MongoDB (MongoDB Atlas)  
- **Autenticação:** JWT  
- **Frontend:** HTML, CSS, JavaScript  

---

## 🛠️ Como Rodar o Projeto  

### **1️⃣ Clone o repositório**  
```sh
git clone https://github.com/seu-usuario/EcoTrackAPP.git
cd EcoTrackAPP
```

### **2️⃣ Instale as dependências**  
```sh
npm install
```

### **3️⃣ Configure o Banco de Dados**  
Crie um arquivo **`.env`** na raiz do projeto e adicione suas credenciais:  
```env
MONGO_URI=sua_string_de_conexao_mongodb
JWT_SECRET=seu_segredo_jwt
PORT=3000
```

### **4️⃣ Inicie a API**  
```sh
npm start
```
A API rodará em **http://localhost:3000** 🚀  

---

## 🌐 Testar Online  

🔹 **Frontend:** [EcoTrack UI](https://seu-link.netlify.app)  
🔹 **API (Swagger):** [Documentação](https://seu-link.render.com/api-docs)  

---

## 📜 Endpoints Principais  

### 🔐 **Autenticação**  
- `POST /register` – Criar uma conta  
- `POST /login` – Autenticar usuário  

### 🌱 **Ações Sustentáveis**  
- `POST /actions` – Criar uma ação  
- `GET /actions` – Listar todas as ações  
- `PUT /actions/:id` – Atualizar uma ação  
- `DELETE /actions/:id` – Remover uma ação  

📖 Consulte a **documentação Swagger** para mais detalhes!  

---

## 🎨 Interface Web  

O projeto inclui uma interface minimalista para testar os endpoints. Para rodá-la:  
1. Abra o arquivo `index.html` no navegador  
2. Insira os dados e teste a API  

---

## 📢 Contribuição  

Se quiser contribuir, faça um **fork** do projeto, crie uma **branch** com suas alterações e envie um **pull request**!  

---

## 📄 Licença  

Este projeto está sob a licença **MIT**.  

📩 Dúvidas? Entre em contato! 🚀
