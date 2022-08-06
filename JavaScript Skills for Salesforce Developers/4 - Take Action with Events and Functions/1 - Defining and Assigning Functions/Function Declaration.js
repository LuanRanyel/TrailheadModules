// call function
let gearRatio = calculateGearRatio(42, 30);

// function is declared after the line it is called
// this is allowed in function declaration
function calculateGearRatio(driverGear, drivenGear){
  return (driverGear / drivenGear);
}

console.log(gearRatio); // 1.4