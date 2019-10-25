const Container = require('../Container');
const dotenv = require('dotenv');
dotenv.config();

module.exports = async function(){

    let container = new Container();
    await require('./dbInstanceProvider')(container);
    await require('./modelProvider')(container);
    await require('./dbProvider')(container);
    await require('./appProvider')(container);

    return container;
};
