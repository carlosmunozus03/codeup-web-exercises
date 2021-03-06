"use strict";

var theTruck = {
    make: "Toyota",
    model: "Tacoma",
    truck: true,
    seats: 5,
    color: "Voodoo Blue",
    mileage: 10,
    tonneau: true,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    packages: {
        technology: false,
        navigation: false,
        premiumOffRoad: true
    },
    drive: function () {
        if (this.started) {
            console.log("vroom vroom!");
            this.mileage++;
        } else {
            console.log("You didn't start the engine!");
        }

    }
}

var yourTruck = {
    make: "Ford",
    model: "F150",
    truck: true,
    seats: 5,
    color: "Red",
    tonneau: false,
    mileage: 101250,
    drive: function () {
        console.log("vroom vroom!");
        this.mileage++;
    }
}

function isNew(car) {
    return car.mileage <= 15;
}

for (var property in theTruck) {
    console.log(property + ": " + theTruck[property]);
}