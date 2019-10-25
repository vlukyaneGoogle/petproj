import {MongoProvider} from './MongoProvider';
import {PostgresProvider} from './PostgresProvider';

const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;

module.exports = function(c){
    console.log('CHOOSING PROC: ', DB_ENV)
    if (DB_ENV === 'mongo') {
        console.log('CHOOSE MONGO');
        c.service('database', c => new MongoProvider());
        // c.service('UserRepo', c => new );
    } else {
        console.log('CHOOSE PSQL');
        c.service('database', c => new PostgresProvider());
        // c.service('UserRepo', c => new UserRepo(c.Database, c.Emailer));
    }
};
