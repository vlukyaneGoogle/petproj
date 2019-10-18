function dbService (){
    const dbSwitcher = (dbType: string) => {
        switch (dbType) {
            case 'dev-mongo':
                mongoDbConnection();
                break;
            default:
                mongoDbConnection();
        }
    };

    const mongoDbConnection = () => {
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
        const connection = mongoose.connection;
        connection.once('open', function() {
            console.log("MongoDB database connection established successfully");
        })
    };
};

module.exports = dbService;
