/**
 * The Module Pattern
 * ----------------------------
 * Defines all private functions and variables and returns an
 * object with what we want to return and make public.
 * 
 */

var modulePattern = (function() {
	'use strict';

	var dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	var getToday = function() {
		return new Date().getDay();
	};

	return {
		getDayName: function() {
			var today = getToday();
			console.log(dayList);
			for(var i = 0; i < dayList.length; i+=1) {
				if(today === i+1) {
					return 'Today is ' + dayList[i];
				}
			} 
		}
	};

})();

modulePattern.getDayName();			// Outputs: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
modulePattern.dayList();			// undefined
modulePattern.getToday();			// undefined

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
/**
 * The Revealing Module Pattern
 * ----------------------------
 * Variation of the module pattern. Reveals private functions
 * and variables by returning them as object literals.
 *
 */

var revealingModulePattern = (function() {
	'use strict';

	var dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	var getToday = function() {
		console.log('Private function made public');
		return new Date().getDay();
	};

	var getDayName = function() {
		var today = getToday();
		console.log('Another private function made public');
		for(var i = 0; i < dayList.length; i+=1) {
			if(today === i+1) {
				return 'Today is ' + dayList[i];
			}
		}		
	};

	return {
		getDayName: getDayName,
		getToday: getToday
	};

})();

revealingModulePattern.getDayName();	// Outputs: 'Private function made public'
revealingModulePattern.dayList();		// undefined
revealingModulePattern.getToday();		// Outputs: 'Private function made public'

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

(function() {
	"use strict";
})();