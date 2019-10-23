import { Sequelize } from 'sequelize';

const postgresDb = new Sequelize('TodosDatabase', 'vlukyane', '', {
    host: 'localhost',
    dialect:  'postgres',
    define: {
        timestamps: false
    }
});

export default postgresDb;
