// This pattern is often referred to as a factory function.

// when invoked, this function will assign a function
function gearFactory(){
    return function(driverGear, drivenGear){
        return (driverGear / drivenGear);
    }
}

// calculateGearRatio can now be invoked as a function
const calculateGearRatio = gearFactory();
// and all the rest