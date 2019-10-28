const Container = require('../Container');
const dotenv = require('dotenv');
dotenv.config();
const DB_ENV = process.env.DATABASE;

module.exports = async function(){

    let container = new Container();
    await require('./dbInstanceProvider')(container, DB_ENV);
    await require('./modelProvider')(container, DB_ENV);
    await require('./dbProvider')(container);
    await require('./serviceProvider')(container);
    await require('./controllerProvider')(container);
    await require('./routeProvider')(container);
    await require('./appProvider')(container);

    return container;
};
