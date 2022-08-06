const bike = {
    frontGearIndex: 0,
    rearGearIndex: 0,
    transmission: {
        frontGearTeeth: [30,45],
        rearGearTeeth: [11,13,15,17,19,21,24,28,32,36]
    },
    calculateGearRatio: function() {
        let front = this.transmission.frontGearTeeth[this.frontGearIndex],
        rear = this.transmission.rearGearTeeth[this.rearGearIndex];
        return (front / rear);
    },
    changeGear: function(frontOrRear, newValue) {
        if (frontOrRear === 'front') {
            this.frontGearIndex = newValue;
        } else {
            this.rearGearIndex = newValue;
        }
    }
};


///////////////////////////////////////////////////////////////////////////////////////////

bike.isTandem = true;
bike.popAWheelie = function() {
};

const bike1 = new Bike();
const bike2 = new Bike();
bike1.isTandem = true;
console.log(bike1.isTandem); // true
console.log(bike2.isTandem); // undefined