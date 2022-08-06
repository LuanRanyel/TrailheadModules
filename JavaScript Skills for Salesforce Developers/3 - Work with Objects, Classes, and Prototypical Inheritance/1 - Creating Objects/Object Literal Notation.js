const bike = {
    gears: 10,
    currentGear: 3,
    changeGear: function(direction, changeBy) {
        if (direction === 'up') {
            this.currentGear += changeBy;
        } else {
            this.currentGear -= changeBy;
        }
    }
}

console.log(bike.gears); // 10

console.log(bike.currentGear); //3

bike.changeGear('up', 1);

console.log(bike.currentGear); //4