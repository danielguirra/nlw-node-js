import express, { request, response } from  'express'

const app = express();
/*
- GET = BUSCAS
- POST = CRIAÇÃO
- PUT = ALTERAÇÃO
- DELETE= APAGAR
- PACTH = ALTERAR UMA INFORMAÇÃO EXPECÍFICA

*/

app.get("/", (request, response) => {
  return response.send("Olá")
})
app.post("/", (request, response) => {
  return response.json({ messsage : "Usuário salve com sucesso"})
})


app.listen(3333, () => console.log("Server is running on port 3333"))