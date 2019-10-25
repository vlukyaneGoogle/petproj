module.exports = class Container {
    //????
    declares: any;

    constructor(){
        this.declares = {};
    }

    declare(name, cb){
        Object.defineProperty(this, name, {
            get: () => {
                if(!this.declares.hasOwnProperty(name)){
                    this.declares[name] = cb(this);
                }

                return this.declares[name];
            },
            configurable: true,
            enumerable: true
        });

        return this;
    }
};
