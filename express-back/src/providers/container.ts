import {Container} from '../container/Container';

module.exports = function(){
    let container = new Container();
    require('./dbProvider')(container);
    return container;
};
