import app from "./app";
import database from "./database";

(async () => {
    try {
        const resultado = await database.sync();
        //console.log(resultado);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const PORT = 3001

app.listen(PORT, () => 
    console.log(`Exemplo de app rodando em http://localhost:${PORT}`)       
   );

