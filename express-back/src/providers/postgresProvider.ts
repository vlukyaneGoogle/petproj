import { Sequelize } from 'sequelize';

const postgresDb = new Sequelize('TodosDatabase', 'vlukyane', '', {
    host: 'localhost',
    dialect:  'postgres',
    define: {
        timestamps: false
    }
});

postgresDb
    .authenticate()
    .then(() => {
        console.log('Connection to psql has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default postgresDb;
