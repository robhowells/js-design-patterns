/**
* The Prototype Pattern
* ----------------------------
* Variables and methods bind to an single object
* When new objects are created, it retains data in
* from initial constructor.
* 
*/

var prototypePattern = (function() {
	'use strict';

	//Prototype Style #1
	var Car = function() {
		this.make = 'Ford';
		this.topSpeed = 160;
	};

	Car.prototype.getTopSpeed = function() {
		return this.topSpeed + ' mph';
	};

	var testCar = new Car();
	console.log(testCar.getTopSpeed()); // Outputs: '700'

	//Prototype Style #2
	var Person = function() {
		this.name = 'Rob';
		this.age = 28;
	};

	Person.prototype = {
		getName: function() {
			return this.name;
		},
		getAge: function() {
			return this.age;
		}
	};

	var testPerson = new Person();
	console.log(testPerson.getName()); // Outputs: 'Rob'
	console.log(testPerson.getAge()); // Outputs: '28'

})();
