import {IContainer} from './common/types';

let createContainer = require('./container/providers/container');
let isContainerCreated: boolean = false;
let DIcontainer: IContainer;

const connect = async () => {
    if (isContainerCreated) return DIcontainer;
    isContainerCreated = true;
    return await createContainer();
};

const getAsync = async () => {
    return await connect();
};


module.exports = getAsync().then(container => {
    DIcontainer = container;
    DIcontainer.database.isConnected();
    console.log('DI IS READY: ');
    return container;
});
