//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

// //import?
// import {Vehicle} from "./vehicle.js"

//car class
class Car extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false
        this.availableRoom = true
        this.power = true
        this.timeForMaintenance = false
    }

    loadPassenger() {
        if (this.passenger < this.maximumPassengers) {
            availableRoom = true
            passenger++
            console.log('Come on in!')
        } else {
            this.availableRoom = false
            console.log('There is no room!')
        }
    }

    start() {
        if (this.fuel > 0) {
            this.power = true
            console.log('Vroom!')
        } else {
            this.power = false
            console.log('ruhr-ruhr!')
        }
    }

    service() {
        if (this.mileage > 30000) {
            this.timeForMaintenance = true
            console.log('Get to your nearest service center before your car explodes!')
        } else {
            console.log('Your baby is running smooth!')
        }
    }
}

let myCar = new Car('Toyota', 'Camry Hybrid', '2020', 'Wind Chill Pearl', 32586)
// another test
myCar.service()