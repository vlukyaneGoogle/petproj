export class Container {
    //????
    declare: any;

    constructor(){
        this.declare = {};
    }

    service(name, cb){
        Object.defineProperty(this, name, {
            get: () => {
                if(!this.declare.hasOwnProperty(name)){
                    this.declare[name] = cb(this);
                }

                return this.declare[name];
            },
            configurable: true,
            enumerable: true
        });

        return this;
    }
}
