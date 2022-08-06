let bike = {
    calculateGearRatio: function() {
        let front = this.transmission.frontGearTeeth[this.frontGearIndex],
        rear = this.transmission.rearGearTeeth[this.rearGearIndex];
        return (front / rear);
    }
}

// invoke function and assign value to ratioResult
let ratioResult = bike.calculateGearRatio();

// assign calculateGearRatio function to a new pointer
const ratioFunction = bike.calculateGearRatio;