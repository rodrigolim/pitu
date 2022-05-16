import app from "./app";
import database  from "./database";

(async () => {
    try {
        const resultado = await database.sync();
        //console.log(resultado);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


app.listen(3000, () => 
                 console.info('app runnning on port 3000')
   );

