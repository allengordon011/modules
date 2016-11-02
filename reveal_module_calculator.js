var myCalc = (function() {
	'use strict';
	
	var _current = 0;
	return {
		add: function(val) {
			_current += val;
			return _current;
		},
		subtract: function(val) {
			_current -= val;
			return _current;
		},
		multiply: function(val) {
			_current *= val;
			return _current;
		},
		divide: function(val) {
			_current /= val;
			return _current;
		},
		total: function() {
			return _current;
		},
		clear: function() {
			_current = 0;
			return _current;
		}

	};
}());

console.log(myCalc.add(5));
console.log(myCalc.total());
console.log(myCalc.subtract(9));
console.log(myCalc.total());
console.log(myCalc.multiply(7));
console.log(myCalc.total());
console.log(myCalc.divide(6));
console.log(myCalc.total());
console.log(myCalc.clear());
console.log(myCalc.total());
