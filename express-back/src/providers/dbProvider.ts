import {MongoProvider} from './MongoProvider';
import {PostgresProvider} from './PostgresProvider';

const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;

module.exports = function(c){
    if (DB_ENV === 'mongo') {
        c.service('database', c => new MongoProvider());
        // c.service('UserRepo', c => new );
    } else {
        c.service('database', c => new PostgresProvider());
        // c.service('UserRepo', c => new UserRepo(c.Database, c.Emailer));
    }
};
