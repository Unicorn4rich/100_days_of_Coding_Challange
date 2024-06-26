"use strict";
// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and 
// motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["car"] = 0] = "car";
    Vehicles[Vehicles["truck"] = 1] = "truck";
    Vehicles[Vehicles["motorcycle"] = 2] = "motorcycle";
})(Vehicles || (Vehicles = {}));
;
// ye enum ki sirf aik property show krwa rha hai
console.log(Vehicles.car); // Output: 0 aya hai kiyun ke enum 0 index number se start hoty hain...
// ye ham check kar rhy hain ke car ki konsy number ki category hai hmari list mein
