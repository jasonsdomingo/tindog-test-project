var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length)
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello, " + capitalisedName)


var dogAge = prompt("How old is your dog?");
var humanAge = ((dogAge) - 2) * 4) + 21;
alert("Your dog is " + humanAge + " years old in human years.");


//Increment Expression
var x = 5;
x = x + 1; //6
x++;//6

//Decrement Expression
x-- ; //4

x +=2 ; //7

var x = 5;
var y = 3;
x += y; //8+

+=
-=
*=
/=
% is modulo = 5 % 2 = 1


Creating the function: function getMilk(){
functions
}
Calling the function: getMilk();

console.log: only shows in the console, meant for the developer

function getMilk (money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  var numberOfBottles = Math.floor(money / costPerBottle);)

    alert("buy" + bottles + "bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % 1.5; //Remainder of this division
  return calcChange(money, 1.5);
}

var change getMilk(4);
console.log(change);

//Creating the function
function getMilk (bottles) {
  var cost = bottles * 1.5;
  //Do something with cost
}
//Caling the function
getMilk(2);

//Creating the functions
function getMilk (money) {
  return money % 1.5;
}
//Calling the function
var change = getMilk(4);


function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello master, here is your " + getMilk(10, 3) + " change.");
