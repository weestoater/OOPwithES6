import {
    Car
} from './classes/car.js';
import {
    Drone
} from './classes/drone.js';

let c = new Car();
let d = new Drone();

console.log(c);
console.log(d);



//  class Vehicle { 

// constructor() {   -- inheriting properties
//     this.gpsEnabled = true;
// }

// constructor(licenseNum) { -- inheriting constructors
//     this.licenseNum = licenseNum;
//     console.log('Constructing Vehicle');
// }

// start() {                                -- inheriting methods
//     console.log('Starting vehicle...');
// }

// static getCompanyName() {
//     console.log('My Company');
// }

// }


// class Car extends Vehicle {

// constructor() {  -- inheriting properties
//     super();
//     this.gpsEnabled = false;
// }

// constructor(licenseNum) {  -- inheriting constructors
//     super(licenseNum);
// }

// start() {                                -- inheriting methods
//     super.start();
//     console.log('Starting car...');
//     super.start();
// }

// static getCompanyName() {
//     super.getCompanyName();
//     console.log('My Other Company');
// }

// }

//  let c = new Car();
// c.start();                                   -- inheriting methods
// Car.getCompanyName();
//  c.getCompanyName(); -- errors

// let c = new Car();   -- inheriting properties
// console.log(c.gpsEnabled);

// let c = new Car('SA14CZU'); // executes the constructor
// console.log(c.licenseNum);  -- inheriting constructors

// console.log( c instanceof Car );
// console.log( c instanceof  Vehicle );
// console.log( c instanceof Object );