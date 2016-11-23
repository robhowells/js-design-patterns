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
