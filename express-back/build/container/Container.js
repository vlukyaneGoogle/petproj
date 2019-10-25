"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Container {
    constructor() {
        this.declare = {};
    }
    service(name, cb) {
        Object.defineProperty(this, name, {
            get: () => {
                if (!this.declare.hasOwnProperty(name)) {
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
exports.Container = Container;
