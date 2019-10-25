const DB_ENVv = process.env.DATABASE;
const MongoDB = require('../../mongo/MongoDB');
const PostgresDB = require('../../sequelize/PostgresDB');
module.exports = async function(c){
    if (DB_ENVv === 'mongo') {
        const database = await new MongoDB(c.databaseInstance);
        c.declare('database', c => database);
    } else if (DB_ENVv === 'postgres') {
        const database = await new PostgresDB(c.databaseInstance, c.todoModel);
        await c.declare('database', c => database);
    }
};
