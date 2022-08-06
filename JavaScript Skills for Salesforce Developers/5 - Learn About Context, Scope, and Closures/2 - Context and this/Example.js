var obj = {
    aValue: 0,
    increment: function(incrementBy) {
        this.aValue = this.aValue + incrementBy;
    }
}


obj.increment(2);
console.log(obj.aValue); // 2


//assign function to variable
var newIncrement = obj.increment;
//now invoke through the new pointer
newIncrement(2);
console.log(obj.aValue); // still 2 not 4