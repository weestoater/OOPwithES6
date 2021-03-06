import {
    Car
} from '../classes/car.js';
import {
    Drone
} from '../classes/drone.js';
import {
    DataError
} from './data-error.js';

export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }
    //  Data
    loadData(fleet) {
        //  console.log('Loaded from FDS: ' + fleet);
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    if (this.validateCarData(data)) {
                        let car = this.loadCar(data);
                        if (car)
                            this.cars.push(car);
                    } else {
                        let e = new DataError('Invalid car data', data);
                        this.errors.push(e);
                    }
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
                default:
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    //  Car methods
    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch (error) {
            this.errors.push(new DataError('Error loading car', car));
        }
        return null;
    }

    validateCarData(car) {
        let requiredProps = 'license model latLong miles make'.split(' ');
        let hasErrors = false;

        for (let field of requiredProps) {
            if (!car[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, car));
                hasErrors = true;
            }
        }

        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('invalid mileage', car));
            hasErrors = true;
        }

        return !hasErrors;

    }

    getCarByLicense(license) {
        return this.cars.find(function (car) {
            return car.license === license;
        })
    }

    getCarsSortedByLicense() {
        return this.cars.sort(function (car1, car2) {
            if (car1.license < car2.license)
                return -1;
            if (car1.license > car2.license)
                return 1;
            return 0;
        });
    }

    filterCarsByMake(filter) {
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }

    //  Drone methods
    loadDrone(drone) {
        try {
            let d = new Drone(drone.license, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        } catch (error) {
            this.errors.push(new DataError('Error loading drone', drone));
        }
        return null;
    }

}

//------------------------------------------------  IN APP FILE
let dataService = new FleetDataService();
dataService.loadData(fleet);

let car = dataService.getCarByLicense('AT9900');
console.log(car);

let sortedCars = dataService.getCarsSortedByLicense();
for (let car of sortedCars)
    console.log(car.license);

let filteredCars = dataService.filterCarsByMake('e');
for (let car of filteredCars)
    console.log(car.make);

for (let car of dataService.cars)
    console.log('Car licenses - ' + car.license);

for (let drone of dataService.drones)
    console.log('Drone licenses - ' + drone.license);

for (let e of dataService.errors)
    console.log('Errors  - ' + e.message);
