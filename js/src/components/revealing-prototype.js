/**
* Revealing Prototype Pattern
* ----------------------------
* Variation of the prototype pattern. Provides way
* of wrapping private and public functions and variables.
*
*/

var revealingPrototypePattern = (function() {
	'use strict';

	var Person = function() { 
		this.name = 'Rob';
		this.age = 28;
	};

	Person.prototype = function() {

		var getName = function() {
			return this.name;
		};

		var getAge = function() {
			return this.age;
		};

		return {
			nameCheck: getName
		};

	}();

	var testPerson = new Person();
	console.log(testPerson.nameCheck()); 	// Outputs: 'Rob'
	console.log(testPerson.getAge()); 		// Error: 'testPerson.getAge is not a function'

})();
