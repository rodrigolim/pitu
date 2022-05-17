import 'dotenv/config'
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`, {dialect: 'postgres'});
 
export default sequelize;