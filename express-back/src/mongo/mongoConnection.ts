const connectMongo = async() => {
    const dataBaseObj = require('mongoose');
    await dataBaseObj.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true});
    return dataBaseObj;
};

module.exports = connectMongo;
