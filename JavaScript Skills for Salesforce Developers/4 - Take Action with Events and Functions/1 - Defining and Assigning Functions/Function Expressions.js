const calculateGearRatio = function(driverGear, drivenGear){
    return (driverGear / drivenGear);
}

// the rest works the same
let gearRatio = calculateGearRatio(42, 30);
console.log(gearRatio); // 1.4

Bike.prototype.changeGear = function(direction, changeBy){
    if (direction === 'up') {
        this.currentGear += changeBy;
    } else {
        this.currentGear -= changeBy;
    }
}