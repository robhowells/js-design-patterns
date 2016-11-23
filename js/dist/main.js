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
(function() {
	"use strict";
})();