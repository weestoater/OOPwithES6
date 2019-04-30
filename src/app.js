import $ from 'jquery';
import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js';
import { DataTable } from './ui/data-table.js';
import { GoogleMap } from './ui/google-map.js';

//  let headers = "License Make Model Miles".split(' ');
let dataService = new FleetDataService();
dataService.loadData(fleet);

//  let dt = new DataTable(headers, dataService.cars);
let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, dataService.drones);
map.appendToElement($('body'));

// let tb = new TitleBar('Our Application');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));

// let b = new Button('Click me!');
// b.appendToElement($('body'));

// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'));