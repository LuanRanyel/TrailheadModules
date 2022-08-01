// JavaScript Playground: http://jsbin.com/tavinaz/1/edit?js,console,output


// 1. DECLARING VARIABLES: /////////////////////////////////////

    //primitive assignments
    var myBike = "Mountain Bike";
    let currentGear = 5;
    const numberOfGears = 12;
    //reassignment
    myBike = "Penny Farthing"; // this works
    currentGear = 1; // so does this
    numberOfGears = 1; // error

    // call constructor, new object, assign it to bike
    const bike = new Bike();
    //Change internal state by calling a function
    bike.changeGear("front", "Up");
    // add a new member to bike that did not exist before
    bike.type = "Penny Farthing";
    // check for success
    console.log(bike.calculateGearRatio()); // 4.0909...
    console.log(bike.type); // "Penny Farthing"
    // attempt to point bike to new instance of Bike
    bike = new Bike(1,2); // error

////////////////////////////////////////////////////////////////

// 2. IMPLICIT TYPE COERSION: //////////////////////////////////

    let num1 = 9 * "3";
    console.log(num1); // 27 (a number)
    let num2 = 9 + "3";
    console.log(num2); // "93" (a string)

////////////////////////////////////////////////////////////////

// 3. DON'T USE IMPLICIT TYPE COERCION: ////////////////////////

    false == ""; // true
    false == "0"; // true
    "" == "0"; // false
    [0] == 0; // true

    false === ""; // false
    false === "0"; // false
    "" === "0"; // false
    [0] === 0; // false

////////////////////////////////////////////////////////////////

// 4. TRUTHY AND FALSY: ////////////////////////////////////////

// False values:
    // false (of course)
    // 0 (the number zero)
    // "" or '' (an empty string)
    // null
    // undefined
    // NaN (the result of failed mathematical operations)

    const myRecord = response.getReturnValue();
    if (myRecord) {
    //now process the record
    }

////////////////////////////////////////////////////////////////