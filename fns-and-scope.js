//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
	if (name === 'Tyler') {
		return true;
	}
	else {
		return false;
	}
}
console.log('isTyler function:',isTyler(name));

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
	var x = prompt("What is your name?");
	return x;
}
console.log('getName function:',getName());
//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
	var name = getName();
	alert("Welcome " + name);
}
console.log('Welcome function:', welcome());
//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
/* The difference between arguments and parameters are that parameters are the placeholders we declare when we create the function. The arguments are the values that are actually passed to the function when it is called. */


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?
/* The falsy values are the following
NaN
Null
Undefined
''
false
The best way to check if something is falsy is by using an if statement that only takes in the value being tested (example below).
if (x) {
	console.log("Truthy");
}
else {
	console.log("Falsy");
}
*/
  //Answer Here



//Next Problem



//Create a function called myName that returns your name

  //Code Here
function myName() {
	return 'Mike';
}
//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName();
//Now alert the result of invoking newMyName
alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
	return function anonFn() {
		return 'Mike';
	}
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
console.log(innerFn);


