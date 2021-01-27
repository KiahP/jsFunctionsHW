// 2. 3.
function myAddFunction(a, b){
return (a+b);
}
console.log(myAddFunction(3,4))

// 4.
function myAddFunction2(a, b,c){
return (a+b+c);
}
console.log(myAddFunction2(3,4,8))

// 5.
function myAddFunction3(a, b,c,d){
return (a+b+c+d);
}
console.log(myAddFunction3(3,4,6,2))

//6.
var myDog = {
    // Only change code below this line
    "name" : "spooks",
    "legs" : 4,
    "tails" : 1,
    "friends": ["mom", "bone"]
    
    // Only change code above this line
    };

var myHome = {
    "bedrooms" : 3,
    "floors" : "brown",
    "walls" : "gray",
    "bathrooms" : [2, "white"]
}

var myCar = {
    "seats" : 2,
    "color" : "black",
    "trunk" : 1,
}

var jheneAiko = {
    "album" : "Trip",
    "year" : 2017,
    "single" : "Sativa",
}

// 7. For each Object write a console.log line that access  one property using the dot  notation.
var albumVal = jheneAiko.album;
console.log(albumVal)

var seatVal = myCar.seats;
console.log(seatVal)

var wallsVal = myHome.walls;
console.log(wallsVal)

var legsVal = myDog.legs;
console.log(legsVal)

// 8. For each Object write a console.log line that access  one property using the bracket notation.

var dogTails = myDog["tails"];
console.log(dogTails)

var homeBedRooms = myHome["bedrooms"];
console.log(homeBedRooms)

var carColor = myCar["color"];
console.log(carColor)

var jheneYear = jheneAiko["year"];
console.log(jheneYear)

// 9 For each object, add a new property value pair using dot or bracket notation.
myDog.breed = "poodle";

myHome.couch = 2;

myCar["tires"] = 4;

jheneAiko["single2"] = "While we're young";

// 10. For each property update a property value pair using bracket or dot notation.
myDog.breed = "yorkie-poo";
myHome.floors = "gray";
myCar["color"] = "white";
jheneAiko["single2"] = "OLLA";

