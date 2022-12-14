function Bike(gears, startGear) {
    this.gears = gears;
    this.currentGear = startGear;
}

Bike.prototype.changeGear = function(direction,changeBy){
    if(direction === 'up') {
        this.currentGear += changeBy;
    } else {
        this.currentGear -= changeBy;
    }
}

const bike = new Bike(10, 3);

console.log(bike.gears); // 10
console.log(bike.currentGear); //3


bike.changeGear('up', 1);

console.log(bike.currentGear); //4