import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("C:/00Pasta-de-Estudo/AULA-T/rotas-express/frontend/index.html");
});

app.get("/sobre", (req, res) => {
  res.sendFile("C:/00Pasta-de-Estudo/AULA-T/rotas-express/frontend/sobre.html");
});

// extraindo conteúdo dos parâmetros da requisição
app.get("/inicio/:nome/:nivel", (req, res) => {
  res.send(
    `<h1>Bem vindo, ${req.params.nome}! Seu nível de acesso é: ${req.params.nivel}</h1>`,
  );
});

// método listen tem que ficar por último, depois das requisições HTTP criadas
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
