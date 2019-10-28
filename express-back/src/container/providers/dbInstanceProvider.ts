module.exports = async function(c, DB_ENV){
    if (DB_ENV === 'mongo') {
        const databaseProvider = await require('../../mongo/mongoConnection')();
        c.declare('databaseInstance',  c => databaseProvider);
    } else if (DB_ENV === 'postgres') {
        const databaseProvider = await require('../../sequelize/postgresConnection')();
        c.declare('databaseInstance',  c => databaseProvider)
    }
};
