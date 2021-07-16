import express from "express";

const app = express();

app.get("/", (resquest, response) => {
    return response.send('Olá')
})

app.listen(3333, () => console.log('Server running on port 3333'));
