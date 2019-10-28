import {IContainer} from './common/types';
let createContainer = require('./container/providers/container');

const connect = async () => {
    return await createContainer();
};

module.exports = connect().then( (container: IContainer) => {
    container.database.isConnected();
    console.log('DI IS READY: ');
    return container.App;
});
