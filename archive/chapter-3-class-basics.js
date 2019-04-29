class Drone {
    //  comment goes here
    constructor(id, name) {
        this._id = id; // _ indicates a 'private' variable
        this._name = name;
        //  console.log(`in Drone constructor method - ${this.id} ${this.name}`);
    }

    static getCompany() { // ONLY WORKS FOR THE CLASS
        console.log('in getCompany');
    }

    get id() {
        console.log("in id getter");
        return this._id + ' TEMP';
    }

    set id(value) {
        this._id = value;
    }

    fly() {
        console.log(`Drone ${this.id} is flying....`);
    }

}
Drone.maxHeight = 2000; // static or class properties
Drone.getCompany();

let drone = new Drone('A123', 'Flyer');
drone.id = 'C789';
let drone2 = new Drone('B456', 'Twirl');

console.log('Drone = ' + drone.id + ' ' + drone.name);
console.log(drone.id + ' | ' + drone2.id);
console.log(drone.maxHeight + ' | ' + drone2.maxHeight); // doesnt work as not part of instances

drone.fly();
drone2.fly();

console.log(typeof Drone);
console.log(typeof drone);
console.log(drone instanceof Drone);

let droneId = 5;
console.log('created in App.js - ', droneId);