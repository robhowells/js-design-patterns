/**
* Revealing Module Prototype Pattern
* ----------------------------
* Example that combines the Revealing Module Pattern
* and Revealing Prototype Pattern.
*
*/

var revealingModulePrototypePattern = (function() {
	'use strict';

	var Person = function() { 
		this.name = 'Rob';
		this.age = 28;
	};

	Person.prototype = function() {

		var getName = function() {
			return this.name;
		};

		return {
			checkName: getName
		};

	}();

	var init = function() {
		var testPerson = new Person();
		console.log(testPerson.checkName());
	};

	return {
		init: init
	};

})();

revealingModulePrototypePattern.init();		// Outputs: 'Rob'