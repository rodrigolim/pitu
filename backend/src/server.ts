import 'dotenv/config'
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

app.listen(process.env.PORT, () => 
    console.log(`Exemplo de app rodando em http://localhost:${process.env.PORT}`)       
   );